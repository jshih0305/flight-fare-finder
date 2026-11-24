import { Link } from "react-router";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { useSession } from "@/hooks/useSession";

export function SiteHeader() {
  const { session, ready } = useSession();

  return (
    <header className="glass fixed inset-x-0 top-0 z-50 border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <BrandMark />
        {ready && session ? (
          <Button asChild variant="glass" size="sm">
            <Link to="/app">我的儀表板 / Dashboard</Link>
          </Button>
        ) : (
          <Button asChild variant="hero" size="sm">
            <Link to="/auth">Sign in / 登入</Link>
          </Button>
        )}
      </div>
    </header>
  );
}
