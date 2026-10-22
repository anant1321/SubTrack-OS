/* SubTrack: OS-driven subscription tracking and notification engine (single file).

   Build:  gcc -std=c99 -o subtrack subtrack.c
   Run:    ./subtrack                 (reads input.json, writes telemetry.json)
           ./subtrack 2026-11-01      (choose the simulation start date)
           ./subtrack --unsafe        (Banker's check off: shows deadlock detection)
   Then open index.html in a browser.

   Contents:  1 types   2 dates   3 input loader   4 telemetry log
              5 resources (locks, Banker's, deadlock)   6 MLFQ scheduler
              7 deadlines   8 lifecycle (orphans, zombies)   9 main loop */

#include <ctype.h>
#include <stdarg.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* ============================================================
   1. TYPES AND CONSTANTS
   ============================================================ */
#define MAX_PROCESSES   50
#define NUM_RESOURCES   3      /* R0 = SMS, R1 = Email, R2 = Webhook */
#define SERVICE_LEN     48
#define DATE_LEN        40
#define AGING_THRESHOLD 5      /* ticks a process may wait before promotion */
#define TIME_QUANTUM    2      /* Round-Robin time slice for Tier 1 */
#define COUNTDOWN_DAYS  3      /* start countdown alerts this many days before a deadline */
#define SYSTEM_INIT_PID 1      /* adopts orphaned processes */
#define MAX_TICKS       1000   /* safety stop */

/* Defaults, so the program runs with no arguments */
#define INPUT_FILE      "input.json"
#define OUTPUT_FILE     "telemetry.json"
#define DEFAULT_DATE    "2026-10-10"
#define DELETE_USER     1003   /* user whose account is deleted mid-simulation (0 = none) */
#define DELETE_TICK     6

extern const char *RESOURCE_NAMES[NUM_RESOURCES];

typedef enum {
    STATE_NEW,           /* not arrived yet */
    STATE_READY,
    STATE_RUNNING,
    STATE_BLOCKED_LOCK,  /* waiting for worker channels */
    STATE_ZOMBIE,        /* finished, waiting for delivery ACK */
    STATE_TERMINATED
} State;

/* Subscription Control Block = the PCB of one notification task */
typedef struct {
    int  pid;
    int  user_id;
    int  parent_user_id;           /* becomes SYSTEM_INIT_PID after user deletion */
    char service[SERVICE_LEN];
    State state;

    int  tier;                     /* 0 = SRTF, 1 = Round-Robin, 2 = FCFS */
    int  arrival_tick;
    int  burst_time;
    int  remaining_time;
    int  wait_time;                /* ticks spent READY without running (aging) */
    int  quantum_used;             /* ticks used in the current Round-Robin slice */
    int  last_run_tick;

    char deadline_date[DATE_LEN];  /* YYYY-MM-DD */
    int  deadline_epoch_days;
    int  is_flagged_exceeded;
    int  aborted;                  /* killed by deadlock resolution */

    int  max_need[NUM_RESOURCES];  /* worker channels needed to run */
    int  allocated[NUM_RESOURCES]; /* worker channels held right now */
} SubscriptionPCB;

/* Everything the simulation needs, passed around as one pointer */
typedef struct {
    SubscriptionPCB pcb[MAX_PROCESSES];
    int   count;
    int   tick;
    int   today;                   /* current date as epoch days */
    char  today_str[DATE_LEN];

    int   total[NUM_RESOURCES];
    int   available[NUM_RESOURCES];
    int   use_banker;              /* 0 = skip Banker's check (deadlock demo) */
    int   last_pid;                /* process that ran in the previous tick */

    FILE *out;                     /* telemetry.json */
} Sim;

/* Functions used before they are defined */
int  is_live(const SubscriptionPCB *p);
int  request_resources(Sim *s, SubscriptionPCB *p, int announce);
void release_resources(Sim *s, SubscriptionPCB *p);

/* ============================================================
   2. DATES (YYYY-MM-DD <-> days since 1970-01-01)
   ============================================================ */
/* Calendar helpers: turn YYYY-MM-DD into "days since 1970-01-01" and back.
   Working with whole day numbers makes date maths a simple subtraction. */

static int is_leap(int y) {
    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0;
}

static int days_in_month(int y, int m) {
    static const int len[12] = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    return (m == 2 && is_leap(y)) ? 29 : len[m - 1];
}

