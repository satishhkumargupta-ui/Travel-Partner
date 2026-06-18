"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft, Star, Clock, Calendar, MapPin,
  CheckCircle2, Loader2, Users, Shield, HeartHandshake, Sparkles,
} from "lucide-react"
import { allDestinations } from "@/components/destinations"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactModal } from "@/components/contact-modal"

const WEB3FORMS_KEY = "c33698a9-efe3-4165-a0ca-4aee6e4c9ef0"

const HIGHLIGHT_COLORS = [
  { color: "#fbbf24", bg: "rgba(251,191,36,0.08)",  border: "rgba(251,191,36,0.22)", glow: "rgba(251,191,36,0.14)" },
  { color: "#c084fc", bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.22)", glow: "rgba(192,132,252,0.14)" },
  { color: "#34d399", bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.22)", glow: "rgba(52,211,153,0.14)" },
  { color: "#60a5fa", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.22)", glow: "rgba(96,165,250,0.14)" },
  { color: "#f472b6", bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.22)", glow: "rgba(244,114,182,0.14)" },
  { color: "#fb923c", bg: "rgba(251,146,60,0.08)",  border: "rgba(251,146,60,0.22)", glow: "rgba(251,146,60,0.14)" },
]

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>()

  const destination = allDestinations.find(
    (d) => d.name.toLowerCase().replace(/\s+/g, "-") === slug,
  )

  const [contactOpen, setContactOpen] = useState(false)
  const [name,        setName]        = useState("")
  const [email,       setEmail]       = useState("")
  const [phone,       setPhone]       = useState("")
  const [date,        setDate]        = useState("")
  const [guests,      setGuests]      = useState("2")
  const [notes,       setNotes]       = useState("")
  const [loading,     setLoading]     = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const [error,       setError]       = useState("")

  const inputCls =
    "w-full rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-amber-400/45 focus:ring-1 focus:ring-amber-400/20 transition-all [color-scheme:dark] backdrop-blur-sm"

  if (!destination) {
    return (
      <div
        className="flex min-h-screen flex-col"
        style={{ background: "linear-gradient(140deg,#0d0b1e 0%,#1b1040 30%,#2e1b50 58%,#160d28 100%)" }}
      >
        <SiteHeader onBookingOpen={() => {}} />
        <div className="flex flex-1 items-center justify-center px-6 py-20 text-center">
          <div>
            <h1 className="mb-3 font-serif text-3xl text-white">Destination not found</h1>
            <p className="mb-6 text-white/50">The destination you&apos;re looking for doesn&apos;t exist or may have moved.</p>
            <Link href="/destinations" className="inline-flex items-center gap-2 text-amber-400 hover:opacity-80">
              <ArrowLeft className="size-4" /> Back to all destinations
            </Link>
          </div>
        </div>
      </div>
    )
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!destination) return
    setLoading(true); setError("")
    try {
      const payload = new FormData()
      payload.append("access_key",    WEB3FORMS_KEY)
      payload.append("subject",       `Destination Enquiry — ${destination.name}, ${destination.country}`)
      payload.append("from_name",     "Wanderlight Travel")
      payload.append("name",          name)
      payload.append("email",         email)
      payload.append("phone",         phone  || "Not provided")
      payload.append("destination",   `${destination.name}, ${destination.country}`)
      payload.append("travel_date",   date   || "Flexible")
      payload.append("travelers",     guests)
      payload.append("package_price", destination.price)
      payload.append("duration",      destination.duration)
      payload.append("notes",         notes  || "None")

      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: payload })
      const data = await res.json()
      if (data.success) setSubmitted(true)
      else setError(data.message || "Something went wrong. Please try again.")
    } catch {
      setError("Network error — please check your connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  const today = new Date().toISOString().split("T")[0]

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(140deg,#0d0b1e 0%,#1b1040 30%,#2e1b50 58%,#160d28 100%)" }}
    >
      <SiteHeader onBookingOpen={() => {}} />

      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-24 h-96 w-96 rounded-full opacity-18 blur-3xl"
          style={{ background: "radial-gradient(circle,#7c3f96,transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-10 h-72 w-72 rounded-full opacity-12 blur-3xl"
          style={{ background: "radial-gradient(circle,#e8902a,transparent 70%)" }} />
      </div>

      {/* ── Cinematic Hero ── */}
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          fill priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Multi-layer overlays for depth — pointer-events-none so links beneath stay clickable */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 15% 90%, rgba(124,63,150,0.30) 0%, transparent 60%)" }}
        />

        {/* Brand accent top line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,#7c3f96 40%,#e8902a 60%,transparent)" }} />

        {/* Breadcrumb — top left */}
        <nav aria-label="Breadcrumb" className="absolute left-5 top-20 sm:left-6 sm:top-24 lg:left-8">
          <ol className="flex items-center gap-1.5 text-xs text-white/50">
            <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
            <li className="text-white/25">/</li>
            <li><Link href="/destinations" className="transition-colors hover:text-white">Destinations</Link></li>
            <li className="text-white/25">/</li>
            <li className="text-white/80">{destination.name}</li>
          </ol>
        </nav>

        {/* Hero content — bottom anchored */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-10 sm:px-6 sm:pb-14 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            {/* Tag + rating */}
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="rounded-full px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md"
                style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.20)" }}
              >
                {destination.tag}
              </span>
              <div
                className="flex items-center gap-2 rounded-full px-3 py-1.5 backdrop-blur-md"
                style={{ background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.30)" }}
              >
                <Star className="size-3.5 fill-current text-amber-400" />
                <span className="text-sm font-semibold text-amber-300">{destination.rating}</span>
                <span className="text-white/40 text-xs">/ 5.0</span>
              </div>
            </div>

            {/* Destination name */}
            <h1
              className="font-serif font-semibold leading-none tracking-tight text-white drop-shadow-2xl"
              style={{ fontSize: "clamp(3rem,8vw,7rem)" }}
            >
              {destination.name}
            </h1>

            {/* Country + duration */}
            <div className="mt-4 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-amber-400" />
                <span className="text-xl font-light text-white/75">{destination.country}</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="size-4 text-white/45" />
                <span className="text-sm text-white/55">{destination.duration}</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-white/45" />
                <span className="text-sm text-white/55">Best: {destination.bestTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div
        className="border-b border-white/8 backdrop-blur-xl"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-5 lg:px-8">
          <div className="flex min-w-max items-center gap-8 sm:min-w-0">
            {[
              { icon: Clock,    label: "Duration",         value: destination.duration, color: "#fbbf24" },
              { icon: Calendar, label: "Best time",        value: destination.bestTime, color: "#c084fc" },
              { icon: Star,     label: "Guest rating",     value: `${destination.rating} / 5.0`, color: "#34d399" },
            ].map(({ icon: Icon, label, value, color }, i) => (
              <div key={label} className="flex items-center gap-3">
                {i > 0 && <div className="mr-5 h-8 w-px bg-white/10" />}
                <div
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: `${color}14`, border: `1px solid ${color}28` }}
                >
                  <Icon className="size-4" style={{ color }} />
                </div>
                <div>
                  <p className="text-xs text-white/35">{label}</p>
                  <p className="text-sm font-semibold text-white">{value}</p>
                </div>
              </div>
            ))}

            <div className="ml-auto pl-8">
              <p className="text-xs text-white/35">Starting from</p>
              <p
                className="font-serif font-semibold leading-none"
                style={{
                  fontSize: "clamp(1.6rem,3vw,2.2rem)",
                  background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                {destination.price}
                <span className="ml-1.5 font-sans text-sm font-normal text-white/35"
                  style={{ WebkitTextFillColor: "rgba(255,255,255,0.35)" }}>/ person</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_400px]">

          {/* ── Left column ── */}
          <div className="space-y-16">

            {/* About */}
            <div>
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.30em]"
                style={{
                  background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                About this journey
              </p>
              <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight text-white">
                Why{" "}
                <span
                  className="font-light italic"
                  style={{
                    background: "linear-gradient(90deg,#c084fc,#fbbf24)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}
                >
                  {destination.name}?
                </span>
              </h2>
              <p className="text-base leading-relaxed text-white/55">{destination.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-[0.30em]"
                style={{
                  background: "linear-gradient(90deg,#c084fc,#fbbf24)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                What&apos;s included
              </p>
              <h2 className="mb-8 font-serif text-4xl font-semibold leading-tight text-white">
                Trip highlights
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {destination.highlights.map((h, i) => {
                  const c = HIGHLIGHT_COLORS[i % HIGHLIGHT_COLORS.length]
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 rounded-2xl border p-5 transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
                      style={{ background: c.bg, borderColor: c.border, boxShadow: `0 4px 20px ${c.glow}` }}
                    >
                      <div
                        className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: `${c.color}20`, border: `1px solid ${c.border}` }}
                      >
                        <CheckCircle2 className="size-4" style={{ color: c.color }} />
                      </div>
                      <p className="text-sm leading-relaxed text-white/75">{h}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Promise strip */}
            <div
              className="relative overflow-hidden rounded-3xl px-8 py-10 text-white"
              style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)" }}
            >
              {/* Subtle shimmer */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-20"
                style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.25), transparent)" }}
              />
              <div className="relative">
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles className="size-4 text-amber-300/70" />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                    The Wanderlight promise
                  </p>
                </div>
                <h3 className="mb-8 font-serif text-2xl font-semibold">You&apos;re in safe hands</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {[
                    { icon: Shield,        title: "24/7 Support",        desc: "Our experts are available around the clock throughout your journey." },
                    { icon: Users,         title: "Personal curator",    desc: "A dedicated travel expert designs and manages your entire trip." },
                    { icon: HeartHandshake,title: "Best price guarantee",desc: "We match or beat any comparable itinerary — no hidden fees." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div key={title} className="flex flex-col gap-3">
                      <div className="flex size-9 items-center justify-center rounded-full bg-white/15">
                        <Icon className="size-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-white/60">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: sticky enquiry form ── */}
          <div>
            <div className="sticky top-28">
              {!submitted ? (
                <div
                  className="rounded-3xl border border-white/10 p-7 shadow-2xl"
                  style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(24px)" }}
                >
                  <div className="mb-6">
                    <p
                      className="mb-1 text-xs font-semibold uppercase tracking-[0.28em]"
                      style={{
                        background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                      }}
                    >
                      Book this trip
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-white">Enquire now</h3>
                    <p className="mt-1.5 text-sm text-white/45">
                      We respond within 24 hours with a personalised plan.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/45">Full name *</label>
                      <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={inputCls} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/45">Email address *</label>
                      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" className={inputCls} />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/45">Phone (optional)</label>
                      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className={inputCls} />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-white/45">Travel date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} min={today} className={inputCls} />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-white/45">Travelers</label>
                        <select value={guests} onChange={(e) => setGuests(e.target.value)} className={inputCls}>
                          {[1,2,3,4,5,6,7,8].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/45">Special requests (optional)</label>
                      <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3}
                        placeholder="Anniversaries, dietary needs, dream experiences…"
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    {/* Price summary */}
                    <div
                      className="rounded-2xl border border-amber-400/20 px-4 py-3"
                      style={{ background: "rgba(251,191,36,0.07)" }}
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-white/40">
                          {destination.name} · {guests} {Number(guests) === 1 ? "person" : "people"}
                        </span>
                        <span
                          className="font-serif text-lg font-semibold"
                          style={{
                            background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                          }}
                        >
                          {destination.price}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-white/30">Starting price per person</p>
                    </div>

                    {error && (
                      <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>
                    )}

                    <button
                      type="submit" disabled={loading}
                      className="mt-1 w-full rounded-full py-4 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60"
                      style={{
                        background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)",
                        boxShadow: "0 8px 32px rgba(124,63,150,0.40)",
                      }}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="size-4 animate-spin" /> Sending…
                        </span>
                      ) : "Send enquiry →"}
                    </button>
                  </form>
                </div>
              ) : (
                <div
                  className="rounded-3xl border border-white/10 p-8 text-center"
                  style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(24px)" }}
                >
                  <div
                    className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full"
                    style={{
                      background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)",
                      boxShadow: "0 8px 40px rgba(124,63,150,0.50)",
                    }}
                  >
                    <CheckCircle2 className="size-10 text-white" />
                  </div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-white">Enquiry sent!</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    We&apos;ll reach out within 24 hours to start crafting your perfect trip to{" "}
                    <strong className="text-white">{destination.name}</strong>.
                  </p>
                  <Link
                    href="/destinations"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-2.5 text-sm font-medium text-white/65 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <ArrowLeft className="size-4" /> Explore more destinations
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}
