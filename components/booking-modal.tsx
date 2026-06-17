"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const DESTINATIONS = ["Santorini, Greece", "Kyoto, Japan", "Swiss Alps, Switzerland", "Marrakech, Morocco", "Bali, Indonesia", "Somewhere new — surprise me!"]
const BUDGETS = ["Under $2,000", "$2,000 – $3,000", "$3,000 – $5,000", "$5,000+"]
const STYLES = ["Relaxation & beaches", "Culture & history", "Adventure & nature", "Food & wine", "Luxury & wellness", "Family-friendly"]

type Form = {
  destination: string
  date: string
  travelers: string
  budget: string
  style: string
  name: string
  email: string
  phone: string
  notes: string
}

type Props = {
  onClose: () => void
}

export function BookingModal({ onClose }: Props) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<Form>({
    destination: "",
    date: "",
    travelers: "2",
    budget: "",
    style: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  })

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  function patch(fields: Partial<Form>) {
    setForm((f) => ({ ...f, ...fields }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (step < 2) { setStep(step + 1); return }
    if (form.name && form.email) setSubmitted(true)
  }

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Plan a trip"
        className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl bg-background shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            {!submitted && (
              <div className="mb-2 flex gap-1.5">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className={`h-1 w-8 rounded-full transition-colors ${s <= step ? "bg-primary" : "bg-border"}`}
                  />
                ))}
              </div>
            )}
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              {submitted ? "All done" : `Step ${step} of 2`}
            </p>
            <h2 className="font-serif text-2xl font-semibold text-foreground mt-1">
              {submitted
                ? "Request received!"
                : step === 1
                ? "Where do you want to go?"
                : "Tell us about yourself"}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-border p-2 hover:bg-muted transition-colors ml-4 mt-1"
          >
            <X className="size-5 text-foreground" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4">
              <p className="text-5xl mb-4" aria-hidden="true">🌍</p>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Thanks <span className="font-medium text-foreground">{form.name}</span>! Our travel
                experts will reach out to{" "}
                <span className="font-medium text-foreground">{form.email}</span> within 24 hours to
                craft your perfect journey.
              </p>
              {form.destination && (
                <div className="mt-4 rounded-xl bg-secondary px-4 py-3 text-sm text-muted-foreground">
                  ✈️ &nbsp;
                  <span className="font-medium text-foreground">{form.destination}</span>
                  {form.travelers && ` · ${form.travelers} traveler${Number(form.travelers) > 1 ? "s" : ""}`}
                  {form.budget && ` · ${form.budget}`}
                </div>
              )}
              <Button onClick={onClose} className="mt-6 rounded-full" size="lg">
                Close
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {step === 1 && (
                <>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Destination
                    </label>
                    <select
                      value={form.destination}
                      onChange={(e) => patch({ destination: e.target.value })}
                      className={inputCls}
                    >
                      <option value="">Choose a destination…</option>
                      {DESTINATIONS.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Travel date
                      </label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => patch({ date: e.target.value })}
                        min={new Date().toISOString().split("T")[0]}
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Travelers
                      </label>
                      <select
                        value={form.travelers}
                        onChange={(e) => patch({ travelers: e.target.value })}
                        className={inputCls}
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
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Budget per person
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => patch({ budget: b })}
                          className={`rounded-xl border px-3 py-2 text-xs font-medium text-left transition-colors ${
                            form.budget === b
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-2 block">
                      Travel style
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {STYLES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => patch({ style: s })}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                            form.style === s
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Full name <span className="text-destructive">*</span>
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => patch({ name: e.target.value })}
                        placeholder="Your name"
                        className={inputCls}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground mb-1 block">
                        Email <span className="text-destructive">*</span>
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => patch({ email: e.target.value })}
                        placeholder="you@email.com"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => patch({ phone: e.target.value })}
                      placeholder="+1 555 000 0000"
                      className={inputCls}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-muted-foreground mb-1 block">
                      Anything special? (optional)
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => patch({ notes: e.target.value })}
                      rows={3}
                      placeholder="Anniversaries, dietary needs, accessibility, dream experiences…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {/* Summary */}
                  <div className="rounded-xl bg-secondary px-4 py-3 text-sm">
                    <p className="font-medium text-foreground mb-1">Your trip summary</p>
                    <p className="text-muted-foreground">
                      {form.destination || "Destination TBD"} &middot;{" "}
                      {form.travelers} traveler{Number(form.travelers) > 1 ? "s" : ""} &middot;{" "}
                      {form.budget || "Budget flexible"}
                      {form.style && ` · ${form.style}`}
                    </p>
                  </div>
                </>
              )}

              <div className="flex gap-3 mt-1">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="rounded-full flex-1"
                  >
                    Back
                  </Button>
                )}
                <Button type="submit" size="lg" className="rounded-full flex-1">
                  {step === 1 ? "Continue" : "Send request"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
