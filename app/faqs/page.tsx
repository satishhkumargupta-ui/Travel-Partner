"use client"

import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookingModal } from "@/components/booking-modal"
import { ContactModal } from "@/components/contact-modal"

const categories = [
  {
    label: "Booking & Planning",
    faqs: [
      {
        q: "How does the booking process work?",
        a: "Start by filling out our 'Plan a trip' form or enquiring about a specific destination. A dedicated travel curator will contact you within 24 hours to discuss your preferences, budget, and dates. We then craft a personalised itinerary for your review before any payment is taken.",
      },
      {
        q: "How far in advance should I book?",
        a: "We recommend booking at least 3–6 months in advance, especially for peak seasons (June–August and December–January). That said, we can often accommodate last-minute trips within 4–6 weeks depending on destination availability.",
      },
      {
        q: "Can I customise my itinerary?",
        a: "Absolutely — customisation is at the heart of what we do. Every detail, from accommodation style to daily pace to dietary needs, can be tailored to your preferences. Nothing is fixed until you're happy with the plan.",
      },
      {
        q: "Do you offer group tours?",
        a: "Yes. We offer private group journeys for families, friend groups, and corporate retreats. Groups of 6+ travellers receive dedicated planning support and preferential pricing.",
      },
    ],
  },
  {
    label: "Pricing & Payment",
    faqs: [
      {
        q: "Are the prices shown per person or for the whole trip?",
        a: "All prices shown on destination cards are per person, based on double occupancy. Solo traveller and group pricing is calculated individually during the planning consultation.",
      },
      {
        q: "What's included in the trip price?",
        a: "Prices typically include accommodation, guided experiences, internal transfers, and a 24/7 in-destination support line. Flights, visa fees, travel insurance, and personal spending are usually excluded — your curator will provide a detailed breakdown before you commit.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit and debit cards, bank transfers (NEFT/IMPS/RTGS), and UPI payments. A 20% deposit secures your booking, with the balance due 60 days before departure.",
      },
      {
        q: "Are there any hidden fees?",
        a: "None. Your final quote is fully itemised, and we'll flag any optional upgrades clearly. The only variable costs are things entirely outside our control, such as visa fee changes set by foreign governments.",
      },
    ],
  },
  {
    label: "Cancellations & Changes",
    faqs: [
      {
        q: "What is your cancellation policy?",
        a: "Cancellations made more than 60 days before departure receive a full refund of the deposit. Cancellations 30–60 days out forfeit 50% of the deposit. Within 30 days, the full deposit is non-refundable. We strongly recommend travel insurance to cover unexpected changes.",
      },
      {
        q: "Can I change my dates after booking?",
        a: "Yes, date changes are allowed subject to availability and any supplier amendment fees. We'll always try to accommodate changes at no extra charge where possible, especially when requested well in advance.",
      },
      {
        q: "What happens if Wanderlight needs to cancel my trip?",
        a: "In the rare event we need to cancel (e.g. due to natural disaster or civil unrest), you'll receive a full refund of all payments made to us, plus assistance rebooking an alternative destination if desired.",
      },
    ],
  },
  {
    label: "During Your Trip",
    faqs: [
      {
        q: "Will I have a local guide throughout the trip?",
        a: "Most of our itineraries include a curated selection of local expert guides for key experiences. Some free-exploration days are guide-free by design, giving you space to discover things on your own terms.",
      },
      {
        q: "What support is available if something goes wrong?",
        a: "Every traveller gets a 24/7 WhatsApp support line connecting directly to our team. For any on-the-ground emergency, we coordinate with our network of local partners to resolve issues as quickly as possible.",
      },
      {
        q: "Do I need travel insurance?",
        a: "Yes — travel insurance is mandatory for all Wanderlight trips. It must cover medical evacuation, trip cancellation, and personal liability. We can recommend reputable providers if needed.",
      },
      {
        q: "What should I do about visas?",
        a: "Visa requirements vary by nationality and destination. Your travel curator will provide a full visa checklist at the planning stage. While we can advise, obtaining visas is the traveller's responsibility.",
      },
    ],
  },
]

function Accordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-foreground">{q}</span>
        <ChevronDown
          className={`mt-0.5 size-5 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
      )}
    </div>
  )
}

export default function FaqsPage() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader onBookingOpen={() => setBookingOpen(true)} />

      {/* Hero */}
      <section
        className="relative pt-36 pb-20 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#06091a 0%,#1b1a5e 30%,#7c3f96 60%,#c45f38 80%,#0d2137 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative mx-auto max-w-2xl px-6">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            Help Centre
          </p>
          <h1 className="font-serif text-5xl font-semibold text-white sm:text-6xl">
            Frequently asked questions
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/75">
            Everything you need to know about planning and booking a Wanderlight journey. Can&apos;t
            find your answer?{" "}
            <button
              onClick={() => setContactOpen(true)}
              className="underline underline-offset-4 hover:text-white transition-colors"
            >
              Contact us directly.
            </button>
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-12">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h2 className="mb-1 font-serif text-2xl font-semibold text-foreground">
                {cat.label}
              </h2>
              <div className="mt-4 rounded-2xl border border-border bg-card px-6">
                {cat.faqs.map((faq) => (
                  <Accordion key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-secondary px-8 py-10 text-center">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
            <Globe className="size-6 text-primary" />
          </div>
          <h3 className="font-serif text-2xl font-semibold text-foreground">
            Still have questions?
          </h3>
          <p className="max-w-sm text-sm text-muted-foreground">
            Our travel curators are happy to help with anything not covered here.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <button
              onClick={() => setContactOpen(true)}
              className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              Contact us
            </button>
            <button
              onClick={() => setBookingOpen(true)}
              className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)",
              }}
            >
              Plan a trip
            </button>
          </div>
        </div>
      </section>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />

      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}
