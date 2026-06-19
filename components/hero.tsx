"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { MapPin, Calendar, Search, Star, Shield, Clock, ChevronLeft, ChevronRight, X } from "lucide-react"

const floatingCards = [
  { name: "Santorini",   country: "Greece",      rating: "4.9", tag: "Island escape",       img: "/images/dest-santorini.png" },
  { name: "Swiss Alps",  country: "Switzerland", rating: "4.8", tag: "Mountain adventure",  img: "/images/dest-alps.png"      },
  { name: "Kyoto",       country: "Japan",       rating: "5.0", tag: "Culture & temples",   img: "/images/dest-kyoto.png"     },
]

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const DAYS   = ["Su","Mo","Tu","We","Th","Fr","Sa"]

function buildCells(year: number, month: number) {
  const firstDay     = new Date(year, month, 1).getDay()
  const daysInMonth  = new Date(year, month + 1, 0).getDate()
  const daysInPrev   = new Date(year, month, 0).getDate()
  const cells: { day: number; type: "prev" | "cur" | "next" }[] = []
  for (let i = firstDay - 1; i >= 0; i--) cells.push({ day: daysInPrev - i, type: "prev" })
  for (let i = 1; i <= daysInMonth; i++)   cells.push({ day: i, type: "cur" })
  let n = 1
  while (cells.length < 42) cells.push({ day: n++, type: "next" })
  return cells
}

type Props = { onSearch: (query: string) => void }

