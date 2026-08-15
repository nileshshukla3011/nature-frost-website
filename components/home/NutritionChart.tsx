"use client";

import { useEffect, useRef, useState } from "react";
import { nutritionRetention, nutritionSource } from "@/lib/content";

/**
 * Nutrition retention: frozen at peak vs fresh held 5–7 days.
 *
 * Form is "emphasis" rather than categorical — frozen is the point of the
 * chart and carries the brand hue; fresh is context and wears a deliberate
 * de-emphasis gray. Colours come from --chart-frozen / --chart-fresh in
 * globals.css, which are validated separately for the light and dark surfaces.
 *
 * Every value is a visible text label, so no value is hidden behind a tooltip.
 * Bars animate their width in on scroll; the reduced-motion rule in globals.css
 * collapses that transition to nothing.
 */
export function NutritionChart() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-7"
    >
      <h3 className="text-lg font-semibold text-foreground">
        Nutrition retention, research-backed
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        Produce frozen immediately after harvest retains more nutrients than
        produce stored fresh for several days.
      </p>

      {/* Legend — always present for two series; identity never colour-alone. */}
      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
        <span className="flex items-center gap-2 text-xs font-medium text-foreground">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: "var(--chart-frozen)" }}
          />
          Frozen at peak
        </span>
        <span className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: "var(--chart-fresh)" }}
          />
          Fresh, stored 5–7 days
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {nutritionRetention.map((row, i) => (
          <div key={row.nutrient}>
            <p className="mb-2 text-sm font-medium text-foreground">
              {row.nutrient}
            </p>

            {/* Frozen bar */}
            <div className="flex items-center gap-3">
              <div className="h-3.5 flex-1 overflow-hidden rounded-sm bg-surface-alt">
                <div
                  className="h-full rounded-r"
                  style={{
                    backgroundColor: "var(--chart-frozen)",
                    width: shown ? `${row.frozen}%` : "0%",
                    transition: "width 900ms cubic-bezier(0.22,1,0.36,1)",
                    transitionDelay: `${i * 110}ms`,
                  }}
                />
              </div>
              <span className="w-16 shrink-0 text-right text-sm font-semibold tabular-nums text-foreground">
                {row.frozen}%
              </span>
            </div>

            {/* 2px surface gap separates the two touching bars. */}
            <div className="h-0.5" />

            {/* Fresh bar */}
            <div className="flex items-center gap-3">
              <div className="h-3.5 flex-1 overflow-hidden rounded-sm bg-surface-alt">
                <div
                  className="h-full rounded-r"
                  style={{
                    backgroundColor: "var(--chart-fresh)",
                    width: shown ? `${row.fresh}%` : "0%",
                    transition: "width 900ms cubic-bezier(0.22,1,0.36,1)",
                    transitionDelay: `${i * 110 + 90}ms`,
                  }}
                />
              </div>
              <span className="w-16 shrink-0 text-right text-sm font-medium tabular-nums text-muted-foreground">
                {row.freshLabel}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-faint-foreground">
        {nutritionSource}
      </p>
    </div>
  );
}
