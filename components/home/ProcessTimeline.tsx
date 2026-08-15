import { Section, SectionHeading } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { farmToFreezer } from "@/lib/process";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The seven farm-to-freezer steps.
 *
 * Mobile: a single left-aligned rail. Desktop (lg+): cards alternate either
 * side of a centre line. The connecting line is a sibling element rather than
 * a border so it can sit behind the numbered nodes.
 */
export function ProcessTimeline() {
  return (
    <Section tone="surface" id="process">
      <SectionHeading
        eyebrow="Our Process"
        title="From Farm to Freezer"
        description="Seven controlled steps take produce from the field to your cold store — each one designed to protect freshness, safety and consistency."
      />

      <div className="relative mx-auto mt-16 max-w-5xl">
        {/*
          Connecting rail. Sits under the centre of the 48px numbered nodes:
          left-6 (24px) on mobile, dead centre from lg up.
        */}
        <div
          className="absolute bottom-0 left-6 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-accent/40 to-primary/10 lg:left-1/2"
          aria-hidden="true"
        />

        <ol className="space-y-8 lg:space-y-4">
          {farmToFreezer.map((step, i) => {
            const isRight = i % 2 === 1;

            return (
              <li key={step.number} className="relative">
                <Block>
                  {/*
                    Mobile: node and card side by side. Desktop: a three-column
                    grid with the node sitting in the middle.
                  */}
                  <div className="flex items-start gap-5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-0">
                    {/* Left slot — desktop only; holds even-indexed steps. */}
                    <div className="hidden lg:order-1 lg:block lg:pr-10">
                      {!isRight && <StepCard step={step} align="right" />}
                    </div>

                    {/* Numbered node */}
                    <div className="relative z-10 shrink-0 lg:order-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-surface bg-primary text-sm font-bold text-primary-foreground shadow-soft">
                        {step.number}
                      </div>
                    </div>

                    {/* Mobile card, and the desktop right slot for odd steps. */}
                    <div className="flex-1 lg:order-3 lg:pl-10">
                      <div className="lg:hidden">
                        <StepCard step={step} align="left" />
                      </div>
                      <div className="hidden lg:block">
                        {isRight && <StepCard step={step} align="left" />}
                      </div>
                    </div>
                  </div>
                </Block>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Points at a real page — the Technology detail now sits higher up on
          this same page, so linking to it here would just scroll backwards. */}
      <Block className="mt-14 text-center">
        <Button href="/products" variant="outline" size="lg">
          See What We Produce
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Block>
    </Section>
  );
}

function StepCard({
  step,
  align,
}: {
  step: (typeof farmToFreezer)[number];
  align: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:border-primary/35 ",
        align === "right" && "lg:text-right",
      )}
    >
      <div
        className={cn(
          "mb-3 flex items-center gap-3",
          align === "right" && "lg:flex-row-reverse",
        )}
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
          <Icon name={step.icon} className="h-[1.15rem] w-[1.15rem]" />
        </span>
        <h3 className="text-base font-semibold text-foreground">
          {step.title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </div>
  );
}
