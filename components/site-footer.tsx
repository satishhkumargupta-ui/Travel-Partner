"use client"

import { WanderlightLogo } from "@/components/logo"

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", href: "/#destinations" },
      { label: "Group tours",   href: "#" },
      { label: "Travel guides", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us",     href: "/about" },
      { label: "Our experts",  href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact",           href: "#", isContact: true },
      { label: "FAQs",              href: "/faqs" },
      { label: "Terms & conditions",href: "/terms" },
      { label: "Booking terms",     href: "/booking-terms" },
      { label: "Privacy",           href: "/privacy" },
    ],
  },
]

type Props = { onContactOpen: () => void }

export function SiteFooter({ onContactOpen }: Props) {
  return (
    <footer className="border-t border-border/50 bg-background">
      {/* Thin gradient accent line at top */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #7c3f96 40%, #e8902a 60%, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-5">

          {/* Brand column */}
          <div className="col-span-2">
            <a href="/" className="inline-flex items-center text-foreground">
              <WanderlightLogo className="h-14 w-auto text-primary" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground/80">
              Curated journeys to the world&apos;s most extraordinary places,
              designed around the way you love to travel.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/mrnoveember/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"isContact" in link && link.isContact ? (
                      <button
                        onClick={onContactOpen}
                        className="text-sm text-muted-foreground/75 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground/75 transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} Wanderlight. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 tracking-wide">
            Crafted with care for curious travellers.
          </p>
        </div>
      </div>
    </footer>
  )
}
