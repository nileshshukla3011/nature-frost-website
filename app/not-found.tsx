import { ArrowLeft, Snowflake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { navigation } from "@/lib/site";
import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="bg-hero-tint">
      <Container className="flex min-h-[62vh] flex-col items-center justify-center py-20 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-soft text-primary">
          <Snowflake className="h-8 w-8" />
        </span>

        <p className="mt-8 font-display text-6xl font-extrabold text-primary sm:text-7xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
          This page seems to have thawed
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
          The page you are looking for does not exist or has moved. Here is the
          way back.
        </p>

        <Button href="/" size="lg" className="mt-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>

        <nav className="mt-10" aria-label="Site pages">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navigation
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
