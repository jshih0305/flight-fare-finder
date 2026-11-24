import { Link } from "react-router";
import { Plane } from "lucide-react";

export function BrandMark() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:-rotate-6">
        <Plane className="size-4" />
      </span>
      <span className="text-sm font-semibold tracking-tight sm:text-base">Flight Price Notifier</span>
    </Link>
  );
}
