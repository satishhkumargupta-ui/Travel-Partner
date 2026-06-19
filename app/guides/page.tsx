"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Calendar, ArrowRight, BookOpen, Compass, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactModal } from "@/components/contact-modal"
import { allDestinations } from "@/components/destinations"

const tips = [
  {
    icon: Compass,
    title: "Choose the right season",
    desc: "Every destination has a sweet spot. Our guides tell you exactly when to visit for the best weather, fewer crowds, and lower prices.",
    color: "#fbbf24",
  },
  {
    icon: BookOpen,
    title: "Local customs & etiquette",
    desc: "Knowing a few cultural norms — from temple dress codes to tipping practices — can make the difference between a warm welcome and an awkward moment.",
    color: "#c084fc",
  },
  {
    icon: MapPin,
    title: "Hidden gems, not tourist traps",
    desc: "Our curators live and breathe these destinations. Every guide points you to the places only locals know — and away from overpriced tourist spots.",
    color: "#34d399",
  },
]

const FILTERS = ["All", "India", "Islands", "Mountains", "Culture"]

export default function GuidesPage() {
  const [contactOpen, setContactOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  const visible = allDestinations.filter(
    (d) => activeFilter === "All" || d.category === activeFilter
  )

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(140deg,#0d0b1e 0%,#1b1040 30%,#2e1b50 58%,#160d28 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute right-1/4 top-24 h-[28rem] w-[28rem] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle,#7c3f96,transparent 70%)" }} />
        <div className="absolute bottom-1/3 left-10 h-72 w-72 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle,#e8902a,transparent 70%)" }} />
      </div>

      <SiteHeader onBookingOpen={() => {}} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,#7c3f96 40%,#e8902a 60%,transparent)" }} />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.35em]"
            style={{
              background: "linear-gradient(90deg,#fbbf24,#e8902a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            Destination knowledge
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Travel Guides
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
            Insider knowledge from our curators — covering the best times to visit, hidden
            local gems, cultural tips, and everything you need to travel with confidence.
          </p>
        </div>
      </section>

      {/* Tips strip */}
      <section className="relative mx-auto max-w-5xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 p-6"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
            >
              <div
                className="flex size-10 items-center justify-center rounded-xl"
                style={{ background: `${tip.color}18`, border: `1px solid ${tip.color}30` }}
              >
                <tip.icon className="size-5" style={{ color: tip.color }} />
              </div>
              <h3 className="font-serif text-base font-semibold text-white">{tip.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destination guides grid */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mb-4">
          <p
            className="mb-2 text-xs font-semibold uppercase tracking-[0.28em]"
            style={{
              background: "linear-gradient(90deg,#fbbf24,#e8902a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            Browse by region
          </p>
          <h2 className="font-serif text-3xl font-semibold text-white sm:text-4xl">
            Destination guides
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="mt-6 mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === f
                  ? "border border-amber-400/40 bg-amber-400/15 text-amber-300"
                  : "border border-white/15 bg-white/8 text-white/60 hover:border-white/30 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((dest) => {
            const slug = dest.name.toLowerCase().replace(/\s+/g, "-")
            return (
              <Link
                key={dest.name}
                href={`/destinations/${slug}`}
                className="group overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/22 hover:shadow-xl"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-medium text-white backdrop-blur-md"
                    style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}
                  >
                    {dest.tag}
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1">
                    <Star className="size-3 fill-current text-amber-400" />
                    <span className="text-xs font-semibold text-white">{dest.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-serif text-lg font-semibold text-white">{dest.name}</h3>
                  <div className="mt-1.5 flex items-center gap-1.5 text-white/45">
                    <MapPin className="size-3.5" />
                    <span className="text-xs">{dest.country}</span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                    <div className="flex items-center gap-1.5 text-white/40">
                      <Clock className="size-3" />
                      <span className="text-xs">{dest.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40">
                      <Calendar className="size-3" />
                      <span className="text-xs">{dest.bestTime}</span>
                    </div>
                  </div>

                  <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-white/45">
                    {dest.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-amber-400 transition-all group-hover:gap-2">
                    Read guide <ArrowRight className="size-3.5" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white"
          style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)" }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%,#ffffff,transparent)" }} />
          <div className="relative">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Ready to turn the guide into a real trip?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75">
              Our travel curators will take any of these destinations and build a personalised
              itinerary around the way you love to travel.
            </p>
            <Link
              href="/plan"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
            >
              Start planning <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}
