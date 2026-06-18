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
      { label: "Our experts",  href: "/about#team" },
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
    <footer
      className="relative border-t border-white/8"
      style={{ background: "linear-gradient(140deg,#0a0818 0%,#160d2a 50%,#0d0b1e 100%)" }}
    >
      {/* Thin gradient accent line at top */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #7c3f96 40%, #e8902a 60%, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        {/* Main grid — 1 col on mobile, 2 on sm, 5 on md */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:grid-cols-5 md:gap-12">

          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 md:col-span-2">
            <a href="/" className="inline-flex items-center">
              <WanderlightLogo className="h-12 w-auto lg:h-14" />
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">
              Curated journeys to the world&apos;s most extraordinary places,
              designed around the way you love to travel.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/mrnoveember/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all hover:border-amber-400/40 hover:text-white"
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
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
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"isContact" in link && link.isContact ? (
                      <button
                        onClick={onContactOpen}
                        className="text-sm text-white/40 transition-colors hover:text-white/80"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white/40 transition-colors hover:text-white/80"
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
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Wanderlight. All rights reserved.
          </p>
          <p className="text-xs text-white/20 tracking-wide">
            Crafted with care for curious travellers.
          </p>
        </div>
      </div>
    </footer>
  )
}