int date_to_days(const char *iso) {
    int y, m, d;
    if (strlen(iso) != 10 || iso[4] != '-' || iso[7] != '-') return -1;
    if (sscanf(iso, "%4d-%2d-%2d", &y, &m, &d) != 3) return -1;
    if (y < 1970 || m < 1 || m > 12 || d < 1 || d > days_in_month(y, m)) return -1;

    int days = 0;
    for (int yr = 1970; yr < y; yr++) days += is_leap(yr) ? 366 : 365;
    for (int mo = 1; mo < m; mo++)    days += days_in_month(y, mo);
    return days + d - 1;
}

void days_to_date(int days, char out[DATE_LEN]) {
    int y = 1970, m = 1;
    while (days >= (is_leap(y) ? 366 : 365)) {
        days -= is_leap(y) ? 366 : 365;
        y++;
    }
    while (days >= days_in_month(y, m)) {
        days -= days_in_month(y, m);
        m++;
    }
    snprintf(out, DATE_LEN, "%04d-%02d-%02d", y, m, days + 1);
}

/* ============================================================
   3. INPUT LOADER (input.json)
   ============================================================ */
/* Reads input.json. The file is a flat list of objects, so instead of a full
   JSON parser we find each { ... } block and look up its keys by name. */

static char *read_file(const char *path) {
    FILE *f = fopen(path, "rb");
    if (!f) return NULL;
    fseek(f, 0, SEEK_END);
    long size = ftell(f);
    rewind(f);
    char *buf = malloc(size + 1);
    if (!buf) { fclose(f); return NULL; }
    size_t got = fread(buf, 1, size, f);
    buf[got] = '\0';
    fclose(f);
    return buf;
}

/* Returns a pointer to the text right after  "key":  */
static const char *find_value(const char *obj, const char *key) {
    char pattern[64];
    snprintf(pattern, sizeof pattern, "\"%s\"", key);
    const char *p = strstr(obj, pattern);
    if (!p) return NULL;
    p = strchr(p + strlen(pattern), ':');
    if (!p) return NULL;
    p++;
    while (isspace((unsigned char)*p)) p++;
    return p;
}

static int read_int(const char *obj, const char *key, int *out) {
    const char *p = find_value(obj, key);
    if (!p) return 0;
    char *end;
    long v = strtol(p, &end, 10);
    if (end == p) return 0;
    *out = (int)v;
    return 1;
}

static int read_string(const char *obj, const char *key, char *out, size_t size) {
    const char *p = find_value(obj, key);
    if (!p || *p != '"') return 0;
    p++;
    size_t n = 0;
    while (*p && *p != '"' && n < size - 1) {
        out[n++] = (*p == '\\') ? '/' : *p;   /* keep output JSON valid */
        p++;
    }
    out[n] = '\0';
    return 1;
}

static int read_triple(const char *obj, const char *key, int out[NUM_RESOURCES]) {
    const char *p = find_value(obj, key);
    if (!p) return 0;
    return sscanf(p, "[ %d , %d , %d ]", &out[0], &out[1], &out[2]) == 3;
}

static int parse_record(const Sim *s, const char *obj, SubscriptionPCB *p) {
    int rec = s->count + 1;
    memset(p, 0, sizeof *p);

    if (!read_int(obj, "pid", &p->pid) ||
        !read_int(obj, "user_id", &p->user_id) ||
        !read_string(obj, "service", p->service, SERVICE_LEN) ||
        !read_int(obj, "burst_time", &p->burst_time) ||
        !read_int(obj, "arrival", &p->arrival_tick) ||
        !read_int(obj, "tier", &p->tier) ||
        !read_string(obj, "deadline", p->deadline_date, DATE_LEN) ||
        !read_triple(obj, "max_need", p->max_need)) {
        fprintf(stderr, "Record %d: missing or malformed field\n", rec);
        return 0;
    }

    p->deadline_epoch_days = date_to_days(p->deadline_date);
    if (p->deadline_epoch_days < 0) {
        fprintf(stderr, "Record %d (pid %d): bad deadline '%s'\n", rec, p->pid, p->deadline_date);
        return 0;
    }
    if (p->pid <= SYSTEM_INIT_PID || p->burst_time < 1 || p->arrival_tick < 1 ||
        p->tier < 0 || p->tier > 2) {
        fprintf(stderr, "Record %d (pid %d): pid must be > 1, burst >= 1, arrival >= 1, tier 0-2\n",
                rec, p->pid);
        return 0;
    }
    for (int r = 0; r < NUM_RESOURCES; r++) {
        if (p->max_need[r] < 0 || p->max_need[r] > s->total[r]) {
            fprintf(stderr, "Record %d (pid %d): max_need for %s must be 0-%d\n",
                    rec, p->pid, RESOURCE_NAMES[r], s->total[r]);
            return 0;
        }
    }
    for (int i = 0; i < s->count; i++) {
        if (s->pcb[i].pid == p->pid) {
            fprintf(stderr, "Record %d: duplicate pid %d\n", rec, p->pid);
            return 0;
        }
    }

    p->parent_user_id = p->user_id;
    p->remaining_time = p->burst_time;
    p->state = STATE_NEW;
    return 1;
}

