import { BookOpen } from "lucide-react";
import {
  breadcrumbJsonLd,
  buildMetadata,
  productCatalogJsonLd,
} from "@/lib/seo";
import { products } from "@/lib/products";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { Button } from "@/components/ui/Button";
import { ProductGrid } from "@/components/products/ProductGrid";
import { PackFormatsSection } from "@/components/products/PackFormatsSection";
import { CTABand } from "@/components/home/CTABand";

export const metadata = buildMetadata({
  title: "Products",
  description:
    "IQF frozen vegetables and fruits from Nature Frost — sweet corn, green peas, okra, broccoli, cauliflower, baby corn, pineapple, jackfruit and more, in bulk, HoReCa, retail and private-label formats.",
  path: "/products",
  keywords: [
    "frozen sweet corn",
    "frozen green peas supplier",
    "IQF broccoli India",
    "frozen pineapple exporter",
    "frozen jackfruit supplier",
  ],
});

export default function ProductsPage() {
  return (
    <>
      {/* Product list and breadcrumb structured data for search engines. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productCatalogJsonLd(products)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Products", path: "/products" }]),
          ),
        }}
      />

      <PageHeader
        breadcrumb="Products"
        eyebrow="Our Product Range"
        title="IQF fruits and vegetables, ready for your business"
        description="Browse by category or search for a product and cut. Need a custom blend or pack size? Share your specification and our team will help."
      />

      <Section>
        {/* The search bar heads this list visually; the hidden heading keeps
            the page outline in order (h1, then h2, then each product's h3). */}
        <h2 className="sr-only">Product catalogue</h2>
        <ProductGrid />
      </Section>

      <PackFormatsSection />

      {/* ---------- Brochure and spec sheets ---------- */}
      <Section size="compact">
        <Block>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card p-8 text-center shadow-soft lg:flex-row lg:text-left">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Company brochure &amp; specification sheets
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                The brochure covers our facility, IQF technology and product
                range. For the technical specification of a particular product,
                request a spec sheet and we will send it across.
              </p>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href="/brochure" size="lg">
                <BookOpen className="h-4 w-4" />
                View the Brochure
              </Button>
              <Button href="/contact?enquiry=spec" variant="outline" size="lg">
                Request a Spec Sheet
              </Button>
            </div>
          </div>
        </Block>
      </Section>

      <CTABand
        title="Need a product that is not on this list?"
        description="Our portfolio is developed according to customer requirements, market demand and seasonal availability. Tell us your specification and we will tell you what is possible."
      />
    </>
  );
}
