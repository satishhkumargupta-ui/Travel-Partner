"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { MessageCircle, X, Send } from "lucide-react"

type Message = {
  id: number
  from: "bot" | "user"
  text: string
  links?: { label: string; href: string }[]
  chips?: string[]
}

const INITIAL_CHIPS = [
  "Popular destinations 🗺️",
  "Plan a trip ✈️",
  "Pricing & packages 💰",
  "Group tours 👥",
  "Travel guides 📖",
  "Contact us 📞",
]

export function ChatWidget() {
  const [open,     setOpen]     = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: "Hi there! 👋 I'm Atlas, your Wanderlight travel assistant. Ask me anything — destinations, pricing, planning, or group tours.",
      chips: INITIAL_CHIPS,
    },
  ])
  const [input,  setInput]  = useState("")
  const [typing, setTyping] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef  = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 200)
  }, [open])

  async function send(text: string) {
    if (!text.trim() || typing) return

    const userText = text.trim()
    const userMsg: Message = { id: Date.now(), from: "user", text: userText }
    const historyForAPI = [...messages, userMsg]

    setMessages(prev => [...prev, userMsg])
    setInput("")
    setTyping(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historyForAPI }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { id: Date.now() + 1, from: "bot", ...data }])
    } catch {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        from: "bot",
        text: "Sorry, I couldn't connect. Please try again! 😊",
      }])
    } finally {
      setTyping(false)
    }
  }

  return (
    <>
      {/* Backdrop — closes chat when clicking outside */}
      {open && (
        <div
          className="fixed inset-0 z-[299]"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-4 z-[300] flex w-[22rem] flex-col overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:right-8 sm:w-[26rem]"
          style={{
            background: "rgba(11,9,26,0.97)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            maxHeight: "min(580px, calc(100vh - 130px))",
            boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.07)",
          }}
        >
          {/* Header */}
          <div
            className="flex shrink-0 items-center gap-3 px-5 py-4"
            style={{ background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)" }}
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl">
              🌍
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white">Atlas · Wanderlight</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="size-1.5 shrink-0 rounded-full bg-emerald-400" />
                <p className="text-xs text-white/65">Online — replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/12 text-white/70 transition-all hover:bg-white/22 hover:text-white"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Top gradient accent */}
          <div className="h-px w-full shrink-0"
            style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.08) 50%,transparent)" }} />

          {/* Messages */}
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col gap-2 ${msg.from === "user" ? "items-end" : "items-start"}`}>
                {/* Bubble */}
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                    msg.from === "user"
                      ? "rounded-br-sm text-white"
                      : "rounded-bl-sm border border-white/8 text-white/85"
                  }`}
                  style={
                    msg.from === "user"
                      ? { background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)" }
                      : { background: "rgba(255,255,255,0.05)" }
                  }
                >
                  {msg.text}
                </div>

                {/* Action links */}
                {msg.links && msg.links.length > 0 && (
                  <div className="flex flex-col gap-1.5 items-start">
                    {msg.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="rounded-full border border-amber-400/35 bg-amber-400/10 px-4 py-1.5 text-xs font-medium text-amber-400 transition-all hover:bg-amber-400/20 hover:border-amber-400/60"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Quick reply chips */}
                {msg.chips && msg.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {msg.chips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => send(chip)}
                        className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs text-white/55 transition-all hover:border-white/25 hover:bg-white/10 hover:text-white"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-white/8 bg-white/5 px-4 py-3.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="size-1.5 rounded-full bg-white/45"
                      style={{ animation: `atlasDot 1.2s ease-in-out ${i * 0.18}s infinite` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input bar */}
          <div className="shrink-0 border-t border-white/8 px-4 py-3">
            <form
              onSubmit={(e) => { e.preventDefault(); send(input) }}
              className="flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2.5 transition-all focus-within:border-white/25 focus-within:bg-white/8"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything…"
                className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="flex size-8 shrink-0 items-center justify-center rounded-full transition-all disabled:opacity-25 hover:scale-110 active:scale-95"
                style={{ background: "linear-gradient(135deg,#7c3f96,#e8902a)" }}
              >
                <Send className="size-3.5 text-white" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(v => !v)}
        className="fixed bottom-6 right-4 z-[300] flex size-14 items-center justify-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 sm:right-8"
        style={{
          background: "linear-gradient(135deg,#1b1a5e 0%,#7c3f96 50%,#e8902a 100%)",
          boxShadow: "0 8px 32px rgba(124,63,150,0.55), 0 2px 8px rgba(0,0,0,0.4)",
        }}
        aria-label={open ? "Close chat" : "Chat with Atlas"}
      >
        {open ? <X className="size-6 text-white" /> : <MessageCircle className="size-6 text-white" />}
        {!open && (
          <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-emerald-400 text-[10px] font-bold text-white shadow-lg">
            1
          </span>
        )}
      </button>

      <style>{`
        @keyframes atlasDot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </>
  )
}