int load_input(Sim *s, const char *path) {
    char *text = read_file(path);
    if (!text) {
        fprintf(stderr, "Cannot open input file: %s\n", path);
        return -1;
    }

    s->count = 0;
    char *cursor = text;
    while ((cursor = strchr(cursor, '{')) != NULL) {
        char *end = strchr(cursor, '}');
        if (!end) break;
        if (s->count >= MAX_PROCESSES) {
            fprintf(stderr, "Warning: only the first %d records are used\n", MAX_PROCESSES);
            break;
        }
        *end = '\0';                       /* treat this one object as its own string */
        if (!parse_record(s, cursor, &s->pcb[s->count])) { free(text); return -1; }
        s->count++;
        cursor = end + 1;
    }

    free(text);
    if (s->count == 0) {
        fprintf(stderr, "No records found in %s\n", path);
        return -1;
    }
    return s->count;
}

/* ============================================================
   4. TELEMETRY LOG (telemetry.json)
   ============================================================ */
/* Writes telemetry.json as it goes: one object per tick, each with a list of events. */

static int first_event_in_tick = 1;

void telemetry_begin(Sim *s) {
    fprintf(s->out, "%s{\n \"tick\": %d,\n \"current_date\": \"%s\",\n \"logs\": [",
            s->tick > 1 ? ",\n" : "", s->tick, s->today_str);
    first_event_in_tick = 1;
}

/* p may be NULL for system-wide events. fmt holds any extra JSON fields. */
void log_event(Sim *s, const char *event, const SubscriptionPCB *p, const char *fmt, ...) {
    fprintf(s->out, "%s\n  {\"event\":\"%s\"", first_event_in_tick ? "" : ",", event);
    first_event_in_tick = 0;
    if (p) fprintf(s->out, ",\"pid\":%d,\"service\":\"%s\"", p->pid, p->service);
    if (fmt) {
        va_list args;
        fputc(',', s->out);
        va_start(args, fmt);
        vfprintf(s->out, fmt, args);
        va_end(args);
    }
    fputc('}', s->out);
}

void telemetry_end(Sim *s) {
    log_event(s, "TICK_END", NULL, NULL);
    fprintf(s->out, "\n ],\n \"workers\": {");
    for (int r = 0; r < NUM_RESOURCES; r++)
        fprintf(s->out, "%s\"%s\":%d", r ? ", " : "", RESOURCE_NAMES[r], s->available[r]);
    fprintf(s->out, "}\n}");
}

/* ============================================================
   5. RESOURCES: worker locks, Banker's algorithm, deadlock detection
   ============================================================ */
int is_live(const SubscriptionPCB *p) {
    return p->state == STATE_READY || p->state == STATE_RUNNING ||
           p->state == STATE_BLOCKED_LOCK;
}

/* Worker channels (SMS, Email, Webhook) as locks, Banker's algorithm to avoid
   unsafe grants, and a Resource Allocation Graph to detect deadlocks. */

const char *RESOURCE_NAMES[NUM_RESOURCES] = {"SMS", "Email", "Webhook"};

void release_resources(Sim *s, SubscriptionPCB *p) {
    for (int r = 0; r < NUM_RESOURCES; r++) {
        s->available[r] += p->allocated[r];
        p->allocated[r] = 0;
    }
}

/* ---------- Banker's algorithm ---------- */

