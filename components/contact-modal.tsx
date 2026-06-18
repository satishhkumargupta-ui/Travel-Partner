"use client"

import { useEffect } from "react"
import { X, Phone, Mail, MapPin, Globe } from "lucide-react"

type Props = { onClose: () => void }

const contactItems = [
  { icon: Phone, label: "Phone / WhatsApp", value: "+91-8889899041",     href: "tel:+918889899041"           },
  { icon: Mail,  label: "Email",            value: "gsatish133@gmail.com", href: "mailto:gsatish133@gmail.com" },
  { icon: MapPin,label: "Location",         value: "India",               href: null                          },
  { icon: Globe, label: "Website",          value: "wanderlight.travel",  href: null                          },
]

export function ContactModal({ onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto"
      style={{ animation: "contactIn 0.45s cubic-bezier(.22,.68,0,1.2) both" }}
    >
      {/* Full-screen dark background */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(140deg, #0d0b1e 0%, #1b1040 30%, #2e1b50 58%, #160d28 100%)" }}
      />

      {/* Ambient colour blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #7c3f96 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full opacity-18 blur-3xl"
          style={{ background: "radial-gradient(circle, #e8902a 0%, transparent 70%)" }} />
        <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full opacity-12 blur-3xl"
          style={{ background: "radial-gradient(circle, #34d399 0%, transparent 70%)" }} />
      </div>

      {/* Brand accent line */}
      <div className="relative h-px w-full shrink-0"
        style={{ background: "linear-gradient(90deg, transparent, #7c3f96 40%, #e8902a 60%, transparent)" }} />

      {/* Close button */}
      <div className="relative flex shrink-0 justify-end p-5">
        <button
          onClick={onClose}
          className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
        >
          <X className="size-4" />
          Close
        </button>
      </div>

      {/* Main content */}
      <div className="relative flex flex-1 items-center justify-center px-6 pb-12">
        <div className="w-full max-w-4xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

            {/* ── Left: Profile card ── */}
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 p-7"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)" }}
            >
              {/* Gradient strip at top */}
              <div
                className="absolute inset-x-0 top-0 h-36 rounded-t-3xl"
                style={{ background: "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)" }}
              />
              {/* Subtle shimmer overlay */}
              <div
                className="absolute inset-x-0 top-0 h-36 rounded-t-3xl opacity-30"
                style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)" }}
              />

              {/* Avatar */}
              <div className="relative z-10 mt-20 flex size-20 items-center justify-center rounded-2xl border-2 border-white/25 shadow-2xl"
                style={{ background: "linear-gradient(135deg, #1b1a5e, #7c3f96)" }}>
                <span className="font-serif text-3xl font-bold text-white">SK</span>
              </div>

              {/* Name */}
              <div className="relative z-10 mt-5">
                <h2 className="font-serif text-2xl font-semibold text-white">Satish Kumar Gupta</h2>
                <p className="mt-1 text-sm text-white/50">Founder &amp; Lead Travel Curator</p>
                <p className="text-sm font-medium text-amber-400/80">Wanderlight</p>
              </div>

              {/* Availability */}
              <div
                className="relative z-10 mt-6 rounded-2xl border border-white/10 p-4"
                style={{ background: "rgba(251,191,36,0.06)" }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400/70">
                  Available hours
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50">Mon – Fri</span>
                  <span className="font-medium text-white">9:00 AM – 7:00 PM IST</span>
                </div>
                <div className="mt-1.5 flex justify-between text-sm">
                  <span className="text-white/50">Saturday</span>
                  <span className="font-medium text-white">10:00 AM – 4:00 PM IST</span>
                </div>
              </div>

              {/* Social links */}
              <div className="relative z-10 mt-4 flex gap-3">
                <a
                  href="https://www.instagram.com/mrnoveember/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 py-2.5 text-sm text-white/55 transition-all hover:border-amber-400/40 hover:text-white"
                >
                  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 py-2.5 text-sm text-white/55 transition-all hover:border-amber-400/40 hover:text-white">
                  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.766l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter / X
                </button>
              </div>
            </div>

            {/* ── Right: Contact info ── */}
            <div className="flex flex-col gap-6">
              <div>
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-[0.25em]"
                  style={{
                    background: "linear-gradient(90deg, #fbbf24, #e8902a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Get in touch
                </p>
                <h3 className="font-serif text-4xl font-semibold text-white leading-tight">
                  Let&apos;s plan your<br />
                  <span
                    className="font-light italic"
                    style={{
                      background: "linear-gradient(90deg, #c084fc, #fbbf24)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    next adventure
                  </span>
                </h3>
                <p className="mt-4 leading-relaxed text-white/50">
                  Ready to explore? Reach out and we&apos;ll craft a journey tailored just for you.
                </p>
              </div>

              {/* Contact items */}
              <div className="flex flex-col gap-3">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 p-4 transition-all duration-200 hover:border-amber-400/25 hover:scale-[1.01]"
                    style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}
                  >
                    <div
                      className="flex size-11 shrink-0 items-center justify-center rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(251,191,36,0.15), rgba(232,144,42,0.22))",
                        border: "1px solid rgba(251,191,36,0.25)",
                        boxShadow: "0 0 12px rgba(251,191,36,0.15)",
                      }}
                    >
                      <item.icon className="size-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/35">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm font-medium text-white transition-colors hover:text-amber-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call CTA */}
              <a
                href="tel:+918889899041"
                className="flex items-center justify-center gap-2.5 rounded-full py-4 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)",
                  boxShadow: "0 8px 32px rgba(124,63,150,0.45)",
                }}
              >
                <Phone className="size-4" />
                Call now — +91-8889899041
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes contactIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1);    }
        }
      `}</style>
    </div>
  )
}
