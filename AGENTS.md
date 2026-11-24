## Backend

Supabase project `hrwlufywpaoufwykovzl` (owned by the project owner, not Lovable Cloud).
The browser client is `src/integrations/supabase/client.ts`, configured from
`VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. Never commit secret or
service-role keys.

<!-- AGENT-MEMORY:BEGIN -->
- App components in src/components use PascalCase filenames (e.g. FeatureCard.tsx); shadcn ui/ files keep their generated names — keeps components easy to find.
- Supabase is used for sign-in only (built-in auth users); no tables, RPCs, migrations or data queries — app data lives in an external AWS service.
- Signed-in pages live under src/routes/_authenticated/ (client-only gate redirecting to /auth); signed-in home is /app.
<!-- AGENT-MEMORY:END -->
