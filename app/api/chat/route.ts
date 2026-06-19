import OpenAI from "openai"
import { NextRequest, NextResponse } from "next/server"

const SYSTEM_PROMPT = `You are Wren, a warm and knowledgeable travel assistant for Wanderlight — a premium travel curation company.

ABOUT WANDERLIGHT:
Founded 2009 | 45,000+ happy travellers | 120+ curated destinations | 4.9★ average rating
Expert curators personally design itineraries and vet every hotel, guide, and experience.

OUR FIXED PACKAGES (mention when relevant):
INDIA — Kashmir (6 nights, from ₹52,000, 4.9★ | Dal Lake, Himalayas, saffron fields), Kerala (7 nights, from ₹55,000, 4.9★ | Backwaters, Ayurveda, hill stations), Goa (5 nights, from ₹42,000, 4.8★ | Beaches, Portuguese forts, nightlife), Jaipur (4 nights, from ₹38,000, 4.8★ | Pink City, palaces, forts), Shimla (4 nights, from ₹35,000, 4.7★ | Colonial charm, cedar forests), Manali (5 nights, from ₹32,000, 4.7★ | Himalayas, trekking, skiing)
INTERNATIONAL — Bali (10 nights, from ₹1,75,000, 4.9★ | Temples, rice paddies, beaches), Kyoto (9 nights, from ₹2,60,000, 5.0★ | Zen gardens, geisha culture, ryokans), Santorini (7 nights, from ₹2,00,000, 4.9★ | Volcanic cliffs, sunsets, cave suites), Swiss Alps (8 nights, from ₹2,45,000, 4.8★ | Skiing, wildflower meadows), Marrakech (6 nights, from ₹1,57,000, 4.7★ | Souks, riads, palace gardens)

CUSTOM TRIPS — We can plan trips to ANY destination in the world. If a user asks about a destination not in our fixed packages (Paris, Maldives, Thailand, Dubai, New Zealand, Iceland, etc.), enthusiastically acknowledge it, share 1-2 highlights of that destination, then offer to create a fully custom itinerary and direct them to /plan.

RESPONSE RULES:
- Keep responses under 130 words unless the user asks for a detailed itinerary
- Use ✦ for bullet points, no markdown headers or bold
- Be warm, genuine, and excited about travel — not salesy
- Always end with a clear next step

LINKS (include when genuinely useful, max 2 per response):
/destinations — browse all packages | /plan — plan or book any trip | /guides — travel guides | /tours — group tours | /about — our story
Destination pages: /destinations/bali /destinations/kyoto /destinations/santorini /destinations/swiss-alps /destinations/marrakech /destinations/kashmir /destinations/kerala /destinations/goa /destinations/jaipur /destinations/shimla /destinations/manali

CHIPS: Suggest natural follow-up questions the user might want to ask (max 3, short phrases).`

const RESPOND_TOOL: OpenAI.Chat.Completions.ChatCompletionTool = {
  type: "function",
  function: {
    name: "respond",
    description: "Send a response to the user in the chat",
    parameters: {
      type: "object",
      properties: {
        text: {
          type: "string",
          description: "The response text. Use ✦ for bullets. No markdown. Keep under 130 words.",
        },
        links: {
          type: "array",
          description: "Optional page links to show as action buttons (max 2)",
          items: {
            type: "object",
            properties: {
              label: { type: "string", description: "Button label e.g. 'View Bali →'" },
              href:  { type: "string", description: "Relative path e.g. /destinations/bali" },
            },
            required: ["label", "href"],
          },
        },
        chips: {
          type: "array",
          description: "Optional follow-up quick-reply suggestions (max 3, short phrases)",
          items: { type: "string" },
        },
      },
      required: ["text"],
    },
  },
}

type ChatMsg = { from: "bot" | "user"; text: string }

export async function POST(req: NextRequest) {
  try {
    const client = new OpenAI({
      apiKey: process.env.botkey,
      baseURL: "https://api.groq.com/openai/v1",
    })

    const { messages }: { messages: ChatMsg[] } = await req.json()

    const history = messages.slice(-20)

    const openaiMessages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.map((m) => ({
        role: m.from === "user" ? ("user" as const) : ("assistant" as const),
        content: m.text,
      })),
    ]

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      max_tokens: 500,
      tools: [RESPOND_TOOL],
      tool_choice: "required",
      messages: openaiMessages,
    })

    const toolCall = response.choices[0]?.message?.tool_calls?.[0]
    if (!toolCall || toolCall.type !== "function") throw new Error("No tool call in response")

    const result = JSON.parse(toolCall.function.arguments) as {
      text: string
      links?: { label: string; href: string }[]
      chips?: string[]
    }

    return NextResponse.json(result)
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err)
    console.error("[Atlas API]", msg)
    const isQuota = msg.includes("429")
    const isMissingKey = msg.toLowerCase().includes("apikey") || msg.toLowerCase().includes("api key") || msg.toLowerCase().includes("missing")
    return NextResponse.json(
      {
        text: isQuota
          ? "Our AI assistant is temporarily unavailable due to a service limit. Please contact us directly and we'll be happy to help! 😊"
          : isMissingKey
          ? "Atlas is not configured yet — the API key is missing on the server."
          : "I'm having a little trouble right now — please try again in a moment! 😊",
        links: [{ label: "Contact us →", href: "/plan" }],
        _debug: msg,
      },
      { status: 200 }
    )
  }
}
