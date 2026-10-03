import Link from "next/link";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Facebook,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Snowflake,
  Twitter,
} from "lucide-react";
import { formattedAddress, navigation, site } from "@/lib/site";
import { products } from "@/lib/products";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const socialIcons = {
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
} as const;

export function Footer() {
  const year = new Date().getFullYear();
  const socialLinks = (
    Object.entries(site.social) as [keyof typeof socialIcons, string][]
  ).filter(([, url]) => url);

  return (
    <footer className="footer-surface relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <span className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <span className="absolute -bottom-48 left-[18%] h-96 w-96 rounded-full bg-sky-400/[0.07] blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <Container className="pb-7 pt-8 sm:pb-8 sm:pt-10 lg:pt-12">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#12432f] via-[#0c3024] to-[#102d36] p-6 shadow-2xl shadow-black/20 sm:p-9 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10 sm:-right-4 sm:-top-36 sm:h-96 sm:w-96"
          />
          <div className="relative flex flex-col gap-7 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200/20 bg-emerald-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                <Snowflake className="h-3.5 w-3.5" aria-hidden="true" />
                Fresh thinking. Reliable supply.
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Let’s find the right fit for your business.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
                Tell us what you need — product, cut, pack size or volume — and
                our team will help you plan the next step.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3 text-sm font-bold text-emerald-950 shadow-lg shadow-emerald-950/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200 sm:min-h-14 sm:px-7 sm:text-base"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <div className="grid gap-x-8 gap-y-11 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <div className="lg:col-span-4">
            <Logo showTagline inverted />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {site.shortDescription}
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/75">
              <MapPin className="h-3.5 w-3.5 text-emerald-300" />
              Proudly processing in Bihar, India
            </p>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex gap-2.5">
                {socialLinks.map(([platform, url]) => {
                  const SocialIcon = socialIcons[platform];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.name} on ${platform}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/75 transition-colors hover:border-emerald-300/60 hover:bg-emerald-300/10 hover:text-emerald-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
                    >
                      <SocialIcon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <nav aria-label="Footer company links" className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navigation
                .filter((item) => item.href !== "/contact")
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-6 items-center text-sm text-white/70 transition-colors hover:text-emerald-200 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          <nav aria-label="Footer product links" className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
              From our range
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/#${product.slug}`}
                    className="inline-flex min-h-6 items-center text-sm text-white/70 transition-colors hover:text-emerald-200 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/products"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
            >
              See all products <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
              Get in touch
            </h3>
            <div className="mt-5 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-10 items-center gap-3 text-sm text-white/75 transition-colors hover:text-emerald-200"
              >
                <Mail className="h-4 w-4 shrink-0 text-emerald-300" />
                <span className="break-all">{site.email}</span>
              </a>
              {site.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex min-h-10 items-center gap-3 text-sm text-white/75 transition-colors hover:text-emerald-200"
                >
                  <Phone className="h-4 w-4 shrink-0 text-emerald-300" />
                  {phone.display}
                </a>
              ))}
              <p className="flex items-start gap-3 pt-1 text-sm leading-relaxed text-white/60">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <span>{formattedAddress()}</span>
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">
                <Landmark className="h-4 w-4" />
                Government supported
              </p>
              <p className="mt-2 text-xs leading-relaxed text-white/75">
                {site.government.ministry} · {site.government.scheme}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-white/60">
                {site.government.authority} · {site.government.subScheme}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/60">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-xs font-medium text-white/65">{site.tagline}</p>
          <Link
            href="#main"
            className="inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold text-white/65 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
