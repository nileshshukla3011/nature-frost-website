import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Block } from "@/components/ui/Block";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { featuredProducts, products } from "@/lib/products";

export function ProductPreview() {
  return (
    <Section id="products">
      <SectionHeading
        eyebrow="Our Products"
        title="Individually quick frozen, ready when you are"
        description={`A range of ${products.length} frozen vegetables and fruits — with custom cuts, blends and pack formats developed to your specification.`}
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProducts.slice(0, 6).map((product, i) => (
          <Block key={product.slug} className="h-full">
            <ProductCard product={product} />
          </Block>
        ))}
      </div>

      <Block className="mt-12 text-center">
        <Button href="/products" size="lg">
          View the Full Range
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Block>
    </Section>
  );
}
