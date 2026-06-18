"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import {
  ArrowLeft, Star, Clock, Calendar, MapPin,
  CheckCircle2, Loader2, Users, Shield, HeartHandshake,
} from "lucide-react"
import { allDestinations } from "@/components/destinations"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookingModal } from "@/components/booking-modal"
import { ContactModal } from "@/components/contact-modal"

const WEB3FORMS_KEY = "c33698a9-efe3-4165-a0ca-4aee6e4c9ef0"

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>()

  const destination = allDestinations.find(
    (d) => d.name.toLowerCase().replace(/\s+/g, "-") === slug,
  )

  const [bookingOpen,  setBookingOpen]  = useState(false)
  const [contactOpen,  setContactOpen]  = useState(false)
  const [name,         setName]         = useState("")
  const [email,        setEmail]        = useState("")
  const [phone,        setPhone]        = useState("")
  const [date,         setDate]         = useState("")
  const [guests,       setGuests]       = useState("2")
  const [notes,        setNotes]        = useState("")
  const [loading,      setLoading]      = useState(false)
  const [submitted,    setSubmitted]    = useState(false)
  const [error,        setError]        = useState("")

  if (!destination) {
    return (
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader onBookingOpen={() => setBookingOpen(true)} />
        <div className="flex flex-1 items-center justify-center px-6 py-20 text-center">
          <div>
            <h1 className="mb-3 font-serif text-3xl text-foreground">Destination not found</h1>
            <p className="mb-6 text-muted-foreground">
              The destination you&apos;re looking for doesn&apos;t exist or may have moved.
            </p>
            <Link
              href="/#destinations"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="size-4" /> Back to all destinations
            </Link>
          </div>
        </div>
        {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      </div>
    )
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const payload = new FormData()
      payload.append("access_key",    WEB3FORMS_KEY)
      payload.append("subject",       `Destination Enquiry — ${destination!.name}, ${destination!.country}`)
      payload.append("from_name",     "Wanderlight Travel")
      payload.append("name",          name)
      payload.append("email",         email)
      payload.append("phone",         phone || "Not provided")
      payload.append("destination",   `${destination!.name}, ${destination!.country}`)
      payload.append("travel_date",   date || "Flexible")
      payload.append("travelers",     guests)
      payload.append("package_price", destination!.price)
      payload.append("duration",      destination!.duration)
      payload.append("notes",         notes || "None")

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
    <div className="min-h-screen bg-background">
      <SiteHeader onBookingOpen={() => setBookingOpen(true)} />

      {/* ── Hero ── */}
      <section className="relative h-[75vh] min-h-[520px] w-full overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.name}, ${destination.country}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 lg:px-8 lg:pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                {destination.tag}
              </span>
              <div className="flex items-center gap-2 text-white/80">
                <Star className="size-4 fill-current text-amber-400" />
                <span className="font-semibold text-white">{destination.rating}</span>
                <span className="text-white/50">·</span>
                <span className="text-sm">{destination.duration}</span>
              </div>
            </div>
            <h1 className="font-serif text-5xl font-semibold leading-none tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-8xl">
              {destination.name}
            </h1>
            <div className="mt-4 flex items-center gap-2">
              <MapPin className="size-5 text-amber-400" />
              <span className="text-xl font-light text-white/80">{destination.country}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ol className="flex items-center gap-1.5 py-3 text-sm">
            <li>
              <Link href="/" className="text-muted-foreground transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li className="text-muted-foreground/40">/</li>
            <li>
              <Link href="/#destinations" className="text-muted-foreground transition-colors hover:text-foreground">
                Destinations
              </Link>
            </li>
            <li className="text-muted-foreground/40">/</li>
            <li className="font-medium text-foreground">{destination.name}</li>
          </ol>
        </div>
      </nav>

      {/* ── Stats strip ── */}
      <div className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 py-5 lg:px-8">
          <div className="flex min-w-max items-center gap-6 sm:min-w-0 sm:gap-8">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Clock className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Duration</p>
                <p className="text-sm font-semibold text-foreground">{destination.duration}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Calendar className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Best time to visit</p>
                <p className="text-sm font-semibold text-foreground">{destination.bestTime}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                <Star className="size-5 fill-current text-amber-400" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Guest rating</p>
                <p className="text-sm font-semibold text-foreground">{destination.rating} / 5.0</p>
              </div>
            </div>
            <div className="ml-auto">
              <p className="text-xs text-muted-foreground">Starting from</p>
              <p className="font-serif text-3xl font-semibold leading-none text-foreground">
                {destination.price}
                <span className="ml-1 text-sm font-sans font-normal text-muted-foreground">/ person</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_400px]">

          {/* Left: description + highlights + promise */}
          <div className="space-y-14">

            {/* About */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                About this journey
              </p>
              <h2 className="mb-6 font-serif text-4xl font-semibold leading-tight text-foreground">
                Why {destination.name}?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {destination.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                What&apos;s included
              </p>
              <h2 className="mb-8 font-serif text-4xl font-semibold leading-tight text-foreground">
                Trip highlights
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {destination.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                  >
                    <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle2 className="size-4 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise strip */}
            <div
              className="rounded-3xl px-8 py-10 text-white"
              style={{
                background:
                  "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)",
              }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                The Wanderlight promise
              </p>
              <h3 className="mb-8 font-serif text-2xl font-semibold">
                You&apos;re in safe hands
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  {
                    icon: Shield,
                    title: "24/7 Support",
                    desc: "Our experts are available around the clock throughout your journey.",
                  },
                  {
                    icon: Users,
                    title: "Personal curator",
                    desc: "A dedicated travel expert designs and manages your entire trip.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Best price guarantee",
                    desc: "We match or beat any comparable itinerary — no hidden fees.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex flex-col gap-3">
                    <div className="flex size-9 items-center justify-center rounded-full bg-white/15">
                      <Icon className="size-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-white/65">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: sticky enquiry form */}
          <div>
            <div className="sticky top-28">
              {!submitted ? (
                <div className="rounded-3xl border border-border bg-card p-7 shadow-xl">
                  <div className="mb-6">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                      Book this trip
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-foreground">
                      Enquire now
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      We respond within 24 hours with a personalised plan.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Full name *
                      </label>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Email address *
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                          Travel date
                        </label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          min={today}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                          Travelers
                        </label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? "person" : "people"}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                        Special requests (optional)
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={3}
                        placeholder="Anniversaries, dietary needs, dream experiences…"
                        className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    {/* Price summary */}
                    <div className="rounded-xl bg-secondary px-4 py-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-muted-foreground">
                          {destination.name} · {guests} {Number(guests) === 1 ? "person" : "people"}
                        </span>
                        <span className="font-serif text-lg font-semibold text-foreground">
                          {destination.price}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground/70">Starting price per person</p>
                    </div>

                    {error && (
                      <p className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-1 w-full rounded-full py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:opacity-90 hover:shadow-lg active:scale-95 disabled:opacity-60"
                      style={{
                        background:
                          "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)",
                      }}
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="size-4 animate-spin" /> Sending…
                        </span>
                      ) : (
                        "Send enquiry"
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-xl">
                  <div
                    className="mx-auto mb-5 flex size-16 items-center justify-center rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg, #1b1a5e 0%, #7c3f96 50%, #e8902a 100%)",
                    }}
                  >
                    <CheckCircle2 className="size-8 text-white" />
                  </div>
                  <h3 className="mb-2 font-serif text-2xl font-semibold text-foreground">
                    Enquiry sent!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll reach out within 24 hours to start crafting your perfect trip to{" "}
                    <strong className="text-foreground">{destination.name}</strong>.
                  </p>
                  <Link
                    href="/#destinations"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    <ArrowLeft className="size-4" />
                    Explore more destinations
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}
