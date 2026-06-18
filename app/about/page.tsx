"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Globe, Compass, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactModal } from "@/components/contact-modal"

const stats = [
  { value: "2009", label: "Founded" },
  { value: "120+", label: "Destinations" },
  { value: "45k", label: "Happy travellers" },
  { value: "4.9★", label: "Average rating" },
]

const values = [
  {
    icon: Compass,
    title: "Craftsmanship",
    description:
      "We spend hundreds of hours curating each route — every hotel, guide, and experience is personally vetted by our team before it reaches your itinerary.",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.08)",
    border: "rgba(251,191,36,0.22)",
    glow: "rgba(251,191,36,0.14)",
    iconBg: "linear-gradient(135deg,rgba(251,191,36,0.18),rgba(232,144,42,0.28))",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Transparent pricing, honest advice, and a 24/7 support line mean you travel with complete confidence, no matter where in the world you are.",
    color: "#c084fc",
    bg: "rgba(192,132,252,0.08)",
    border: "rgba(192,132,252,0.22)",
    glow: "rgba(192,132,252,0.14)",
    iconBg: "linear-gradient(135deg,rgba(192,132,252,0.18),rgba(124,63,150,0.28))",
  },
  {
    icon: HeartHandshake,
    title: "Responsibility",
    description:
      "We partner exclusively with local operators who pay fair wages and protect cultural heritage. Wanderlight trips leave destinations better than we found them.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.22)",
    glow: "rgba(52,211,153,0.14)",
    iconBg: "linear-gradient(135deg,rgba(52,211,153,0.18),rgba(16,185,129,0.28))",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Every person on our team is an avid traveller first. We recommend only what we would book for ourselves — no paid placements, ever.",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.22)",
    glow: "rgba(244,114,182,0.14)",
    iconBg: "linear-gradient(135deg,rgba(244,114,182,0.18),rgba(236,72,153,0.28))",
  },
]

const team = [
  {
    initials: "SK",
    name: "Satish Kumar Gupta",
    role: "Founder & Lead Travel Curator",
    bio: "A lifelong traveller who has visited 60+ countries, Satish founded Wanderlight with the belief that truly memorable travel requires human expertise, not algorithms.",
    gradient: "linear-gradient(135deg,#1b1a5e,#7c3f96,#e8902a)",
  },
  {
    initials: "AM",
    name: "Anika Mehta",
    role: "Head of Destination Research",
    bio: "Former travel journalist turned curator, Anika oversees our destination portfolio and ensures every recommendation reflects the very best a place has to offer.",
    gradient: "linear-gradient(135deg,#7c3f96,#c084fc,#60a5fa)",
  },
  {
    initials: "RV",
    name: "Rajan Verma",
    role: "Client Experience Lead",
    bio: "Rajan is the first voice our travellers hear and the last to sign off on every itinerary — his obsession with detail is the reason our reviews average 4.9 stars.",
    gradient: "linear-gradient(135deg,#34d399,#60a5fa,#c084fc)",
  },
]

