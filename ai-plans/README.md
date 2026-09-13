# Plans

Implementation plans and migration records, mostly written by Claude while working on a change.
They are versioned so the whole team can see what is in flight, what was decided, and why.

They are **not** loaded into an AI session automatically. Memory files (`.claude/rules/`) and skills
(`.claude/skills/`) are — see the routing table in `CLAUDE.md`. A plan is the long-form record; the
durable rules it produced belong in a memory file or a skill, and should link back here.

## Layout

| Folder | Holds |
| ------ | ----- |
| `backlog/` | Planned, not started |
| `active/` | In progress |
| `done/<year>/` | Finished, or abandoned with a note saying so |
| `scratch/` | **Gitignored.** Anything with pasted logs, query output or real data |

A plan moves `backlog/` → `active/` → `done/<year>/`. Use `git mv` so `git log --follow` keeps the
history across the move.

## Conventions

- **Filename**: `YYYY-MM-DD-short-slug.md`, dated when the plan was started. The date prefix is what
  sorts the archive, which is why `done/` needs no month folders.
- **Every plan includes a `**Status:**` line near the top** — folder location goes stale the moment someone
  forgets to move a file, so the status in the file is what to trust.
- **Paths are repo-relative**: `app/src/Lib/Router.php`, not `/Users/you/Sites/...`. An absolute path
  is meaningless to everyone else and leaks the local username.
- **The storefront repository is referenced as `storefront/<path within that repo>`** — it is the
  separate codebase that renders the public side of a website. Its admin half is being replaced by
  this repository.
- **Nothing sensitive.** These are committed and shared: no credentials, customer data, or pasted
  production output. That material goes in `scratch/`.
