"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookingModal } from "@/components/booking-modal"
import { ContactModal } from "@/components/contact-modal"

const sections = [
  {
    title: "1. Who we are",
    content: `Wanderlight Travel ("we", "our", "us") is a travel curation service operated by Satish Kumar Gupta, based in India. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services.\n\nIf you have questions about this policy, contact us at gsatish133@gmail.com or call +91-8889899041.`,
  },
  {
    title: "2. Information we collect",
    content: `We collect information you provide directly to us, including:\n\n• Name, email address, and phone number when you submit a trip enquiry or contact form\n• Travel preferences such as destination, dates, budget, number of travellers, and travel style\n• Payment information processed securely through our payment partners (we do not store card details)\n• Communications you send us via email, WhatsApp, or our website forms\n\nWe also automatically collect limited technical data such as your IP address, browser type, and pages visited to help us improve our website.`,
  },
  {
    title: "3. How we use your information",
    content: `We use the information we collect to:\n\n• Respond to your trip enquiries and create personalised itineraries\n• Process bookings and payments\n• Send you trip-related updates and essential communications\n• Send our newsletter if you have subscribed (you can unsubscribe at any time)\n• Improve our website and service quality\n• Comply with legal obligations\n\nWe do not sell, rent, or trade your personal information to any third party for their marketing purposes.`,
  },
  {
    title: "4. How we share your information",
    content: `We share your information only as necessary to deliver our service:\n\n• Local tour operators and accommodation partners to fulfil your booking\n• Payment processors to handle transactions securely\n• Web3Forms to deliver form submissions to our inbox\n• Vercel Analytics to understand anonymous website usage\n\nAll partners are contractually required to handle your data securely and only for the purpose of delivering your trip.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses minimal cookies:\n\n• Essential cookies that allow the website to function correctly\n• Analytics cookies (Vercel Analytics) that collect anonymous usage data — no personal information is stored\n\nYou can disable cookies in your browser settings, though this may affect certain website functions.`,
  },
  {
    title: "6. Data retention",
    content: `We retain your personal information for as long as necessary to deliver the services you have requested, maintain our booking records, and comply with our legal obligations. Enquiry data from trips that did not proceed is deleted after 12 months. You may request deletion of your data at any time.`,
  },
  {
    title: "7. Your rights",
    content: `You have the right to:\n\n• Access the personal information we hold about you\n• Request correction of inaccurate information\n• Request deletion of your data (subject to legal retention requirements)\n• Withdraw consent for newsletter communications at any time\n• Lodge a complaint with a relevant data protection authority\n\nTo exercise any of these rights, email us at gsatish133@gmail.com.`,
  },
  {
    title: "8. Data security",
    content: `We take reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, or destruction. Our website is served over HTTPS, and sensitive data is encrypted in transit. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "9. Children's privacy",
    content: `Our services are not directed at children under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will delete it.`,
  },
  {
    title: "10. Changes to this policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by prominently displaying a notice on our website. The date at the top of this page reflects when the policy was last updated. Continued use of our services after changes take effect constitutes your acceptance of the revised policy.`,
  },
]

export default function PrivacyPage() {
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
          <h1 className="font-serif text-5xl font-semibold text-white sm:text-6xl">Privacy Policy</h1>
          <p className="mt-4 text-white/70 text-sm">Last updated: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 mb-8">
          <p className="text-muted-foreground leading-relaxed">
            Your privacy matters to us. This policy explains clearly and honestly what data we collect,
            why we collect it, and how we use it. We have written it in plain language so you can make
            informed decisions about sharing your information with us.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">{s.title}</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {s.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-14 rounded-2xl border border-border bg-secondary px-6 py-8 text-center">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Privacy questions?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Email us at{" "}
            <a href="mailto:gsatish133@gmail.com" className="text-primary hover:underline">
              gsatish133@gmail.com
            </a>{" "}
            or call{" "}
            <a href="tel:+918889899041" className="text-primary hover:underline">
              +91-8889899041
            </a>
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            Contact us
          </button>
        </div>
      </section>

      <SiteFooter onContactOpen={() => setContactOpen(true)} />
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </div>
  )
}
