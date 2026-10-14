import { Anchor, Cable, Disc3, Droplets, FlaskConical, Fish, Package, Target, Tent, Weight, Wheat, type LucideIcon } from "lucide-react";
import { CATEGORY_ICON, type Product } from "@/lib/shop";

const ICONS: Record<string, LucideIcon> = { Anchor, Cable, Disc3, Droplets, FlaskConical, Fish, Package, Target, Tent, Weight, Wheat };

/** Fotka produktu, nebo značková dlaždice, dokud fotka chybí. */
export function ProductImage({ p, className = "", compact = false }: { p: Product; className?: string; compact?: boolean }) {
  if (p.image) {
    return <img src={p.image} alt={p.name} loading="lazy" width={816} height={816} className={`object-cover ${className}`} />;
  }
  const Icon = ICONS[CATEGORY_ICON[p.category] ?? "Package"] ?? Package;
  return (
    <div role="img" aria-label={p.name} className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-brand-soft to-brand-surface text-brand-muted ${className}`}>
      <Icon className={compact ? "size-6" : "size-14 sm:size-16"} strokeWidth={1.25} />
      {!compact && <span className="text-xs font-semibold uppercase tracking-[0.18em]">{p.brand}</span>}
    </div>
  );
}
