import { createFileRoute, Link } from "@tanstack/react-router";
import { BellRing, CalendarX2, Radar, ArrowRight } from "lucide-react";

import { FadeIn } from "@/components/FadeIn";
import { FeatureCard } from "@/components/FeatureCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-routes.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flight Price Notifier 機票降價通知 — Fare-drop email alerts from Taipei" },
      {
        name: "description",
        content: "設定航線與目標價，機票降價就通知你。Set a route and a target price — we email you when the fare drops.",
      },
      { property: "og:title", content: "Flight Price Notifier 機票降價通知" },
      {
        property: "og:description",
        content: "Set a route and a target price — we email you when the fare from Taipei drops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: Radar,
    title: "盯緊熱門航線",
    subtitle: "Always-on route watching",
    body: "持續監控台北出發的熱門航線（東京、首爾），自動抓最低票價。",
  },
  {
    icon: BellRing,
    title: "達標自動通知",
    subtitle: "Target-price email alerts",
    body: "低於你設定的目標價，就寄 email 提醒你，附上立即訂購連結。",
  },
  {
    icon: CalendarX2,
    title: "隨時取消",
    subtitle: "Cancel anytime",
    body: "月訂閱制，不想用隨時停，沒有綁約。",
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-16">
          <img
            src={heroImage}
            alt="Glowing flight routes from Taipei to Tokyo and Seoul at night"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-hero-fade" />
          <div className="absolute inset-0 bg-bottom-fade" />

          <div className="relative mx-auto w-full max-w-6xl px-5 py-20">
            <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-accent/60 px-3 py-1 text-xs font-medium text-primary-glow backdrop-blur">
                <span className="size-1.5 rounded-full bg-primary-glow" />
                台北出發 · TPE → NRT / ICN
              </p>
              <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-gradient sm:text-6xl lg:text-7xl">
                Flight Price Notifier
              </h1>
              <p className="mt-6 text-2xl font-semibold leading-snug sm:text-3xl">
                設定航線與目標價，機票降價就通知你
              </p>
              <p className="mt-3 text-lg text-muted-foreground">
                Set a route and a target price — we email you when the fare drops.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/signup">
                    免費開始 / Get started
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="glass" size="xl">
                  <a href="#features">了解功能 / Learn more</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
          <FadeIn className="max-w-2xl">
            <p className="text-sm font-medium text-primary-glow">為預算旅人設計 · Built for budget travelers</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              不在乎哪天飛，只在乎票價在預算內
            </h2>
            <p className="mt-3 text-muted-foreground">
              Don't care exactly when you fly? We watch the fares so you don't have to.
            </p>
          </FadeIn>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {features.map((feature, i) => (
              <FadeIn key={feature.subtitle} delay={i * 120}>
                <FeatureCard {...feature} />
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
