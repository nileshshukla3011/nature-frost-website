import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { sustainabilityPillars } from "@/lib/content";

export function SustainabilitySection() {
  return (
    <Section id="sustainability">
      <SectionHeading
        eyebrow="Sustainability & Value Creation"
        title="Food processing can create value far beyond the factory"
        description="By processing agricultural produce close to its source and extending its usable life through freezing, we contribute to better utilisation of farm produce and a reduction in post-harvest losses."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {sustainabilityPillars.map((pillar) => (
          <Card key={pillar.title} className="h-full">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon name={pillar.icon} className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {pillar.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-surface p-6 text-center">
        <h3 className="text-lg font-semibold text-foreground">
          Growing something with us
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          We work with farmers and supplier networks who can meet our quality
          requirements consistently, and we are always interested in building
          new sourcing relationships in suitable agricultural regions. If you
          grow or aggregate produce we process, we would like to hear from you.
        </p>
      </div>
    </Section>
  );
}
