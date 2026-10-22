import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  Check,
  MessageCircle,
  Send,
} from "lucide-react";
import { getProduct, products } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { asset, cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProductCard, tintClass } from "@/components/products/ProductCard";
import { PackFormatsSection } from "@/components/products/PackFormatsSection";
import { CTABand } from "@/components/home/CTABand";

type Props = { params: Promise<{ slug: string }> };

/*
 * One page per product in lib/products.ts, generated at build time. Any other
 * slug is a 404 — a static export cannot render pages on request.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  // "Soups and chowders, salads and corn chaat, …" for the description.
  const uses = product.uses
    .map((use, i) => (i === 0 ? use : use[0].toLowerCase() + use.slice(1)))
    .join(", ");

  return buildMetadata({
    title: `IQF Frozen ${product.name} Supplier in India`,
    description: `${product.description} Typical uses: ${uses}. Formats: ${product.formats.join(", ")}. Bulk, HoReCa, retail and private-label packs from Bihar.`,
    path: `/products/${product.slug}`,
    keywords: [
      `frozen ${product.name.toLowerCase()}`,
      `IQF ${product.name.toLowerCase()} supplier India`,
    ],
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const isFruit = product.category === "fruits";
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Products", path: "/products" },
              { name: product.name, path: `/products/${product.slug}` },
            ]),
          ),
        }}
      />

      <PageHeader
        parent={{ label: "Products", href: "/products" }}
        breadcrumb={product.name}
        eyebrow={isFruit ? "Frozen Fruit" : "Frozen Vegetable"}
        title={`Frozen ${product.name}`}
        description={product.description}
        compact
      />

      {/* ---------- Picture and details ---------- */}
      <Section size="compact">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div
            className={cn(
              "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-border",
              tintClass[product.tint],
            )}
          >
            {product.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={asset(product.image)}
                alt={`Frozen ${product.name}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <span
                className="text-8xl leading-none sm:text-9xl"
                role="img"
                aria-label={product.name}
              >
                {product.emoji}
              </span>
            )}
          </div>

          <div>
            <h2 className="text-xl font-bold text-foreground">
              Product details
            </h2>

            <dl className="mt-5 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-faint-foreground">
                  Cuts and formats
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {product.formats.map((format) => (
                    <Badge key={format} tone="neutral">
                      {format}
                    </Badge>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-faint-foreground">
                  Availability
                </dt>
                <dd className="mt-1.5 flex items-center gap-2 text-sm font-medium text-foreground">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  {product.season}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-faint-foreground">
                  Typical uses
                </dt>
                <dd className="mt-2">
                  <ul className="grid gap-1.5 text-sm text-foreground sm:grid-cols-2">
                    {product.uses.map((use) => (
                      <li key={use} className="flex items-start gap-2">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          strokeWidth={2.5}
                        />
                        {use}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-faint-foreground">
                  Processing
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Individually quick frozen at −35°C to −40°C, then held at
                  −18°C or lower through storage and transport.{" "}
                  <Link
                    href="/technology"
                    className="inline-flex min-h-6 items-center font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    How IQF works
                  </Link>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-faint-foreground">
                  Storage and handling
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  Keep frozen at −18°C or lower. Cook straight from frozen —
                  most products need no thawing — and do not refreeze once
                  thawed.
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={`/contact?product=${product.slug}`} size="lg">
                <Send className="h-4 w-4" />
                Enquire about {product.name}
              </Button>
              <Button
                href={whatsappLink(
                  `Hello Nature Frost, I would like to know more about your frozen ${product.name}.`,
                )}
                variant="outline"
                size="lg"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </Button>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              Need the technical specification?{" "}
              <Link
                href={`/contact?product=${product.slug}&enquiry=spec`}
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Request a spec sheet
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <PackFormatsSection />

      {/* ---------- More from the same category ---------- */}
      {related.length > 0 && (
        <Section size="compact">
          <SectionHeading
            eyebrow="More From the Range"
            title={isFruit ? "Other frozen fruits" : "Other frozen vegetables"}
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProductCard key={item.slug} product={item} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href="/products" variant="outline" size="lg">
              View the Full Range
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Section>
      )}

      <CTABand
        title={`Looking for frozen ${product.name.toLowerCase()} in volume?`}
        description="Tell us your specification, pack size and volume, and we will come back to you with availability and pricing."
      />
    </>
  );
}
