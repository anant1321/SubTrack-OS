window.TELEMETRY = [
{
 "tick": 1,
 "current_date": "2026-10-10",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":101,"service":"AWS","deadline":"2026-10-12","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":101,"service":"AWS","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":3, "Email":3, "Webhook":3}
},
{
 "tick": 2,
 "current_date": "2026-10-11",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":101,"service":"AWS","deadline":"2026-10-12","days_remaining":1},
  {"event":"DEADLINE_COUNTDOWN","pid":103,"service":"iCloud+","deadline":"2026-10-11","days_remaining":0},
  {"event":"DEADLINE_ENDED","pid":104,"service":"GitHub Copilot","deadline":"2026-10-04","days_overdue":7,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":103,"service":"iCloud+","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":103,"service":"iCloud+","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":0}
},
{
 "tick": 3,
 "current_date": "2026-10-12",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":103,"service":"iCloud+","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":101,"service":"AWS","deadline":"2026-10-12","days_remaining":0},
  {"event":"RATE_LIMIT_BLOCKED","pid":104,"service":"GitHub Copilot","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":102,"service":"Duolingo","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":1}
},
{
 "tick": 4,
 "current_date": "2026-10-13",
 "logs": [
  {"event":"DEADLINE_ENDED","pid":101,"service":"AWS","deadline":"2026-10-12","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":101,"service":"AWS","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":1}
},
{
 "tick": 5,
 "current_date": "2026-10-14",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":111,"service":"Google Gemini","deadline":"2026-10-17","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":101,"service":"AWS","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":101,"service":"AWS","days_overdue":2,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":101,"service":"AWS","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":1}
},
{
 "tick": 6,
 "current_date": "2026-10-15",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":101,"service":"AWS","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"ORPHAN_REPARENTED","pid":111,"service":"Google Gemini","old_parent":1003,"new_parent":1,"msg":"Task adopted by SYSTEM_INIT"},
  {"event":"ORPHAN_REPARENTED","pid":119,"service":"ChatGPT","old_parent":1003,"new_parent":1,"msg":"Task adopted by SYSTEM_INIT"},
  {"event":"ORPHAN_REPARENTED","pid":127,"service":"HBO Max","old_parent":1003,"new_parent":1,"msg":"Task adopted by SYSTEM_INIT"},
  {"event":"ORPHAN_REPARENTED","pid":135,"service":"1Password","old_parent":1003,"new_parent":1,"msg":"Task adopted by SYSTEM_INIT"},
  {"event":"ORPHAN_REPARENTED","pid":143,"service":"NordVPN","old_parent":1003,"new_parent":1,"msg":"Task adopted by SYSTEM_INIT"},
  {"event":"USER_DELETED","user_id":1003,"children":5,"msg":"User 1003 deleted, 5 task(s) reparented"},
  {"event":"DEADLINE_COUNTDOWN","pid":111,"service":"Google Gemini","deadline":"2026-10-17","days_remaining":2},
  {"event":"DEADLINE_ENDED","pid":117,"service":"Dropbox","deadline":"2026-10-12","days_overdue":3,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"DEADLINE_ENDED","pid":119,"service":"ChatGPT","deadline":"2026-10-09","days_overdue":6,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"RATE_LIMIT_BLOCKED","pid":117,"service":"Dropbox","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":111,"service":"Google Gemini","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":119,"service":"ChatGPT","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":106,"service":"YouTube Premium","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":107,"service":"LinkedIn Premium","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":108,"service":"Notion","remaining_ticks":2,"flagged":"false"},
  {"event":"AGING_PROMOTION","pid":105,"service":"Replit","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 7,
 "current_date": "2026-10-16",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":111,"service":"Google Gemini","deadline":"2026-10-17","days_remaining":1},
  {"event":"DEADLINE_ENDED","pid":121,"service":"Adobe Creative Cloud","deadline":"2026-10-11","days_overdue":5,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"DEADLINE_ENDED","pid":124,"service":"Claude","deadline":"2026-10-10","days_overdue":6,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"RATE_LIMIT_BLOCKED","pid":124,"service":"Claude","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":121,"service":"Adobe Creative Cloud","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":105,"service":"Replit","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":108,"service":"Notion","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":108,"service":"Notion","msg":"Notification dispatched and processed"},
  {"event":"AGING_PROMOTION","pid":109,"service":"Figma","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 8,
 "current_date": "2026-10-17",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":108,"service":"Notion","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":111,"service":"Google Gemini","deadline":"2026-10-17","days_remaining":0},
  {"event":"DEADLINE_ENDED","pid":125,"service":"Spotify","deadline":"2026-10-12","days_overdue":5,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"DEADLINE_ENDED","pid":126,"service":"Perplexity","deadline":"2026-10-02","days_overdue":15,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"RATE_LIMIT_BLOCKED","pid":125,"service":"Spotify","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":109,"service":"Figma","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":126,"service":"Perplexity","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":110,"service":"Google One","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":112,"service":"Audible","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":114,"service":"Amazon Prime","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":116,"service":"Vercel","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":122,"service":"Canva","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":102,"service":"Duolingo","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":0}
},
{
 "tick": 9,
 "current_date": "2026-10-18",
 "logs": [
  {"event":"DEADLINE_ENDED","pid":111,"service":"Google Gemini","deadline":"2026-10-17","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":102,"service":"Duolingo","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":102,"service":"Duolingo","msg":"Notification dispatched and processed"},
  {"event":"AGING_PROMOTION","pid":113,"service":"Tidal","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":115,"service":"Evernote","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":0}
},
{
 "tick": 10,
 "current_date": "2026-10-19",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":102,"service":"Duolingo","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":104,"service":"GitHub Copilot","remaining_ticks":2,"flagged":"true"},
  {"event":"AGING_PROMOTION","pid":118,"service":"Peacock","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 11,
 "current_date": "2026-10-20",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":135,"service":"1Password","deadline":"2026-10-20","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":104,"service":"GitHub Copilot","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":104,"service":"GitHub Copilot","days_overdue":16,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":104,"service":"GitHub Copilot","msg":"Notification dispatched and processed"},
  {"event":"AGING_PROMOTION","pid":120,"service":"Postman","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":123,"service":"Hulu","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 12,
 "current_date": "2026-10-21",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":104,"service":"GitHub Copilot","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_ENDED","pid":135,"service":"1Password","deadline":"2026-10-20","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"RATE_LIMIT_BLOCKED","pid":135,"service":"1Password","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":123,"service":"Hulu","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":105,"service":"Replit","remaining_ticks":4,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":3, "Webhook":0}
},
{
 "tick": 13,
 "current_date": "2026-10-22",
 "logs": [
  {"event":"DEADLINE_ENDED","pid":144,"service":"Netflix","deadline":"2026-10-08","days_overdue":14,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"DEADLINE_ENDED","pid":145,"service":"Microsoft 365","deadline":"2026-10-11","days_overdue":11,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"RATE_LIMIT_BLOCKED","pid":144,"service":"Netflix","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":145,"service":"Microsoft 365","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":105,"service":"Replit","remaining_ticks":3,"flagged":"false"},
  {"event":"AGING_PROMOTION","pid":127,"service":"HBO Max","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":128,"service":"Coursera Plus","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":129,"service":"Grammarly","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":130,"service":"Xbox Game Pass","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 14,
 "current_date": "2026-10-23",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":136,"service":"Zoom","deadline":"2026-10-26","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":105,"service":"Replit","remaining_ticks":2,"flagged":"false"},
  {"event":"AGING_PROMOTION","pid":131,"service":"Kindle Unlimited","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":132,"service":"Strava","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":133,"service":"Todoist","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 15,
 "current_date": "2026-10-24",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":136,"service":"Zoom","deadline":"2026-10-26","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":105,"service":"Replit","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":105,"service":"Replit","msg":"Notification dispatched and processed"},
  {"event":"AGING_PROMOTION","pid":134,"service":"Disney+","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":136,"service":"Zoom","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 16,
 "current_date": "2026-10-25",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":105,"service":"Replit","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":136,"service":"Zoom","deadline":"2026-10-26","days_remaining":1},
  {"event":"RATE_LIMIT_BLOCKED","pid":127,"service":"HBO Max","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":128,"service":"Coursera Plus","channel":"Webhook","reason":"Banker's check: grant would be unsafe","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":129,"service":"Grammarly","remaining_ticks":2,"flagged":"false"},
  {"event":"AGING_PROMOTION","pid":106,"service":"YouTube Premium","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":137,"service":"Heroku","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":138,"service":"Paramount+","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":139,"service":"Apple Music","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":140,"service":"Slack","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":141,"service":"JetBrains","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":142,"service":"Cursor","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 17,
 "current_date": "2026-10-26",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":136,"service":"Zoom","deadline":"2026-10-26","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":129,"service":"Grammarly","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":129,"service":"Grammarly","msg":"Notification dispatched and processed"},
  {"event":"AGING_PROMOTION","pid":143,"service":"NordVPN","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":146,"service":"Nintendo Switch Online","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 18,
 "current_date": "2026-10-27",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":129,"service":"Grammarly","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":132,"service":"Strava","deadline":"2026-10-30","days_remaining":3},
  {"event":"DEADLINE_ENDED","pid":136,"service":"Zoom","deadline":"2026-10-26","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"RATE_LIMIT_BLOCKED","pid":130,"service":"Xbox Game Pass","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":134,"service":"Disney+","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":139,"service":"Apple Music","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":140,"service":"Slack","remaining_ticks":2,"flagged":"false"},
  {"event":"AGING_PROMOTION","pid":147,"service":"Midjourney","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":148,"service":"ExpressVPN","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":149,"service":"Medium","from_tier":2,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"AGING_PROMOTION","pid":150,"service":"PlayStation Plus","from_tier":1,"wait_time":5,"msg":"Starved task promoted to Tier 0"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 19,
 "current_date": "2026-10-28",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":132,"service":"Strava","deadline":"2026-10-30","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":140,"service":"Slack","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":140,"service":"Slack","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 20,
 "current_date": "2026-10-29",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":140,"service":"Slack","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":132,"service":"Strava","deadline":"2026-10-30","days_remaining":1},
  {"event":"RATE_LIMIT_BLOCKED","pid":141,"service":"JetBrains","channel":"SMS","reason":"Banker's check: grant would be unsafe","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":147,"service":"Midjourney","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":150,"service":"PlayStation Plus","channel":"SMS","reason":"Banker's check: grant would be unsafe","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":106,"service":"YouTube Premium","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":0, "Webhook":1}
},
{
 "tick": 21,
 "current_date": "2026-10-30",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":132,"service":"Strava","deadline":"2026-10-30","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":106,"service":"YouTube Premium","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":0, "Webhook":1}
},
{
 "tick": 22,
 "current_date": "2026-10-31",
 "logs": [
  {"event":"DEADLINE_ENDED","pid":132,"service":"Strava","deadline":"2026-10-30","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":106,"service":"YouTube Premium","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":106,"service":"YouTube Premium","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":0, "Webhook":1}
},
{
 "tick": 23,
 "current_date": "2026-11-01",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":106,"service":"YouTube Premium","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"RATE_LIMIT_BLOCKED","pid":131,"service":"Kindle Unlimited","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":133,"service":"Todoist","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":136,"service":"Zoom","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":138,"service":"Paramount+","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":142,"service":"Cursor","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":148,"service":"ExpressVPN","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":149,"service":"Medium","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":113,"service":"Tidal","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":115,"service":"Evernote","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":118,"service":"Peacock","channel":"Email","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":120,"service":"Postman","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":132,"service":"Strava","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":137,"service":"Heroku","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":143,"service":"NordVPN","channel":"Webhook","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"RATE_LIMIT_BLOCKED","pid":146,"service":"Nintendo Switch Online","channel":"SMS","reason":"not enough free workers","msg":"Request deferred to BLOCKED_LOCK"},
  {"event":"CPU_EXECUTE","pid":110,"service":"Google One","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 24,
 "current_date": "2026-11-02",
 "logs": [
  {"event":"CPU_EXECUTE","pid":110,"service":"Google One","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":110,"service":"Google One","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 25,
 "current_date": "2026-11-03",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":110,"service":"Google One","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":124,"service":"Claude","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":124,"service":"Claude","days_overdue":24,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":124,"service":"Claude","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":1}
},
{
 "tick": 26,
 "current_date": "2026-11-04",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":124,"service":"Claude","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":118,"service":"Peacock","remaining_ticks":4,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":1}
},
{
 "tick": 27,
 "current_date": "2026-11-05",
 "logs": [
  {"event":"CPU_EXECUTE","pid":118,"service":"Peacock","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":1}
},
{
 "tick": 28,
 "current_date": "2026-11-06",
 "logs": [
  {"event":"CPU_EXECUTE","pid":118,"service":"Peacock","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":1}
},
{
 "tick": 29,
 "current_date": "2026-11-07",
 "logs": [
  {"event":"CPU_EXECUTE","pid":118,"service":"Peacock","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":118,"service":"Peacock","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":1}
},
{
 "tick": 30,
 "current_date": "2026-11-08",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":118,"service":"Peacock","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":119,"service":"ChatGPT","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 31,
 "current_date": "2026-11-09",
 "logs": [
  {"event":"CPU_EXECUTE","pid":119,"service":"ChatGPT","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":119,"service":"ChatGPT","days_overdue":31,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":119,"service":"ChatGPT","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 32,
 "current_date": "2026-11-10",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":119,"service":"ChatGPT","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":137,"service":"Heroku","remaining_ticks":4,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":2}
},
{
 "tick": 33,
 "current_date": "2026-11-11",
 "logs": [
  {"event":"CPU_EXECUTE","pid":137,"service":"Heroku","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":2}
},
{
 "tick": 34,
 "current_date": "2026-11-12",
 "logs": [
  {"event":"CPU_EXECUTE","pid":137,"service":"Heroku","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":2}
},
{
 "tick": 35,
 "current_date": "2026-11-13",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":149,"service":"Medium","deadline":"2026-11-16","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":137,"service":"Heroku","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":137,"service":"Heroku","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":2}
},
{
 "tick": 36,
 "current_date": "2026-11-14",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":137,"service":"Heroku","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":146,"service":"Nintendo Switch Online","deadline":"2026-11-17","days_remaining":3},
  {"event":"DEADLINE_COUNTDOWN","pid":149,"service":"Medium","deadline":"2026-11-16","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":120,"service":"Postman","remaining_ticks":4,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":0, "Webhook":0}
},
{
 "tick": 37,
 "current_date": "2026-11-15",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":146,"service":"Nintendo Switch Online","deadline":"2026-11-17","days_remaining":2},
  {"event":"DEADLINE_COUNTDOWN","pid":149,"service":"Medium","deadline":"2026-11-16","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":120,"service":"Postman","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":0, "Webhook":0}
},
{
 "tick": 38,
 "current_date": "2026-11-16",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":146,"service":"Nintendo Switch Online","deadline":"2026-11-17","days_remaining":1},
  {"event":"DEADLINE_COUNTDOWN","pid":149,"service":"Medium","deadline":"2026-11-16","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":120,"service":"Postman","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":0, "Webhook":0}
},
{
 "tick": 39,
 "current_date": "2026-11-17",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":146,"service":"Nintendo Switch Online","deadline":"2026-11-17","days_remaining":0},
  {"event":"DEADLINE_ENDED","pid":149,"service":"Medium","deadline":"2026-11-16","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":120,"service":"Postman","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":120,"service":"Postman","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":0, "Webhook":0}
},
{
 "tick": 40,
 "current_date": "2026-11-18",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":120,"service":"Postman","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_ENDED","pid":146,"service":"Nintendo Switch Online","deadline":"2026-11-17","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":123,"service":"Hulu","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 41,
 "current_date": "2026-11-19",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":143,"service":"NordVPN","deadline":"2026-11-22","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":123,"service":"Hulu","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 42,
 "current_date": "2026-11-20",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":143,"service":"NordVPN","deadline":"2026-11-22","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":123,"service":"Hulu","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":123,"service":"Hulu","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 43,
 "current_date": "2026-11-21",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":123,"service":"Hulu","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":143,"service":"NordVPN","deadline":"2026-11-22","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":130,"service":"Xbox Game Pass","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":1}
},
{
 "tick": 44,
 "current_date": "2026-11-22",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":143,"service":"NordVPN","deadline":"2026-11-22","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":130,"service":"Xbox Game Pass","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":130,"service":"Xbox Game Pass","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":1}
},
{
 "tick": 45,
 "current_date": "2026-11-23",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":130,"service":"Xbox Game Pass","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_ENDED","pid":143,"service":"NordVPN","deadline":"2026-11-22","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":139,"service":"Apple Music","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":1}
},
{
 "tick": 46,
 "current_date": "2026-11-24",
 "logs": [
  {"event":"CPU_EXECUTE","pid":139,"service":"Apple Music","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":139,"service":"Apple Music","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":1}
},
{
 "tick": 47,
 "current_date": "2026-11-25",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":139,"service":"Apple Music","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":138,"service":"Paramount+","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 48,
 "current_date": "2026-11-26",
 "logs": [
  {"event":"CPU_EXECUTE","pid":138,"service":"Paramount+","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 49,
 "current_date": "2026-11-27",
 "logs": [
  {"event":"CPU_EXECUTE","pid":138,"service":"Paramount+","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":138,"service":"Paramount+","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 50,
 "current_date": "2026-11-28",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":138,"service":"Paramount+","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":145,"service":"Microsoft 365","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":0}
},
{
 "tick": 51,
 "current_date": "2026-11-29",
 "logs": [
  {"event":"CPU_EXECUTE","pid":145,"service":"Microsoft 365","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":145,"service":"Microsoft 365","days_overdue":49,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":145,"service":"Microsoft 365","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":0}
},
{
 "tick": 52,
 "current_date": "2026-11-30",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":145,"service":"Microsoft 365","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":133,"service":"Todoist","deadline":"2026-12-03","days_remaining":3},
  {"event":"DEADLINE_COUNTDOWN","pid":150,"service":"PlayStation Plus","deadline":"2026-12-03","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":107,"service":"LinkedIn Premium","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 53,
 "current_date": "2026-12-01",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":133,"service":"Todoist","deadline":"2026-12-03","days_remaining":2},
  {"event":"DEADLINE_COUNTDOWN","pid":150,"service":"PlayStation Plus","deadline":"2026-12-03","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":107,"service":"LinkedIn Premium","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 54,
 "current_date": "2026-12-02",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":133,"service":"Todoist","deadline":"2026-12-03","days_remaining":1},
  {"event":"DEADLINE_COUNTDOWN","pid":150,"service":"PlayStation Plus","deadline":"2026-12-03","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":107,"service":"LinkedIn Premium","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":107,"service":"LinkedIn Premium","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 55,
 "current_date": "2026-12-03",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":107,"service":"LinkedIn Premium","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":133,"service":"Todoist","deadline":"2026-12-03","days_remaining":0},
  {"event":"DEADLINE_COUNTDOWN","pid":141,"service":"JetBrains","deadline":"2026-12-06","days_remaining":3},
  {"event":"DEADLINE_COUNTDOWN","pid":150,"service":"PlayStation Plus","deadline":"2026-12-03","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":113,"service":"Tidal","remaining_ticks":4,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 56,
 "current_date": "2026-12-04",
 "logs": [
  {"event":"DEADLINE_ENDED","pid":133,"service":"Todoist","deadline":"2026-12-03","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"DEADLINE_COUNTDOWN","pid":141,"service":"JetBrains","deadline":"2026-12-06","days_remaining":2},
  {"event":"DEADLINE_ENDED","pid":150,"service":"PlayStation Plus","deadline":"2026-12-03","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":113,"service":"Tidal","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 57,
 "current_date": "2026-12-05",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":141,"service":"JetBrains","deadline":"2026-12-06","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":113,"service":"Tidal","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 58,
 "current_date": "2026-12-06",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":109,"service":"Figma","deadline":"2026-12-09","days_remaining":3},
  {"event":"DEADLINE_COUNTDOWN","pid":141,"service":"JetBrains","deadline":"2026-12-06","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":113,"service":"Tidal","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":113,"service":"Tidal","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 59,
 "current_date": "2026-12-07",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":113,"service":"Tidal","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":109,"service":"Figma","deadline":"2026-12-09","days_remaining":2},
  {"event":"DEADLINE_ENDED","pid":141,"service":"JetBrains","deadline":"2026-12-06","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":133,"service":"Todoist","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 60,
 "current_date": "2026-12-08",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":109,"service":"Figma","deadline":"2026-12-09","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":133,"service":"Todoist","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 61,
 "current_date": "2026-12-09",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":109,"service":"Figma","deadline":"2026-12-09","days_remaining":0},
  {"event":"DEADLINE_COUNTDOWN","pid":128,"service":"Coursera Plus","deadline":"2026-12-12","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":133,"service":"Todoist","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":133,"service":"Todoist","days_overdue":6,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":133,"service":"Todoist","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 62,
 "current_date": "2026-12-10",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":133,"service":"Todoist","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_ENDED","pid":109,"service":"Figma","deadline":"2026-12-09","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"DEADLINE_COUNTDOWN","pid":128,"service":"Coursera Plus","deadline":"2026-12-12","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":136,"service":"Zoom","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":0}
},
{
 "tick": 63,
 "current_date": "2026-12-11",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":128,"service":"Coursera Plus","deadline":"2026-12-12","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":136,"service":"Zoom","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":0}
},
{
 "tick": 64,
 "current_date": "2026-12-12",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":128,"service":"Coursera Plus","deadline":"2026-12-12","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":136,"service":"Zoom","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":136,"service":"Zoom","days_overdue":47,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":136,"service":"Zoom","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":0}
},
{
 "tick": 65,
 "current_date": "2026-12-13",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":136,"service":"Zoom","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_ENDED","pid":128,"service":"Coursera Plus","deadline":"2026-12-12","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"DEADLINE_COUNTDOWN","pid":134,"service":"Disney+","deadline":"2026-12-16","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":121,"service":"Adobe Creative Cloud","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 66,
 "current_date": "2026-12-14",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":134,"service":"Disney+","deadline":"2026-12-16","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":121,"service":"Adobe Creative Cloud","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":121,"service":"Adobe Creative Cloud","days_overdue":64,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":121,"service":"Adobe Creative Cloud","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 67,
 "current_date": "2026-12-15",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":121,"service":"Adobe Creative Cloud","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":134,"service":"Disney+","deadline":"2026-12-16","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":122,"service":"Canva","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":1}
},
{
 "tick": 68,
 "current_date": "2026-12-16",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":134,"service":"Disney+","deadline":"2026-12-16","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":122,"service":"Canva","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":122,"service":"Canva","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":1}
},
{
 "tick": 69,
 "current_date": "2026-12-17",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":122,"service":"Canva","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_ENDED","pid":134,"service":"Disney+","deadline":"2026-12-16","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":109,"service":"Figma","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":1}
},
{
 "tick": 70,
 "current_date": "2026-12-18",
 "logs": [
  {"event":"CPU_EXECUTE","pid":109,"service":"Figma","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":1}
},
{
 "tick": 71,
 "current_date": "2026-12-19",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":115,"service":"Evernote","deadline":"2026-12-22","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":109,"service":"Figma","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":109,"service":"Figma","days_overdue":10,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":109,"service":"Figma","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":1}
},
{
 "tick": 72,
 "current_date": "2026-12-20",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":109,"service":"Figma","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":115,"service":"Evernote","deadline":"2026-12-22","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":111,"service":"Google Gemini","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 73,
 "current_date": "2026-12-21",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":115,"service":"Evernote","deadline":"2026-12-22","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":111,"service":"Google Gemini","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":111,"service":"Google Gemini","days_overdue":65,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":111,"service":"Google Gemini","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 74,
 "current_date": "2026-12-22",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":111,"service":"Google Gemini","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":115,"service":"Evernote","deadline":"2026-12-22","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":114,"service":"Amazon Prime","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":1}
},
{
 "tick": 75,
 "current_date": "2026-12-23",
 "logs": [
  {"event":"DEADLINE_ENDED","pid":115,"service":"Evernote","deadline":"2026-12-22","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":114,"service":"Amazon Prime","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":114,"service":"Amazon Prime","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":1}
},
{
 "tick": 76,
 "current_date": "2026-12-24",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":114,"service":"Amazon Prime","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":132,"service":"Strava","remaining_ticks":4,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":1, "Webhook":0}
},
{
 "tick": 77,
 "current_date": "2026-12-25",
 "logs": [
  {"event":"CPU_EXECUTE","pid":132,"service":"Strava","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":1, "Webhook":0}
},
{
 "tick": 78,
 "current_date": "2026-12-26",
 "logs": [
  {"event":"CPU_EXECUTE","pid":132,"service":"Strava","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":1, "Webhook":0}
},
{
 "tick": 79,
 "current_date": "2026-12-27",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":131,"service":"Kindle Unlimited","deadline":"2026-12-30","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":132,"service":"Strava","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":132,"service":"Strava","days_overdue":58,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":132,"service":"Strava","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":1, "Webhook":0}
},
{
 "tick": 80,
 "current_date": "2026-12-28",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":132,"service":"Strava","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":131,"service":"Kindle Unlimited","deadline":"2026-12-30","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":115,"service":"Evernote","remaining_ticks":4,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":0}
},
{
 "tick": 81,
 "current_date": "2026-12-29",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":131,"service":"Kindle Unlimited","deadline":"2026-12-30","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":115,"service":"Evernote","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":0}
},
{
 "tick": 82,
 "current_date": "2026-12-30",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":131,"service":"Kindle Unlimited","deadline":"2026-12-30","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":115,"service":"Evernote","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":0}
},
{
 "tick": 83,
 "current_date": "2026-12-31",
 "logs": [
  {"event":"DEADLINE_ENDED","pid":131,"service":"Kindle Unlimited","deadline":"2026-12-30","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":115,"service":"Evernote","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":115,"service":"Evernote","days_overdue":9,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":115,"service":"Evernote","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":0}
},
{
 "tick": 84,
 "current_date": "2027-01-01",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":115,"service":"Evernote","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":116,"service":"Vercel","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 85,
 "current_date": "2027-01-02",
 "logs": [
  {"event":"CPU_EXECUTE","pid":116,"service":"Vercel","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 86,
 "current_date": "2027-01-03",
 "logs": [
  {"event":"CPU_EXECUTE","pid":116,"service":"Vercel","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":116,"service":"Vercel","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":0}
},
{
 "tick": 87,
 "current_date": "2027-01-04",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":116,"service":"Vercel","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":125,"service":"Spotify","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":0}
},
{
 "tick": 88,
 "current_date": "2027-01-05",
 "logs": [
  {"event":"CPU_EXECUTE","pid":125,"service":"Spotify","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":125,"service":"Spotify","days_overdue":85,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":125,"service":"Spotify","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":0}
},
{
 "tick": 89,
 "current_date": "2027-01-06",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":125,"service":"Spotify","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":127,"service":"HBO Max","deadline":"2027-01-09","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":117,"service":"Dropbox","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":117,"service":"Dropbox","days_overdue":86,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":117,"service":"Dropbox","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":0}
},
{
 "tick": 90,
 "current_date": "2027-01-07",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":117,"service":"Dropbox","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":127,"service":"HBO Max","deadline":"2027-01-09","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":126,"service":"Perplexity","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":1}
},
{
 "tick": 91,
 "current_date": "2027-01-08",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":127,"service":"HBO Max","deadline":"2027-01-09","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":126,"service":"Perplexity","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":1}
},
{
 "tick": 92,
 "current_date": "2027-01-09",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":127,"service":"HBO Max","deadline":"2027-01-09","days_remaining":0},
  {"event":"DEADLINE_COUNTDOWN","pid":142,"service":"Cursor","deadline":"2027-01-12","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":126,"service":"Perplexity","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":126,"service":"Perplexity","days_overdue":99,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":126,"service":"Perplexity","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":1}
},
{
 "tick": 93,
 "current_date": "2027-01-10",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":126,"service":"Perplexity","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_ENDED","pid":127,"service":"HBO Max","deadline":"2027-01-09","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"DEADLINE_COUNTDOWN","pid":142,"service":"Cursor","deadline":"2027-01-12","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":127,"service":"HBO Max","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 94,
 "current_date": "2027-01-11",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":142,"service":"Cursor","deadline":"2027-01-12","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":127,"service":"HBO Max","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":127,"service":"HBO Max","days_overdue":2,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":127,"service":"HBO Max","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 95,
 "current_date": "2027-01-12",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":127,"service":"HBO Max","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":142,"service":"Cursor","deadline":"2027-01-12","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":141,"service":"JetBrains","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":0}
},
{
 "tick": 96,
 "current_date": "2027-01-13",
 "logs": [
  {"event":"DEADLINE_ENDED","pid":142,"service":"Cursor","deadline":"2027-01-12","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"DEADLINE_COUNTDOWN","pid":148,"service":"ExpressVPN","deadline":"2027-01-16","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":141,"service":"JetBrains","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":141,"service":"JetBrains","days_overdue":38,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":141,"service":"JetBrains","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":0}
},
{
 "tick": 97,
 "current_date": "2027-01-14",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":141,"service":"JetBrains","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":148,"service":"ExpressVPN","deadline":"2027-01-16","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":148,"service":"ExpressVPN","remaining_ticks":3,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 98,
 "current_date": "2027-01-15",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":148,"service":"ExpressVPN","deadline":"2027-01-16","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":148,"service":"ExpressVPN","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 99,
 "current_date": "2027-01-16",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":148,"service":"ExpressVPN","deadline":"2027-01-16","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":148,"service":"ExpressVPN","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":148,"service":"ExpressVPN","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 100,
 "current_date": "2027-01-17",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":148,"service":"ExpressVPN","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":149,"service":"Medium","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 101,
 "current_date": "2027-01-18",
 "logs": [
  {"event":"CPU_EXECUTE","pid":149,"service":"Medium","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 102,
 "current_date": "2027-01-19",
 "logs": [
  {"event":"CPU_EXECUTE","pid":149,"service":"Medium","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":149,"service":"Medium","days_overdue":64,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":149,"service":"Medium","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":1, "Webhook":0}
},
{
 "tick": 103,
 "current_date": "2027-01-20",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":149,"service":"Medium","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":150,"service":"PlayStation Plus","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":1, "Webhook":1}
},
{
 "tick": 104,
 "current_date": "2027-01-21",
 "logs": [
  {"event":"CPU_EXECUTE","pid":150,"service":"PlayStation Plus","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":150,"service":"PlayStation Plus","days_overdue":49,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":150,"service":"PlayStation Plus","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":2, "Email":1, "Webhook":1}
},
{
 "tick": 105,
 "current_date": "2027-01-22",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":150,"service":"PlayStation Plus","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":128,"service":"Coursera Plus","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":0}
},
{
 "tick": 106,
 "current_date": "2027-01-23",
 "logs": [
  {"event":"CPU_EXECUTE","pid":128,"service":"Coursera Plus","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":128,"service":"Coursera Plus","days_overdue":42,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":128,"service":"Coursera Plus","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":0}
},
{
 "tick": 107,
 "current_date": "2027-01-24",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":128,"service":"Coursera Plus","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":131,"service":"Kindle Unlimited","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":1}
},
{
 "tick": 108,
 "current_date": "2027-01-25",
 "logs": [
  {"event":"CPU_EXECUTE","pid":131,"service":"Kindle Unlimited","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":1}
},
{
 "tick": 109,
 "current_date": "2027-01-26",
 "logs": [
  {"event":"CPU_EXECUTE","pid":131,"service":"Kindle Unlimited","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":131,"service":"Kindle Unlimited","days_overdue":27,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":131,"service":"Kindle Unlimited","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":1}
},
{
 "tick": 110,
 "current_date": "2027-01-27",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":131,"service":"Kindle Unlimited","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":112,"service":"Audible","remaining_ticks":2,"flagged":"false"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 111,
 "current_date": "2027-01-28",
 "logs": [
  {"event":"CPU_EXECUTE","pid":112,"service":"Audible","remaining_ticks":1,"flagged":"false"},
  {"event":"TASK_COMPLETED","pid":112,"service":"Audible","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":0, "Webhook":0}
},
{
 "tick": 112,
 "current_date": "2027-01-29",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":112,"service":"Audible","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":134,"service":"Disney+","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":1}
},
{
 "tick": 113,
 "current_date": "2027-01-30",
 "logs": [
  {"event":"CPU_EXECUTE","pid":134,"service":"Disney+","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":134,"service":"Disney+","days_overdue":45,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":134,"service":"Disney+","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":1}
},
{
 "tick": 114,
 "current_date": "2027-01-31",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":134,"service":"Disney+","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":147,"service":"Midjourney","deadline":"2027-02-03","days_remaining":3},
  {"event":"CPU_EXECUTE","pid":135,"service":"1Password","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":135,"service":"1Password","days_overdue":103,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":135,"service":"1Password","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":0, "Email":2, "Webhook":0}
},
{
 "tick": 115,
 "current_date": "2027-02-01",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":135,"service":"1Password","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"DEADLINE_COUNTDOWN","pid":147,"service":"Midjourney","deadline":"2027-02-03","days_remaining":2},
  {"event":"CPU_EXECUTE","pid":143,"service":"NordVPN","remaining_ticks":4,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":1}
},
{
 "tick": 116,
 "current_date": "2027-02-02",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":147,"service":"Midjourney","deadline":"2027-02-03","days_remaining":1},
  {"event":"CPU_EXECUTE","pid":143,"service":"NordVPN","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":1}
},
{
 "tick": 117,
 "current_date": "2027-02-03",
 "logs": [
  {"event":"DEADLINE_COUNTDOWN","pid":147,"service":"Midjourney","deadline":"2027-02-03","days_remaining":0},
  {"event":"CPU_EXECUTE","pid":143,"service":"NordVPN","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":1}
},
{
 "tick": 118,
 "current_date": "2027-02-04",
 "logs": [
  {"event":"DEADLINE_ENDED","pid":147,"service":"Midjourney","deadline":"2027-02-03","days_overdue":1,"msg":"Deadline ended! Task flagged as EXCEEDED"},
  {"event":"CPU_EXECUTE","pid":143,"service":"NordVPN","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":143,"service":"NordVPN","days_overdue":74,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":143,"service":"NordVPN","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":2, "Webhook":1}
},
{
 "tick": 119,
 "current_date": "2027-02-05",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":143,"service":"NordVPN","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":142,"service":"Cursor","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":1}
},
{
 "tick": 120,
 "current_date": "2027-02-06",
 "logs": [
  {"event":"CPU_EXECUTE","pid":142,"service":"Cursor","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":1}
},
{
 "tick": 121,
 "current_date": "2027-02-07",
 "logs": [
  {"event":"CPU_EXECUTE","pid":142,"service":"Cursor","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":142,"service":"Cursor","days_overdue":26,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":142,"service":"Cursor","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":1}
},
{
 "tick": 122,
 "current_date": "2027-02-08",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":142,"service":"Cursor","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":144,"service":"Netflix","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":144,"service":"Netflix","days_overdue":123,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":144,"service":"Netflix","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":3, "Webhook":0}
},
{
 "tick": 123,
 "current_date": "2027-02-09",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":144,"service":"Netflix","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":146,"service":"Nintendo Switch Online","remaining_ticks":4,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":3}
},
{
 "tick": 124,
 "current_date": "2027-02-10",
 "logs": [
  {"event":"CPU_EXECUTE","pid":146,"service":"Nintendo Switch Online","remaining_ticks":3,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":3}
},
{
 "tick": 125,
 "current_date": "2027-02-11",
 "logs": [
  {"event":"CPU_EXECUTE","pid":146,"service":"Nintendo Switch Online","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":3}
},
{
 "tick": 126,
 "current_date": "2027-02-12",
 "logs": [
  {"event":"CPU_EXECUTE","pid":146,"service":"Nintendo Switch Online","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":146,"service":"Nintendo Switch Online","days_overdue":87,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":146,"service":"Nintendo Switch Online","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":0, "Webhook":3}
},
{
 "tick": 127,
 "current_date": "2027-02-13",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":146,"service":"Nintendo Switch Online","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"CPU_EXECUTE","pid":147,"service":"Midjourney","remaining_ticks":2,"flagged":"true"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":2}
},
{
 "tick": 128,
 "current_date": "2027-02-14",
 "logs": [
  {"event":"CPU_EXECUTE","pid":147,"service":"Midjourney","remaining_ticks":1,"flagged":"true"},
  {"event":"DEADLINE_BREACH","pid":147,"service":"Midjourney","days_overdue":11,"msg":"Completed after its deadline"},
  {"event":"TASK_COMPLETED","pid":147,"service":"Midjourney","msg":"Notification dispatched and processed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":1, "Email":1, "Webhook":2}
},
{
 "tick": 129,
 "current_date": "2027-02-15",
 "logs": [
  {"event":"ZOMBIE_REAPED","pid":147,"service":"Midjourney","msg":"Delivery ACK received, locks released, PCB freed"},
  {"event":"TICK_END"}
 ],
 "workers": {"SMS":4, "Email":4, "Webhook":3}
}
]
;
window.SUBSCRIPTIONS = [
  {"pid": 101, "user_id": 1001, "service": "AWS", "plan": "Developer Support", "price": "$29.00/mo", "alert": "Renewal reminder", "burst_time": 3, "arrival": 1, "tier": 1, "deadline": "2026-10-12", "max_need": [1, 1, 0]},
  {"pid": 102, "user_id": 1002, "service": "Duolingo", "plan": "Super", "price": "$12.99/mo", "alert": "Renewal reminder", "burst_time": 3, "arrival": 1, "tier": 1, "deadline": "2027-02-06", "max_need": [3, 1, 0]},
  {"pid": 103, "user_id": 1003, "service": "iCloud+", "plan": "200 GB", "price": "$2.99/mo", "alert": "Payment failed", "burst_time": 1, "arrival": 2, "tier": 0, "deadline": "2026-10-11", "max_need": [2, 2, 3]},
  {"pid": 104, "user_id": 1004, "service": "GitHub Copilot", "plan": "Pro", "price": "$10.00/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 2, "tier": 1, "deadline": "2026-10-04", "max_need": [4, 3, 2]},
  {"pid": 105, "user_id": 1005, "service": "Replit", "plan": "Core", "price": "$20.00/mo", "alert": "Usage report", "burst_time": 4, "arrival": 2, "tier": 2, "deadline": "2026-12-12", "max_need": [4, 0, 1]},
  {"pid": 106, "user_id": 1006, "service": "YouTube Premium", "plan": "Individual", "price": "$13.99/mo", "alert": "Renewal reminder", "burst_time": 3, "arrival": 2, "tier": 1, "deadline": "2027-02-07", "max_need": [2, 0, 0]},
  {"pid": 107, "user_id": 1007, "service": "LinkedIn Premium", "plan": "Career", "price": "$29.99/mo", "alert": "Renewal reminder", "burst_time": 3, "arrival": 3, "tier": 1, "deadline": "2026-12-17", "max_need": [4, 2, 0]},
  {"pid": 108, "user_id": 1008, "service": "Notion", "plan": "Plus", "price": "$10.00/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 3, "tier": 1, "deadline": "2027-01-20", "max_need": [1, 2, 1]},
  {"pid": 109, "user_id": 1001, "service": "Figma", "plan": "Professional", "price": "$15.00/mo", "alert": "Renewal reminder", "burst_time": 3, "arrival": 3, "tier": 1, "deadline": "2026-12-09", "max_need": [2, 4, 1]},
  {"pid": 110, "user_id": 1002, "service": "Google One", "plan": "2 TB", "price": "$9.99/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 4, "tier": 1, "deadline": "2026-12-30", "max_need": [3, 0, 1]},
  {"pid": 111, "user_id": 1003, "service": "Google Gemini", "plan": "Google AI Pro", "price": "$19.99/mo", "alert": "Payment failed", "burst_time": 2, "arrival": 5, "tier": 0, "deadline": "2026-10-17", "max_need": [2, 3, 2]},
  {"pid": 112, "user_id": 1004, "service": "Audible", "plan": "Plus", "price": "$14.95/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 5, "tier": 1, "deadline": "2027-02-04", "max_need": [1, 4, 3]},
  {"pid": 113, "user_id": 1005, "service": "Tidal", "plan": "HiFi", "price": "$10.99/mo", "alert": "Price change notice", "burst_time": 4, "arrival": 5, "tier": 2, "deadline": "2027-02-11", "max_need": [2, 2, 3]},
  {"pid": 114, "user_id": 1006, "service": "Amazon Prime", "plan": "Annual", "price": "$139.00/yr", "alert": "Renewal reminder", "burst_time": 2, "arrival": 5, "tier": 1, "deadline": "2027-02-04", "max_need": [2, 3, 1]},
  {"pid": 115, "user_id": 1007, "service": "Evernote", "plan": "Personal", "price": "$14.99/mo", "alert": "Monthly usage summary", "burst_time": 4, "arrival": 5, "tier": 2, "deadline": "2026-12-22", "max_need": [3, 3, 0]},
  {"pid": 116, "user_id": 1008, "service": "Vercel", "plan": "Pro", "price": "$20.00/mo", "alert": "Renewal reminder", "burst_time": 3, "arrival": 5, "tier": 1, "deadline": "2027-01-29", "max_need": [3, 4, 0]},
  {"pid": 117, "user_id": 1001, "service": "Dropbox", "plan": "Plus", "price": "$11.99/mo", "alert": "Security alert: new login", "burst_time": 1, "arrival": 6, "tier": 0, "deadline": "2026-10-12", "max_need": [4, 2, 2]},
  {"pid": 118, "user_id": 1002, "service": "Peacock", "plan": "Premium", "price": "$7.99/mo", "alert": "Price change notice", "burst_time": 4, "arrival": 6, "tier": 2, "deadline": "2027-02-23", "max_need": [1, 1, 1]},
  {"pid": 119, "user_id": 1003, "service": "ChatGPT", "plan": "Plus", "price": "$20.00/mo", "alert": "Card declined", "burst_time": 2, "arrival": 6, "tier": 0, "deadline": "2026-10-09", "max_need": [1, 1, 2]},
  {"pid": 120, "user_id": 1004, "service": "Postman", "plan": "Basic", "price": "$14.00/mo", "alert": "Usage report", "burst_time": 4, "arrival": 7, "tier": 2, "deadline": "2027-01-25", "max_need": [2, 1, 3]},
  {"pid": 121, "user_id": 1005, "service": "Adobe Creative Cloud", "plan": "All Apps", "price": "$59.99/mo", "alert": "Payment failed", "burst_time": 2, "arrival": 7, "tier": 0, "deadline": "2026-10-11", "max_need": [1, 4, 1]},
  {"pid": 122, "user_id": 1006, "service": "Canva", "plan": "Pro", "price": "$15.00/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 7, "tier": 1, "deadline": "2027-01-12", "max_need": [1, 3, 1]},
  {"pid": 123, "user_id": 1007, "service": "Hulu", "plan": "With Ads", "price": "$9.99/mo", "alert": "Monthly usage summary", "burst_time": 3, "arrival": 7, "tier": 2, "deadline": "2027-02-22", "max_need": [4, 0, 3]},
  {"pid": 124, "user_id": 1008, "service": "Claude", "plan": "Pro", "price": "$20.00/mo", "alert": "Payment failed", "burst_time": 1, "arrival": 7, "tier": 0, "deadline": "2026-10-10", "max_need": [4, 1, 1]},
  {"pid": 125, "user_id": 1001, "service": "Spotify", "plan": "Premium Individual", "price": "$11.99/mo", "alert": "Card declined", "burst_time": 2, "arrival": 8, "tier": 0, "deadline": "2026-10-12", "max_need": [4, 2, 2]},
  {"pid": 126, "user_id": 1002, "service": "Perplexity", "plan": "Pro", "price": "$20.00/mo", "alert": "Renewal reminder", "burst_time": 3, "arrival": 8, "tier": 1, "deadline": "2026-10-02", "max_need": [4, 2, 1]},
  {"pid": 127, "user_id": 1003, "service": "HBO Max", "plan": "Standard", "price": "$16.99/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 9, "tier": 1, "deadline": "2027-01-09", "max_need": [2, 3, 2]},
  {"pid": 128, "user_id": 1004, "service": "Coursera Plus", "plan": "Annual", "price": "$399.00/yr", "alert": "Renewal reminder", "burst_time": 2, "arrival": 9, "tier": 1, "deadline": "2026-12-12", "max_need": [3, 2, 1]},
  {"pid": 129, "user_id": 1005, "service": "Grammarly", "plan": "Premium", "price": "$12.00/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 9, "tier": 1, "deadline": "2026-11-18", "max_need": [1, 0, 1]},
  {"pid": 130, "user_id": 1006, "service": "Xbox Game Pass", "plan": "Ultimate", "price": "$19.99/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 9, "tier": 1, "deadline": "2027-02-03", "max_need": [4, 0, 0]},
  {"pid": 131, "user_id": 1007, "service": "Kindle Unlimited", "plan": "Standard", "price": "$11.99/mo", "alert": "Monthly usage summary", "burst_time": 3, "arrival": 10, "tier": 2, "deadline": "2026-12-30", "max_need": [4, 2, 2]},
  {"pid": 132, "user_id": 1008, "service": "Strava", "plan": "Premium", "price": "$11.99/mo", "alert": "Weekly activity digest", "burst_time": 4, "arrival": 10, "tier": 2, "deadline": "2026-10-30", "max_need": [2, 3, 0]},
  {"pid": 133, "user_id": 1001, "service": "Todoist", "plan": "Pro", "price": "$4.00/mo", "alert": "Weekly productivity digest", "burst_time": 3, "arrival": 10, "tier": 2, "deadline": "2026-12-03", "max_need": [1, 2, 1]},
  {"pid": 134, "user_id": 1002, "service": "Disney+", "plan": "Premium", "price": "$15.99/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 11, "tier": 1, "deadline": "2026-12-16", "max_need": [3, 2, 0]},
  {"pid": 135, "user_id": 1003, "service": "1Password", "plan": "Families", "price": "$4.99/mo", "alert": "Security alert: new device", "burst_time": 1, "arrival": 11, "tier": 0, "deadline": "2026-10-20", "max_need": [4, 2, 1]},
  {"pid": 136, "user_id": 1004, "service": "Zoom", "plan": "Workplace Pro", "price": "$15.99/mo", "alert": "Renewal reminder", "burst_time": 3, "arrival": 11, "tier": 1, "deadline": "2026-10-26", "max_need": [1, 2, 1]},
  {"pid": 137, "user_id": 1005, "service": "Heroku", "plan": "Eco Dynos", "price": "$5.00/mo", "alert": "Monthly invoice summary", "burst_time": 4, "arrival": 12, "tier": 2, "deadline": "2026-11-17", "max_need": [2, 1, 1]},
  {"pid": 138, "user_id": 1006, "service": "Paramount+", "plan": "Essential", "price": "$7.99/mo", "alert": "Trial ending digest", "burst_time": 3, "arrival": 12, "tier": 2, "deadline": "2026-12-24", "max_need": [3, 1, 0]},
  {"pid": 139, "user_id": 1007, "service": "Apple Music", "plan": "Individual", "price": "$10.99/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 12, "tier": 1, "deadline": "2027-01-31", "max_need": [1, 1, 2]},
  {"pid": 140, "user_id": 1008, "service": "Slack", "plan": "Pro", "price": "$8.75/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 12, "tier": 1, "deadline": "2027-01-13", "max_need": [2, 0, 1]},
  {"pid": 141, "user_id": 1001, "service": "JetBrains", "plan": "All Products Pack", "price": "$28.90/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 12, "tier": 1, "deadline": "2026-12-06", "max_need": [2, 2, 2]},
  {"pid": 142, "user_id": 1002, "service": "Cursor", "plan": "Pro", "price": "$20.00/mo", "alert": "Renewal reminder", "burst_time": 3, "arrival": 12, "tier": 1, "deadline": "2027-01-12", "max_need": [3, 4, 2]},
  {"pid": 143, "user_id": 1003, "service": "NordVPN", "plan": "Plus", "price": "$5.99/mo", "alert": "Trial ending digest", "burst_time": 4, "arrival": 13, "tier": 2, "deadline": "2026-11-22", "max_need": [3, 2, 2]},
  {"pid": 144, "user_id": 1004, "service": "Netflix", "plan": "Premium", "price": "$17.99/mo", "alert": "Payment failed", "burst_time": 1, "arrival": 13, "tier": 0, "deadline": "2026-10-08", "max_need": [3, 1, 3]},
  {"pid": 145, "user_id": 1005, "service": "Microsoft 365", "plan": "Family", "price": "$9.99/mo", "alert": "Billing failure", "burst_time": 2, "arrival": 13, "tier": 0, "deadline": "2026-10-11", "max_need": [3, 3, 3]},
  {"pid": 146, "user_id": 1006, "service": "Nintendo Switch Online", "plan": "Individual", "price": "$3.99/mo", "alert": "Annual savings summary", "burst_time": 4, "arrival": 13, "tier": 2, "deadline": "2026-11-17", "max_need": [3, 4, 0]},
  {"pid": 147, "user_id": 1007, "service": "Midjourney", "plan": "Standard", "price": "$30.00/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 14, "tier": 1, "deadline": "2027-02-03", "max_need": [3, 3, 1]},
  {"pid": 148, "user_id": 1008, "service": "ExpressVPN", "plan": "Advanced", "price": "$9.99/mo", "alert": "Weekly security digest", "burst_time": 3, "arrival": 14, "tier": 2, "deadline": "2027-01-16", "max_need": [2, 3, 2]},
  {"pid": 149, "user_id": 1001, "service": "Medium", "plan": "Membership", "price": "$5.00/mo", "alert": "Weekly reading digest", "burst_time": 3, "arrival": 14, "tier": 2, "deadline": "2026-11-16", "max_need": [2, 3, 2]},
  {"pid": 150, "user_id": 1002, "service": "PlayStation Plus", "plan": "Essential", "price": "$9.99/mo", "alert": "Renewal reminder", "burst_time": 2, "arrival": 14, "tier": 1, "deadline": "2026-12-03", "max_need": [2, 3, 1]}
]
;
