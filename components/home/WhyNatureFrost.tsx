import { Section, SectionHeading } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { FeatureCard } from "@/components/ui/Card";
import { whyNatureFrost } from "@/lib/content";

export function WhyNatureFrost() {
  return (
    <Section tone="surface" id="why-us">
      <SectionHeading
        eyebrow="Why Nature Frost"
        title="Built to be a supplier you can plan around"
        description="Consistency is the whole product. Everything below exists so the case you order next quarter matches the one you opened last quarter."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyNatureFrost.map((item, i) => (
          <Block key={item.title} className="h-full">
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          </Block>
        ))}
      </div>
    </Section>
  );
}
