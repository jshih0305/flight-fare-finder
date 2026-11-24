import { Outlet, redirect, useRouteLoaderData } from "react-router";
import type { User } from "@supabase/supabase-js";

import { supabase } from "@/integrations/supabase/client";

export const AUTHENTICATED_ROUTE_ID = "authenticated";

// Client-only gate: the session lives in browser storage. Runs before any child route renders.
export async function authenticatedLoader(): Promise<{ user: User }> {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data.user) {
    throw redirect("/auth");
  }
  return { user: data.user };
}

export function AuthenticatedLayout() {
  return <Outlet />;
}

/** The signed-in user, available to any route nested under the authenticated layout. */
export function useAuthenticatedUser(): User {
  const data = useRouteLoaderData(AUTHENTICATED_ROUTE_ID) as { user: User } | undefined;
  if (!data) throw new Error("useAuthenticatedUser must be used inside the authenticated layout");
  return data.user;
}
