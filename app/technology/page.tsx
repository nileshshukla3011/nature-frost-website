import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/ui/PageHeader";
import { TechnologySection } from "@/components/home/TechnologySection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { WhyFrozen } from "@/components/home/WhyFrozen";
import { CTABand } from "@/components/home/CTABand";

export const metadata = buildMetadata({
  title: "IQF Technology",
  description:
    "How Nature Frost uses Individual Quick Freezing at −35°C to −40°C: the five processing stages, the farm-to-freezer steps, the temperature journey and why frozen produce keeps its nutrients.",
  path: "/technology",
  keywords: [
    "IQF technology India",
    "individual quick freezing process",
    "frozen vegetable processing",
  ],
});

/**
 * The full IQF technology story, moved off the home page so that page stays
 * short: what IQF does, the five production stages, the temperature journey,
 * the seven farm-to-freezer steps and why frozen produce holds its nutrients.
 */
export default function TechnologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Technology", path: "/technology" }]),
          ),
        }}
      />

      <PageHeader
        breadcrumb="Technology"
        eyebrow="IQF Processing"
        title="How IQF keeps produce close to fresh"
        description="From the field to your cold store: what Individual Quick Freezing does, every stage of the processing line, and the temperature the product is held at throughout."
        compact
      />

      <TechnologySection />
      <ProcessTimeline />
      <WhyFrozen />
      <CTABand />
    </>
  );
}
