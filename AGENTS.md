## Style
* don't use semicolons
* prefer a functional style
* write modern js: ES2025+, es modules, fetch async/await

## Tools
* use oxfmt for formatting, oxlint for linting
* use vitest for testing
* use vite for assembly

## Tests
* Only feature tests (mock backend response backend is in path ~/code/bar-путь-до-твоего-бекенда)
* unit tests forbidden

## Boundaries
index.js job is only do orchestration and should not contain business logic, it talks to single responsibility es modules, which is public contexts, which define public api