export function Hero({ onSearch }: Props) {
  const [destination,   setDestination]   = useState("")
  const [when,          setWhen]          = useState("")
  const [scrollIdle,    setScrollIdle]    = useState(true)
  const [calendarOpen,  setCalendarOpen]  = useState(false)

  const now = new Date()
  const [viewYear,  setViewYear]  = useState(now.getFullYear())
  const [viewMonth, setViewMonth] = useState(now.getMonth())

  const idleTimer   = useRef<ReturnType<typeof setTimeout> | null>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const today       = now.toISOString().split("T")[0]

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

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setCalendarOpen(false)
      }
    }
    if (calendarOpen) document.addEventListener("mousedown", onMouseDown)
    return () => document.removeEventListener("mousedown", onMouseDown)
  }, [calendarOpen])

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1) }
    else setViewMonth(m => m - 1)
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1) }
    else setViewMonth(m => m + 1)
  }

  function selectDate(day: number) {
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    if (dateStr < today) return
    setWhen(dateStr)
    setCalendarOpen(false)
  }

  function formatDisplay(dateStr: string) {
    const [y, m, d] = dateStr.split("-")
    return `${MONTHS[parseInt(m) - 1]} ${parseInt(d)}, ${y}`
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSearch(destination.trim())
  }

  const cells = buildCells(viewYear, viewMonth)

  return (
    <section className="relative min-h-screen w-full bg-black">

      {/* Background — isolated overflow-hidden so calendar can escape */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/dest-alps.png"
          alt="Swiss Alps — breathtaking mountain panorama"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_28%] will-change-transform"
          style={{ animation: "heroZoom 28s ease-in-out infinite alternate" }}
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 85% 60% at 72% 92%, rgba(232,144,42,0.28) 0%, transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 8% 4%, rgba(10,14,80,0.70) 0%, transparent 62%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/58 via-black/18 to-transparent" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 38%, rgba(0,0,0,0.52) 100%)" }} />
      </div>

      {/* Floating destination cards */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-3 lg:flex xl:right-12">
        {floatingCards.map((card, i) => (
          <div
            key={card.name}
            className="flex w-60 items-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-3 backdrop-blur-2xl"
            style={{ animation: `slideInRight 0.7s cubic-bezier(.22,.68,0,1.2) ${0.4 + i * 0.12}s both` }}
          >
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl">
              <Image src={card.img} alt={card.name} fill className="object-cover" sizes="48px" />
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
        <div
          className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-2xl"
          style={{ animation: `slideInRight 0.7s cubic-bezier(.22,.68,0,1.2) 0.82s both` }}
        >
          <Shield className="size-4 shrink-0 text-amber-400" />
          <p className="text-xs text-white/60">Trusted by 45,000+ travellers</p>
        </div>
      </div>

      {/* Brand gradient accent line */}
      <div
        className="absolute left-0 right-0 top-0 h-0.5"
        style={{ background: "linear-gradient(90deg, transparent, #7c3f96 40%, #e8902a 60%, transparent)" }}
      />

      {/* Main content */}
      <div
        className="relative flex min-h-screen flex-col justify-end pb-10 sm:pb-16 lg:pb-20"
        style={{ animation: "fadeSlideUp 1s cubic-bezier(.22,.68,0,1.2) 0.1s both" }}
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-14" style={{ background: "linear-gradient(90deg, transparent, rgba(251,191,36,0.8))" }} />
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-amber-300/80">
              Curated journeys since 2009
            </p>
          </div>

          {/* Headline */}
          <h1 className="max-w-4xl font-serif font-semibold leading-[0.93] text-white">
            <span className="block drop-shadow-2xl" style={{ fontSize: "clamp(2.4rem, 7.5vw, 7.5rem)", letterSpacing: "-0.02em" }}>
              Travel beyond
            </span>
            <span className="block font-light italic text-white/65 drop-shadow-2xl" style={{ fontSize: "clamp(2.4rem, 7.5vw, 7.5rem)", letterSpacing: "-0.02em" }}>
              the ordinary.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-white/65 drop-shadow sm:mt-8 sm:text-base lg:text-lg">
            Handcrafted itineraries, vetted local experts, and moments you&apos;ll carry
            long after you return home.
          </p>

          {/* Search bar + custom calendar */}
          <div className="relative mt-10 w-full max-w-2xl">
            <div className="rounded-2xl border border-white/15 bg-white/8 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:rounded-full">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center">

                {/* Destination */}
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

                {/* Date — custom picker trigger */}
                <div
                  className="flex flex-1 cursor-pointer items-center gap-3 border-t border-white/10 px-5 py-4 sm:border-none sm:py-3.5"
                  onClick={() => setCalendarOpen(v => !v)}
                >
                  <Calendar className="size-5 shrink-0 text-amber-300" aria-hidden="true" />
                  <span className="flex-1 select-none text-sm font-medium">
                    {when
                      ? <span className="text-white">{formatDisplay(when)}</span>
                      : <span className="text-white/40">When are you going?</span>
                    }
                  </span>
                  {when && (
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setWhen("") }}
                      className="shrink-0 text-white/35 transition-colors hover:text-white"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>

                {/* Explore */}
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

            {/* Custom calendar dropdown */}
            {calendarOpen && (
              <div
                ref={calendarRef}
                className="absolute left-0 top-full z-[200] mt-3 w-72 overflow-hidden rounded-2xl border border-white/12 shadow-2xl sm:left-[38%]"
                style={{
                  background: "rgba(13,11,30,0.97)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)",
                }}
              >
                {/* Top accent */}
                <div
                  className="h-px w-full"
                  style={{ background: "linear-gradient(90deg,transparent,#7c3f96 40%,#e8902a 60%,transparent)" }}
                />

                {/* Month navigation */}
                <div className="flex items-center justify-between px-5 pb-3 pt-5">
                  <button
                    type="button"
                    onClick={prevMonth}
                    className="flex size-8 items-center justify-center rounded-full text-white/40 transition-all hover:bg-white/8 hover:text-white"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <p
                    className="font-serif text-sm font-semibold"
                    style={{
                      background: "linear-gradient(90deg,#ffffff,#c084fc)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {MONTHS[viewMonth]} {viewYear}
                  </p>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="flex size-8 items-center justify-center rounded-full text-white/40 transition-all hover:bg-white/8 hover:text-white"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                {/* Day headers */}
                <div className="grid grid-cols-7 px-4 pb-2">
                  {DAYS.map(d => (
                    <div key={d} className="py-1 text-center text-[10px] font-semibold uppercase tracking-wider text-white/28">
                      {d}
                    </div>
                  ))}
                </div>

                {/* Day grid */}
                <div className="grid grid-cols-7 gap-y-1 px-4 pb-4">
                  {cells.map((cell, i) => {
                    if (cell.type !== "cur") return <div key={i} />

                    const dateStr  = `${viewYear}-${String(viewMonth + 1).padStart(2,"0")}-${String(cell.day).padStart(2,"0")}`
                    const isPast   = dateStr < today
                    const isToday  = dateStr === today
                    const isSel    = when === dateStr

                    return (
                      <button
                        key={i}
                        type="button"
                        disabled={isPast}
                        onClick={() => selectDate(cell.day)}
                        className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-all ${
                          isPast
                            ? "cursor-not-allowed text-white/18"
                            : isSel
                              ? "font-semibold text-white shadow-lg"
                              : isToday
                                ? "border border-amber-400/50 text-amber-400 hover:bg-amber-400/10"
                                : "text-white/65 hover:bg-white/8 hover:text-white"
                        }`}
                        style={isSel ? {
                          background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)",
                          boxShadow: "0 4px 16px rgba(124,63,150,0.45)",
                        } : undefined}
                      >
                        {cell.day}
                      </button>
                    )
                  })}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-white/8 px-5 py-3.5">
                  <button
                    type="button"
                    onClick={() => setWhen("")}
                    className="text-xs text-white/35 transition-colors hover:text-white/70"
                  >
                    Clear
                  </button>
                  <button
                    type="button"
                    onClick={() => { setWhen(today); setCalendarOpen(false) }}
                    className="text-xs font-semibold text-amber-400 transition-colors hover:text-amber-300"
                  >
                    Today
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Stats + quick info */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-12 lg:gap-x-12">
            {[
              { value: "120+", label: "Destinations"     },
              { value: "45k",  label: "Happy travellers" },
              { value: "4.9★", label: "Average rating"   },
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
            <div className="hidden h-10 w-px bg-white/15 lg:block" />
            <div className="flex flex-wrap gap-2">
              {[
                { icon: Clock,  text: "24h response"         },
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

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-500"
        style={{ opacity: scrollIdle ? 1 : 0 }}
      >
        <div className="flex h-10 w-5 items-start justify-center rounded-full border border-white/20 pt-1.5">
          <div className="h-2 w-0.5 rounded-full bg-white/55" style={{ animation: "scrollDot 1.8s ease-in-out infinite" }} />
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