/* Safe = there is some order in which every live process can finish. */
static int is_safe(Sim *s) {
    int work[NUM_RESOURCES];
    int finished[MAX_PROCESSES] = {0};
    memcpy(work, s->available, sizeof work);

    int progress = 1;
    while (progress) {
        progress = 0;
        for (int i = 0; i < s->count; i++) {
            SubscriptionPCB *p = &s->pcb[i];
            if (!is_live(p) || finished[i]) continue;

            int can_finish = 1;
            for (int r = 0; r < NUM_RESOURCES; r++)
                if (p->max_need[r] - p->allocated[r] > work[r]) can_finish = 0;
            if (!can_finish) continue;

            for (int r = 0; r < NUM_RESOURCES; r++) work[r] += p->allocated[r];
            finished[i] = 1;
            progress = 1;
        }
    }
    for (int i = 0; i < s->count; i++)
        if (is_live(&s->pcb[i]) && !finished[i]) return 0;
    return 1;
}

/* Pretend to grant, test safety, then undo. */
static int grant_is_safe(Sim *s, SubscriptionPCB *p, int r, int amount) {
    s->available[r] -= amount;
    p->allocated[r] += amount;
    int safe = is_safe(s);
    s->available[r] += amount;
    p->allocated[r] -= amount;
    return safe;
}

/* Tasks ask for channels in different orders (like real services do),
   so circular waits are possible when the Banker's check is off. */
static int channel_at(const SubscriptionPCB *p, int k) {
    return (p->pid + k) % NUM_RESOURCES;
}

/* Take the missing channels one type at a time. If one is refused the task keeps
   what it already holds (hold-and-wait) and returns 0. */
int request_resources(Sim *s, SubscriptionPCB *p, int announce) {
    for (int k = 0; k < NUM_RESOURCES; k++) {
        int r = channel_at(p, k);
        int need = p->max_need[r] - p->allocated[r];
        if (need == 0) continue;

        const char *reason = NULL;
        if (need > s->available[r])
            reason = "not enough free workers";
        else if (s->use_banker && !grant_is_safe(s, p, r, need))
            reason = "Banker's check: grant would be unsafe";

        if (reason) {
            if (announce)
                log_event(s, "RATE_LIMIT_BLOCKED", p,
                          "\"channel\":\"%s\",\"reason\":\"%s\",\"msg\":\"Request deferred to BLOCKED_LOCK\"",
                          RESOURCE_NAMES[r], reason);
            return 0;
        }
        s->available[r] -= need;
        p->allocated[r] += need;
    }
    return 1;
}

/* Blocked tasks try again every tick; if they now get everything they are READY. */
void retry_blocked(Sim *s) {
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (p->state == STATE_BLOCKED_LOCK && request_resources(s, p, 0))
            p->state = STATE_READY;
    }
}

/* ---------- Resource Allocation Graph ----------
   Nodes 0..count-1 are processes, the next NUM_RESOURCES nodes are channels.
   Edge  process -> channel : process is blocked waiting for it
   Edge  channel -> process : process currently holds it
   A cycle means circular wait. */

#define MAX_NODES (MAX_PROCESSES + NUM_RESOURCES)

static int graph[MAX_NODES][MAX_NODES];
static int visit_state[MAX_NODES];   /* 0 = new, 1 = on current path, 2 = done */
static int path[MAX_NODES];
static int path_len;
static int cycle_start;

static int dfs(int u, int n) {
    visit_state[u] = 1;
    path[path_len++] = u;
    for (int v = 0; v < n; v++) {
        if (!graph[u][v]) continue;
        if (visit_state[v] == 1) {                 /* back to a node on our path: cycle */
            for (int k = 0; k < path_len; k++)
                if (path[k] == v) cycle_start = k;
            return 1;
        }
        if (visit_state[v] == 0 && dfs(v, n)) return 1;
    }
    visit_state[u] = 2;
    path_len--;
    return 0;
}

static int build_graph(Sim *s) {
    memset(graph, 0, sizeof graph);
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        for (int r = 0; r < NUM_RESOURCES; r++)
            if (p->allocated[r] > 0) graph[s->count + r][i] = 1;

        if (p->state != STATE_BLOCKED_LOCK) continue;
        for (int k = 0; k < NUM_RESOURCES; k++) {
            int r = channel_at(p, k);
            int need = p->max_need[r] - p->allocated[r];
            if (need > 0) {
                if (need > s->available[r]) graph[i][s->count + r] = 1;
                break;                              /* it waits on the first channel it is missing */
            }
        }
    }
    return s->count + NUM_RESOURCES;
}

