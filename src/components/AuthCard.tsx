import type { ReactNode } from "react";

import { BrandMark } from "@/components/BrandMark";
import heroImage from "@/assets/hero-routes.jpg";

export function AuthCard({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <img
        src={heroImage}
        alt=""
        width={1920}
        height={1088}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="pointer-events-none absolute inset-0 bg-bottom-fade" />
      <header className="relative z-10 mx-auto flex h-16 w-full max-w-6xl items-center px-5">
        <BrandMark />
      </header>
      <main className="relative z-10 flex flex-1 items-center justify-center px-5 py-10">
        <div className="w-full max-w-md animate-in fade-in slide-in-from-bottom-4 rounded-2xl border border-border bg-card/80 p-8 shadow-card backdrop-blur-xl duration-700">
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-7">{children}</div>
          <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>
        </div>
      </main>
    </div>
  );
}
