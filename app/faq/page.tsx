import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd } from "@/lib/seo";
import { faqGroups } from "@/lib/faq";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/home/CTABand";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers for buyers: what IQF is, shelf life of frozen fruits and vegetables, preservatives, products, pack sizes, private label, export supply and how to get a quote from Nature Frost.",
  path: "/faq",
  keywords: [
    "what is IQF",
    "IQF frozen vegetables shelf life",
    "frozen vegetables private label India",
  ],
});

/**
 * Questions buyers ask, in plain headings and paragraphs (not collapsed), so
 * every answer is visible to readers and search engines alike. Content lives
 * in lib/faq.ts.
 */
export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "FAQ", path: "/faq" }]),
          ),
        }}
      />

      <PageHeader
        breadcrumb="FAQ"
        eyebrow="Questions & Answers"
        title="Frequently asked questions"
        description="What IQF is, our products and packs, and how to order — the questions buyers ask us most."
        compact
      />

      <Section size="compact" containerSize="narrow">
        <div className="space-y-14">
          {faqGroups.map((group) => (
            <section key={group.title} aria-labelledby={slug(group.title)}>
              <h2
                id={slug(group.title)}
                className="text-2xl font-bold text-foreground sm:text-3xl"
              >
                {group.title}
              </h2>
              <div className="mt-6 divide-y divide-border rounded-3xl border border-border bg-card shadow-soft">
                {group.items.map((item) => (
                  <div key={item.question} className="p-5 sm:p-6">
                    <h3 className="text-base font-semibold text-foreground sm:text-lg">
                      {item.question}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.answer}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        {item.link.label}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>

      <CTABand
        title="Still have a question?"
        description="Tell us what you need — product, cut, pack size or volume — and our team will come back to you."
      />
    </>
  );
}

function slug(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