static void node_name(const Sim *s, int node, char *out, size_t size) {
    if (node < s->count) snprintf(out, size, "P%d", s->pcb[node].pid);
    else snprintf(out, size, "%s", RESOURCE_NAMES[node - s->count]);
}

void check_and_resolve_deadlock(Sim *s) {
    /* A cycle is only a real deadlock if no READY task holding locks can still finish. */
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (p->state != STATE_READY) continue;
        for (int r = 0; r < NUM_RESOURCES; r++)
            if (p->allocated[r] > 0) return;
    }

    int n = build_graph(s);
    memset(visit_state, 0, sizeof visit_state);
    path_len = 0;
    int found = 0;
    for (int u = 0; u < n && !found; u++)
        if (visit_state[u] == 0) found = dfs(u, n);
    if (!found) return;

    /* Describe the cycle and pick the lowest-priority process in it as the victim. */
    char text[512] = "";
    char name[16];
    int victim = -1;
    for (int k = cycle_start; k <= path_len; k++) {
        int node = (k == path_len) ? path[cycle_start] : path[k];
        node_name(s, node, name, sizeof name);
        size_t len = strlen(text);
        if (len + 8 < sizeof text) snprintf(text + len, sizeof text - len, "%s%s", k > cycle_start ? " -> " : "", name);

        if (k == path_len || node >= s->count) continue;
        SubscriptionPCB *p = &s->pcb[node];
        if (victim < 0 || p->tier > s->pcb[victim].tier ||
            (p->tier == s->pcb[victim].tier && p->pid > s->pcb[victim].pid))
            victim = node;
    }
    log_event(s, "RAG_DEADLOCK_DETECTED", NULL, "\"cycle\":\"%s\",\"msg\":\"Circular wait found\"", text);

    if (victim >= 0) {
        SubscriptionPCB *v = &s->pcb[victim];
        release_resources(s, v);
        v->state = STATE_TERMINATED;
        v->aborted = 1;
        log_event(s, "DEADLOCK_PREEMPTION", v, "\"msg\":\"Lowest-priority task aborted, locks released\"");
    }
}

/* ============================================================
   6. MLFQ SCHEDULER and aging guard
   ============================================================ */
/* 3-level Multi-Level Feedback Queue on a single CPU.
   Tier 0: SRTF (shortest remaining time)   Tier 1: Round-Robin   Tier 2: FCFS
   The CPU always serves the lowest-numbered tier that has a READY process. */


static int pick_tier0(Sim *s) {
    int best = -1;
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (p->state != STATE_READY || p->tier != 0) continue;
        if (best < 0 || p->remaining_time < s->pcb[best].remaining_time) best = i;
    }
    return best;
}

static int pick_tier1(Sim *s) {
    /* keep the same process while its time slice lasts */
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (p->pid == s->last_pid && p->state == STATE_READY &&
            p->tier == 1 && p->quantum_used < TIME_QUANTUM)
            return i;
    }
    /* otherwise take whoever ran longest ago */
    int best = -1;
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (p->state != STATE_READY || p->tier != 1) continue;
        if (best < 0 || p->last_run_tick < s->pcb[best].last_run_tick) best = i;
    }
    return best;
}

static int pick_tier2(Sim *s) {
    int best = -1;
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (p->state != STATE_READY || p->tier != 2) continue;
        if (best < 0 || p->arrival_tick < s->pcb[best].arrival_tick) best = i;
    }
    return best;
}

static int pick_next(Sim *s) {
    int i = pick_tier0(s);
    if (i < 0) i = pick_tier1(s);
    if (i < 0) i = pick_tier2(s);
    return i;
}

/* Spend one CPU tick on process p. */
static void execute(Sim *s, SubscriptionPCB *p) {
    if (p->pid != s->last_pid || p->quantum_used >= TIME_QUANTUM) p->quantum_used = 0;

    int remaining_before = p->remaining_time;
    p->state = STATE_RUNNING;
    p->quantum_used++;
    p->remaining_time--;
    p->wait_time = 0;
    p->last_run_tick = s->tick;
    s->last_pid = p->pid;

    log_event(s, "CPU_EXECUTE", p, "\"remaining_ticks\":%d,\"flagged\":\"%s\"",
              remaining_before, p->is_flagged_exceeded ? "true" : "false");

    if (p->remaining_time > 0) {
        p->state = STATE_READY;
        return;
    }
    p->state = STATE_ZOMBIE;               /* done; waits for ACK before cleanup */
    if (p->is_flagged_exceeded) {
        log_event(s, "DEADLINE_BREACH", p, "\"days_overdue\":%d,\"msg\":\"Completed after its deadline\"",
                  s->today - p->deadline_epoch_days);
    }
    log_event(s, "TASK_COMPLETED", p, "\"msg\":\"Notification dispatched and processed\"");
}

