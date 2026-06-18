"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MapPin, Calendar, Search, Star, Shield, Clock } from "lucide-react"

const floatingCards = [
  { name: "Santorini",   country: "Greece",      rating: "4.9", tag: "Island escape",       img: "/images/dest-santorini.png" },
  { name: "Swiss Alps",  country: "Switzerland", rating: "4.8", tag: "Mountain adventure",  img: "/images/dest-alps.png"      },
  { name: "Kyoto",       country: "Japan",       rating: "5.0", tag: "Culture & temples",   img: "/images/dest-kyoto.png"     },
]

type Props = { onSearch: (query: string) => void }

export function Hero({ onSearch }: Props) {
  const [destination, setDestination] = useState("")
  const [when,        setWhen]        = useState("")
  const [scrollIdle,  setScrollIdle]  = useState(true)
  const dateRef      = useRef<HTMLInputElement>(null)
  const idleTimer    = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function onScroll() {
      setScrollIdle(false)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => setScrollIdle(true), 600)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSearch(destination.trim())
  }

  const today = new Date().toISOString().split("T")[0]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* ── 4K background ── */}
      <Image
        src="/images/dest-alps.png"
        alt="Swiss Alps — breathtaking mountain panorama"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_28%] will-change-transform"
        style={{ animation: "heroZoom 28s ease-in-out infinite alternate" }}
      />

      {/* ── Cinematic multi-layer overlays ── */}
      {/* Global dark tint */}
      <div className="absolute inset-0 bg-black/35" />
      {/* Golden-hour warm glow bottom-right */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 85% 60% at 72% 92%, rgba(232,144,42,0.28) 0%, transparent 60%)" }}
      />
      {/* Deep blue vignette top-left */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 55% at 8% 4%, rgba(10,14,80,0.70) 0%, transparent 62%)" }}
      />
      {/* Heavy bottom gradient — critical for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent" />
      {/* Left column shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/18 to-transparent" />
      {/* Edge vignette for 4K depth effect */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 38%, rgba(0,0,0,0.52) 100%)" }}
      />

      {/* ── Floating destination cards (desktop) ── */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex xl:right-12">
        {floatingCards.map((card, i) => (
          <div
            key={card.name}
            className="flex w-60 items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-2xl"
            style={{ animation: `slideInRight 0.7s cubic-bezier(.22,.68,0,1.2) ${0.4 + i * 0.12}s both` }}
          >
            {/* Thumbnail */}
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={card.img}
                alt={card.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">{card.name}</p>
              <p className="text-xs text-white/50">{card.country}</p>
              <div className="mt-1 flex items-center gap-1">
                <Star className="size-3 fill-current text-amber-400" />
                <span className="text-xs font-semibold text-amber-300">{card.rating}</span>
                <span className="text-xs text-white/35">· {card.tag}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Trust pill */}
        <div
          className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-2xl"
          style={{ animation: `slideInRight 0.7s cubic-bezier(.22,.68,0,1.2) 0.82s both` }}
        >
          <Shield className="size-4 shrink-0 text-amber-400" />
          <p className="text-xs text-white/60">Trusted by 45,000+ travellers</p>
        </div>
      </div>

      {/* ── Brand gradient line (top accent) ── */}
      <div
        className="absolute left-0 right-0 top-0 h-0.5"
        style={{ background: "linear-gradient(90deg, transparent, #7c3f96 40%, #e8902a 60%, transparent)" }}
      />

      {/* ── Main content — anchored to bottom ── */}
      <div
        className="relative flex min-h-screen flex-col justify-end pb-10 sm:pb-16 lg:pb-20"
        style={{ animation: "fadeSlideUp 1s cubic-bezier(.22,.68,0,1.2) 0.1s both" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span
              className="h-px w-14"
              style={{ background: "linear-gradient(90deg, transparent, rgba(251,191,36,0.8))" }}
            />
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-300/80">
              Curated journeys since 2009
            </p>
          </div>

          {/* Headline — responsive 4K-scale typography */}
          <h1 className="max-w-4xl font-serif font-semibold leading-[0.93] text-white">
            <span
              className="block drop-shadow-2xl"
              style={{ fontSize: "clamp(2.4rem, 7.5vw, 7.5rem)", letterSpacing: "-0.02em" }}
            >
              Travel beyond
            </span>
            <span
              className="block italic font-light text-white/65 drop-shadow-2xl"
              style={{ fontSize: "clamp(2.4rem, 7.5vw, 7.5rem)", letterSpacing: "-0.02em" }}
            >
              the ordinary.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/65 drop-shadow sm:mt-8 sm:text-base lg:text-lg">
            Handcrafted itineraries, vetted local experts, and moments you&apos;ll carry
            long after you return home.
          </p>

          {/* ── Search bar ── */}
          <div className="mt-10 w-full max-w-2xl">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/8 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:rounded-full">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row sm:items-center"
              >
                {/* Destination field */}
                <label className="flex flex-1 items-center gap-3 px-5 py-4 sm:py-3.5">
                  <MapPin className="size-5 shrink-0 text-amber-300" aria-hidden="true" />
                  <span className="sr-only">Destination</span>
                  <input
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where to? e.g. Bali, Japan…"
                    className="w-full bg-transparent text-sm font-medium text-white placeholder:text-white/40 focus:outline-none"
                  />
                </label>

                <div className="mx-1 hidden h-6 w-px bg-white/20 sm:block" />

                {/* Date field */}
                <label
                  className="flex flex-1 cursor-pointer items-center gap-3 border-t border-white/10 px-5 py-4 sm:border-none sm:py-3.5"
                  onClick={() => { try { dateRef.current?.showPicker() } catch (_) {} }}
                >
                  <Calendar className="size-5 shrink-0 text-amber-300" aria-hidden="true" />
                  <span className="sr-only">When</span>
                  <input
                    ref={dateRef}
                    type="date"
                    value={when}
                    onChange={(e) => {
                      const val = e.target.value
                      if (val.split("-")[0]?.length > 4) return
                      setWhen(val)
                    }}
                    onBlur={(e) => {
                      if (e.target.value && e.target.value < today) setWhen("")
                    }}
                    min={today}
                    max="9999-12-31"
                    className="w-full bg-transparent text-sm font-medium text-white focus:outline-none [color-scheme:dark] [&::-webkit-calendar-picker-indicator]:hidden"
                  />
                </label>

                {/* Explore button */}
                <div className="p-2.5">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-amber-950 shadow-lg transition-all hover:bg-amber-300 hover:shadow-amber-400/30 hover:shadow-xl active:scale-95 sm:w-auto"
                  >
                    <Search className="size-4" aria-hidden="true" />
                    Explore
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ── Stats + quick info ── */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-12 lg:gap-x-12">
            {[
              { value: "120+", label: "Destinations" },
              { value: "45k",  label: "Happy travellers" },
              { value: "4.9★", label: "Average rating" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-serif text-3xl font-semibold leading-none text-white drop-shadow-lg sm:text-4xl">
                  {value}
                </span>
                <span className="mt-1.5 text-xs font-medium uppercase tracking-wider text-white/45">
                  {label}
                </span>
              </div>
            ))}

            {/* Divider */}
            <div className="hidden h-10 w-px bg-white/15 lg:block" />

            {/* Quick info pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Clock,  text: "24h response" },
                { icon: Shield, text: "Best price guarantee" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-1.5 backdrop-blur-sm"
                >
                  <Icon className="size-3.5 text-amber-400" />
                  <span className="text-xs font-medium text-white/65">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator — visible when idle, hidden while scrolling ── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500"
        style={{ opacity: scrollIdle ? 1 : 0 }}
      >
        <div className="flex h-10 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5">
          <div
            className="h-2 w-0.5 rounded-full bg-white/55"
            style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes heroZoom {
          from { transform: scale(1.00); }
          to   { transform: scale(1.08); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0);    opacity: 1; }
          60%       { transform: translateY(10px); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
