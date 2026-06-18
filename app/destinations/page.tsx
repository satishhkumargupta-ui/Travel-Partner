"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Star, Search, MapPin, SlidersHorizontal, X } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactModal } from "@/components/contact-modal"
import { allDestinations } from "@/components/destinations"

const FILTERS = ["All", "India", "Islands", "Mountains", "Culture"]

const SORT_OPTIONS = [
  { label: "Featured",       value: "featured"  },
  { label: "Rating: High",   value: "rating"    },
  { label: "Price: Low",     value: "price-asc" },
  { label: "Price: High",    value: "price-desc"},
]

function parsePrice(p: string) {
  return parseInt(p.replace(/[₹,]/g, ""), 10) || 0
}

export default function DestinationsPage() {
  const router                            = useRouter()
  const [activeFilter, setActiveFilter]   = useState("All")
  const [search,       setSearch]         = useState("")
  const [sort,         setSort]           = useState("featured")
  const [contactOpen,  setContactOpen]    = useState(false)

  const visible = useMemo(() => {
    let list = allDestinations.filter((d) => {
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.tag.toLowerCase().includes(q)
      const matchFilter = activeFilter === "All" || d.category === activeFilter
      return matchSearch && matchFilter
    })

    if (sort === "rating")     list = [...list].sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
    if (sort === "price-asc")  list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
    if (sort === "price-desc") list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price))

    return list
  }, [activeFilter, search, sort])

  function goTo(name: string) {
    router.push(`/destinations/${name.toLowerCase().replace(/\s+/g, "-")}`)
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(140deg,#0d0b1e 0%,#1b1040 30%,#2e1b50 58%,#160d28 100%)" }}
    >
      <SiteHeader onBookingOpen={() => {}} />

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-24 h-[30rem] w-[30rem] rounded-full opacity-18 blur-3xl"
          style={{ background: "radial-gradient(circle,#7c3f96,transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-10 h-80 w-80 rounded-full opacity-12 blur-3xl"
          style={{ background: "radial-gradient(circle,#e8902a,transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle,#34d399,transparent 70%)" }} />
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-14 pt-36">
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,#7c3f96 40%,#e8902a 60%,transparent)" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/65 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
          >
            <ArrowLeft className="size-4" /> Back to home
          </Link>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.42em]"
                style={{
                  background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                All destinations
              </p>
              <h1
                className="font-serif font-semibold leading-[0.95] text-white"
                style={{ fontSize: "clamp(2.4rem,5.5vw,5rem)" }}
              >
                Every place worth{" "}
                <span
                  className="font-light italic"
                  style={{
                    background: "linear-gradient(90deg,#c084fc,#fbbf24)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}
                >
                  the journey
                </span>
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/50">
                {allDestinations.length} handpicked destinations — from Himalayan highlands to tropical islands and ancient cultural capitals.
              </p>
            </div>

            {/* Search bar */}
            <div className="w-full max-w-sm shrink-0">
              <div
                className="flex items-center gap-3 rounded-2xl border border-white/25 px-4 py-3"
                style={{ background: "rgba(255,255,255,0.10)", backdropFilter: "blur(16px)" }}
              >
                <Search className="size-4 shrink-0 text-white/40" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search destinations…"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                />
                {search && (
                  <button onClick={() => setSearch("")} className="text-white/40 hover:text-white">
                    <X className="size-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Filters + Sort row */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200"
                  style={activeFilter === f ? {
                    background: "linear-gradient(135deg,rgba(251,191,36,0.22),rgba(232,144,42,0.28))",
                    borderColor: "rgba(251,191,36,0.60)", color: "#fbbf24",
                    boxShadow: "0 0 18px rgba(251,191,36,0.22)",
                  } : {
                    background: "rgba(255,255,255,0.10)", borderColor: "rgba(255,255,255,0.30)",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="size-4 shrink-0 text-white/40" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-xl border border-white/25 bg-white/10 px-3 py-1.5 text-sm text-white/90 focus:outline-none [color-scheme:dark]"
              >
                {SORT_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result count */}
          <p className="mt-5 text-xs text-white/30">
            Showing {visible.length} of {allDestinations.length} destinations
            {activeFilter !== "All" && ` · ${activeFilter}`}
            {search && ` · "${search}"`}
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        {visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <MapPin className="mb-4 size-12 text-white/20" />
            <p className="font-serif text-2xl text-white/60">No destinations found</p>
            <p className="mt-2 text-sm text-white/35">Try a different search or clear the filter.</p>
            <button
              onClick={() => { setSearch(""); setActiveFilter("All") }}
              className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm text-white/60 transition-all hover:bg-white/10 hover:text-white"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((d, i) => (
              <article
                key={d.name}
                onClick={() => goTo(d.name)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-white/8 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(12px)",
                  animation: `cardFadeIn 0.5s cubic-bezier(.22,.68,0,1.2) ${i * 0.05}s both`,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.30)",
                }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={d.image}
                    alt={`${d.name}, ${d.country}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Tag */}
                  <span
                    className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
                    style={{ background: "rgba(0,0,0,0.45)" }}
                  >
                    {d.tag}
                  </span>

                  {/* Hover CTA */}
                  <div
                    className="absolute right-3 top-3 rounded-full px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-200 group-hover:opacity-100"
                    style={{ background: "linear-gradient(135deg,#7c3f96,#e8902a)" }}
                  >
                    Explore →
                  </div>

                  {/* Bottom info */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-white">{d.name}</h3>
                      <p className="text-xs text-white/65">{d.country}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="size-3.5 fill-current text-amber-400" />
                      <span className="text-sm font-semibold text-white">{d.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <p className="line-clamp-2 text-xs leading-relaxed text-white/45">{d.description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex gap-3 text-xs text-white/35">
                      <span>{d.duration}</span>
                      <span className="text-white/20">·</span>
                      <span>{d.bestTime}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-white/30">from</p>
                      <p className="font-serif text-base font-semibold text-amber-400">{d.price}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}

      <style>{`
        @keyframes cardFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .group-hover\\:scale-108:hover { transform: scale(1.08); }
      `}</style>
    </div>
  )
}
