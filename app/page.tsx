"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { FeatureSection } from "@/components/feature-section"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { SiteFooter } from "@/components/site-footer"
import { DestinationModal } from "@/components/destination-modal"
import { BookingModal } from "@/components/booking-modal"
import { ContactModal } from "@/components/contact-modal"
import type { Destination } from "@/components/destinations"

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  function handleSearch(query: string) {
    setSearchQuery(query)
    setTimeout(() => {
      document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })
    }, 50)
  }

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader onBookingOpen={() => setBookingOpen(true)} />
      <Hero onSearch={handleSearch} />
      <Destinations
        searchQuery={searchQuery}
        onSelectDestination={setSelectedDestination}
      />
      <FeatureSection onBookingOpen={() => setBookingOpen(true)} />
      <Testimonials />
      <Newsletter />
      <SiteFooter onContactOpen={() => setContactOpen(true)} />

      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
    </main>
  )
}
