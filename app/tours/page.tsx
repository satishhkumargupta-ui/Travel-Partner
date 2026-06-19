"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Users, Clock, MapPin, Star, ArrowRight, Shield, HeartHandshake, Compass } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactModal } from "@/components/contact-modal"

const tours = [
  {
    id: "aegean-discovery",
    title: "Aegean Discovery",
    subtitle: "Santorini & Greek Islands",
    image: "/images/dest-santorini.png",
    country: "Greece",
    duration: "10 nights",
    groupSize: "8–14 people",
    price: "₹2,20,000",
    rating: "4.9",
    tag: "Island escape",
    category: "Islands",
    highlights: ["Caldera sunset cruise", "Private cave suite night", "Wine tasting at Assyrtiko vineyards", "Oia village at golden hour"],
    color: "#fbbf24",
    border: "rgba(251,191,36,0.22)",
    bg: "rgba(251,191,36,0.06)",
  },
  {
    id: "japan-immersion",
    title: "Japan Immersion",
    subtitle: "Kyoto, Osaka & Beyond",
    image: "/images/dest-kyoto.png",
    country: "Japan",
    duration: "12 nights",
    groupSize: "6–12 people",
    price: "₹2,80,000",
    rating: "5.0",
    tag: "Culture & temples",
    category: "Culture",
    highlights: ["Private tea ceremony", "Fushimi Inari at sunrise", "Bamboo grove walk", "Traditional ryokan stay"],
    color: "#c084fc",
    border: "rgba(192,132,252,0.22)",
    bg: "rgba(192,132,252,0.06)",
  },
  {
    id: "alpine-adventure",
    title: "Alpine Adventure",
    subtitle: "Swiss Alps & Mountain Villages",
    image: "/images/dest-alps.png",
    country: "Switzerland",
    duration: "9 nights",
    groupSize: "8–16 people",
    price: "₹2,60,000",
    rating: "4.8",
    tag: "Mountain adventure",
    category: "Mountains",
    highlights: ["Glacier Express journey", "Jungfraujoch summit", "Zermatt & Matterhorn", "Mountain chalet fondue evening"],
    color: "#34d399",
    border: "rgba(52,211,153,0.22)",
    bg: "rgba(52,211,153,0.06)",
  },
  {
    id: "morocco-magic",
    title: "Morocco Magic",
    subtitle: "Marrakech, Sahara & Atlas",
    image: "/images/dest-marrakech.png",
    country: "Morocco",
    duration: "8 nights",
    groupSize: "8–14 people",
    price: "₹1,70,000",
    rating: "4.7",
    tag: "Markets & spice",
    category: "Culture",
    highlights: ["Private riad stay", "Guided souk tour", "Sahara desert camp", "Atlas Mountains day trip"],
    color: "#fb923c",
    border: "rgba(251,146,60,0.22)",
    bg: "rgba(251,146,60,0.06)",
  },
  {
    id: "bali-bliss",
    title: "Bali Bliss",
    subtitle: "Temples, Rice Fields & Beaches",
    image: "/images/dest-bali.png",
    country: "Indonesia",
    duration: "11 nights",
    groupSize: "6–12 people",
    price: "₹1,90,000",
    rating: "4.9",
    tag: "Tropical retreat",
    category: "Islands",
    highlights: ["Mount Batur sunrise hike", "Ubud rice terrace cycling", "Uluwatu temple sunset", "Balinese wellness day"],
    color: "#60a5fa",
    border: "rgba(96,165,250,0.22)",
    bg: "rgba(96,165,250,0.06)",
  },
  {
    id: "india-heritage",
    title: "India Heritage Circuit",
    subtitle: "Jaipur, Kerala & Kashmir",
    image: "/images/dest-jaipur.jpg",
    country: "India",
    duration: "14 nights",
    groupSize: "8–16 people",
    price: "₹1,20,000",
    rating: "4.8",
    tag: "Royal heritage",
    category: "India",
    highlights: ["Amber Fort & palaces", "Kerala backwater houseboat", "Dal Lake shikara ride", "Gulmarg gondola"],
    color: "#f472b6",
    border: "rgba(244,114,182,0.22)",
    bg: "rgba(244,114,182,0.06)",
  },
]

