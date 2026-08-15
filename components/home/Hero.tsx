import { ArrowRight, Check, Landmark, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { IconPanel } from "@/components/ui/IconPanel";
import { site } from "@/lib/site";

const trustPoints = [
  "100% Natural, No Preservatives",
  "Frozen at Peak Freshness",
  "Locked-in Nutrition",
  "Safe, Hygienic & Reliable",
];

export function Hero() {
  return (
    <section id="home" className="border-b border-border bg-hero-tint">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------- Copy ---------- */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary-soft px-4 py-1.5 text-xs font-semibold text-primary">
              <Landmark className="h-3.5 w-3.5" />
              {site.government.shortCredit}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
              From Indian Farms to{" "}
              <span className="text-primary">Global Tables.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Premium IQF frozen fruits and vegetables, processed with modern
              technology to preserve freshness, quality and convenience — for
              food manufacturers, HoReCa, modern retail and export markets.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/products" size="lg">
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                <Phone className="h-4 w-4" />
                Request a Quote
              </Button>
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-primary"
                    strokeWidth={2.5}
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Visual ---------- */}
          <div className="grid gap-4 sm:grid-cols-2">
            <IconPanel
              icon="Snowflake"
              label="IQF Freezing"
              sublabel="−35°C to −40°C in minutes"
              tone="ice"
              aspect="1/1"
            />
            <IconPanel
              icon="Sprout"
              label="Farm-Fresh Sourcing"
              sublabel="Processed close to harvest"
              aspect="1/1"
            />
            <IconPanel
              icon="Factory"
              label="3 MT / Hour"
              sublabel="IQF processing capacity"
              aspect="1/1"
            />
            <IconPanel
              icon="Truck"
              label="Unbroken Cold Chain"
              sublabel="−18°C to your cold store"
              tone="ice"
              aspect="1/1"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
