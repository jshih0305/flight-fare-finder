# Pixel Perfect Match

Implement exactly the screenshot and nothing else

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9e8b7568-b845-4b01-b77c-3a580028690b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Stack

Plain **Vite + React** single-page app with **React Router** for client-side routing
(`/`, `/auth` (sign in), `/signup`, `/app`). Auth is Supabase, entirely in the browser.
There is no SSR and no server runtime.

| Command          | What it does                          |
| ---------------- | ------------------------------------- |
| `bun run dev`    | Local dev server                      |
| `bun run build`  | Static build to `dist/`               |
| `bun run preview`| Serve `dist/` locally (SPA fallback)  |
| `bun run test`   | Route-matching tests (Vitest)         |

## Deploying to Vercel

1. Import the repo in Vercel. `vercel.json` already sets the Vite framework preset,
   `dist` as the output directory, and a rewrite of all non-file paths to `index.html`
   so deep links like `/app` load the SPA.
2. Add these environment variables (Production + Preview) — they are inlined at build time:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
3. In Supabase → Authentication → URL Configuration, add your Vercel domain to the
   Site URL / Redirect URLs so sign-up confirmation emails link back correctly.