const whyGroup = [
  {
    icon: Users,
    title: "Small groups only",
    desc: "We cap every tour at 16 people — small enough to feel personal, large enough to share the experience.",
    color: "#fbbf24",
  },
  {
    icon: Compass,
    title: "Expert local guides",
    desc: "Every tour is led by a vetted local expert who knows places no guidebook will ever mention.",
    color: "#c084fc",
  },
  {
    icon: Shield,
    title: "All logistics handled",
    desc: "Transfers, accommodation, meals, and entry tickets — all taken care of before you arrive.",
    color: "#34d399",
  },
  {
    icon: HeartHandshake,
    title: "Like-minded travellers",
    desc: "Our group profiling ensures you travel with people who share your pace, interests, and travel style.",
    color: "#60a5fa",
  },
]

const FILTERS = ["All", "Islands", "Mountains", "Culture", "India"]

export default function ToursPage() {
  const [contactOpen, setContactOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  const visible = tours.filter((t) => activeFilter === "All" || t.category === activeFilter)

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(140deg,#0d0b1e 0%,#1b1040 30%,#2e1b50 58%,#160d28 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-24 h-[30rem] w-[30rem] rounded-full opacity-18 blur-3xl"
          style={{ background: "radial-gradient(circle,#7c3f96,transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-10 h-80 w-80 rounded-full opacity-12 blur-3xl"
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
            Explore together
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Group Tours
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55">
            Small groups, expert guides, and handcrafted routes across the world&apos;s most
            extraordinary destinations. Travel with people who love travel as much as you do.
          </p>
        </div>
      </section>

      {/* Why group tours */}
      <section className="relative mx-auto max-w-5xl px-5 pb-16 sm:px-6 sm:pb-20 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyGroup.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 p-5"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
            >
              <div
                className="flex size-10 items-center justify-center rounded-xl"
                style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
              >
                <item.icon className="size-5" style={{ color: item.color }} />
              </div>
              <h3 className="font-serif text-base font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tours grid */}
      <section className="relative mx-auto max-w-7xl px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap gap-2">
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((tour) => (
            <article
              key={tour.id}
              className="group overflow-hidden rounded-3xl border transition-all duration-300 hover:border-white/20 hover:shadow-2xl"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.10)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.20)" }}
                >
                  {tour.tag}
                </span>
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                  <Star className="size-3.5 fill-current text-amber-400" />
                  <span className="text-sm font-semibold text-white">{tour.rating}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{
                    background: `linear-gradient(90deg,${tour.color},#e8902a)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}
                >
                  {tour.subtitle}
                </p>
                <h2 className="font-serif text-xl font-semibold text-white">{tour.title}</h2>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  <div className="flex items-center gap-1.5 text-white/50">
                    <MapPin className="size-3.5 text-white/30" />
                    <span className="text-xs">{tour.country}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/50">
                    <Clock className="size-3.5 text-white/30" />
                    <span className="text-xs">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/50">
                    <Users className="size-3.5 text-white/30" />
                    <span className="text-xs">{tour.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5">
                  {tour.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full" style={{ background: tour.color }} />
                      <span className="text-xs leading-relaxed text-white/50">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-white/30">from</p>
                    <p
                      className="font-serif text-xl font-semibold"
                      style={{
                        background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      }}
                    >
                      {tour.price}
                    </p>
                  </div>
                  <Link
                    href="/plan"
                    className="flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                    style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)" }}
                  >
                    Book tour <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-5xl px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white"
          style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)" }}
        >
          <div className="absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%,#ffffff,transparent)" }} />
          <div className="relative">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Don&apos;t see the tour you&apos;re after?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/75">
              We build custom group itineraries too. Tell us where you want to go and
              we&apos;ll design the perfect journey for your group.
            </p>
            <Link
              href="/plan"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
            >
              Plan a custom group trip <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}
