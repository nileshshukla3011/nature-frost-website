import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { Block } from "./Block";

/**
 * Standard hero band for inner pages: breadcrumb, eyebrow, title, intro.
 * Used by all eight non-home pages so they open consistently.
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb: string;
  compact?: boolean;
}) {
  return (
    <section className="border-b border-border bg-hero-tint">
      <Container
        className={
          compact ? "py-8 sm:py-10 lg:py-12" : "py-14 sm:py-16 lg:py-20"
        }
      >
        <Block>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li className="font-medium text-foreground" aria-current="page">
                {breadcrumb}
              </li>
            </ol>
          </nav>
        </Block>

        <Block>
          {eyebrow && (
            <p
              className={`${compact ? "mt-4" : "mt-6"} text-xs font-semibold uppercase tracking-[0.18em] text-primary`}
            >
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
        </Block>

        {description && (
          <Block>
            <p
              className={`${compact ? "mt-3" : "mt-5"} max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg`}
            >
              {description}
            </p>
          </Block>
        )}
      </Container>
    </section>
  );
}
