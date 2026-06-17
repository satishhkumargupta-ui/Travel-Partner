"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookingModal } from "@/components/booking-modal"
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
  const [bookingOpen, setBookingOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader onBookingOpen={() => setBookingOpen(true)} />

      {/* Hero */}
      <section
        className="relative pt-40 pb-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(180deg,#06091a 0%,#1b1a5e 30%,#7c3f96 60%,#c45f38 80%,#0d2137 100%)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/60">Legal</p>
          <h1 className="font-serif text-5xl font-semibold text-white sm:text-6xl">Booking Terms</h1>
          <p className="mt-4 text-white/70 text-sm">Effective: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 mb-10">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Please read these terms carefully before confirming your booking. By paying a deposit or
            submitting a booking confirmation, you agree to be bound by these terms on behalf of yourself
            and all members of your travel party. If anything is unclear, please ask your curator before
            proceeding.
          </p>
        </div>

        {/* Table of contents */}
        <div className="rounded-2xl border border-border bg-secondary p-6 mb-10">
          <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Contents</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {sections.map((s) => (
              <li key={s.title}>
                <a
                  href={`#${s.title.replace(/\s+/g, "-").toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title} id={s.title.replace(/\s+/g, "-").toLowerCase()}>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">{s.title}</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {s.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-14 rounded-2xl border border-border bg-secondary px-6 py-8 text-center">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Questions about your booking?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Contact your curator at{" "}
            <a href="mailto:gsatish133@gmail.com" className="text-primary hover:underline">
              gsatish133@gmail.com
            </a>{" "}
            or{" "}
            <a href="tel:+918889899041" className="text-primary hover:underline">
              +91-8889899041
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setContactOpen(true)}
              className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              Contact us
            </button>
            <button
              onClick={() => setBookingOpen(true)}
              className="rounded-full px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 40%,#c45f38 70%,#e8902a 100%)" }}
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
