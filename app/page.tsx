import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { ClientsSection } from "@/components/home/ClientsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { MofpiBand } from "@/components/home/MofpiBand";
import { ProductPreview } from "@/components/home/ProductPreview";
import { HowWeWork } from "@/components/home/HowWeWork";
import { MarketsGrid } from "@/components/home/MarketsGrid";
import { BrochureSection } from "@/components/home/BrochureSection";
import { WhyNatureFrost } from "@/components/home/WhyNatureFrost";
import { CTABand } from "@/components/home/CTABand";

export const metadata = buildMetadata({
  title: "Nature Frost — Premium IQF Frozen Fruits & Vegetables from India",
  description:
    "Premium IQF frozen fruits and vegetables from Shree Kangan Food Park, Begusarai, Bihar: a planned 3 MT/hour facility for HoReCa, food manufacturers, retail, distributors and export.",
  path: "/",
  keywords: [
    "IQF frozen vegetables India",
    "frozen sweet corn manufacturer",
    "frozen green peas supplier",
    "MoFPI food processing project",
  ],
});

/**
 * Home page, kept short: who we are, what we make and who we serve. The full
 * IQF technology story is on /technology, and quality, infrastructure and
 * sustainability on /facility; How We Work links to both. Sections that a
 * menu link points at carry its `id` (/#about, /#markets, /#clients).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ClientsSection />
      <AboutSection />
      <MofpiBand />
      <ProductPreview />
      <HowWeWork />
      {/* Benefits shown in full, and no CTA — the old CTA linked to a separate
          Markets page that is now this very section. */}
      <MarketsGrid showBenefits showCta={false} />
      <BrochureSection />
      <WhyNatureFrost />
      <CTABand />
    </>
  );
}
