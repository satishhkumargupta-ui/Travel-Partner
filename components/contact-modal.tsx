"use client"

import { useEffect } from "react"
import { X, Phone, Mail, MapPin, Globe, Share2, AtSign } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = { onClose: () => void }

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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact us"
        className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl bg-background shadow-2xl overflow-hidden"
      >
        {/* Decorative header band */}
        <div
          className="h-28 w-full relative"
          style={{
            background:
              "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)",
          }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full bg-white/20 p-2 backdrop-blur hover:bg-white/30 transition-colors"
          >
            <X className="size-4 text-white" />
          </button>

          {/* Avatar */}
          <div className="absolute -bottom-10 left-6 size-20 rounded-full bg-primary ring-4 ring-background flex items-center justify-center shadow-lg">
            <span className="font-serif text-2xl font-bold text-primary-foreground">SK</span>
          </div>
        </div>

        <div className="pt-14 px-6 pb-6">
          {/* Name & title */}
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Satish Kumar Gupta
            </h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Founder &amp; Lead Travel Curator, Wanderlight
            </p>
          </div>

          {/* Contact details */}
          <ul className="flex flex-col gap-4 mb-6">
            <li className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Phone className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Phone / WhatsApp</p>
                <a
                  href="tel:+918889899041"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  +91-8889899041
                </a>
              </div>
            </li>

            <li className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Mail className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <a
                  href="mailto:gsatish133@gmail.com"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  gsatish133@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <MapPin className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                <p className="text-sm font-medium text-foreground">India</p>
              </div>
            </li>

            <li className="flex items-center gap-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Globe className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Website</p>
                <p className="text-sm font-medium text-foreground">wanderlight.travel</p>
              </div>
            </li>
          </ul>

          {/* Divider */}
          <div className="border-t border-border mb-5" />

          {/* Business hours */}
          <div className="rounded-2xl bg-secondary px-4 py-3 mb-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
              Available
            </p>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Mon – Fri</span>
              <span className="font-medium text-foreground">9:00 AM – 7:00 PM IST</span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-muted-foreground">Saturday</span>
              <span className="font-medium text-foreground">10:00 AM – 4:00 PM IST</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3 mb-5">
            {[
              { icon: AtSign, label: "Instagram" },
              { icon: Share2, label: "Twitter / X" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                aria-label={label}
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-border py-2 text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
              >
                <Icon className="size-4" />
                {label}
              </button>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="w-full rounded-full"
          >
            <a href="tel:+918889899041">
              <Phone className="size-4" />
              Call now
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
