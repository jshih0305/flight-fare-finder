import { matchRoutes } from "react-router";
import { describe, expect, it } from "vitest";

import { routes } from "@/router";

// Match routes without running loaders or rendering: loaders may need network the test run lacks.
function leafPath(pathname: string) {
  const matches = matchRoutes(routes, pathname) ?? [];
  const leaf = matches.at(-1)?.route;
  return leaf?.index ? "(index)" : leaf?.path;
}

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    expect(leafPath("/")).toBe("(index)");
  });

  it.each([
    ["/auth", "auth"],
    ["/signup", "signup"],
    ["/app", "app"],
    ["/sign-in", "sign-in"],
    ["/sign-up", "sign-up"],
  ])("matches %s", (pathname, expected) => {
    expect(leafPath(pathname)).toBe(expected);
  });

  it("puts /app behind the auth gate", () => {
    const matches = matchRoutes(routes, "/app") ?? [];
    expect(matches.some((m) => m.route.id === "authenticated")).toBe(true);
  });

  it("falls back to not found for unknown paths", () => {
    expect(leafPath("/nope")).toBe("*");
  });
});
