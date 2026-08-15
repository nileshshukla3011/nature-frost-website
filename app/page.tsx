import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
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
import { WhyNatureFrost } from "@/components/home/WhyNatureFrost";
import { CTABand } from "@/components/home/CTABand";

export const metadata = buildMetadata({
  title: "Nature Frost — Premium IQF Frozen Fruits & Vegetables from India",
  description:
    "Nature Frost processes premium IQF frozen fruits and vegetables in Bihar, India, with 3 MT/hour capacity. Supplying HoReCa, food manufacturers, modern retail, distributors and export markets.",
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
      <AboutSection />
      <MofpiBand />
      <TechnologySection />
      <ProductPreview />
      <ProcessTimeline />
      <WhyFrozen />
      <QualitySection />
      <InfrastructureSection />
      <SustainabilitySection />
      {/* Benefits shown in full, and no CTA — the old CTA linked to a separate
          Markets page that is now this very section. */}
      <MarketsGrid showBenefits showCta={false} />
      <WhyNatureFrost />
      <CTABand />
    </>
  );
}
