import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site, formattedAddress, whatsappLink } from "@/lib/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Contact Nature Frost for bulk requirements, product specifications, private-label opportunities, HoReCa supply, distribution partnerships and export enquiries.",
  path: "/contact",
  keywords: ["contact frozen food supplier India", "IQF vegetables enquiry"],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        breadcrumb="Contact Us"
        eyebrow="Partner With Nature Frost"
        title="Let's talk about your requirement"
        description="Bulk supply, product specifications, private label and export enquiries—tell us what your business needs."
        compact
      />

      <Section size="compact">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* ---------- Form ---------- */}
          <div className="lg:col-span-3">
            <Block>
              <ContactForm />
            </Block>
          </div>

          {/* ---------- Details ---------- */}
          <div className="space-y-6 lg:col-span-2">
            <Block>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-7">
                <h2 className="text-lg font-bold text-foreground">
                  Contact details
                </h2>

                <div className="mt-5 space-y-5">
                  <ContactItem
                    icon={<Phone className="h-5 w-5" />}
                    label="Phone"
                  >
                    <div className="space-y-1">
                      {site.phones.map((phone) => (
                        <a
                          key={phone.tel}
                          href={`tel:${phone.tel}`}
                          className="block text-sm font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {phone.display}
                        </a>
                      ))}
                    </div>
                  </ContactItem>

                  <ContactItem
                    icon={<Mail className="h-5 w-5" />}
                    label="Email"
                  >
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {site.email}
                    </a>
                  </ContactItem>

                  <ContactItem
                    icon={<MapPin className="h-5 w-5" />}
                    label="Address"
                  >
                    <p className="text-sm text-muted-foreground">
                      {formattedAddress()}
                    </p>
                  </ContactItem>

                  <ContactItem
                    icon={<Clock className="h-5 w-5" />}
                    label="Business hours"
                  >
                    <p className="text-sm text-muted-foreground">
                      {site.businessHours}
                    </p>
                  </ContactItem>
                </div>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#0e8046] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b6b3a]"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </Block>

            {/* Map */}
            <Block>
              <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
                <iframe
                  title={`Map showing the location of ${site.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    site.address.mapQuery,
                  )}&output=embed`}
                  className="h-[280px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="mt-2.5 text-xs leading-relaxed text-faint-foreground">
                Map shows an approximate location. Exact facility address is
                confirmed with buyers arranging a visit.
              </p>
            </Block>
          </div>
        </div>
      </Section>
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
    <div className="flex gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wider text-faint-foreground">
          {label}
        </p>
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
