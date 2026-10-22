import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/Card";
import { asset, cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

export const tintClass = {
  green: "tile-green",
  amber: "tile-amber",
  violet: "tile-violet",
  rose: "tile-rose",
} as const;

/**
 * A single product tile. The name links to the product's own page, and the
 * whole card is clickable through it.
 *
 * The visual is the product photo when there is one, otherwise an emoji on a
 * soft tinted panel, so the catalogue looks finished either way. The "Enquire" link
 * carries the product slug to the contact page, which pre-selects it in the
 * form — so every lead arrives already saying which product it is about.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article
      id={product.slug}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/45 hover:shadow-lift"
    >
      <div
        className={cn(
          "relative flex aspect-[4/3] items-center justify-center overflow-hidden",
          tintClass[product.tint],
        )}
      >
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(product.image)}
            alt={`Frozen ${product.name}`}
            loading="lazy"
            className="zoom-on-hover absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <span
            className="text-6xl leading-none transition-transform duration-500 group-hover:scale-110 sm:text-7xl"
            role="img"
            aria-label={product.name}
          >
            {product.emoji}
          </span>
        )}
        <div className="absolute left-3 top-3">
          <Badge tone={product.category === "fruits" ? "accent" : "primary"}>
            {product.category === "fruits" ? "Fruit" : "Vegetable"}
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-foreground">
          {/* Stretched link: its ::after covers the card, so a click anywhere
              opens the product page. The Enquire link sits above it. */}
          <Link
            href={`/products/${product.slug}`}
            className="rounded-sm transition-colors after:absolute after:inset-0 after:content-[''] hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            {product.name}
          </Link>
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
            className="relative z-10 inline-flex min-h-10 items-center gap-1 rounded-full px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Enquire
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
