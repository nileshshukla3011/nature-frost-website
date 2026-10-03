import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

const tintClass = {
  green: "tile-green",
  amber: "tile-amber",
  violet: "tile-violet",
  rose: "tile-rose",
} as const;

/**
 * A single product tile.
 *
 * The visual is an emoji on a soft tinted panel rather than a photograph, so
 * the catalogue looks finished without any image files. The "Enquire" link
 * carries the product slug to the contact page, which pre-selects it in the
 * form — so every lead arrives already saying which product it is about.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article
      id={product.slug}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift"
    >
      <div
        className={cn(
          "relative flex aspect-[4/3] items-center justify-center",
          tintClass[product.tint],
        )}
      >
        <span
          className="text-6xl leading-none sm:text-7xl"
          role="img"
          aria-label={product.name}
        >
          {product.emoji}
        </span>
        <div className="absolute left-3 top-3">
          <Badge tone={product.category === "fruits" ? "accent" : "primary"}>
            {product.category === "fruits" ? "Fruit" : "Vegetable"}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.formats.map((format) => (
            <Badge key={format} tone="neutral">
              {format}
            </Badge>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5" />
            {product.season}
          </span>
          <Link
            href={`/contact?product=${product.slug}`}
            className="inline-flex min-h-10 items-center gap-1 rounded-full px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Enquire
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
