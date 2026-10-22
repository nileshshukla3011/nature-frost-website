import Link from "next/link";
import {
  Building2,
  ChevronRight,
  Clock,
  Factory,
  Mail,
  MessageCircle,
  Phone,
  UserRound,
} from "lucide-react";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { site, formattedAddress, mainPhone, whatsappLink } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = buildMetadata({
  title: "Contact & Bulk Enquiries",
  description:
    "Contact Nature Frost for bulk requirements, product specifications, private-label opportunities, HoReCa supply, distribution partnerships and export enquiries.",
  path: "/contact",
  keywords: ["contact frozen food supplier India", "IQF vegetables enquiry"],
});

/** The general line — also the WhatsApp number. The others belong to people. */
const mainLine = mainPhone;

/**
 * Contact page, laid out to fit one laptop screen: intro and a single contact
 * card on the left, the enquiry form on the right. On phones the order is
 * intro → form → contact card. The map sits below as a separate band.
 */
export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]),
          ),
        }}
      />

      <section className="bg-hero-tint">
        <Container className="grid items-start gap-6 py-6 sm:py-8 lg:grid-flow-dense lg:grid-cols-12 lg:gap-x-10 lg:gap-y-5 lg:pb-8 lg:pt-6">
          {/* ---------- Intro ---------- */}
          <div className="lg:col-span-5">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li className="font-medium text-foreground" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Partner With Nature Frost
            </p>
            <h1 className="mt-2 text-3xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.125rem]">
              Let&rsquo;s talk about your requirement
            </h1>
            <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">
              Bulk supply, specifications, private label and export enquiries —
              tell us what your business needs.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Quick question?{" "}
              <Link
                href="/faq"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                See the FAQ
              </Link>
            </p>
          </div>

          {/* ---------- Form ---------- */}
          <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
            <ContactForm />
          </div>

          {/* ---------- Contact card ---------- */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-soft lg:col-span-5">
            <h2 className="text-base font-bold text-foreground">
              Talk to us directly
            </h2>

            <ul className="mt-3 space-y-2">
              {site.people.map((person) => (
                <li
                  key={person.name}
                  className="flex items-center gap-3 rounded-2xl bg-surface p-2.5 sm:p-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <UserRound className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground">
                      {person.name}
                      {person.honorific && (
                        <span className="ml-1.5 text-xs font-medium text-muted-foreground">
                          ({person.honorific})
                        </span>
                      )}
                    </p>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-primary">
                      {person.role}
                    </p>
                    {/* Phones: the number sits under the name instead. */}
                    <a
                      href={`tel:${person.phone.tel}`}
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground sm:hidden"
                    >
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      {person.phone.display}
                    </a>
                  </div>
                  <a
                    href={`tel:${person.phone.tel}`}
                    className="hidden shrink-0 items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {person.phone.display}
                  </a>
                </li>
              ))}
            </ul>

            {/* Main line and email as one row of tap targets. */}
            <div className="mt-3 flex flex-wrap gap-2">
              <a
                href={`tel:${mainLine.tel}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" />
                {mainLine.display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-w-0 items-center gap-2 rounded-full bg-primary-soft px-3.5 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span className="truncate">{site.email}</span>
              </a>
            </div>

            <div className="mt-4 grid gap-4 border-t border-border pt-4 sm:grid-cols-2">
              <ContactItem
                icon={<Factory className="h-4 w-4" />}
                label="Factory"
              >
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {formattedAddress({ ...site.address, country: "" })}
                </p>
              </ContactItem>
              <ContactItem
                icon={<Building2 className="h-4 w-4" />}
                label="Office"
              >
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {formattedAddress({ ...site.office, country: "" })}
                </p>
              </ContactItem>
            </div>

            <div className="mt-4 flex flex-col gap-3 border-t border-border pt-3.5 sm:flex-row sm:items-center sm:justify-between">
              <p className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                {site.businessHours}
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#0e8046] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0b6b3a]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp us
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- Map ---------- */}
      <section className="border-t border-border bg-background">
        <Container className="py-10 sm:py-12">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-xl font-bold text-foreground">
              Visit the factory
            </h2>
            <p className="text-sm text-muted-foreground">
              Shree Kangan Food Park, Teghra, Begusarai, Bihar
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title={`Map showing the location of ${site.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                site.address.mapQuery,
              )}&output=embed`}
              className="h-[320px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-faint-foreground">
          {label}
        </p>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  );
}
