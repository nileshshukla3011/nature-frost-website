import { Check, ShieldCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/site";
import { qualityPillars, qualityCheckpoints } from "@/lib/content";

export function QualitySection() {
  return (
    <Section id="quality">
      <SectionHeading
        eyebrow="Quality & Food Safety"
        title="Quality is not limited to the finished product"
        description="It begins with the selection of raw materials and continues through processing, freezing, packaging, storage and distribution."
      />

      {/* Five pillars */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {qualityPillars.map((pillar) => (
          <div
            key={pillar.title}
            className="h-full rounded-2xl border border-border bg-card p-5 text-center transition-colors duration-200 hover:border-primary/40"
          >
            <span className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon name={pillar.icon} className="h-5 w-5" />
            </span>
            <h3 className="text-base font-semibold text-foreground">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Checkpoints */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {qualityCheckpoints.map((checkpoint) => (
          <Card key={checkpoint.stage} hover={false} className="h-full">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <ShieldCheck className="h-[1.15rem] w-[1.15rem]" />
              </span>
              <h3 className="text-base font-semibold text-foreground">
                {checkpoint.stage}
              </h3>
            </div>
            <ul className="space-y-2.5">
              {checkpoint.checks.map((check) => (
                <li
                  key={check}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    strokeWidth={2.5}
                  />
                  {check}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      {/*
        No certification badges are shown until real certificates are issued —
        see `certifications` in lib/site.ts. Publishing a mark you do not hold
        is a compliance risk with institutional and export buyers.
      */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border bg-surface p-6 text-center">
        {site.certifications.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-3">
            {site.certifications.map((cert) => (
              <div
                key={cert.label}
                className="rounded-xl border border-border bg-card px-5 py-3 text-left"
              >
                <p className="text-sm font-semibold text-foreground">
                  {cert.label}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {cert.detail}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground">
            We are committed to continuously strengthening our food-safety and
            quality-management systems in line with applicable regulatory and
            customer requirements. Certification and audit documentation is
            shared directly with buyers on request as part of the
            supplier-approval process.
          </p>
        )}
      </div>
    </Section>
  );
}
