import { Container } from "@/components/ui/Container";
import { Block } from "@/components/ui/Block";
import { StatValue } from "@/components/ui/StatValue";
import { keyStats } from "@/lib/content";

export function StatsBand() {
  return (
    <section className="border-y border-border bg-surface">
      <Container className="py-10 sm:py-12">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {keyStats.map((stat, i) => (
            <Block key={stat.label} className="text-center">
              <dd className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                <StatValue
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </dd>
              <dt className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm sm:normal-case sm:tracking-normal">
                {stat.label}
              </dt>
            </Block>
          ))}
        </dl>
      </Container>
    </section>
  );
}
