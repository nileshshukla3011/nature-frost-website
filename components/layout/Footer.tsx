import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
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

  // Only render icons for platforms that actually have a URL configured.
  const socialLinks = (
    Object.entries(site.social) as [keyof typeof socialIcons, string][]
  ).filter(([, url]) => url);

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Logo showTagline />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.shortDescription}
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="break-all">{site.email}</span>
              </a>

              {site.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex items-start gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{phone.display}</span>
                </a>
              ))}

              <p className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{formattedAddress()}</span>
              </p>
            </div>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex gap-2">
                {socialLinks.map(([platform, url]) => {
                  const SocialIcon = socialIcons[platform];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.name} on ${platform}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <SocialIcon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sitemap */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product links double as internal SEO signals. */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Our Products
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 lg:grid-cols-1 xl:grid-cols-2">
              {products.slice(0, 12).map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/#${product.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Government scheme credit */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Supported Under
            </h3>
            <div className="mt-4 rounded-2xl border border-border bg-card p-5">
              <p className="text-sm font-semibold text-primary">
                {site.government.ministry}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {site.government.authority}
              </p>
              <div className="mt-4 space-y-1.5 border-t border-border pt-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">Scheme:</span>{" "}
                  {site.government.scheme}
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">
                    Component:
                  </span>{" "}
                  {site.government.subScheme}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 sm:flex-row">
          <p className="text-center text-xs text-faint-foreground sm:text-left">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-center text-xs text-faint-foreground sm:text-right">
            {site.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}
