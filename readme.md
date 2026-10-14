# Templebar Admin
## Development
Install Nix. Optionally install direnv and run:

```bash
direnv allow
```

Otherwise enter the development environment manually:

```bash
nix develop
```

Install JavaScript dependencies and start the Vite development server:

```bash
npm ci
npm run dev
```

Open a route in the browser:

```text
http://localhost:5173/sign-in
http://localhost:5173/events
http://localhost:5173/events/new
http://localhost:5173/events/42
http://localhost:5173/admins
http://localhost:5173/admins/new
```

## Checks
Run browser feature tests:

```bash
nix develop --command npm test
```

Format source files:

```bash
nix develop --command npm run format
```

Check formatting:

```bash
nix develop --command npm run format:check
```

Run the linter:

```bash
nix develop --command npm run lint
```

Build static production files into `dist/`:

```bash
nix develop --command npm run build
```

Chromium for browser tests comes from the Nix development shell. Playwright does not download a browser.
