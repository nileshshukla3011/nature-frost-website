import { ArrowRight, Landmark } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { mofpiPillars } from "@/lib/content";

/**
 * Government-scheme trust signal.
 *
 * Deliberately uses a text credit and a generic institution icon rather than
 * the Government of India emblem — the State Emblem and Ashoka Lion are
 * legally restricted marks that a private company may not display.
 */
export function MofpiBand() {
  return (
    <Section tone="brand" className="overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 text-white" />

      <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Block>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              <Landmark className="h-3.5 w-3.5" />
              Government of India
            </span>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl">
              A project supported by the Ministry of Food Processing Industries
            </h2>

            <p className="mt-5 text-base leading-relaxed text-white/85">
              Nature Frost is developed under the{" "}
              <strong className="font-semibold text-white">
                {site.government.subScheme}
              </strong>{" "}
              of the {site.government.scheme}, {site.government.ministry},{" "}
              {site.government.authority}.
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/85">
              The project reflects our commitment to strengthening India&rsquo;s
              food-processing infrastructure, promoting value addition of
              agricultural produce, reducing post-harvest losses and creating a
              modern farm-to-market supply chain.
            </p>

            <p className="mt-4 text-base leading-relaxed text-white/85">
              With a{" "}
              <strong className="font-semibold text-white">
                3 MT/hour IQF processing capacity
              </strong>
              , Nature Frost aims to transform quality Indian fruits and
              vegetables into high-quality frozen products for customers across
              India and international markets.
            </p>

            <Button href="/#about" variant="white" size="lg" className="mt-8">
              More About Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Block>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {mofpiPillars.map((pillar, i) => (
              <Block
                key={pillar.title}
                className={
                  // The fifth card spans both columns to close the grid neatly.
                  i === mofpiPillars.length - 1 ? "sm:col-span-2" : undefined
                }
              >
                <div className="h-full rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/15">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white">
                    <Icon name={pillar.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                    {pillar.description}
                  </p>
                </div>
              </Block>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
