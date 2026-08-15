import { Section, SectionHeading } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { Icon } from "@/components/ui/Icon";
import { whyFrozenBetter, businessAdvantages } from "@/lib/content";
import { NutritionChart } from "./NutritionChart";

export function WhyFrozen() {
  return (
    <Section id="why-frozen">
      <SectionHeading
        eyebrow="Why Frozen"
        title="Frozen is not second best — it is picked at its best"
        description="Produce destined for freezing is harvested ripe and processed within hours. Produce destined for the fresh shelf is picked early and spends days in transit."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <Block>
          <NutritionChart />
        </Block>

        <div className="space-y-3">
          {whyFrozenBetter.map((item, i) => (
            <Block key={item.title}>
              <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:border-primary/35 ">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Block>
          ))}
        </div>
      </div>

      {/* Commercial angle for buyers */}
      <div className="mt-14">
        <Block>
          <h3 className="text-center text-lg font-semibold text-foreground">
            What that means for your business
          </h3>
        </Block>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {businessAdvantages.map((item, i) => (
            <Block key={item.title}>
              <div className="h-full rounded-2xl border border-border bg-surface p-5 text-center">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h4 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Block>
          ))}
        </div>
      </div>
    </Section>
  );
}
