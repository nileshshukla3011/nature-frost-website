"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { navigation, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Nav links minus "Contact", which becomes the header's call-to-action button.
  const links = navigation.filter((item) => item.href !== "/contact");

  /**
   * Only real routes get an active state. Most nav entries are anchors into
   * the home page ("/#about"), which all live at "/" — highlighting them would
   * mark every one of them active at once.
   */
  const isActive = (href: string) => {
    if (href.includes("#")) return false;
    // Trailing slashes are on, so "/products" and "/products/" must both match.
    const current = pathname.replace(/\/+$/, "") || "/";
    return href === "/" ? current === "/" : current.startsWith(href);
  };

  // Condense the header once the page has scrolled past the hero's top edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => setMenuOpen(false), [pathname]);

  // While the drawer is open: lock background scrolling and allow Esc to close.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      {/* Keyboard users can jump straight past the nav to the content. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-primary focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-background/85 shadow-soft backdrop-blur-xl"
            : "border-b border-transparent bg-background/60 backdrop-blur-sm",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center transition-all duration-300",
              scrolled ? "py-2.5" : "py-4",
            )}
          >
            <Logo />
          </div>

          {/* Desktop navigation — 8 links only fit comfortably at xl and up. */}
          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Primary"
          >
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle className="hidden sm:flex" />

            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-200 hover:bg-primary-hover   lg:inline-flex"
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} />
              Get in Touch
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-alt xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ---------- Mobile drawer ---------- */}
      {/*
        `overflow-hidden` matters: while closed, the panel is translated a full
        width to the right. Without clipping it here it sits outside the
        viewport and gives the whole page a horizontal scrollbar on mobile.
      */}
      <div
        className={cn(
          "fixed inset-0 z-60 overflow-hidden xl:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-[#04120c]/55 backdrop-blur-sm transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMenuOpen(false)}
        />

        <div
          id="mobile-menu"
          role="dialog"
          aria-modal={menuOpen}
          aria-label="Site menu"
          className={cn(
            "absolute right-0 top-0 flex h-full w-[min(21rem,88vw)] flex-col border-l border-border bg-background shadow-lift transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-surface-alt"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-primary-soft text-primary"
                        : "text-foreground hover:bg-surface-alt",
                    )}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4 border-t border-border px-5 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                Theme
              </span>
              <ThemeToggle />
            </div>

            <div className="space-y-2">
              {site.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="flex items-center gap-2.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {phone.display}
                </a>
              ))}
            </div>

            <Link
              href="/contact"
              className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
