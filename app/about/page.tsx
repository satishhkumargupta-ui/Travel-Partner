"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Globe, Compass, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookingModal } from "@/components/booking-modal"
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
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Transparent pricing, honest advice, and a 24/7 support line mean you travel with complete confidence, no matter where in the world you are.",
  },
  {
    icon: HeartHandshake,
    title: "Responsibility",
    description:
      "We partner exclusively with local operators who pay fair wages and protect cultural heritage. Wanderlight trips leave destinations better than we found them.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Every person on our team is an avid traveller first. We recommend only what we would book for ourselves — no paid placements, ever.",
  },
]

const team = [
  {
    initials: "SK",
    name: "Satish Kumar Gupta",
    role: "Founder & Lead Travel Curator",
    bio: "A lifelong traveller who has visited 60+ countries, Satish founded Wanderlight with the belief that truly memorable travel requires human expertise, not algorithms.",
  },
  {
    initials: "AM",
    name: "Anika Mehta",
    role: "Head of Destination Research",
    bio: "Former travel journalist turned curator, Anika oversees our destination portfolio and ensures every recommendation reflects the very best a place has to offer.",
  },
  {
    initials: "RV",
    name: "Rajan Verma",
    role: "Client Experience Lead",
    bio: "Rajan is the first voice our travellers hear and the last to sign off on every itinerary — his obsession with detail is the reason our reviews average 4.9 stars.",
  },
]

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader onBookingOpen={() => setBookingOpen(true)} />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background photo */}
        <Image
          src="/images/hero-coast.png"
          alt="Scenic coastline"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Cinematic colour grade — warm golden hour */}
        {/* Base darkening */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Warm amber/gold wash from bottom-right (sun source) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 80% 75%, rgba(232,144,42,0.38) 0%, transparent 65%)",
          }}
        />
        {/* Cool deep-blue shadow on top-left for contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 10% 10%, rgba(10,14,60,0.55) 0%, transparent 70%)",
          }}
        />
        {/* Soft magenta/rose mid-tone for cinematic feel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 40% at 50% 30%, rgba(180,60,90,0.18) 0%, transparent 65%)",
          }}
        />
        {/* Vignette — dark edges */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 45%, rgba(0,0,0,0.65) 100%)",
          }}
        />
        {/* Bottom fade into page background */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-6 text-center pt-24">
          {/* Thin rule + eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-white/30" />
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/60">Our story</p>
            <span className="h-px w-10 bg-white/30" />
          </div>

          <h1 className="font-serif text-5xl font-semibold text-white sm:text-6xl lg:text-7xl leading-tight drop-shadow-lg">
            Travel is not a product.<br />
            <span className="italic font-light text-white/80">It&apos;s a feeling.</span>
          </h1>

          <p className="mt-8 max-w-xl mx-auto text-base leading-relaxed text-white/70 drop-shadow">
            Wanderlight was born in 2009 from a single frustration — the world&apos;s most
            extraordinary experiences were buried under generic package deals. We set out to
            change that.
          </p>

          {/* Scroll cue */}
          <div className="mt-14 flex justify-center">
            <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 pt-1.5">
              <div
                className="h-2 w-0.5 rounded-full bg-white/60"
                style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes scrollDot {
            0%, 100% { transform: translateY(0); opacity: 1; }
            60% { transform: translateY(10px); opacity: 0; }
          }
        `}</style>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="font-serif text-4xl font-semibold text-foreground">{value}</dt>
                <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Banner */}
      <section
        className="w-full py-12 px-6 text-center text-white"
        style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)" }}
      >
        <p className="mx-auto max-w-3xl font-serif text-3xl font-semibold leading-snug sm:text-4xl">
          Over 15 years of crafting journeys that people never stop talking about.
        </p>
        <p className="mt-4 text-white/75 text-sm max-w-xl mx-auto">
          Every itinerary is built from scratch — no templates, no shortcuts, no compromises.
        </p>
        <button
          onClick={() => setBookingOpen(true)}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/90 transition-colors"
        >
          Start planning your trip
        </button>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary">Our mission</p>
        <h2 className="font-serif text-4xl font-semibold text-foreground sm:text-5xl leading-tight">
          To make every journey feel like it was made for you — because it was.
        </h2>
        <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
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
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary text-center">What drives us</p>
          <h2 className="font-serif text-4xl font-semibold text-foreground text-center sm:text-5xl mb-14">
            Our values
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <v.icon className="size-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-primary text-center">The people</p>
        <h2 className="font-serif text-4xl font-semibold text-foreground text-center sm:text-5xl mb-14">
          Meet the team
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
                <span className="font-serif text-2xl font-semibold text-primary">{member.initials}</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{member.name}</h3>
              <p className="mt-0.5 text-xs font-medium text-primary">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <div className="flex flex-col items-center gap-5 rounded-3xl px-8 py-14 text-center text-white"
          style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)" }}
        >
          <Globe className="size-10 opacity-80" />
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
            Ready to see the world differently?
          </h2>
          <p className="max-w-md text-white/80 text-sm leading-relaxed">
            Let&apos;s start planning a journey that&apos;s made entirely for you.
          </p>
          <button
            onClick={() => setBookingOpen(true)}
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/90 transition-colors"
          >
            Plan my trip <ArrowRight className="size-4" />
          </button>
        </div>
      </section>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}
