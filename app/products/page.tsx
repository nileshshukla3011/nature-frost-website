import { Download, Package } from "lucide-react";
import { buildMetadata, productCatalogJsonLd } from "@/lib/seo";
import { products, packFormats } from "@/lib/products";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProductGrid } from "@/components/products/ProductGrid";
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
      {/* Product catalogue structured data for search engines. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productCatalogJsonLd(products)),
        }}
      />

      <PageHeader
        breadcrumb="Products"
        eyebrow="Our Products"
        title="Frozen fruits and vegetables, individually quick frozen"
        description="Our portfolio is developed according to customer requirements, market demand and seasonal availability — if you need a cut, blend or pack size that is not listed, ask us."
      />

      <Section>
        <ProductGrid />
      </Section>

      {/* ---------- Pack formats ---------- */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Pack Formats"
          title="Packed the way you buy"
          description="The same product, formatted for the way it moves through your business."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packFormats.map((format, i) => (
            <Block key={format.title} className="h-full">
              <Card className="flex h-full flex-col">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <Package className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {format.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {format.detail}
                </p>
                <p className="mt-4 border-t border-border pt-3 text-xs text-faint-foreground">
                  {format.audience}
                </p>
              </Card>
            </Block>
          ))}
        </div>

        <Block className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Pack sizes shown are indicative. Final formats, weights and artwork
            are confirmed against your specification at the quotation stage.
          </p>
        </Block>
      </Section>

      {/* ---------- Brochure ---------- */}
      <Section size="compact">
        <Block>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:flex-row sm:text-left">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Product brochure &amp; specification sheet
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Full product list with cuts, pack sizes and technical
                specifications. Request a copy and we will send it across.
              </p>
            </div>
            <Button href="/contact?enquiry=spec" size="lg" className="shrink-0">
              <Download className="h-4 w-4" />
              Request the Brochure
            </Button>
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
