"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookingModal } from "@/components/booking-modal"
import { ContactModal } from "@/components/contact-modal"

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of terms",
    content: `By accessing or using the Wanderlight website (wanderlight.com) or any of our services, you confirm that you are at least 18 years old and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.\n\nThese terms apply to all visitors, users, and others who access or use the site.`,
  },
  {
    id: "services",
    title: "2. Our services",
    content: `Wanderlight provides personalised travel planning and curation services. Our website allows you to:\n\n• Browse curated travel destinations and itinerary ideas\n• Submit trip enquiries to our travel curators\n• Access travel guides and informational content\n• Subscribe to our newsletter\n\nSubmitting an enquiry does not constitute a confirmed booking. A booking is only confirmed once you have received written confirmation from Wanderlight and paid the required deposit. Please refer to our Booking Terms for details.`,
  },
  {
    id: "account",
    title: "3. User conduct",
    content: `When using our website or communicating with us, you agree not to:\n\n• Use the site for any unlawful purpose or in violation of any applicable laws\n• Submit false, misleading, or fraudulent information in any form or enquiry\n• Attempt to gain unauthorised access to any part of our systems\n• Transmit any harmful, offensive, or disruptive content\n• Use automated tools (bots, scrapers) to collect data from our site without prior written permission\n• Impersonate any person or entity or misrepresent your affiliation with any person or entity`,
  },
  {
    id: "ip",
    title: "4. Intellectual property",
    content: `All content on this website — including text, images, graphics, logos, icons, destination photography, itinerary descriptions, and the overall design — is the property of Wanderlight or its licensors and is protected by copyright and intellectual property law.\n\nYou may view and print content for personal, non-commercial use only. You may not reproduce, distribute, modify, publicly display, or create derivative works from any site content without our prior written consent.`,
  },
  {
    id: "links",
    title: "5. Third-party links",
    content: `Our website may contain links to third-party websites, including airline booking tools, accommodation providers, and travel resources. These links are provided for your convenience only.\n\nWanderlight has no control over the content or privacy practices of third-party sites and accepts no responsibility for them. Accessing any linked website is at your own risk. We encourage you to read the privacy policy and terms of any site you visit.`,
  },
  {
    id: "disclaimer",
    title: "6. Disclaimers",
    content: `The information on this website is provided in good faith and for general informational purposes only. While we strive to keep it accurate and up to date, we make no representations or warranties of any kind — express or implied — about:\n\n• The completeness, accuracy, or reliability of any information on the site\n• The suitability of any destination, experience, or itinerary for your specific circumstances\n• The availability of any travel product or service at the time you enquire\n\nTravel inherently involves risk. You are solely responsible for evaluating any information we provide and for making your own independent travel decisions.`,
  },
  {
    id: "liability",
    title: "7. Limitation of liability",
    content: `To the fullest extent permitted by law, Wanderlight shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of this website or our services, including but not limited to:\n\n• Loss of data or profits\n• Personal injury or property damage\n• Any errors or omissions in the content of this site\n• Any interruption or cessation of transmission to or from our site\n\nOur total aggregate liability to you for any claims arising from your use of this website shall not exceed ₹10,000.`,
  },
  {
    id: "indemnity",
    title: "8. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless Wanderlight and its owner, employees, and contractors from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with:\n\n• Your use of or access to the website\n• Your violation of these Terms and Conditions\n• Your violation of any third-party right, including intellectual property or privacy rights\n• Any content you submit through our forms or communications`,
  },
  {
    id: "privacy",
    title: "9. Privacy",
    content: `Your use of this website is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. By using our site, you consent to the data practices described in our Privacy Policy.\n\nPlease review our Privacy Policy to understand how we collect, use, and protect your personal information.`,
  },
  {
    id: "modifications",
    title: "10. Changes to these terms",
    content: `We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Changes take effect immediately upon being posted to this page. The date at the top of this page indicates when the terms were last updated.\n\nYour continued use of the website following any changes constitutes your acceptance of the revised terms. We encourage you to review these terms periodically.`,
  },
  {
    id: "termination",
    title: "11. Termination",
    content: `We reserve the right to refuse service, terminate access, or cancel enquiries at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is otherwise harmful to other users, us, or third parties.`,
  },
  {
    id: "governing-law",
    title: "12. Governing law",
    content: `These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts of India.`,
  },
]

export default function TermsPage() {
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
          <h1 className="font-serif text-5xl font-semibold text-white sm:text-6xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-white/70 text-sm">Effective: June 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        {/* Intro card */}
        <div className="rounded-2xl border border-border bg-card p-8 mb-10">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Please read these Terms and Conditions carefully before using the Wanderlight website. By
            accessing or using our site you agree to be bound by these terms. If you have any
            questions, contact us before proceeding.
          </p>
        </div>

        {/* Table of contents */}
        <div className="rounded-2xl border border-border bg-secondary p-6 mb-10">
          <h2 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Contents</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
            <div key={s.id} id={s.id}>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">{s.title}</h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm">
                {s.content}
              </div>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-14 rounded-2xl border border-border bg-secondary px-6 py-8 text-center">
          <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Questions about these terms?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Reach us at{" "}
            <a href="mailto:gsatish133@gmail.com" className="text-primary hover:underline">
              gsatish133@gmail.com
            </a>{" "}
            or{" "}
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
