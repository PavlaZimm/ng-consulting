# CLAUDE.md — NG Consulting Redesign
> Instrukce pro Claude Code. Přečti tento soubor a BRAND_MANUAL.md před každou session. Pak začni v plan módu.

---

## Project Overview

Redesign webu **ngconsulting.cz** — rozcestník mateřské agentury NG Consulting s.r.o.
Web slouží jako reprezentativní vstupní bod pro všechny interní projekty skupiny.

**Interní projekty (karty na webu):**
| Projekt | URL | Stav |
|---|---|---|
| NG Stránky | ngstranky.cz | Aktivní |
| NG Emailing | ngemailing.cz | Aktivní |
| Vaše Město | vasemesto.cz | Aktivní |
| Další projekty | — | Placeholder "Připravujeme" |

**Reference pro zobrazení:** AXA, Renomia a další — viz ngstranky.cz/reference

**GitHub:**
- Repozitář nasdílet: `nesvadba-lukas`, `jvlbc`
- Deploy: testovací URL (libovolný hosting, doporučeno Vercel)

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict mode)
- **Linting:** ESLint + Prettier
- **Ikony:** Lucide React
- **Fonty:** Google Fonts via next/font
- **Deployment:** Vercel (auto-deploy z main)
- **SEO:** next-sitemap pro sitemap.xml

Zdůvodnění: Next.js + Tailwind je ideální pro prezentační web s výhledem na další rozvoj.
Server components = výborný Lighthouse score. Vercel = bezplatný deploy s preview URL.

---

## Workflow Orchestration

### 1. Plan Mode Default
- Před jakýmkoli netriviálním úkolem (3+ kroky nebo architektonické rozhodnutí)
  nejdřív vytvoř plán v tasks/todo.md
- Pokud se něco pokazí — STOP, přeplánuj, nezačínej znovu naslepo
- Piš detailní specs před buildováním, ne až po
- Vždy ověř ambiguitu předem, nespekuluj

### 2. Subagent Strategy
- Pro komplexní problémy rozděl práci na izolované úkoly
- Jeden úkol = jeden fokus, žádné míchání zodpovědností
- Uchovej hlavní kontext čistý, detail deleguj

### 3. Self-Improvement Loop
- Po každé korekci od uživatele: zapiš poučení do tasks/lessons.md
- Formuluj pravidla která zabrání opakování stejné chyby
- Na začátku session si projdi lessons.md

### 4. Verification Before Done
- Nikdy neoznačuj úkol za hotový bez důkazu že funguje
- Spusť `npm run build`, zkontroluj logy, ověř v prohlížeči
- Otázka před každým commitem: "Schválil by to senior developer?"

### 5. Demand Elegance (Balanced)
- Pro netriviální změny: "Existuje elegantnější způsob?"
- Pokud fix vypadá hacky: implementuj elegantní řešení
- Pro jednoduché a zřejmé věci: prostě to udělej, nepřemýšlej
- Nevylepšuj to co není rozbité

### 6. Autonomous Bug Fixing
- Při bug reportu: rovnou oprav, neptej se na povolení
- Ukaž na logy, chyby — pak je vyřeš
- Zero context switching od uživatele

---

## Task Management

1. **Plan First** — napiš plán do tasks/todo.md s checkboxy před implementací
2. **Verify Plan** — zkontroluj plán před startem
3. **Track Progress** — označuj dokončené položky průběžně ✅
4. **Explain Changes** — high-level summary ke každému kroku
5. **Document Results** — přidej review sekci do tasks/todo.md po dokončení
6. **Capture Lessons** — aktualizuj tasks/lessons.md po každé korekci

---

## Core Principles

- **Simplicity First** — každá změna musí být co nejjednodušší, minimální dopad na kód
- **No Laziness** — hledej kořenové příčiny, žádné dočasné záplaty, senior standard
- **Minimal Impact** — dotkni se jen toho co je nutné, žádné vedlejší efekty

---

## Security Baseline

Tato pravidla platí vždy. Výjimky dokumentuj v PR pod "Security Exception".

- **Žádné secrets v kódu ani gitu. Nikdy.** API klíče a credentials pouze přes env
  proměnné. Vždy ověřit že .env je v .gitignore před commitem.
- **Input validace** — server-side (schema-based). Nikdy nedůvěřuj client-side validaci.
  Output escaping pro XSS.
- **CORS** — nikdy wildcard * v produkci. Explicitně whitelistuj povolené origins.
- **Rate limiting** na write endpointech pokud budou kontaktní formuláře.
- Navrhni /security-review kdykoli pracuješ na kontaktních formulářích nebo API.

---

## Code Standards

- Nikdy `type: any` v TypeScriptu. Strict typing, generics, nebo `unknown`.
- Nejnovější stabilní verze závislostí.
- Zachovej konzistenci s etablovaným stylem — nejdřív si srovnej co tam je.
- Komponenty: jeden soubor = jedna zodpovědnost.
- Složky: `components/ui/` pro základní prvky, `components/sections/` pro sekce stránek.

