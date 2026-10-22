# SubTrack OS - OSL Mini Project

OS scheduling simulation in a single C file. Each subscription notification is a process;
SMS, Email and Webhook workers are locks.

## Run it
You need a C compiler (gcc). Two commands:

    gcc -o subtrack subtrack.c
    ./subtrack

Then open `index.html` in your browser. It shows the subscription list (Netflix, Claude, Google Gemini and so on)
with live status as you play the run, plus colored toast notifications.
It needs internet once for Tailwind CSS and fonts.

Windows: use MinGW or WSL, or run `gcc -o subtrack.exe subtrack.c` then `subtrack.exe`.

## Gantt charts
The dashboard has four Gantt views (CPU timeline, Per subscription, Queues & workers, Metrics). They are drawn from telemetry.json, so no engine change is needed. Playback is 2.5 s per tick on Normal.

## Options
    ./subtrack 2026-11-01     choose the simulation start date (default 2026-10-10)
    ./subtrack --unsafe       Banker's check off, so deadlocks appear and get broken

## Files
    subtrack.c      the whole engine (9 numbered sections, read top to bottom)
    input.json      the 50 mock subscriptions (each one becomes a process)
    index.html      dashboard
    telemetry.json  written by the engine (telemetry.js is a copy so index.html opens by double-click)

## What one tick does (section 9)
One tick = one CPU time unit = one calendar day.
1. Free finished tasks (zombie reaping)
2. Admit tasks that arrive now
3. Delete user 1003 on tick 6 (their tasks go to SYSTEM_INIT)
4. Check deadlines: past due = flagged and moved to Tier 0, within 3 days = countdown
5. Retry tasks waiting for workers
6. Look for deadlock cycles
7. Pick one task (Tier 0 SRTF, Tier 1 Round-Robin, Tier 2 FCFS), get its workers through Banker's check, run it
8. Aging: tasks that waited 5 ticks move to Tier 0

## OS concept to code
| Concept | Where in subtrack.c |
|---|---|
| PCB | `SubscriptionPCB` |
| MLFQ | `pick_tier0/1/2`, `pick_next` |
| Aging | `apply_aging_guard` |
| Deadlines | `evaluate_user_date_deadlines` |
| Locks + Banker's | `request_resources`, `is_safe` |
| RAG deadlock | `build_graph`, `dfs`, `check_and_resolve_deadlock` |
| Orphans | `simulate_user_deletion` |
| Zombies | `reap_zombies` |

## Settings
Change the `#define` lines at the top of `subtrack.c`: aging threshold, time quantum,
countdown days, input and output file names, which user is deleted and when.

## input.json format
    {"pid": 101, "user_id": 1001, "service": "AWS", "plan": "Developer Support",
     "price": "$29.00/mo", "alert": "Renewal reminder", "burst_time": 3,
     "arrival": 1, "tier": 1, "deadline": "2026-10-12", "max_need": [1, 1, 0]}
`plan`, `price` and `alert` are only shown on the dashboard. `tier` follows the alert type:
0 for payment failures and security alerts, 1 for renewal reminders, 2 for background digests.
`max_need` = SMS, Email, Webhook workers needed (capacity 4, 4, 3). PID 1 is reserved.
