import Link from "next/link";
import { ArrowRight, BookOpen, FileDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { anchorOffset } from "@/components/ui/Section";
import { brochurePages, brochurePageSize } from "@/lib/brochure";
import { site } from "@/lib/site";
import { asset } from "@/lib/utils";

/** Home-page teaser for the company brochure: a fanned stack of pages. */
export function BrochureSection() {
  const [cover, second, third] = brochurePages;

  return (
    <section
      id="brochure"
      className={`relative isolate overflow-hidden bg-brand-band text-white ${anchorOffset.default}`}
    >
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10 text-white" />

      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
            Company Brochure
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Everything about Nature Frost, in {site.brochure.pages} pages
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Our facility, IQF technology, mission, clients and contacts — in one
            document you can read online or download to share with your team.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/brochure" variant="white" size="lg">
              <BookOpen className="h-4 w-4" />
              View Brochure
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href={asset(site.brochure.file)}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <FileDown className="h-4 w-4" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Fanned pages. The whole stack is one link to the brochure page. */}
        <Link
          href="/brochure"
          aria-label="Open the brochure"
          className="group relative mx-auto block aspect-[5/4] w-full max-w-lg"
        >
          {[third, second, cover].map((page, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={page.src}
              src={asset(page.src)}
              alt=""
              loading="lazy"
              width={brochurePageSize.width}
              height={brochurePageSize.height}
              className={[
                "absolute top-1/2 w-[46%] -translate-y-1/2 rounded-lg shadow-2xl shadow-black/40 ring-1 ring-black/10 transition-transform duration-500 ease-out",
                i === 0 &&
                  "left-[6%] -rotate-[10deg] group-hover:-translate-x-3 group-hover:-rotate-[14deg]",
                i === 1 &&
                  "right-[6%] rotate-[10deg] group-hover:translate-x-3 group-hover:rotate-[14deg]",
                i === 2 &&
                  "left-1/2 z-10 -translate-x-1/2 group-hover:-translate-y-[54%]",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </Link>
      </Container>
    </section>
  );
}
