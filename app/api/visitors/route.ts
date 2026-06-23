import { NextResponse } from 'next/server'

// In-memory store for visitor count (persists during dev server session)
let visitorCount = 45000

// Increment visitor count
function incrementVisitorCount(): number {
  visitorCount += 1
  console.log(`[Visitor Counter] Current count: ${visitorCount}`)
  return visitorCount
}

export async function GET() {
  try {
    const count = incrementVisitorCount()
    return NextResponse.json({ count })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json({ count: 45000 }, { status: 500 })
  }
}
