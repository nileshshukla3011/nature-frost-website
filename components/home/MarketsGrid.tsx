import { ArrowRight, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { markets } from "@/lib/content";

export function MarketsGrid({
  showBenefits = false,
  showCta = true,
}: {
  showBenefits?: boolean;
  showCta?: boolean;
}) {
  return (
    <Section id="markets">
      <SectionHeading
        eyebrow="Markets We Serve"
        title="One production line, six kinds of customer"
        description="From a single restaurant kitchen to a container bound for an export market — pack formats and specifications are matched to how you actually buy."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {markets.map((market, i) => (
          <Block key={market.title} className="h-full">
            <Card className="flex h-full flex-col">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon name={market.icon} className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {market.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {market.description}
              </p>

              {showBenefits && (
                <ul className="mt-5 space-y-2 border-t border-border pt-4">
                  {market.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        strokeWidth={2.5}
                      />
                      {benefit}
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </Block>
        ))}
      </div>

      {showCta && (
        <Block className="mt-12 text-center">
          <Button href="/#markets" variant="outline" size="lg">
            How We Work With Each Market
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Block>
      )}
    </Section>
  );
}
