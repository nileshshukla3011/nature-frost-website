import { Eye, Target } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { site } from "@/lib/site";
import { asset } from "@/lib/utils";

const missionPoints = [
  "Build strong farmer and supplier relationships",
  "Reduce agricultural wastage",
  "Add value to Indian farm produce",
  "Maintain high standards of food safety",
  "Develop innovative frozen-food products",
  "Create reliable supply chains",
  "Serve customers with consistency and integrity",
];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Nature Frost"
        title="Who we are"
        description="A frozen fruits and vegetables processing company focused on consistent quality, food safety and year-round availability of premium agricultural produce."
      />

      {/*
        Bento layout. Desktop: the factory photo fills the left at full
        height; the copy and the two product photos share the right, so the
        whole block fits one screen. Phones: photo → copy → product photos.
      */}
      <div className="mt-8 grid gap-4 sm:gap-5 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-5">
        <figure className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border sm:aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-[27rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/nature-frost-facility.jpeg")}
            alt="The Nature Frost processing facility"
            loading="lazy"
            className="zoom-on-hover absolute inset-0 h-full w-full object-cover object-[62%_55%]"
          />
          <figcaption className="absolute inset-x-3 bottom-3 flex items-end justify-between gap-3 rounded-2xl bg-[#04120c]/75 px-4 py-3 text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:px-5">
            <span>
              <span className="block text-sm font-semibold sm:text-base">
                Processing Facility
              </span>
              <span className="block text-xs text-white/75 sm:text-sm">
                Shree Kangan Food Park, Begusarai, Bihar
              </span>
            </span>
            <span className="hidden shrink-0 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200 sm:inline">
              Planned 3 MT / hour IQF
            </span>
          </figcaption>
        </figure>

        <div className="space-y-3.5 text-base leading-relaxed text-muted-foreground lg:col-span-5 lg:text-[0.9375rem]">
          <p>
            Located at Shree Kangan Food Park in Begusarai, Bihar, Nature Frost
            is being developed as a modern frozen fruits and vegetables
            processing facility serving food businesses, institutional buyers,
            modern retail, HoReCa and distribution markets.
          </p>
          <p>
            We combine carefully selected farm-fresh produce with modern
            food-processing technology to create high-quality{" "}
            <strong className="font-semibold text-foreground">
              IQF (Individual Quick Frozen)
            </strong>{" "}
            products that preserve the natural taste, colour, texture and
            goodness of fruits and vegetables.
          </p>

          <div className="rounded-2xl border border-primary/25 bg-primary-soft px-5 py-4">
            <p className="font-display text-base font-semibold leading-snug text-foreground sm:text-lg">
              We don&rsquo;t just freeze food — we preserve goodness.
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{site.tagline}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:col-span-5 lg:self-end">
          {[
            {
              src: "/images/products/frozen-vegetable-medley.webp",
              alt: "Individually quick frozen vegetables",
              label: "Frozen Vegetables",
            },
            {
              src: "/images/products/frozen-berries.webp",
              alt: "Individually quick frozen fruits and berries",
              label: "Frozen Fruits",
            },
          ].map((photo) => (
            <figure
              key={photo.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border lg:aspect-[16/10]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(photo.src)}
                alt={photo.alt}
                loading="lazy"
                className="zoom-on-hover h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-2.5 left-2.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0b5d3b] backdrop-blur sm:bottom-3 sm:left-3">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <Card hover={false} className="h-full">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
          <p className="mt-3 font-display text-lg font-semibold text-primary">
            To become a trusted Indian name in frozen fruits and vegetables.
          </p>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              We envision Nature Frost as a leading food-processing company that
              brings together Indian agriculture, modern technology and global
              food-quality standards.
            </p>
            <p>
              Our long-term ambition is to build a strong frozen-food brand from
              Bihar and take high-quality Indian agricultural produce to
              consumers and businesses across India and international markets.
            </p>
          </div>
        </Card>

        <Card hover={false} className="h-full">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            To preserve the goodness of nature through technology and deliver
            safe, convenient and high-quality frozen fruits and vegetables to
            customers throughout the year.
          </p>
          <ul className="mt-5 space-y-2.5">
            {missionPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
