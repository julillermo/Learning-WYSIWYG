# Repository Guidelines

## Agent Instructions

- Treat AGENTS.md as a "living documentation" that agents are encouraged to modify when those edits help them proceed, unblock work, or clarify procedural gaps.
- Agents are also encouraged to modify (and generate if non-existing) respective AGENTS.md file the the workspace applications in `./apps/*` when helpful.
- The goal is to enable safe, traceable, and minimal self-service changes that reduce repetitive human intervention.

## Project Structure & Module Organization

- This repo is intentionally lean: the root currently hosts `README.md` and `LICENSE`. Treat the root as the landing page for any high-level documentation or config.
- Add source code under new directories (e.g., `src/`, `packages/`) when experimenting with new WYSIWYG editors; keep any assets or demos inside `assets/` or `examples/` to avoid cluttering the root.
- Keep editor-specific experiments self-contained: put supporting data, markup, or styles next to the experiment (e.g., `src/editor-demo/README.md`).

## Build, Test, and Development Commands

- There are no automated build or test scripts yet; run editors manually by opening the relevant HTML/JS files in a browser or using a static server if needed (e.g., `npx http-server src/editor-demo`).
- Use `git status` and `git diff` frequently to verify that experimental tweaks are scoped to the intended files.

## Coding Style & Naming Conventions

- Keep indentation consistent with two spaces for Markdown and JS/HTML fragments. Use lowercase, hyphen-separated filenames for pages or demo folders (e.g., `toolbar-demo.html`).
- Favor descriptive README sections; keep prose short and focused on intent.

## Testing Guidelines

- Testing is manual: preview editor behavior in a browser and document any limitations directly in the associated README.
- When adding automation later, name scripts with the `test:` prefix (e.g., `npm run test:smoke`) so it’s clear they’re not build tasks.

## Commit & Pull Request Guidelines

- Follow the existing log style: one-line, imperative summary (for example, `Add AGENTS guide`). If you need extra detail, add a body that explains why, not just what.
- Pull requests should include a brief description, list of changed files or demos, and manual verification steps. Link any related issue or discussion, and attach screenshots if the changes impact visual output.

## Additional Tips

- Document every experiment: each folder should include a short README describing what was tried and what worked or failed.
- If you modify dependencies, explain the rationale and how to roll back.
