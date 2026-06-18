"use client"

import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactModal } from "@/components/contact-modal"

const sections = [
  {
    title: "1. Booking process",
    content: `A booking with Wanderlight begins when you submit a trip enquiry. A travel curator will contact you to discuss your requirements and present a personalised itinerary and cost breakdown. A booking is confirmed only when:\n\n• You have reviewed and accepted the itinerary in writing\n• A deposit of 20% of the total trip cost has been received by Wanderlight\n• You have received a written confirmation from us\n\nWe reserve the right to decline any booking at our discretion.`,
  },
  {
    title: "2. Pricing & what is included",
    content: `All prices are quoted in Indian Rupees (₹) and are per person unless otherwise stated, based on double occupancy.\n\nPrices typically include:\n• Accommodation as specified in your itinerary\n• Guided experiences and activities listed in your itinerary\n• Internal ground transfers within the destination\n• 24/7 in-destination WhatsApp support\n\nPrices typically exclude:\n• International flights unless expressly included\n• Visa and entry fees\n• Travel insurance (mandatory — see clause 7)\n• Personal expenses, tips, and meals not listed in the itinerary\n• Airport taxes and fuel surcharges on flights`,
  },
  {
    title: "3. Payment terms",
    content: `A deposit of 20% of the total trip cost is required to confirm your booking. The remaining balance is due no later than 60 days before your departure date.\n\nFor bookings made within 60 days of departure, the full payment is required at the time of booking.\n\nAccepted payment methods:\n• Credit and debit card\n• Bank transfer (NEFT / IMPS / RTGS)\n• UPI\n\nAll payments must be received in cleared funds. Bookings may be cancelled if payment is not received by the due date.`,
  },
  {
    title: "4. Cancellation by the traveller",
    content: `If you need to cancel your booking, you must notify us in writing (email to gsatish133@gmail.com). The following cancellation charges apply based on the number of days before your departure:\n\n• More than 60 days: Deposit forfeited; all other payments refunded in full\n• 30–60 days: 50% of total trip cost forfeited\n• 14–29 days: 75% of total trip cost forfeited\n• Less than 14 days: 100% of total trip cost forfeited\n\nWe strongly recommend comprehensive travel insurance that covers cancellation for any reason.`,
  },
  {
    title: "5. Changes by the traveller",
    content: `If you wish to change your travel dates, itinerary, or number of travellers after confirming your booking, please contact your curator as soon as possible.\n\nWe will make every effort to accommodate changes at no additional charge when requested well in advance. Changes made within 30 days of departure may incur amendment fees charged by suppliers, which will be passed on to you at cost.\n\nSignificant changes (e.g., a completely new destination) may require a new booking to be created.`,
  },
  {
    title: "6. Cancellation or changes by Wanderlight",
    content: `We reserve the right to cancel or significantly alter your trip in exceptional circumstances, including but not limited to: natural disaster, civil unrest, pandemic, or an event beyond our reasonable control that makes the trip unsafe or impossible to deliver.\n\nIn such cases, we will:\n• Offer you an alternative trip of comparable value, or\n• Provide a full refund of all payments made to us\n\nWanderlight is not liable for any consequential losses including flights or accommodation booked independently. We therefore strongly recommend booking all elements through us or holding comprehensive travel insurance.`,
  },
  {
    title: "7. Travel insurance",
    content: `Travel insurance is mandatory for all Wanderlight trips. At minimum, your policy must cover:\n\n• Emergency medical treatment and evacuation\n• Trip cancellation and curtailment\n• Loss or theft of personal belongings\n• Personal liability\n\nYou are required to provide proof of adequate insurance cover before your final itinerary documents are released. We can recommend reputable travel insurance providers on request.`,
  },
  {
    title: "8. Passports, visas & health requirements",
    content: `You are solely responsible for ensuring that you hold a valid passport and any required visas or health documentation (including vaccinations) for your destination. Your curator will provide a checklist of requirements at the planning stage, but this is for guidance only — requirements can change and you must verify current rules with the relevant embassy or government body before travel.`,
  },
  {
    title: "9. Our liability",
    content: `Wanderlight acts as an agent on your behalf in arranging travel services provided by third parties (airlines, hotels, tour operators). We are not liable for the acts, omissions, or default of these suppliers, or for any loss, damage, injury, or expense arising from events beyond our reasonable control.\n\nOur total liability to you in connection with any booking shall not exceed the total price paid by you for that booking.\n\nNothing in these terms limits our liability for death or personal injury caused by our own negligence.`,
  },
  {
    title: "10. Complaints",
    content: `If you experience a problem during your trip, please contact your curator immediately via WhatsApp so we can attempt to resolve the issue in real time. Complaints raised after your return are much harder to resolve.\n\nIf you remain unsatisfied, please submit a formal complaint in writing to gsatish133@gmail.com within 28 days of your return. We will acknowledge your complaint within 5 working days and aim to resolve it within 28 days.`,
  },
  {
    title: "11. Governing law",
    content: `These terms and conditions are governed by the laws of India. Any disputes arising from or related to your booking with Wanderlight shall be subject to the exclusive jurisdiction of the courts of India.`,
  },
]

