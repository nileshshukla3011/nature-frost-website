"use client";

import { useState } from "react";
import { categories, products, type ProductCategory } from "@/lib/products";
import { Block } from "@/components/ui/Block";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

/**
 * Filterable product catalogue.
 *
 * All products stay mounted in the DOM regardless of filter (hidden with CSS)
 * so that deep links like /products/#pineapple still resolve even when a
 * different category tab is active.
 */
export function ProductGrid() {
  const [active, setActive] = useState<"all" | ProductCategory>("all");

  const counts = {
    all: products.length,
    vegetables: products.filter((p) => p.category === "vegetables").length,
    fruits: products.filter((p) => p.category === "fruits").length,
  };

  return (
    <div>
      <div
        className="flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Filter products by category"
      >
        {categories.map((category) => {
          const selected = active === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(category.id)}
              className={cn(
                "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                selected
                  ? "border-primary bg-primary text-primary-foreground shadow-soft"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
              )}
            >
              {category.label}
              <span
                className={cn(
                  "ml-2 text-xs",
                  selected
                    ? "text-primary-foreground"
                    : "text-faint-foreground",
                )}
              >
                {counts[category.id]}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => {
          const visible = active === "all" || product.category === active;
          return (
            <div key={product.slug} className={cn(!visible && "hidden")}>
              <Block className="h-full">
                <ProductCard product={product} />
              </Block>
            </div>
          );
        })}
      </div>
    </div>
  );
}
