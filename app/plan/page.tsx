"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft, Loader2, CheckCircle2,
  MapPin, Calendar, Users, Wallet,
  Compass, Phone, Mail, FileText,
  Shield, HeartHandshake, Star, Clock,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactModal } from "@/components/contact-modal"
import { allDestinations } from "@/components/destinations"

const WEB3FORMS_KEY = "c33698a9-efe3-4165-a0ca-4aee6e4c9ef0"

const BUDGETS = [
  "Under ₹1,50,000",
  "₹1,50,000 – ₹2,50,000",
  "₹2,50,000 – ₹4,00,000",
  "₹4,00,000+",
]

const STYLES = [
  "Relaxation & beaches",
  "Culture & history",
  "Adventure & nature",
  "Food & wine",
  "Luxury & wellness",
  "Family-friendly",
]

const STEPS = [
  {
    num: "01", icon: MapPin, label: "Your destination",
    color: "#fbbf24", glow: "rgba(251,191,36,0.18)",
    border: "rgba(251,191,36,0.22)", bg: "rgba(251,191,36,0.06)",
    iconBg: "linear-gradient(135deg,rgba(251,191,36,0.18),rgba(232,144,42,0.28))",
  },
  {
    num: "02", icon: Compass, label: "Travel preferences",
    color: "#c084fc", glow: "rgba(192,132,252,0.18)",
    border: "rgba(192,132,252,0.22)", bg: "rgba(192,132,252,0.06)",
    iconBg: "linear-gradient(135deg,rgba(124,63,150,0.20),rgba(192,132,252,0.28))",
  },
  {
    num: "03", icon: Mail, label: "About you",
    color: "#34d399", glow: "rgba(52,211,153,0.18)",
    border: "rgba(52,211,153,0.22)", bg: "rgba(52,211,153,0.06)",
    iconBg: "linear-gradient(135deg,rgba(16,185,129,0.18),rgba(52,211,153,0.28))",
  },
]

const BENEFITS = [
  { icon: Compass,        title: "Personal travel curator", desc: "A dedicated expert builds your itinerary from scratch — no templates.", color: "#fbbf24" },
  { icon: Shield,         title: "24/7 on-trip support",    desc: "We're reachable around the clock for anything you need while travelling.", color: "#c084fc" },
  { icon: Wallet,         title: "Best price guarantee",    desc: "We match or beat any comparable itinerary with zero hidden fees.", color: "#34d399" },
  { icon: HeartHandshake, title: "Responsible travel",      desc: "Every trip supports local communities and sustainable operators.", color: "#60a5fa" },
]

type Form = {
  destination: string; date: string; travelers: string
  budget: string; style: string; name: string
  email: string; phone: string; notes: string
}

const empty: Form = {
  destination: "", date: "", travelers: "2",
  budget: "", style: "", name: "", email: "", phone: "", notes: "",
}

