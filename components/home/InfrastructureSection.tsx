import { Section, SectionHeading } from "@/components/ui/Section";
import { FeatureCard } from "@/components/ui/Card";
import { IconPanel } from "@/components/ui/IconPanel";
import { facilitySystems } from "@/lib/content";

export function InfrastructureSection() {
  return (
    <Section tone="surface" id="infrastructure">
      <SectionHeading
        eyebrow="Our Infrastructure"
        title="3 MT per hour of IQF processing capacity"
        description="An IQF processing capacity of approximately 3 tonnes per hour means we can absorb a full harvest window at peak season and still hold consistent output for contract supply through the rest of the year."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {facilitySystems.map((system, i) => (
          <FeatureCard
            key={system.title}
            icon={system.icon}
            title={system.title}
            description={system.description}
            accent={i % 2 === 0 ? "primary" : "accent"}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-center">
        <IconPanel
          icon="Thermometer"
          label="Held at −18°C until it reaches you"
          sublabel="Cold storage, reefer transport and delivery straight into your cold store"
          tone="ice"
          aspect="16/9"
        />
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Finished product moves straight from the freezing tunnel into cold
            storage at −18°C or lower, where it holds its quality for 12 to 24
            months.
          </p>
          <p>
            Supporting utilities — steam generation for blanching, treated
            process water, on-site effluent treatment and an in-house quality
            control laboratory — keep that line running to specification.
          </p>
        </div>
      </div>
    </Section>
  );
}
