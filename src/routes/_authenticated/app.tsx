import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut, Radar } from "lucide-react";

import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { usePageMeta, type MetaTag } from "@/lib/page-meta";

import { useAuthenticatedUser } from "./route";

const pageMeta: MetaTag[] = [
  { title: "Dashboard — Flight Price Notifier" },
  { name: "description", content: "Your Flight Price Notifier dashboard." },
  { property: "og:title", content: "Dashboard — Flight Price Notifier" },
  { property: "og:description", content: "Your flight price alert dashboard." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary" },
  { name: "robots", content: "noindex" },
];

export function AppDashboard() {
  usePageMeta(pageMeta);
  const user = useAuthenticatedUser();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleSignOut() {
    await queryClient.cancelQueries();
    queryClient.clear();
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="glass sticky top-0 z-50 border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <BrandMark />
          <Button variant="glass" size="sm" onClick={handleSignOut}>
            <LogOut />
            Sign out / 登出
          </Button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-14">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-sm font-medium text-primary-glow">儀表板 / Dashboard</p>
          <h1 className="mt-2 break-all text-3xl font-semibold tracking-tight sm:text-4xl">Hi {user.email}</h1>
        </div>

        <section className="mt-10 animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-dashed border-primary/30 bg-gradient-card p-8 shadow-card delay-150 duration-700 fill-mode-both sm:p-12">
          <span className="grid size-12 place-items-center rounded-xl bg-accent text-primary-glow ring-1 ring-primary/30">
            <Radar className="size-6" />
          </span>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            你的航線追蹤儀表板即將上線 — 下一個里程碑會加上訂閱航線的功能。
          </p>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Your dashboard is coming soon. Route-subscription will be added in the next milestone.
          </p>
        </section>
      </main>
    </div>
  );
}
