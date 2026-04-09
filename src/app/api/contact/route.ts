import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// ── Rate limiting (in-memory, best-effort for Vercel serverless) ──────────────
const RATE_LIMIT_MAX      = 5
const RATE_LIMIT_WINDOW   = 15 * 60 * 1000   // 15 minutes in ms

interface RateEntry { count: number; resetAt: number }
const rateLimitMap = new Map<string, RateEntry>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) return true

  entry.count++
  return false
}

// ── Zod schema ────────────────────────────────────────────────────────────────
const contactSchema = z.object({
  name:    z.string().min(1, 'Jméno je povinné.').max(100, 'Jméno je příliš dlouhé.'),
  email:   z.string().email('Zadejte platnou e-mailovou adresu.'),
  phone:   z.string().max(20, 'Telefon je příliš dlouhý.').optional(),
  message: z.string().min(10, 'Zpráva musí mít alespoň 10 znaků.').max(2000, 'Zpráva je příliš dlouhá (max 2000 znaků).'),
})

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Příliš mnoho požadavků. Zkuste to prosím za 15 minut.' },
      { status: 429 },
    )
  }

  // Parse body
  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return NextResponse.json({ error: 'Neplatný formát dat.' }, { status: 400 })
  }

  // Validate with Zod
  const result = contactSchema.safeParse(raw)
  if (!result.success) {
    const firstError = result.error.issues[0]?.message ?? 'Neplatná data.'
    return NextResponse.json({ error: firstError }, { status: 422 })
  }

  const { name, email, phone, message } = result.data

  // TODO: nahradit console.log skutečným odesláním e-mailu (např. Resend / Nodemailer)
  console.log('=== Nová zpráva z kontaktního formuláře ===')
  console.log('Jméno:   ', name)
  console.log('E-mail:  ', email)
  console.log('Telefon: ', phone ?? '—')
  console.log('Zpráva:  ', message)
  console.log('==========================================')

  return NextResponse.json({ success: true }, { status: 200 })
}