---

## SEO & GEO

- Unikátní `<title>` a `<meta description>` pro každou stránku
- Open Graph tagy (og:title, og:description, og:image) všude
- JSON-LD strukturovaná data — Organization schema pro ngconsulting.cz
- sitemap.xml automaticky generovaný přes next-sitemap
- robots.txt explicitně definovaný
- Sémantické HTML: správná hierarchie h1 → h2 → h3
- Alt texty na všech obrázcích
- Hreflang pokud bude vícejazyčná verze
- Core Web Vitals: LCP < 2.5s, CLS < 0.1

---

## Accessibility

- WCAG 2.1 AA jako minimum
- Keyboard navigation funkční na celém webu
- Focus states viditelné (viz BRAND_MANUAL.md — focus ring definice)
- aria-label na interaktivních prvcích bez popisku
- Kontrast min. 4.5:1 pro text (viz BRAND_MANUAL.md — ověřené kombinace)
- `prefers-reduced-motion` respektovat v animacích

---

## Version Control & Deploy

- **Nikdy automaticky commitovat ani pushovat** — pouze na explicitní pokyn
- Git author email nastavit před prvním commitem
- Feature branches, PR před mergem do main
- Commit messages: stručné, imperativní (add hero section, fix mobile nav)
- Deploy: Git → GitHub → Vercel (auto-deploy z main)
- GitHub přístupy: nasdílet `nesvadba-lukas` a `jvlbc` na repozitář

---

## Struktura projektu

```
ng-consulting/
├── CLAUDE.md
├── BRAND_MANUAL.md
├── tasks/
│   ├── todo.md
│   └── lessons.md
├── public/
│   ├── images/
│   │   └── logos/          # loga klientů (AXA, Renomia...)
│   └── og-image.jpg        # Open Graph obrázek
├── src/
│   ├── app/
│   │   ├── layout.tsx      # root layout, fonty, metadata
│   │   ├── page.tsx        # homepage (rozcestník)
│   │   └── globals.css     # CSS variables z BRAND_MANUAL.md
│   ├── components/
│   │   ├── ui/             # Button, Card, Badge...
│   │   └── sections/       # Hero, Projects, References, Footer
│   └── lib/
│       └── data.ts         # data pro projekty a reference
├── .env.example
├── .gitignore
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

---

## Content Spec — ngconsulting.cz

### Hero sekce
- **Headline:** `NG Consulting — digitální skupina pro váš online růst`
- **Subheadline:** `Tvoříme weby, spravujeme e-mailing a budujeme online komunity. Vyberte si projekt, který vám pomůže.`
- **Vizuál:** čisté světlé pozadí, jemná typografická kompozice, žádný stock foto

### Projekty (karty — grid 2×2 nebo 3+1)
| Projekt | Popis | URL | Stav |
|---|---|---|---|
| NG Stránky | Tvorba webů a e-shopů na míru | ngstranky.cz | Aktivní |
| NG Emailing | Profesionální e-mail marketing | ngemailing.cz | Aktivní |
| Vaše Město | Lokální online komunity a portály | vasemesto.cz | Aktivní |
| Nový projekt | [DOPLNIT nebo placeholder] | — | Připravujeme |

### Reference
- Výběr: AXA, Renomia + [DOPLNIT další top reference z ngstranky.cz/reference]
- Layout: logo grid, šedé ve výchozím stavu → barevné při hoveru
- Titulek sekce: `Důvěřují nám`

### O nás / Kontakt (patička nebo mini sekce)
- Krátký popis: NG Consulting s.r.o., Liberec
- Kontakt: vytiska@ngstranky.cz, +420 608 133 557
- Adresa: Hanychovská 575/33, 460 07 Liberec
- [DOPLNIT] IČO pokud má být na webu

### Footer
- Logo NG Consulting
- Rychlé odkazy: Projekty, Reference, Kontakt
- Copyright © 2026 NG Consulting s.r.o.
- Odkaz na ngstranky.cz (autor webu)

---

## Definition of Done

- [ ] Všechny sekce z Content Spec implementovány
- [ ] Web responzivní (mobile 375px, tablet 768px, desktop 1280px+)
- [ ] Lighthouse SEO ≥ 90
- [ ] Lighthouse Accessibility ≥ 90
- [ ] Lighthouse Performance ≥ 85
- [ ] .env.example vytvořen (bez skutečných hodnot)
- [ ] .env v .gitignore
- [ ] README.md popisuje jak spustit lokálně (`npm install` + `npm run dev`)
- [ ] GitHub repozitář nasdílen uživatelům `nesvadba-lukas` a `jvlbc`
- [ ] Web spuštěn na testovací Vercel URL
- [ ] sitemap.xml dostupný na /sitemap.xml
- [ ] robots.txt dostupný na /robots.txt
- [ ] JSON-LD Organization schema validní (test: schema.org validator)
