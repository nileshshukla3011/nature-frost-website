import { FileDown, Phone } from "lucide-react";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { brochurePages, brochurePageSize } from "@/lib/brochure";
import { site } from "@/lib/site";
import { asset } from "@/lib/utils";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Company Brochure",
  description:
    "Read or download the Nature Frost company brochure — our IQF processing facility in Begusarai, Bihar, our technology, mission, clients and contact details.",
  path: "/brochure",
  keywords: ["Nature Frost brochure", "IQF frozen food company profile"],
});

/**
 * The brochure, shown as page images rather than an embedded PDF: most phone
 * browsers cannot display a PDF inside a page, but every one shows images.
 * The PDF itself is one tap away for download.
 */
export default function BrochurePage() {
  const pdf = asset(site.brochure.file);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Brochure", path: "/brochure" }]),
          ),
        }}
      />

      <PageHeader
        breadcrumb="Brochure"
        eyebrow="Company Brochure"
        title="Nature Frost at a glance"
        description="Our facility, IQF technology, mission, clients and contacts. Read it here, or download the PDF to share."
        compact
      />

      <Section size="compact" tone="surface">
        <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft sm:flex-row sm:items-center sm:p-5">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {site.brochure.pages} pages
            </span>{" "}
            · PDF · tap any page to open it full size
          </p>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <a
              href={pdf}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              <FileDown className="h-4 w-4" />
              Download PDF
            </a>
            <a
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Open PDF
            </a>
          </div>
        </div>

        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {brochurePages.map((page, i) => (
            <li key={page.src} className={i === 0 ? "sm:col-span-2" : ""}>
              <figure
                className={
                  i === 0 ? "mx-auto max-w-xl" : "mx-auto w-full max-w-xl"
                }
              >
                <a
                  href={asset(page.src)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-border bg-card shadow-lift transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(page.src)}
                    alt={`Brochure page ${i + 1}: ${page.title}`}
                    width={brochurePageSize.width}
                    height={brochurePageSize.height}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-auto w-full"
                  />
                </a>
                <figcaption className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-soft text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  {page.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
          <Button href="/contact" size="lg">
            Send an Enquiry
          </Button>
          <Button
            href={`tel:${site.phones[1].tel}`}
            variant="outline"
            size="lg"
          >
            <Phone className="h-4 w-4" />
            {site.phones[1].display}
          </Button>
        </div>
      </Section>
    </>
  );
}
