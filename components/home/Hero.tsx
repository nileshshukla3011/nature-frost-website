import {
  ArrowRight,
  Check,
  FileDown,
  Landmark,
  MapPin,
  Snowflake,
  Sprout,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { asset } from "@/lib/utils";

const trustPoints = [
  "100% Natural, No Preservatives",
  "Frozen at Peak Freshness",
  "Locked-in Nutrition",
  "Safe, Hygienic & Reliable",
];

const highlights = [
  {
    icon: Snowflake,
    label: "IQF Freezing",
    detail: "−35°C to −40°C in minutes",
  },
  {
    icon: Sprout,
    label: "Farm-Fresh Sourcing",
    detail: "Processed close to harvest",
  },
  {
    icon: Truck,
    label: "Unbroken Cold Chain",
    detail: "−18°C to your cold store",
  },
  {
    icon: MapPin,
    label: "Shree Kangan Food Park",
    detail: "Teghra, Begusarai, Bihar",
  },
];

/**
 * Home hero.
 *
 * The facility photo fills the band and a dark scrim sits between it and the
 * copy, so the headline is always on a calm, dark field — never on top of the
 * building's own lettering. On wide screens the photo is shifted right so the
 * building sits beside the copy rather than under it; on phones the photo is a
 * band across the top that fades into the dark field the copy starts on.
 *
 * The band is dark in both themes, so text here uses fixed light colours.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#04120c] text-white"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/nature-frost-facility.jpeg")}
        alt=""
        width={1536}
        height={1024}
        fetchPriority="high"
        className="hero-photo absolute inset-x-0 top-0 -z-20 h-[24rem] w-full object-cover sm:h-[30rem] lg:inset-y-0 lg:left-auto lg:h-full lg:w-[68%]"
      />
      <div aria-hidden="true" className="hero-scrim absolute inset-0 -z-10" />

      <Container className="hero-body flex flex-col gap-10 pb-8 pt-[12.5rem] sm:pb-10 sm:pt-[17rem] lg:min-h-[calc(100svh-4.5rem)] lg:justify-center lg:gap-14 lg:py-16">
        <div className="max-w-3xl">
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[0.7rem] font-semibold text-emerald-100 backdrop-blur-md sm:text-xs">
            <Landmark className="h-3.5 w-3.5 shrink-0" />
            <span>{site.government.shortCredit}</span>
          </p>

          <h1 className="hero-title mt-5 max-w-2xl text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            From Indian Farms to{" "}
            <span className="hero-accent">Global Tables.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Premium IQF frozen fruits and vegetables, processed with modern
            technology to preserve freshness, quality and convenience — for food
            manufacturers, HoReCa, modern retail and export markets.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button href="/products" variant="glow" size="lg">
              Explore Our Products
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="glass" size="lg">
              Request a Quote
            </Button>
            <a
              href={asset(site.brochure.file)}
              download
              className="inline-flex items-center justify-center gap-2 px-2 py-3 text-sm font-semibold text-emerald-200 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              <FileDown className="h-4 w-4" />
              Download Brochure (PDF)
            </a>
          </div>

          <ul className="mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm font-medium text-white/80"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/20">
                  <Check className="h-3 w-3 text-emerald-300" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Highlights strip ---------- */}
        <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-xl lg:grid-cols-4">
          {highlights.map(({ icon: HighlightIcon, label, detail }, i) => (
            <li
              key={label}
              className={[
                "flex flex-col items-start gap-3 p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-5",
                i % 2 === 1 ? "border-l border-white/10" : "",
                i >= 2 ? "border-t border-white/10 lg:border-t-0" : "",
                i === 2 ? "lg:border-l" : "",
              ].join(" ")}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-300 sm:h-11 sm:w-11">
                <HighlightIcon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-snug text-white">
                  {label}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-white/65">
                  {detail}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