/* Pick a process and run it. A process that cannot get its worker channels
   is moved to BLOCKED_LOCK and the next candidate is tried. */
int run_scheduler(Sim *s) {
    for (;;) {
        int i = pick_next(s);
        if (i < 0) return -1;              /* CPU idle this tick */
        SubscriptionPCB *p = &s->pcb[i];
        if (request_resources(s, p, 1)) {
            execute(s, p);
            return i;
        }
        p->state = STATE_BLOCKED_LOCK;
    }
}

/* Anyone in Tier 1/2 who waited too long jumps to Tier 0. */
void apply_aging_guard(Sim *s, int ran_index) {
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (i == ran_index || p->state != STATE_READY || p->tier == 0) continue;
        p->wait_time++;
        if (p->wait_time >= AGING_THRESHOLD) {
            log_event(s, "AGING_PROMOTION", p,
                      "\"from_tier\":%d,\"wait_time\":%d,\"msg\":\"Starved task promoted to Tier 0\"",
                      p->tier, p->wait_time);
            p->tier = 0;
            p->wait_time = 0;
        }
    }
}

/* ============================================================
   7. DATE-WISE DEADLINES
   ============================================================ */
/* Date-wise deadline check, run once per tick (one tick = one calendar day). */

void evaluate_user_date_deadlines(Sim *s) {
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (!is_live(p)) continue;

        int days_remaining = p->deadline_epoch_days - s->today;

        if (days_remaining < 0) {
            if (p->is_flagged_exceeded) continue;     /* flag only once */
            p->is_flagged_exceeded = 1;
            p->tier = 0;                              /* emergency escalation */
            p->wait_time = 0;
            log_event(s, "DEADLINE_ENDED", p,
                      "\"deadline\":\"%s\",\"days_overdue\":%d,\"msg\":\"Deadline ended! Task flagged as EXCEEDED\"",
                      p->deadline_date, -days_remaining);
        } else if (days_remaining <= COUNTDOWN_DAYS) {
            log_event(s, "DEADLINE_COUNTDOWN", p,
                      "\"deadline\":\"%s\",\"days_remaining\":%d",
                      p->deadline_date, days_remaining);
        }
    }
}

/* ============================================================
   8. LIFECYCLE: orphans and zombies
   ============================================================ */
/* Process lifecycle events: user deletion (orphans) and zombie cleanup. */

/* When a user is deleted, their running tasks are adopted by SYSTEM_INIT. */
void simulate_user_deletion(Sim *s, int deleted_user_id) {
    int children = 0;
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (p->user_id != deleted_user_id) continue;
        if (p->state == STATE_ZOMBIE || p->state == STATE_TERMINATED) continue;

        log_event(s, "ORPHAN_REPARENTED", p,
                  "\"old_parent\":%d,\"new_parent\":%d,\"msg\":\"Task adopted by SYSTEM_INIT\"",
                  p->parent_user_id, SYSTEM_INIT_PID);
        p->parent_user_id = SYSTEM_INIT_PID;
        children++;
    }
    log_event(s, "USER_DELETED", NULL,
              "\"user_id\":%d,\"children\":%d,\"msg\":\"User %d deleted, %d task(s) reparented\"",
              deleted_user_id, children, deleted_user_id, children);
}

/* Finished tasks stay ZOMBIE until the delivery ACK arrives, then free their locks. */
void reap_zombies(Sim *s) {
    for (int i = 0; i < s->count; i++) {
        SubscriptionPCB *p = &s->pcb[i];
        if (p->state != STATE_ZOMBIE) continue;

        release_resources(s, p);
        p->state = STATE_TERMINATED;
        log_event(s, "ZOMBIE_REAPED", p, "\"msg\":\"Delivery ACK received, locks released, PCB freed\"");
    }
}

/* ============================================================
   9. MAIN: the tick loop
   ============================================================ */