export default function PlanPage() {
  const [form,        setForm]        = useState<Form>(empty)
  const [loading,     setLoading]     = useState(false)
  const [submitted,   setSubmitted]   = useState(false)
  const [error,       setError]       = useState("")
  const [contactOpen, setContactOpen] = useState(false)

  function patch(fields: Partial<Form>) { setForm((f) => ({ ...f, ...fields })) }

  const today = new Date().toISOString().split("T")[0]

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true); setError("")
    try {
      const payload = new FormData()
      payload.append("access_key",   WEB3FORMS_KEY)
      payload.append("subject",      `Trip Enquiry — ${form.destination || "Flexible destination"}`)
      payload.append("from_name",    "Wanderlight Travel")
      payload.append("name",         form.name)
      payload.append("email",        form.email)
      payload.append("phone",        form.phone  || "Not provided")
      payload.append("destination",  form.destination || "Flexible")
      payload.append("travel_date",  form.date   || "Flexible")
      payload.append("travelers",    form.travelers)
      payload.append("budget",       form.budget || "Flexible")
      payload.append("travel_style", form.style  || "Not specified")
      payload.append("notes",        form.notes  || "None")
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

  const inputCls =
    "w-full rounded-xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-amber-400/45 focus:ring-1 focus:ring-amber-400/20 transition-all [color-scheme:dark] backdrop-blur-sm"

  const selectCls =
    "w-full rounded-xl border border-white/12 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-amber-400/45 focus:ring-1 focus:ring-amber-400/20 transition-all [color-scheme:dark] backdrop-blur-sm"

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(140deg,#0d0b1e 0%,#1b1040 30%,#2e1b50 58%,#160d28 100%)" }}
    >
      <SiteHeader onBookingOpen={() => {}} />

      {/* Fixed ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-24 h-[28rem] w-[28rem] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle,#7c3f96,transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full opacity-14 blur-3xl"
          style={{ background: "radial-gradient(circle,#e8902a,transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle,#34d399,transparent 70%)" }} />
      </div>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-36">
        {/* Brand accent line */}
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,#7c3f96 40%,#e8902a 60%,transparent)" }} />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-white/65 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
          >
            <ArrowLeft className="size-4" /> Back to home
          </Link>

          <div className="max-w-3xl">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.42em]"
              style={{
                background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              Start planning
            </p>

            <h1 className="font-serif font-semibold leading-[0.95] text-white"
              style={{ fontSize: "clamp(2.6rem,6vw,5.5rem)" }}>
              Plan your{" "}
              <span
                className="font-light italic"
                style={{
                  background: "linear-gradient(90deg,#c084fc,#fbbf24)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                perfect journey
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50">
              Tell us where you want to go, and our travel curators will craft an
              itinerary built entirely around you — usually within 24 hours.
            </p>

            {/* Quick stats */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { value: "24h",  label: "Response time",    color: "#34d399" },
                { value: "45k+", label: "Happy travellers", color: "#fbbf24" },
                { value: "4.9★", label: "Avg rating",       color: "#c084fc" },
              ].map(({ value, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl border px-5 py-3"
                  style={{ background: `${color}09`, borderColor: `${color}28` }}
                >
                  <span className="font-serif text-2xl font-semibold" style={{ color }}>{value}</span>
                  <span className="text-xs text-white/40">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">

          {/* ── Form ── */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Step 1 — Destination */}
              {(() => {
                const s = STEPS[0]
                return (
                  <div className="rounded-3xl border p-5 transition-all duration-300 hover:brightness-105 sm:p-8"
                    style={{ background: s.bg, borderColor: s.border, boxShadow: `0 4px 40px ${s.glow}` }}>
                    <div className="mb-7 flex items-center gap-4">
                      <div
                        className="flex size-14 shrink-0 items-center justify-center rounded-2xl font-serif text-xl font-bold text-black shadow-lg"
                        style={{ background: s.color, boxShadow: `0 4px 20px ${s.glow}` }}
                      >
                        01
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: s.color }}>Step 1 of 3</p>
                        <h2 className="font-serif text-xl font-semibold text-white">{s.label}</h2>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="mb-2 block text-xs font-medium text-white/45">Where would you like to go?</label>
                        <select value={form.destination} onChange={(e) => patch({ destination: e.target.value })} className={selectCls} style={{ background: "transparent" }}>
                          <option value="">Choose a destination…</option>
                          {allDestinations.map((d) => (
                            <option key={d.name} value={`${d.name}, ${d.country}`}>{d.name}, {d.country}</option>
                          ))}
                          <option value="Somewhere new — surprise me!">Somewhere new — surprise me!</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/45">
                            <Calendar className="size-3.5" /> Travel date
                          </label>
                          <input type="date" value={form.date} onChange={(e) => patch({ date: e.target.value })} min={today} className={inputCls} />
                        </div>
                        <div>
                          <label className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/45">
                            <Users className="size-3.5" /> Travelers
                          </label>
                          <select value={form.travelers} onChange={(e) => patch({ travelers: e.target.value })} className={selectCls} style={{ background: "transparent" }}>
                            {[1,2,3,4,5,6,7,8].map((n) => (
                              <option key={n} value={n}>{n} {n === 1 ? "person" : "people"}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}

              {/* Step 2 — Preferences */}
              {(() => {
                const s = STEPS[1]
                return (
                  <div className="rounded-3xl border p-5 transition-all duration-300 hover:brightness-105 sm:p-8"
                    style={{ background: s.bg, borderColor: s.border, boxShadow: `0 4px 40px ${s.glow}` }}>
                    <div className="mb-7 flex items-center gap-4">
                      <div
                        className="flex size-14 shrink-0 items-center justify-center rounded-2xl font-serif text-xl font-bold text-black shadow-lg"
                        style={{ background: s.color, boxShadow: `0 4px 20px ${s.glow}` }}
                      >
                        02
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: s.color }}>Step 2 of 3</p>
                        <h2 className="font-serif text-xl font-semibold text-white">{s.label}</h2>
                      </div>
                    </div>
                    <div className="space-y-7">
                      <div>
                        <label className="mb-3 flex items-center gap-1.5 text-xs font-medium text-white/45">
                          <Wallet className="size-3.5" /> Budget per person
                        </label>
                        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                          {BUDGETS.map((b) => (
                            <button
                              key={b} type="button" onClick={() => patch({ budget: b })}
                              className="rounded-xl border px-3 py-4 text-xs font-medium text-left transition-all duration-200 hover:scale-[1.02]"
                              style={form.budget === b ? {
                                background: "rgba(251,191,36,0.15)", borderColor: "rgba(251,191,36,0.55)",
                                color: "#fbbf24", boxShadow: "0 0 20px rgba(251,191,36,0.22)",
                              } : {
                                background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)",
                                color: "rgba(255,255,255,0.50)",
                              }}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="mb-3 flex items-center gap-1.5 text-xs font-medium text-white/45">
                          <Star className="size-3.5" /> Travel style
                        </label>
                        <div className="flex flex-wrap gap-2.5">
                          {STYLES.map((style) => (
                            <button
                              key={style} type="button" onClick={() => patch({ style })}
                              className="rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-200 hover:scale-[1.02]"
                              style={form.style === style ? {
                                background: "rgba(192,132,252,0.15)", borderColor: "rgba(192,132,252,0.55)",
                                color: "#c084fc", boxShadow: "0 0 20px rgba(192,132,252,0.22)",
                              } : {
                                background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)",
                                color: "rgba(255,255,255,0.50)",
                              }}
                            >
                              {style}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}

              {/* Step 3 — About you */}
              {(() => {
                const s = STEPS[2]
                return (
                  <div className="rounded-3xl border p-5 transition-all duration-300 hover:brightness-105 sm:p-8"
                    style={{ background: s.bg, borderColor: s.border, boxShadow: `0 4px 40px ${s.glow}` }}>
                    <div className="mb-7 flex items-center gap-4">
                      <div
                        className="flex size-14 shrink-0 items-center justify-center rounded-2xl font-serif text-xl font-bold text-black shadow-lg"
                        style={{ background: s.color, boxShadow: `0 4px 20px ${s.glow}` }}
                      >
                        03
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: s.color }}>Step 3 of 3</p>
                        <h2 className="font-serif text-xl font-semibold text-white">{s.label}</h2>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-xs font-medium text-white/45">Full name *</label>
                          <input required value={form.name} onChange={(e) => patch({ name: e.target.value })} placeholder="Your name" className={inputCls} />
                        </div>
                        <div>
                          <label className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/45">
                            <Mail className="size-3.5" /> Email address *
                          </label>
                          <input required type="email" value={form.email} onChange={(e) => patch({ email: e.target.value })} placeholder="you@email.com" className={inputCls} />
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/45">
                          <Phone className="size-3.5" /> Phone (optional)
                        </label>
                        <input type="tel" value={form.phone} onChange={(e) => patch({ phone: e.target.value })} placeholder="+91 98765 43210" className={inputCls} />
                      </div>
                      <div>
                        <label className="mb-2 flex items-center gap-1.5 text-xs font-medium text-white/45">
                          <FileText className="size-3.5" /> Anything special? (optional)
                        </label>
                        <textarea
                          value={form.notes} onChange={(e) => patch({ notes: e.target.value })} rows={4}
                          placeholder="Anniversaries, dietary needs, accessibility requirements, dream experiences you'd love to have…"
                          className={`${inputCls} resize-none`}
                        />
                      </div>

                      {/* Summary pill */}
                      {(form.destination || form.budget || form.style) && (
                        <div
                          className="rounded-2xl border border-white/10 px-5 py-4"
                          style={{ background: "rgba(255,255,255,0.04)" }}
                        >
                          <p className="mb-1.5 text-xs font-semibold uppercase tracking-[0.20em] text-white/30">Trip summary</p>
                          <p className="text-sm text-white/70">
                            {form.destination || "Destination TBD"}
                            {" · "}{form.travelers} traveller{Number(form.travelers) > 1 ? "s" : ""}
                            {form.budget && ` · ${form.budget}`}
                            {form.style  && ` · ${form.style}`}
                            {form.date   && ` · ${new Date(form.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`}
                          </p>
                        </div>
                      )}

                      {error && (
                        <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>
                      )}

                      <button
                        type="submit" disabled={loading}
                        className="mt-2 w-full rounded-full py-4 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60"
                        style={{
                          background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)",
                          boxShadow: "0 8px 36px rgba(124,63,150,0.45)",
                        }}
                      >
                        {loading ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="size-4 animate-spin" /> Sending your request…
                          </span>
                        ) : "Send trip request →"}
                      </button>
                    </div>
                  </div>
                )
              })()}
            </form>
          ) : (
            /* ── Success state ── */
            <div
              className="flex flex-col items-center justify-center rounded-3xl border border-white/10 px-8 py-24 text-center"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)" }}
            >
              <div
                className="mb-6 flex size-24 items-center justify-center rounded-full"
                style={{
                  background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)",
                  boxShadow: "0 8px 48px rgba(124,63,150,0.55)",
                }}
              >
                <CheckCircle2 className="size-12 text-white" />
              </div>
              <h2 className="font-serif text-4xl font-semibold text-white">Request received!</h2>
              <p className="mt-4 max-w-sm leading-relaxed text-white/50">
                Thanks, <strong className="text-white">{form.name}</strong>! Your trip request has been sent.
                Our curators will reach out to <strong className="text-white">{form.email}</strong> within 24 hours.
              </p>
              {form.destination && (
                <div
                  className="mt-7 rounded-2xl border border-white/10 px-7 py-5 text-sm"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <p className="text-base font-semibold text-white">{form.destination}</p>
                  <p className="mt-1 text-white/45">
                    {form.travelers} traveller{Number(form.travelers) > 1 ? "s" : ""}
                    {form.budget && ` · ${form.budget}`}
                    {form.style  && ` · ${form.style}`}
                  </p>
                </div>
              )}
              <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-medium text-white/65 transition-all hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="size-4" /> Back to home
              </Link>
            </div>
          )}

          {/* ── Sidebar ── */}
          <aside>
            <div className="sticky top-28 space-y-5">

              {/* Benefits */}
              <div
                className="rounded-3xl border border-white/10 p-7"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)" }}
              >
                <p
                  className="mb-1 text-xs font-semibold uppercase tracking-[0.25em]"
                  style={{
                    background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}
                >
                  Why Wanderlight
                </p>
                <h3 className="mb-6 font-serif text-xl font-semibold text-white">Your trip is in safe hands</h3>
                <ul className="space-y-5">
                  {BENEFITS.map(({ icon: Icon, title, desc, color }) => (
                    <li key={title} className="flex gap-4">
                      <div
                        className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border"
                        style={{
                          background: `${color}14`, borderColor: `${color}30`,
                          boxShadow: `0 0 10px ${color}18`,
                        }}
                      >
                        <Icon className="size-4" style={{ color }} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-white/40">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Users, value: "45k+", label: "Happy travellers", color: "#fbbf24" },
                  { icon: Star,  value: "4.9★", label: "Average rating",   color: "#c084fc" },
                  { icon: Clock, value: "24h",  label: "Response time",    color: "#34d399" },
                  { icon: MapPin,value: "120+", label: "Destinations",     color: "#60a5fa" },
                ].map(({ icon: Icon, value, label, color }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 rounded-2xl border p-5 text-center"
                    style={{ background: `${color}08`, borderColor: `${color}22`, boxShadow: `0 4px 16px ${color}10` }}
                  >
                    <Icon className="size-4" style={{ color }} />
                    <span className="font-serif text-2xl font-semibold text-white">{value}</span>
                    <span className="text-xs text-white/40">{label}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div
                className="rounded-3xl border border-white/10 p-7"
                style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(24px)" }}
              >
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current text-amber-400" />)}
                </div>
                <p className="text-sm leading-relaxed text-white/50">
                  &ldquo;From the very first email to the last day of our trip, every single
                  detail was perfect. Wanderlight turned our dream honeymoon into reality.&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="flex size-9 items-center justify-center rounded-full"
                    style={{ background: "linear-gradient(135deg,#1b1a5e,#7c3f96)" }}
                  >
                    <span className="font-serif text-sm font-semibold text-white">PR</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Priya &amp; Rohan</p>
                    <p className="text-xs text-white/40">Kerala honeymoon, 2024</p>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}
