import { Section, SectionHeading } from "@/components/ui/Section";
import { clients, type Client } from "@/lib/clients";
import { asset } from "@/lib/utils";

/**
 * Client logos from the company brochure.
 *
 * Logos sit on white tiles in both themes — most client artwork is drawn for a
 * white background and turns muddy or invisible on dark. A client without a
 * logo file gets a drawn monogram tile instead (see lib/clients.ts).
 */
export function ClientsSection() {
  return (
    <Section id="clients" tone="surface">
      <SectionHeading
        eyebrow="Our Clients"
        title="Trusted by brands and institutions"
        description="Food businesses, processors and public bodies that work with Nature Frost."
      />

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 xl:grid-cols-6">
        {clients.map((client) => (
          <li key={client.name}>
            <ClientTile client={client} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ClientTile({ client }: { client: Client }) {
  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
      <div className="flex h-32 items-center justify-center bg-white p-4 sm:h-36 sm:p-5">
        {client.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(client.logo)}
            alt={`${client.name} logo`}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <Monogram letters={client.monogram ?? client.name.slice(0, 2)} />
        )}
      </div>
      <figcaption className="flex flex-1 flex-col justify-center border-t border-border px-3 py-3 text-center sm:px-4">
        <span className="text-sm font-semibold leading-snug text-foreground">
          {client.name}
        </span>
        <span className="mt-0.5 text-xs text-muted-foreground">
          {client.sector}
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Stand-in mark for a client whose logo artwork is not available yet: their
 * initials in a ring, in the red their name is set in on the brochure.
 */
function Monogram({ letters }: { letters: string }) {
  return (
    <span
      role="img"
      aria-label={`${letters} monogram`}
      className="flex aspect-square h-full items-center justify-center rounded-full border-[3px] border-[#b91c1c] bg-[#fef2f2] p-2 transition-transform duration-300 group-hover:scale-105"
    >
      <span className="flex aspect-square h-full items-center justify-center rounded-full bg-[#b91c1c] font-display text-xl font-extrabold tracking-wider text-white sm:text-2xl">
        {letters}
      </span>
    </span>
  );
}
