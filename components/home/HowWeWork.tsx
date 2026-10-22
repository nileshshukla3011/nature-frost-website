import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";

/**
 * Home page summary of the two detail pages: the IQF technology story lives
 * on /technology, and quality, infrastructure and sustainability on /facility.
 * That keeps the home page short while the detail stays one click away.
 *
 * The section keeps the `technology` id and each card keeps the id of the
 * section it summarises, so older /#technology, /#quality … links still land
 * on the right spot.
 */
const topics = [
  {
    id: "technology-summary",
    title: "IQF Technology",
    description:
      "Each piece is frozen separately at −35°C to −40°C in minutes, so it pours free and cooks close to fresh.",
    href: "/technology",
    cta: "How IQF works",
    icon: "Snowflake",
  },
  {
    id: "quality",
    title: "Quality & Food Safety",
    description:
      "Checks at intake, preparation, freezing and packing, with batch traceability from raw material to dispatch.",
    href: "/facility#quality",
    cta: "Our quality checks",
    icon: "ShieldCheck",
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description:
      "A planned 3 MT/hour IQF line with cold storage, a quality control laboratory, water and effluent treatment.",
    href: "/facility#infrastructure",
    cta: "Inside the facility",
    icon: "Factory",
  },
  {
    id: "sustainability",
    title: "Sustainability",
    description:
      "Processing close to the farm to cut post-harvest losses and create rural employment.",
    href: "/facility#sustainability",
    cta: "Value beyond the factory",
    icon: "Sprout",
  },
];

export function HowWeWork() {
  return (
    <Section id="technology">
      <SectionHeading
        eyebrow="How We Work"
        title="From field to freezer, built around food safety"
        description="The detail buyers ask about — technology, quality checks, the facility and its impact — each on its own page."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic) => (
          <li key={topic.id} id={topic.id}>
            <Link
              href={topic.href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon name={topic.icon} className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {topic.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {topic.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {topic.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
