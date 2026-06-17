"use client"

import { useState } from "react"
import { Plane, MapPin, Compass } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div
        className="relative overflow-hidden rounded-3xl px-6 py-20 text-center text-white sm:px-16"
        style={{ background: "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 52%, #e8902a 100%)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Decorative floating circles */}
        <div className="absolute -top-14 -left-14 h-56 w-56 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/5" />
        <div className="absolute top-1/2 left-1/3 h-28 w-28 -translate-y-1/2 rounded-full bg-white/5" />

        {/* Decorative icons */}
        <Plane  className="absolute top-8  right-20 size-6 rotate-45 text-white/20" aria-hidden="true" />
        <MapPin className="absolute bottom-10 left-16 size-5 text-white/20"               aria-hidden="true" />
        <Compass className="absolute top-10  left-28 size-6 text-white/15"               aria-hidden="true" />

        {/* Content */}
        <div className="relative">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/55">
            Stay inspired
          </p>

          <h2 className="mx-auto max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl">
            Let&apos;s plan your<br className="hidden sm:block" /> next adventure
          </h2>

          <p className="mx-auto mt-5 max-w-md text-pretty text-sm leading-relaxed text-white/65">
            Join our newsletter for travel inspiration, insider guides, and early access to new
            journeys.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (email) setSent(true)
            }}
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
          >
            <label className="flex-1">
              <span className="sr-only">Email address</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm text-white placeholder:text-white/45 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 shadow-lg transition-all hover:bg-white/90 hover:shadow-xl active:scale-95"
            >
              {sent ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>

          {sent && (
            <p className="mt-5 text-sm text-white/70" role="status">
              Thanks for joining — adventure awaits in your inbox.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