export default function AboutPage() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(140deg,#0d0b1e 0%,#1b1040 30%,#2e1b50 58%,#160d28 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-24 h-[32rem] w-[32rem] rounded-full opacity-18 blur-3xl"
          style={{ background: "radial-gradient(circle,#7c3f96,transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-10 h-80 w-80 rounded-full opacity-12 blur-3xl"
          style={{ background: "radial-gradient(circle,#e8902a,transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle,#34d399,transparent 70%)" }} />
      </div>

      <SiteHeader onBookingOpen={() => {}} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden sm:min-h-[92vh]">
        <Image
          src="/images/hero-coast.png"
          alt="Scenic coastline"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 80% 75%,rgba(232,144,42,0.38) 0%,transparent 65%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 50% at 10% 10%,rgba(10,14,60,0.55) 0%,transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 40% at 50% 30%,rgba(180,60,90,0.18) 0%,transparent 65%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 90% 90% at 50% 50%,transparent 45%,rgba(0,0,0,0.65) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b1e] via-transparent to-transparent" />

        <div className="relative mx-auto max-w-4xl px-5 text-center pt-20 sm:px-6 sm:pt-24">
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-white/30" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/60">Our story</p>
            <span className="h-px w-10 bg-white/30" />
          </div>

          <h1 className="font-serif text-5xl font-semibold text-white sm:text-6xl lg:text-7xl leading-tight drop-shadow-lg">
            Travel is not a product.<br />
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg,#c084fc,#fbbf24)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              It&apos;s a feeling.
            </span>
          </h1>

          <p className="mt-8 max-w-xl mx-auto text-base leading-relaxed text-white/70 drop-shadow">
            Wanderlight was born in 2009 from a single frustration — the world&apos;s most
            extraordinary experiences were buried under generic package deals. We set out to change that.
          </p>

          <div className="mt-14 flex justify-center">
            <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 pt-1.5">
              <div
                className="h-2 w-0.5 rounded-full bg-white/60"
                style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="relative border-y border-white/8"
        style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)" }}
      >
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt
                  className="font-serif text-4xl font-semibold"
                  style={{
                    background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  }}
                >
                  {value}
                </dt>
                <dd className="mt-1 text-sm text-white/50">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Banner */}
      <section
        className="relative w-full py-14 px-6 text-center text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%,#ffffff,transparent)" }} />
        <div className="relative">
          <p className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-snug sm:text-4xl">
            Over 15 years of crafting journeys that people never stop talking about.
          </p>
          <p className="mt-4 text-white/80 text-sm max-w-xl mx-auto">
            Every itinerary is built from scratch — no templates, no shortcuts, no compromises.
          </p>
          <Link
            href="/plan"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
          >
            Start planning your trip
          </Link>
        </div>
      </section>

      {/* Mission */}
      <section className="relative mx-auto max-w-3xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.25em]"
          style={{
            background: "linear-gradient(90deg,#fbbf24,#e8902a)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}
        >
          Our mission
        </p>
        <h2 className="font-serif text-4xl font-semibold text-white sm:text-5xl leading-tight">
          To make every journey feel like it was made for you —{" "}
          <span
            className="font-light italic"
            style={{
              background: "linear-gradient(90deg,#c084fc,#fbbf24)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            because it was.
          </span>
        </h2>
        <div className="mt-8 space-y-5 text-white/55 leading-relaxed">
          <p>
            When you book with Wanderlight, you&apos;re not choosing from a catalogue. You&apos;re starting a
            conversation with a travel curator who will get to know your tastes, your travel style, and
            your idea of the perfect day — and then build something around that.
          </p>
          <p>
            We believe the best travel experiences are the ones that feel effortless — where everything
            has been thought of so you can be fully present. That means the right guide at the right
            moment, the room with the view you didn&apos;t know to ask for, and the dinner reservation at
            the restaurant that has no online presence but every local knows about.
          </p>
          <p>
            It takes work to make it look easy. That&apos;s ours to do, not yours.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="relative">
        <div
          className="absolute inset-0 border-y border-white/6"
          style={{ background: "rgba(255,255,255,0.02)" }}
        />
        <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-center"
            style={{
              background: "linear-gradient(90deg,#fbbf24,#e8902a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            What drives us
          </p>
          <h2 className="font-serif text-4xl font-semibold text-white text-center sm:text-5xl mb-14">
            Our values
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-4 rounded-2xl border p-6 transition-all duration-300"
                style={{
                  background: v.bg,
                  borderColor: v.border,
                  boxShadow: `0 0 24px ${v.glow}`,
                  backdropFilter: "blur(16px)",
                }}
              >
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-full"
                  style={{ background: v.iconBg }}
                >
                  <v.icon className="size-5" style={{ color: v.color }} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="relative mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8">
        <p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-center"
          style={{
            background: "linear-gradient(90deg,#fbbf24,#e8902a)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}
        >
          The people
        </p>
        <h2 className="font-serif text-4xl font-semibold text-white text-center sm:text-5xl mb-14">
          Meet the team
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 p-6 text-center transition-all duration-300 hover:border-white/20"
              style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}
            >
              <div
                className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full"
                style={{ background: member.gradient }}
              >
                <span className="font-serif text-2xl font-semibold text-white">{member.initials}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">{member.name}</h3>
              <p
                className="mt-0.5 text-xs font-medium"
                style={{
                  background: "linear-gradient(90deg,#fbbf24,#e8902a)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}
              >
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-5xl px-5 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div
          className="relative flex flex-col items-center gap-5 rounded-3xl px-8 py-14 text-center text-white overflow-hidden"
          style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)" }}
        >
          <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%,#ffffff,transparent)" }} />
          <Globe className="relative size-10 opacity-80" />
          <h2 className="relative font-serif text-3xl font-semibold sm:text-4xl">
            Ready to see the world differently?
          </h2>
          <p className="relative max-w-md text-white/80 text-sm leading-relaxed">
            Let&apos;s start planning a journey that&apos;s made entirely for you.
          </p>
          <Link
            href="/plan"
            className="relative mt-2 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/25"
          >
            Plan my trip <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}

      <style>{`
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          60% { transform: translateY(10px); opacity: 0; }
        }
      `}</style>
    </div>
  )
}
