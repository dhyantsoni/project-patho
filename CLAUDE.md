# CLAUDE.md

> Project config for AI agents. Keep it short, explicit, and current.
> Stack assumed below: **Next.js (App Router) + TypeScript + Tailwind + shadcn/ui**.
> Edit anything that doesn't match your project. Delete what you don't use.

## What this project is

<!-- One or two sentences. e.g. "Marketing site + docs for Acme. Static-first, deployed on Vercel." -->
TODO: describe the project in one line.

## Commands

- Dev server: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Test: `npm run test`
- Format: `npm run format`

Always run `lint` and `typecheck` before considering a task done.

## Tech stack (do not swap without asking)

- Framework: Next.js App Router (Server Components by default)
- Language: TypeScript, `strict` mode on
- Styling: Tailwind CSS — utility classes, **no separate custom CSS files**
- Components: shadcn/ui first; only build custom when shadcn has no equivalent
- Data: TanStack Query for client data; Server Components for server data
- Icons: lucide-react

## Code style (be strict about these)

- Use **named exports**, never default exports.
- Arrow functions for components and helpers.
- Annotate return types on exported functions. Never use `any` — use `unknown` + narrowing.
- Import order: node/std → external → internal (`@/…`) → relative.
- Prefer Server Components. Add `"use client"` only when you need state, effects, or browser APIs.
- Keep components small and single-purpose. Extract when a file passes ~150 lines.
- Co-locate: `component.tsx`, `component.test.tsx` in the same folder.

## Design rules (the site should NOT look like generic AI output)

- Commit to one deliberate aesthetic direction; do not default to safe/bland.
- Typography: use the project's chosen display + body fonts. Do NOT use Arial, Inter, or Roboto as the headline font unless told to.
- Color: one dominant color + a sharp accent, defined as CSS variables / Tailwind theme tokens. No random purple gradients.
- Spacing/hierarchy over decoration. Generous whitespace or intentional density — pick one.
- Every interactive element needs visible hover AND focus states.
- Use the `design-review` skill before declaring a UI "done", and `web-design-guidelines` for the a11y/UX pass.

## Accessibility (non-negotiable)

- Semantic HTML first (`button`, `nav`, `main`, `header`); ARIA only when semantics fall short.
- Text contrast ≥ 4.5:1 for body, 3:1 for large text.
- All interactive elements reachable and operable by keyboard.
- Images have meaningful `alt`; decorative images use `alt=""`.

## Gotchas / never do this

- Never edit generated files (`.next/`, `node_modules/`, `*.gen.ts`).
- Never commit secrets or `.env*` files.
- Validate all input on the server, even if the client already validated it.
- Don't add a dependency for something a few lines of code solves.
- Don't refactor unrelated code while fixing a bug — surgical changes only.

## Workflow expectations

- Plan before coding on anything non-trivial; state the plan first.
- Make the smallest change that fully solves the task.
- After changes: run lint + typecheck + tests, and preview the UI in a browser.
- If you make an assumption, state it out loud.
- When you don't have a skill for a task, use the `find-skills` skill to look one up before hand-rolling.

## Git commit rules (STRICT)

- **Commit after every completed feature or step** — not one giant commit at the end. Each commit should be a working, self-contained increment.
- Run lint + typecheck before each commit; don't commit broken states.
- Write clear, present-tense commit messages describing the increment (e.g. `Add responsive leadership team grid`).
- **Never co-author commits.** Do not add `Co-Authored-By` trailers, "Generated with" lines, or any AI/tool attribution to commit messages or PR bodies. Commits are authored by the repo owner only.
- Never commit secrets, `.env*`, or generated build output.

<!--
Tips for maintaining this file (from community best practice):
- Keep it under ~300 lines. Context tokens are precious.
- When the agent guesses wrong, capture the correction HERE, don't just fix it once.
- Split large rule sets into .claude/rules/*.md and @import them.
-->
