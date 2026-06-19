"use client"


const columns = [
  {
    title: "Explore",
    links: [
      { label: "Destinations",  href: "/#destinations" },
      { label: "Group tours",   href: "/tours"         },
      { label: "Travel guides", href: "/guides"        },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us",    href: "/about"      },
      { label: "Our experts", href: "/about#team" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact",            href: "#", isContact: true },
      { label: "FAQs",               href: "/faqs"              },
      { label: "Terms & conditions", href: "/terms"             },
      { label: "Booking terms",      href: "/booking-terms"     },
      { label: "Privacy",            href: "/privacy"           },
    ],
  },
]

type Props = { onContactOpen: () => void }

export function SiteFooter({ onContactOpen }: Props) {
  return (
    <footer
      className="relative"
      style={{ background: "linear-gradient(140deg,#0a0818 0%,#160d2a 50%,#0d0b1e 100%)" }}
    >
      {/* Ambient glows — contained so they don't clip bottom content */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -bottom-40 left-1/4 h-[28rem] w-[28rem] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle,#7c3f96,transparent 70%)" }}
        />
        <div
          className="absolute -bottom-24 right-1/4 h-80 w-80 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle,#e8902a,transparent 70%)" }}
        />
      </div>

      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg,transparent,#7c3f96 40%,#e8902a 60%,transparent)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-8 lg:pt-20">

        {/* Brand */}
        <div className="pb-14">
          <div className="max-w-sm">
            <h2
              className="font-serif text-4xl font-semibold sm:text-5xl"
              style={{
                background: "linear-gradient(135deg,#ffffff 0%,#c084fc 45%,#fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.12em",
              }}
            >
              Wanderlight
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/42">
              Curated journeys to the world&apos;s most extraordinary places,
              designed around the way you love to travel.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full"
          style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.10) 30%,rgba(255,255,255,0.10) 70%,transparent)" }}
        />

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 pt-12 sm:grid-cols-3 md:gap-16">
          {columns.map((col) => (
            <div key={col.title}>
              <h3
                className="mb-5 text-xs font-semibold uppercase tracking-[0.22em]"
                style={{
                  background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"isContact" in link && link.isContact ? (
                      <button
                        onClick={onContactOpen}
                        className="text-sm text-white/38 transition-colors hover:text-white/80"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-white/38 transition-colors hover:text-white/80"
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
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/8 pt-8 sm:flex-row sm:justify-between">

          {/* Copyright */}
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Wanderlight. All rights reserved.
          </p>

          {/* Social icon — centre on mobile, middle on desktop */}
          <a
            href="https://www.instagram.com/mrnoveember/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="flex size-8 items-center justify-center rounded-full border border-white/12 text-white/35 transition-all hover:border-amber-400/40 hover:text-amber-400"
            style={{ background: "rgba(255,255,255,0.04)" }}
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* Tagline */}
          <p
            className="text-xs tracking-wide"
            style={{
              background: "linear-gradient(90deg,#c084fc,#fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Crafted with care for curious travellers.
          </p>
        </div>

      </div>
    </footer>
  )
}
