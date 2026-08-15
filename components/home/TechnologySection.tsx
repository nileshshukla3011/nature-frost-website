import { Check, Snowflake, X } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Badge } from "@/components/ui/Card";
import { TemperatureJourney } from "@/components/technology/TemperatureJourney";
import { productionStages, iqfComparison } from "@/lib/process";

const qualities = [
  "Natural colour",
  "Fresh taste",
  "Texture and appearance",
  "Nutritional quality",
  "Individual piece separation",
  "Product consistency",
];

export function TechnologySection() {
  return (
    <>
      {/* ---------- What IQF does ---------- */}
      <Section id="technology">
        <SectionHeading
          eyebrow="Our Technology"
          title="What IQF actually does to a pea"
          description="Individual Quick Freezing drops each piece to −35°C to −40°C in minutes, so ice crystals stay small, cell walls survive, and every piece freezes separately instead of into a solid block."
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Freeze produce slowly and large ice crystals form inside each
              cell, rupturing the cell walls. Thaw it and the structure
              collapses — that is the mushy, watery frozen vegetable everyone
              remembers.
            </p>
            <p>
              Our processing approach is designed to maintain six things a buyer
              actually judges a frozen product on:
            </p>
            <ul className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
              {qualities.map((quality) => (
                <li
                  key={quality}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-primary"
                    strokeWidth={2.5}
                  />
                  {quality}
                </li>
              ))}
            </ul>
          </div>

          {/* Comparison table */}
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-lg border-collapse bg-card text-left">
              <caption className="sr-only">
                Comparison of conventional bulk freezing and individual quick
                freezing
              </caption>
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th
                    scope="col"
                    className="px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    Attribute
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-sm font-semibold text-muted-foreground"
                  >
                    <span className="flex items-center gap-1.5">
                      <X className="h-4 w-4" strokeWidth={2.5} />
                      Bulk freezing
                    </span>
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-sm font-semibold text-primary"
                  >
                    <span className="flex items-center gap-1.5">
                      <Snowflake className="h-4 w-4" strokeWidth={2.5} />
                      Our IQF
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {iqfComparison.map((row) => (
                  <tr
                    key={row.attribute}
                    className="border-b border-border last:border-0"
                  >
                    <th
                      scope="row"
                      className="px-4 py-3 text-sm font-medium text-foreground"
                    >
                      {row.attribute}
                    </th>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {row.conventional}
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">
                      {row.iqf}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ---------- Five production stages ---------- */}
      <Section tone="surface" id="stages">
        <SectionHeading
          eyebrow="Processing Line"
          title="Five stages from field to cold chain"
          description="Each stage has a defined job, a defined control point and a defined output."
        />

        <div className="mt-12 space-y-6">
          {productionStages.map((stage) => (
            <div
              key={stage.number}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="grid lg:grid-cols-12">
                <div className="flex items-center gap-4 bg-brand-band p-6 lg:col-span-3 lg:flex-col lg:items-start lg:justify-center lg:gap-4">
                  <span className="font-display text-4xl font-extrabold leading-none text-white/90">
                    {stage.number}
                  </span>
                  <div>
                    <span className="mb-3 hidden h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white lg:flex">
                      <Icon name={stage.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-bold leading-tight text-white">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 lg:col-span-6">
                  <ul className="space-y-3">
                    {stage.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2.5}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border p-6 lg:col-span-3 lg:border-l lg:border-t-0">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint-foreground">
                    Stage flow
                  </p>
                  <ol className="space-y-2">
                    {stage.flow.map((item, index) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-[0.65rem] font-bold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- Cold chain + chart ---------- */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-7">
            <TemperatureJourney />
          </div>

          <div className="lg:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Cold Chain
            </p>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Zero temperature break, end to end
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Blanching briefly lifts the product to around 90°C, which
                deactivates the enzymes that would otherwise degrade colour,
                texture and nutrients in storage. Rapid cooling follows
                immediately.
              </p>
              <p>
                The product then enters the IQF tunnel at{" "}
                <strong className="font-semibold text-foreground">
                  −35°C to −40°C
                </strong>
                . From that point it is never allowed to warm: cold storage at{" "}
                <strong className="font-semibold text-foreground">
                  −18°C or lower
                </strong>
                , reefer transport at the same temperature, and delivery
                straight into your cold store.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge tone="accent">Nitrogen flushing on premium packs</Badge>
              <Badge tone="accent">Metal detection before packing</Badge>
              <Badge tone="accent">Moisture-proof sealed packaging</Badge>
              <Badge tone="accent">Temperature logging</Badge>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