export default function BookingTermsPage() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(140deg,#0d0b1e 0%,#1b1040 30%,#2e1b50 58%,#160d28 100%)" }}
    >
      {/* Ambient blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-24 h-[30rem] w-[30rem] rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle,#7c3f96,transparent 70%)" }} />
        <div className="absolute bottom-1/3 right-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle,#e8902a,transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle,#34d399,transparent 70%)" }} />
      </div>

      <SiteHeader onBookingOpen={() => {}} />

      {/* Hero */}
      <section className="relative pt-28 pb-14 overflow-hidden sm:pt-40 sm:pb-20">
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(90deg,transparent,#7c3f96 40%,#e8902a 60%,transparent)" }} />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{
              background: "linear-gradient(90deg,#fbbf24,#e8902a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            Legal
          </p>
          <h1 className="font-serif text-5xl font-semibold text-white sm:text-6xl">
            Booking{" "}
            <span
              className="font-light italic"
              style={{
                background: "linear-gradient(90deg,#c084fc,#fbbf24)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}
            >
              Terms
            </span>
          </h1>
          <p className="mt-4 text-white/40 text-sm">Effective: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="relative mx-auto max-w-3xl px-5 py-8 pb-20 sm:px-6 sm:py-10 sm:pb-24 lg:px-8">
        {/* Intro card */}
        <div
          className="rounded-2xl border border-white/10 p-8 mb-10"
          style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}
        >
          <p className="text-white/55 leading-relaxed text-sm">
            Please read these terms carefully before confirming your booking. By paying a deposit or
            submitting a booking confirmation, you agree to be bound by these terms on behalf of yourself
            and all members of your travel party. If anything is unclear, please ask your curator before
            proceeding.
          </p>
        </div>

        {/* Table of contents */}
        <div
          className="rounded-2xl border border-white/10 p-6 mb-10"
          style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}
        >
          <h2
            className="text-sm font-semibold mb-3 uppercase tracking-wider"
            style={{
              background: "linear-gradient(90deg,#fbbf24,#e8902a)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}
          >
            Contents
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {sections.map((s) => (
              <li key={s.title}>
                <a
                  href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-sm text-white/45 hover:text-white/80 transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title} id={s.title.replace(/\s+/g, "-").toLowerCase()}>
              <h2 className="font-serif text-2xl font-semibold text-white mb-4">{s.title}</h2>
              <div className="text-white/50 leading-relaxed whitespace-pre-line text-sm">
                {s.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div
          className="mt-14 rounded-2xl border border-white/10 px-6 py-8 text-center"
          style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)" }}
        >
          <h3 className="font-serif text-xl font-semibold text-white mb-2">Questions about your booking?</h3>
          <p className="text-sm text-white/50 mb-4">
            Contact your curator at{" "}
            <a href="mailto:gsatish133@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
              gsatish133@gmail.com
            </a>{" "}
            or{" "}
            <a href="tel:+918889899041" className="text-amber-400 hover:text-amber-300 transition-colors">
              +91-8889899041
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="rounded-full border border-white/20 bg-white/8 px-5 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
            >
              Contact us
            </button>
            <Link
              href="/plan"
              className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)" }}
            >
              Plan a trip
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}
