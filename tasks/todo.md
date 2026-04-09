# tasks/todo.md — NG Consulting Redesign

## Fáze 1: Setup ✅
- [x] Projekt inicializován (Next.js 16.2.2 / create-next-app@latest)
- [x] CLAUDE.md a BRAND_MANUAL.md zkopírovány do rootu projektu
- [x] Fonty nainstalované (Plus Jakarta Sans + DM Sans přes next/font)
- [x] CSS variables z BRAND_MANUAL.md vloženy do `src/app/globals.css`
- [x] Tailwind @theme nakonfigurován s brand barvami a fonty (v4 CSS-first přístup)
- [x] .env.example vytvořen, .gitignore upraven (!.env.example výjimka)
- [x] Adresářová struktura: components/ui, components/sections, lib, tasks, public/images/logos
- [x] `npm run build` projde bez chyb
- [ ] Git repo inicializován + pushnut na GitHub
- [ ] GitHub přístupy nasdíleny: `nesvadba-lukas`, `jvlbc`
- [ ] Vercel projekt napojen na GitHub repo (auto-deploy z main)
- [ ] Testovací URL funkční

## Fáze 2: Komponenty ✅
- [x] Layout — root layout.tsx (fonty, metadata, skip link, JSON-LD)
- [x] Navbar — sticky, backdrop-filter, logo + navigace, hamburger mobile menu
- [x] Footer — logo, rychlé odkazy, kontakt, copyright, 3-col grid
- [x] ProjectCard — karta projektu s hover efektem a accent line
- [x] ProjectCard variant `coming-soon` — dashed border + amber badge
- [x] ReferenceLogo — grayscale → color hover (text-based logos)

## Fáze 3: Sekce / Obsah (page.tsx) ✅
- [x] Hero sekce — headline, subheadline, CTA tlačítko, stats row
- [x] Projekty grid — 4 karty (3 aktivní + 1 coming soon), auto-fill grid
- [x] Reference sekce — logo grid, titulek "Důvěřují nám"
- [x] Kontakt / patička sekce (v Footer — 3 sloupce)

## Fáze 4: SEO & Kvalita ✅
- [x] Meta tagy v layout.tsx (title, description, canonical)
- [x] Open Graph tagy — opengraph-image.tsx (edge runtime, auto-linked)
- [x] Twitter card metadata přidán (summary_large_image)
- [x] JSON-LD Organization schema v layout.tsx (validní)
- [x] next-sitemap nainstalován a konfigurován (postbuild)
- [x] robots.txt generovaný next-sitemapem při buildu
- [x] Alt texty — žádné `<img>` tagy (Lucide SVG ikony, text loga)
- [ ] Lighthouse SEO ≥ 90 (testovat po deploy)
- [ ] Lighthouse Accessibility ≥ 90 (testovat po deploy)
- [ ] Lighthouse Performance ≥ 85 (testovat po deploy)
- [x] Responzivita otestována (375px ✅, 768px ✅, 1280px ✅)
- [x] prefers-reduced-motion media query aktivní (globals.css)
- [x] Security headers (next.config.ts + vercel.json: CSP, HSTS, X-Frame-Options)

## Security Review ✅ (2026-04-08)

### SECRETS & ENV
- [x] `.env` je v `.gitignore` ✅
- [x] Žádné API klíče ani secrets v source kódu ✅
- [x] Žádné `NEXT_PUBLIC_` ani `VITE_` proměnné pro tajné hodnoty ✅
- [x] `.env.example` existuje bez skutečných hodnot ✅

### TYPESCRIPT
- [x] `tsconfig.json` má `"strict": true` ✅
- [x] Žádné `type: any` v TypeScript souborech ✅

### VALIDACE & RATE LIMITING
- [x] Zod nainstalován (`npm install zod`) ✅
- [x] `/api/contact` — Zod schema: name (min 1, max 100), email (valid), phone (optional, max 20), message (min 10, max 2000) ✅
- [x] `/api/contact` — rate limiting: max 5 req / 15 min per IP (in-memory Map) ✅
- [x] Vrací 429 s českou chybovou hláškou při překročení limitu ✅

### VERCEL SECURITY HEADERS (`vercel.json`)
- [x] `X-Content-Type-Options: nosniff` ✅
- [x] `X-Frame-Options: DENY` ✅
- [x] `X-XSS-Protection: 1; mode=block` ✅
- [x] `Referrer-Policy: strict-origin-when-cross-origin` ✅
- [x] `Strict-Transport-Security` (HSTS) ✅
- [x] `Content-Security-Policy` (CSP) ✅
- [x] `Permissions-Policy` ✅

### POZNÁMKY
- Rate limiting je in-memory (Map) — best-effort pro Vercel serverless (každá instance má vlastní stav). Pro produkční zatížení doporučeno nahradit Upstash Redis nebo Vercel KV.
- Kontaktní formulář zatím neposílá e-mail — `console.log` placeholder. Před ostrým provozem doplnit Resend / Nodemailer.

## Fáze 5: Odevzdání
- [ ] README.md s instrukcemi (`npm install`, `npm run dev`, env variables)
- [ ] Finální commit pushnut na GitHub
- [ ] Repozitář nasdílen nesvadba-lukas a jvlbc
- [ ] Testovací Vercel URL zaslána klientovi
