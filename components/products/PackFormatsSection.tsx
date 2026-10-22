import { Package } from "lucide-react";
import { packFormats } from "@/lib/products";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { Card } from "@/components/ui/Card";

/** The pack formats, shared by the catalogue and every product page. */
export function PackFormatsSection() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="Pack Formats"
        title="Packed the way you buy"
        description="The same product, formatted for the way it moves through your business."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {packFormats.map((format) => (
          <Block key={format.title} className="h-full">
            <Card className="flex h-full flex-col">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {format.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {format.detail}
              </p>
              <p className="mt-4 border-t border-border pt-3 text-xs font-medium text-muted-foreground">
                {format.audience}
              </p>
            </Card>
          </Block>
        ))}
      </div>

      <Block className="mx-auto mt-10 max-w-2xl text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Pack sizes shown are indicative. Final formats, weights and artwork
          are confirmed against your specification at the quotation stage.
        </p>
      </Block>
    </Section>
  );
}
