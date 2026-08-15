import { ArrowRight, Mail, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CTABand({
  title = "Let's talk about your requirement",
  description = "Whether you are a food manufacturer, hotel, restaurant, retailer, distributor or institutional buyer, we would be pleased to explore a long-term business relationship.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section tone="brand" size="compact" className="overflow-hidden">
      <div className="dot-grid pointer-events-none absolute inset-0 text-white" />

      <Block className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="white" size="lg">
            Send an Enquiry
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            href={`tel:${site.phones[0].tel}`}
            size="lg"
            className="border-2 border-white/40 bg-transparent text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            {site.phones[0].display}
          </Button>
        </div>

        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          <Mail className="h-4 w-4" />
          {site.email}
        </a>
      </Block>
    </Section>
  );
}
