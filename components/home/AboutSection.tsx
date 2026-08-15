import { Eye, Target } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { IconPanel } from "@/components/ui/IconPanel";
import { site } from "@/lib/site";

const missionPoints = [
  "Build strong farmer and supplier relationships",
  "Reduce agricultural wastage",
  "Add value to Indian farm produce",
  "Maintain high standards of food safety",
  "Develop innovative frozen-food products",
  "Create reliable supply chains",
  "Serve customers with consistency and integrity",
];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Nature Frost"
        title="Who we are"
        description="A frozen fruits and vegetables processing company focused on consistent quality, food safety and year-round availability of premium agricultural produce."
      />

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="grid gap-4 sm:grid-cols-2">
          <IconPanel
            icon="Factory"
            label="Processing Facility"
            sublabel="Modern IQF line in Bihar, India"
            aspect="1/1"
          />
          <IconPanel
            icon="Thermometer"
            label="Cold Storage"
            sublabel="Finished goods held at −18°C or lower"
            tone="ice"
            aspect="1/1"
          />
        </div>

        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            Nature Frost is a frozen fruits and vegetables processing company
            focused on delivering consistent quality, food safety and year-round
            availability of premium agricultural produce.
          </p>
          <p>
            Located in Bihar, India, we operate a modern frozen fruits and
            vegetables processing facility serving food businesses,
            institutional buyers, modern retail, HoReCa and distribution
            markets.
          </p>
          <p>
            We combine carefully selected farm-fresh produce with modern
            food-processing technology to create high-quality{" "}
            <strong className="font-semibold text-foreground">
              IQF (Individual Quick Frozen)
            </strong>{" "}
            products that preserve the natural taste, colour, texture and
            goodness of fruits and vegetables.
          </p>

          <div className="rounded-2xl border border-primary/25 bg-primary-soft p-5">
            <p className="font-display text-lg font-semibold leading-snug text-foreground">
              We don&rsquo;t just freeze food — we preserve goodness.
            </p>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {site.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card hover={false} className="h-full">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
          <p className="mt-3 font-display text-lg font-semibold text-primary">
            To become a trusted Indian name in frozen fruits and vegetables.
          </p>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              We envision Nature Frost as a leading food-processing company that
              brings together Indian agriculture, modern technology and global
              food-quality standards.
            </p>
            <p>
              Our long-term ambition is to build a strong frozen-food brand from
              Bihar and take high-quality Indian agricultural produce to
              consumers and businesses across India and international markets.
            </p>
          </div>
        </Card>

        <Card hover={false} className="h-full">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            To preserve the goodness of nature through technology and deliver
            safe, convenient and high-quality frozen fruits and vegetables to
            customers throughout the year.
          </p>
          <ul className="mt-5 space-y-2.5">
            {missionPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
