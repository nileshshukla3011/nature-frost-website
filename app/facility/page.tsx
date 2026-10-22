import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { QualitySection } from "@/components/home/QualitySection";
import { InfrastructureSection } from "@/components/home/InfrastructureSection";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { CTABand } from "@/components/home/CTABand";

export const metadata = buildMetadata({
  title: "Facility & Quality",
  description:
    "Quality checkpoints, infrastructure and sustainability at the Nature Frost IQF facility at Shree Kangan Food Park, Begusarai, Bihar: a planned 3 MT/hour line with cold storage, QC laboratory and effluent treatment.",
  path: "/facility",
  keywords: [
    "frozen food processing facility Bihar",
    "IQF plant Begusarai",
    "frozen vegetable quality control",
  ],
});

/**
 * Quality, infrastructure and sustainability — the sections buyers check
 * during supplier approval. The menu links straight to each one
 * (/facility#quality, #infrastructure, #sustainability).
 */
export default function FacilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Facility & Quality", path: "/facility" },
            ]),
          ),
        }}
      />

      <PageHeader
        breadcrumb="Facility & Quality"
        eyebrow="Inside Nature Frost"
        title="Built around food safety, from intake to dispatch"
        description="How quality is checked at every stage, what the processing facility includes, and the value it creates beyond the factory gate."
        compact
      />

      <QualitySection />
      <InfrastructureSection />
      <SustainabilitySection />
      <CTABand />
    </>
  );
}
