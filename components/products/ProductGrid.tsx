"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { categories, products, type ProductCategory } from "@/lib/products";
import { Block } from "@/components/ui/Block";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

const productCounts = {
  all: products.length,
  vegetables: products.filter((product) => product.category === "vegetables")
    .length,
  fruits: products.filter((product) => product.category === "fruits").length,
};

/**
 * Filterable product catalogue.
 *
 * All products stay mounted in the DOM regardless of filter (hidden with CSS)
 * so that deep links like /products/#pineapple still resolve even when a
 * different category tab is active.
 */
export function ProductGrid() {
  const [active, setActive] = useState<"all" | ProductCategory>("all");
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const matchesQuery = (product: (typeof products)[number]) => {
    if (!normalizedQuery) return true;
    return [product.name, product.description, ...product.formats]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);
  };

  const visibleCount = products.filter(
    (product) =>
      (active === "all" || product.category === active) &&
      matchesQuery(product),
  ).length;

  return (
    <div>
      <div
        className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-5"
      >
        <label className="relative block sm:w-72 sm:shrink-0">
          <span className="sr-only">Search products</span>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search products or formats"
            className="h-12 w-full rounded-full border border-border bg-background pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          />
        </label>

        <div
          className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:justify-end"
          role="group"
          aria-label="Filter products by category"
        >
          {categories.map((category) => {
            const selected = active === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(category.id)}
                className={cn(
                  "min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-primary-soft",
                )}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-80">
                  {productCounts[category.id]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p
        className="mt-5 text-sm font-medium text-muted-foreground"
        aria-live="polite"
      >
        {visibleCount === 0
          ? "No products match your search. Try another name or format."
          : `Showing ${visibleCount} of ${products.length} products`}
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => {
          const visible =
            (active === "all" || product.category === active) &&
            matchesQuery(product);
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
