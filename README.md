# NG Consulting — ngconsulting.cz

Rozcestník mateřské agentury NG Consulting s.r.o. — vstupní bod pro všechny interní projekty skupiny.

## Stack

- **Next.js 16** (App Router, static export)
- **Tailwind CSS v4**
- **TypeScript** (strict mode)
- **Lucide React** (ikony)
- **next-sitemap** (automatický sitemap.xml)

## Spuštění lokálně

```bash
# 1. Instalace závislostí
npm install

# 2. Nastavení env proměnných
cp .env.example .env.local
# Vyplň NEXT_PUBLIC_SITE_URL v .env.local

# 3. Spuštění dev serveru
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

## Build pro produkci

```bash
npm run build
# Automaticky spustí next-sitemap (postbuild)
```

## Env proměnné

| Proměnná | Popis | Příklad |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Produkční URL webu | `https://ngconsulting.cz` |

## Struktura projektu

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonty, metadata, JSON-LD
│   ├── page.tsx            # Homepage (sestavení sekcí)
│   ├── opengraph-image.tsx # Generovaný OG image (edge runtime)
│   └── globals.css         # CSS variables, Tailwind @theme
├── components/
│   └── sections/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── References.tsx
│       └── Footer.tsx
└── lib/
    └── data.ts             # Data pro projekty, reference, kontakt
```

## Deploy

Web se automaticky deployuje přes **Vercel** při push do větve `main`.

Nastav env proměnné v Vercel dashboard:
- `NEXT_PUBLIC_SITE_URL` = `https://ngconsulting.cz`

## GitHub přístupy

Collaboratory repozitáře: `nesvadba-lukas`, `jvlbc`

## Kontakt

NG Consulting s.r.o. · [vytiska@ngstranky.cz](mailto:vytiska@ngstranky.cz) · +420 608 133 557
