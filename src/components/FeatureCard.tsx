import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  subtitle,
  body,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  body: string;
}) {
  return (
    <article className="group h-full rounded-2xl border border-border bg-gradient-card p-7 shadow-card transition-colors hover:border-primary/40">
      <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary-glow ring-1 ring-primary/30 transition-transform group-hover:scale-105">
        <Icon className="size-5" />
      </span>
      <h3 className="mt-6 text-xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-1 text-sm font-medium text-primary-glow">{subtitle}</p>
      <p className="mt-4 leading-relaxed text-muted-foreground">{body}</p>
    </article>
  );
}