static void usage(void) {
    fprintf(stderr, "Usage: subtrack [YYYY-MM-DD] [--unsafe]\n");
}

static void init_sim(Sim *s) {
    memset(s, 0, sizeof *s);
    s->total[0] = 4;  s->total[1] = 4;  s->total[2] = 3;
    memcpy(s->available, s->total, sizeof s->total);
    s->use_banker = 1;
}

static void admit_arrivals(Sim *s) {
    for (int i = 0; i < s->count; i++)
        if (s->pcb[i].state == STATE_NEW && s->pcb[i].arrival_tick <= s->tick)
            s->pcb[i].state = STATE_READY;
}

static int all_done(const Sim *s) {
    for (int i = 0; i < s->count; i++)
        if (s->pcb[i].state != STATE_TERMINATED) return 0;
    return 1;
}

static void append_file(FILE *out, const char *path) {
    FILE *in = fopen(path, "r");
    int c;
    if (!in) { fputs("[]", out); return; }
    while ((c = fgetc(in)) != EOF) fputc(c, out);
    fclose(in);
}

/* Also save telemetry and the subscription list as telemetry.js, so the
   dashboard opens by double-click without a web server. */
static void write_js_copy(const char *json_path, const char *input_path) {
    char js_path[256];
    snprintf(js_path, sizeof js_path, "%s", json_path);
    char *dot = strrchr(js_path, '.');
    if (!dot || strcmp(dot, ".json") != 0) return;
    strcpy(dot, ".js");

    FILE *out = fopen(js_path, "w");
    if (!out) return;
    fputs("window.TELEMETRY = ", out);
    append_file(out, json_path);
    fputs(";\nwindow.SUBSCRIPTIONS = ", out);
    append_file(out, input_path);
    fputs(";\n", out);
    fclose(out);
}

int main(int argc, char **argv) {
    const char *start_date = DEFAULT_DATE;

    Sim s;
    init_sim(&s);
    for (int i = 1; i < argc; i++) {
        if (strcmp(argv[i], "--unsafe") == 0) s.use_banker = 0;
        else if (argv[i][0] != '-') start_date = argv[i];
        else { usage(); return 1; }
    }

    s.today = date_to_days(start_date);
    if (s.today < 0) {
        fprintf(stderr, "Invalid start date '%s' (use YYYY-MM-DD, year 1970 or later)\n", start_date);
        return 1;
    }
    if (load_input(&s, INPUT_FILE) < 0) return 1;

    s.out = fopen(OUTPUT_FILE, "w");
    if (!s.out) { fprintf(stderr, "Cannot write %s\n", OUTPUT_FILE); return 1; }
    fputs("[\n", s.out);

    /* One loop pass = one clock tick = one calendar day. */
    for (s.tick = 1; s.tick <= MAX_TICKS && !all_done(&s); s.tick++) {
        if (s.tick > 1) s.today++;
        days_to_date(s.today, s.today_str);

        telemetry_begin(&s);
        reap_zombies(&s);                         /* free tasks that finished last tick */
        admit_arrivals(&s);                       /* NEW -> READY */
        if (DELETE_USER && s.tick == DELETE_TICK) simulate_user_deletion(&s, DELETE_USER);
        evaluate_user_date_deadlines(&s);         /* flag overdue, countdown alerts */
        retry_blocked(&s);                        /* give waiting tasks another chance */
        check_and_resolve_deadlock(&s);           /* RAG cycle check */
        int ran = run_scheduler(&s);              /* MLFQ + Banker's, runs one task */
        apply_aging_guard(&s, ran);               /* promote starved tasks */
        telemetry_end(&s);
    }
    fputs("\n]\n", s.out);
    fclose(s.out);
    write_js_copy(OUTPUT_FILE, INPUT_FILE);

    int completed = 0, aborted = 0, flagged = 0;
    for (int i = 0; i < s.count; i++) {
        if (s.pcb[i].aborted) aborted++;
        else if (s.pcb[i].state == STATE_TERMINATED) completed++;
        if (s.pcb[i].is_flagged_exceeded) flagged++;
    }
    printf("Simulated %d ticks, ending on %s\n", s.tick - 1, s.today_str);
    printf("Processes: %d total, %d completed, %d aborted, %d flagged as past deadline\n",
           s.count, completed, aborted, flagged);
    printf("Done. Now open index.html in your browser.\n");
    return 0;
}
