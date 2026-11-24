import { Navigate, type RouteObject } from "react-router";

import { ErrorComponent, NotFoundComponent, RootComponent } from "./routes/root";
import { Index } from "./routes/index";
import { SignInPage } from "./routes/auth";
import { SignUpPage } from "./routes/signup";
import { AppDashboard } from "./routes/_authenticated/app";
import {
  AUTHENTICATED_ROUTE_ID,
  AuthenticatedLayout,
  authenticatedLoader,
} from "./routes/_authenticated/route";

export const routes: RouteObject[] = [
  {
    id: "root",
    element: <RootComponent />,
    errorElement: <ErrorComponent />,
    // Rendered while the first navigation's loaders (the auth gate) resolve.
    hydrateFallbackElement: null,
    children: [
      { index: true, element: <Index /> },
      { path: "auth", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
      // Friendly aliases for the sign-in / sign-up pages.
      { path: "sign-in", element: <Navigate to="/auth" replace /> },
      { path: "sign-up", element: <Navigate to="/signup" replace /> },
      {
        id: AUTHENTICATED_ROUTE_ID,
        loader: authenticatedLoader,
        element: <AuthenticatedLayout />,
        children: [{ path: "app", element: <AppDashboard /> }],
      },
      { path: "*", element: <NotFoundComponent /> },
    ],
  },
];
