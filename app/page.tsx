import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { ClientsSection } from "@/components/home/ClientsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { MofpiBand } from "@/components/home/MofpiBand";
import { TechnologySection } from "@/components/home/TechnologySection";
import { ProductPreview } from "@/components/home/ProductPreview";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { WhyFrozen } from "@/components/home/WhyFrozen";
import { QualitySection } from "@/components/home/QualitySection";
import { InfrastructureSection } from "@/components/home/InfrastructureSection";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { MarketsGrid } from "@/components/home/MarketsGrid";
import { BrochureSection } from "@/components/home/BrochureSection";
import { WhyNatureFrost } from "@/components/home/WhyNatureFrost";
import { CTABand } from "@/components/home/CTABand";

export const metadata = buildMetadata({
  title: "Nature Frost — Premium IQF Frozen Fruits & Vegetables from India",
  description:
    "Nature Frost processes premium IQF frozen fruits and vegetables at Shree Kangan Food Park, Begusarai, Bihar, with 3 MT/hour capacity. Supplying HoReCa, food manufacturers, modern retail, distributors and export markets.",
  path: "/",
  keywords: [
    "IQF frozen vegetables India",
    "frozen sweet corn manufacturer",
    "frozen green peas supplier",
    "MoFPI food processing project",
  ],
});

/**
 * Single-page home route. Each section carries the `id` its navigation link
 * points at (/#about, /#technology, …). Products and Contact are separate
 * pages — see app/products and app/contact.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ClientsSection />
      <AboutSection />
      <MofpiBand />
      {/* Sections follow the menu order. Farm to Freezer and Why Frozen
          belong to the Technology story, so they come before Products. */}
      <TechnologySection />
      <ProcessTimeline />
      <WhyFrozen />
      <ProductPreview />
      <QualitySection />
      <InfrastructureSection />
      <SustainabilitySection />
      {/* Benefits shown in full, and no CTA — the old CTA linked to a separate
          Markets page that is now this very section. */}
      <MarketsGrid showBenefits showCta={false} />
      <BrochureSection />
      <WhyNatureFrost />
      <CTABand />
    </>
  );
}
