"use client"

import { Globe } from "lucide-react"

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", href: "#destinations" },
      { label: "Curated journeys", href: "#journeys" },
      { label: "Group tours", href: "#" },
      { label: "Travel guides", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our experts", href: "#" },
      { label: "Sustainability", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "#", isContact: true },
      { label: "FAQs", href: "/faqs" },
      { label: "Terms & conditions", href: "/terms" },
      { label: "Booking terms", href: "/booking-terms" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
]

type Props = { onContactOpen: () => void }

export function SiteFooter({ onContactOpen }: Props) {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2 text-foreground">
              <Globe className="size-6 text-primary" aria-hidden="true" />
              <span className="font-serif text-xl font-semibold">Wanderlight</span>
            </a>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Curated journeys to the world&apos;s most extraordinary places, designed around the way
              you love to travel.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"isContact" in link && link.isContact ? (
                      <button
                        onClick={onContactOpen}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wanderlight. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">Instagram</a>
            <a href="#" className="hover:text-foreground">Twitter</a>
            <a href="#" className="hover:text-foreground">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
