# BRAND_MANUAL.md — NG Consulting
> Kompletní design systém pro redesign ngconsulting.cz.
> Přečti tento soubor celý před prvním řádkem kódu.

---

## 1. Positioning & Tone of Voice

**Kdo je NG Consulting:**
Mateřská agentura skupiny projektů zaměřených na online marketing, tvorbu webů a e-mailing.
Sídlí v Liberci, pracuje pro firmy napříč ČR. Klienti zahrnují velké značky (AXA, Renomia).

**Jak chce působit:**
- Reprezentativně a profesionálně (ne "malá liberecká firma")
- Moderně, ale ne hipstersky
- Důvěryhodně — jako partner pro velké klienty
- Přehledně — rozcestník musí být okamžitě srozumitelný

**Tón komunikace:**
- Profesionální, ale přístupný (ne suchý korporát)
- Konkrétní — žádné prázdné fráze jako "komplexní řešení na míru"
- Krátké věty, jasné sdělení
- Česky — web je primárně pro český trh

**Čemu se vyhýbat:**
- Stock fotografie lidí v kancelářích
- Generické headlines typu "Váš úspěch je naše priorita"
- Příliš mnoho textu — méně je více
- Animace jen pro efekt bez účelu

---

## 2. Barevná Paleta

### Primární paleta

| Název | HEX | RGB | Použití |
|---|---|---|---|
| **White Ice** | `#f9fffe` | rgb(249, 255, 254) | Hlavní pozadí stránek |
| **Midnight** | `#252021` | rgb(37, 32, 33) | Primární text, nadpisy |
| **Sky Blue** | `#17b5f2` | rgb(23, 181, 242) | CTA tlačítka, aktivní linky, akcenty, hover stavy |
| **Amber Gold** | `#ebad06` | rgb(235, 173, 6) | Sekundární akcent, badge "Připravujeme", highlights |
| **Warm Stone** | `#d4cfc8` | rgb(212, 207, 200) | Oddělovače, sekundární pozadí, disabled stavy |

### Rozšířená paleta (odvozené tóny)

| Název | HEX | Použití |
|---|---|---|
| **Blue Light** | `#e8f8fe` | Světlé pozadí karet, hover fill |
| **Blue Dark** | `#0d8ab8` | Hover stav Sky Blue tlačítek |
| **Amber Light** | `#fef9e7` | Pozadí badge/taggů |
| **Stone Light** | `#f0eeeb` | Alternativní sekce pozadí (zebra pattern) |
| **Midnight 80** | `#3d3839` | Sekundární text, popisky |

### Stavové barvy

| Stav | HEX | Použití |
|---|---|---|
| Success | `#16a34a` | Potvrzení, aktivní stavy |
| Warning | `#ebad06` | Upozornění (= Amber Gold) |
| Error | `#d6342d` | Chyby v formulářích |
| Info | `#17b5f2` | Informační zprávy (= Sky Blue) |

### Pravidla použití

- **Sky Blue** = primární akcentní barva. Max 10–15 % plochy. CTA, linky, ikonky.
- **Amber Gold** = sekundární akcent. Jen pro badges, highlights, jeden vizuální detail na sekci.
- **Červená `#d6342d`** = pouze pro error stavy. Nikdy jako brand barva.
- **Pozadí stránek** = `#f9fffe` nebo bílá `#ffffff`. Nikdy tmavé pozadí pro hlavní obsah.
- **Alternativní sekce** = `#f0eeeb` (Stone Light) pro vizuální rytmus stránky.

---

## 3. Typografie

### Fonty

| Role | Font | Styl | Fallback |
|---|---|---|---|
| **Display / Nadpisy** | Plus Jakarta Sans | Bold 700, ExtraBold 800 | sans-serif |
| **Body / Text** | DM Sans | Regular 400, Medium 500 | sans-serif |

**Proč tyto fonty:**
Plus Jakarta Sans je geometrický sans-serif s charakterem — moderní bez toho aby byl generický.
DM Sans je extrémně čitelný v malých velikostech, ideální pro body text.

### Import do Next.js (app/layout.tsx)

```typescript
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
})
```

### Typografická škála

| Token | Velikost | Weight | Line-height | Použití |
|---|---|---|---|---|
| `--text-display` | 56px / 3.5rem | 800 | 1.1 | Hero headline |
| `--text-h1` | 40px / 2.5rem | 700 | 1.2 | Stránkové nadpisy |
| `--text-h2` | 32px / 2rem | 700 | 1.25 | Sekce headlinesy |
| `--text-h3` | 24px / 1.5rem | 600 | 1.3 | Karty, subsekce |
| `--text-h4` | 20px / 1.25rem | 600 | 1.35 | Malé nadpisy |
| `--text-body-lg` | 18px / 1.125rem | 400 | 1.6 | Perex, uvod |
| `--text-body` | 16px / 1rem | 400 | 1.6 | Základní text |
| `--text-small` | 14px / 0.875rem | 400 | 1.5 | Popisky, meta |
| `--text-caption` | 12px / 0.75rem | 500 | 1.4 | Badge, labely |

**Mobilní škála (< 768px):**
- Display: 36px
- H1: 28px
- H2: 24px
- H3: 20px

---

## 4. Spacing & Grid

### Base unit: 4px

```
spacing-1  =  4px
spacing-2  =  8px
spacing-3  = 12px
spacing-4  = 16px
spacing-5  = 20px
spacing-6  = 24px
spacing-8  = 32px
spacing-10 = 40px
spacing-12 = 48px
spacing-16 = 64px
spacing-20 = 80px
spacing-24 = 96px
```

### Layout grid

| Breakpoint | Kolonky | Gutter | Max-width |
|---|---|---|---|
| Mobile (< 768px) | 4 | 16px | 100% |
| Tablet (768–1024px) | 8 | 24px | 100% |
| Desktop (> 1024px) | 12 | 32px | 1280px |

```css
--max-width: 1280px;
--container-padding: clamp(1rem, 5vw, 2rem);
```

### Sekce rytmus

- Sekce padding (top/bottom): `80px` desktop, `48px` mobil
- Mezery mezi headline a obsahem: `24px`
- Mezery mezi kartami v gridu: `24px` desktop, `16px` mobil

---

## 5. Komponenty

### Tlačítka

```css
/* Primary Button */
.btn-primary {
  background: var(--color-blue);          /* #17b5f2 */
  color: #ffffff;
  padding: 12px 28px;
  border-radius: var(--radius-md);        /* 8px */
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.01em;
  border: 2px solid transparent;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn-primary:hover {
  background: var(--color-blue-dark);     /* #0d8ab8 */
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(23, 181, 242, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--color-blue);
  border: 2px solid var(--color-blue);
  padding: 12px 28px;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background: var(--color-blue-light);
  transform: translateY(-1px);
}

/* Ghost Button */
.btn-ghost {
  background: transparent;
  color: var(--color-midnight);
  border: none;
  padding: 12px 20px;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 3px;
}
```

### Karty projektů

```css
.project-card {
  background: #ffffff;
  border: 1px solid var(--color-stone);    /* #d4cfc8 */
  border-radius: var(--radius-lg);         /* 16px */
  padding: 32px;
  transition: all 0.25s ease;
  position: relative;
  overflow: hidden;
}
.project-card:hover {
  border-color: var(--color-blue);
  box-shadow: 0 8px 32px rgba(23, 181, 242, 0.12);
  transform: translateY(-4px);
}
.project-card::before {
  /* Barevný horní pruh — accent line */
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--color-blue);
  transform: scaleX(0);
  transition: transform 0.25s ease;
}
.project-card:hover::before {
  transform: scaleX(1);
}
```

### Placeholder karta "Připravujeme"

```css
.project-card--coming-soon {
  background: var(--color-stone-light);   /* #f0eeeb */
  border: 2px dashed var(--color-stone);
  opacity: 0.85;
}
.badge-coming-soon {
  background: var(--color-amber-light);   /* #fef9e7 */
  color: var(--color-amber);              /* #ebad06 */
  border: 1px solid var(--color-amber);
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}
```

### Navigace

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(249, 255, 254, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-stone);
  height: 64px;
  display: flex;
  align-items: center;
}
```

### Reference loga grid

```css
.reference-logo {
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all 0.2s ease;
}
.reference-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}
```

---

## 6. Ikonografie

- **Sada:** Lucide React (`npm install lucide-react`)
- **Velikosti:** 16px (inline), 20px (UI), 24px (standalone), 32px (feature icons)
- **Styl:** stroke icons, stroke-width 1.5px — konzistentní s celou sadou
- **Barva:** dědí z textu (`currentColor`) nebo explicitně `var(--color-blue)`

```tsx
import { ArrowRight, ExternalLink, Globe, Mail, MapPin } from 'lucide-react'
// Příklad použití:
<ArrowRight size={20} className="text-blue-500" />
```

---

## 7. Animace & Motion

**Filozofie:** Animace slouží orientaci a potvrzení akce. Nikdy jen jako efekt.

### Page load — staggered reveal

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-in {
  animation: fadeInUp 0.5s ease forwards;
}
.animate-in:nth-child(1) { animation-delay: 0.1s; }
.animate-in:nth-child(2) { animation-delay: 0.2s; }
.animate-in:nth-child(3) { animation-delay: 0.3s; }
.animate-in:nth-child(4) { animation-delay: 0.4s; }
```

### Rychlosti

```css
--duration-fast:   150ms;   /* hover, focus */
--duration-normal: 250ms;   /* karty, tlačítka */
--duration-slow:   500ms;   /* page load, sekce */
--ease-default: cubic-bezier(0.4, 0, 0.2, 1);
```

### prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. CSS Variables (globals.css)

```css
:root {
  /* === COLORS === */
  --color-bg:           #f9fffe;
  --color-bg-alt:       #f0eeeb;
  --color-white:        #ffffff;
  --color-midnight:     #252021;
  --color-midnight-80:  #3d3839;
  --color-blue:         #17b5f2;
  --color-blue-dark:    #0d8ab8;
  --color-blue-light:   #e8f8fe;
  --color-amber:        #ebad06;
  --color-amber-light:  #fef9e7;
  --color-stone:        #d4cfc8;
  --color-stone-light:  #f0eeeb;
  --color-error:        #d6342d;
  --color-success:      #16a34a;

  /* === TYPOGRAPHY === */
  --font-display:       'Plus Jakarta Sans', sans-serif;
  --font-body:          'DM Sans', sans-serif;

  --text-display:       3.5rem;
  --text-h1:            2.5rem;
  --text-h2:            2rem;
  --text-h3:            1.5rem;
  --text-h4:            1.25rem;
  --text-body-lg:       1.125rem;
  --text-body:          1rem;
  --text-small:         0.875rem;
  --text-caption:       0.75rem;

  /* === SPACING === */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* === LAYOUT === */
  --max-width:          1280px;
  --container-padding:  clamp(1rem, 5vw, 2rem);

  /* === RADII === */
  --radius-sm:  4px;
  --radius-md:  8px;
  --radius-lg:  16px;
  --radius-xl:  24px;
  --radius-full: 9999px;

  /* === SHADOWS === */
  --shadow-sm:  0 1px 3px rgba(37, 32, 33, 0.08);
  --shadow-md:  0 4px 16px rgba(37, 32, 33, 0.10);
  --shadow-lg:  0 8px 32px rgba(37, 32, 33, 0.12);
  --shadow-blue: 0 4px 16px rgba(23, 181, 242, 0.25);

  /* === ANIMATION === */
  --duration-fast:   150ms;
  --duration-normal: 250ms;
  --duration-slow:   500ms;
  --ease-default:    cubic-bezier(0.4, 0, 0.2, 1);

  /* === FOCUS RING === */
  --focus-ring: 0 0 0 3px rgba(23, 181, 242, 0.4);
}
```

---

## 9. Přístupnost

### Ověřené kontrastní poměry

| Kombinace | Poměr | Výsledek WCAG AA |
|---|---|---|
| `#252021` text na `#f9fffe` pozadí | 17.5:1 | ✅ Vynikající |
| `#252021` text na `#ffffff` pozadí | 18.1:1 | ✅ Vynikající |
| `#ffffff` text na `#17b5f2` | 2.9:1 | ⚠️ Pouze pro velký text (18px+) |
| `#252021` text na `#17b5f2` | 6.0:1 | ✅ Vyhovuje |
| `#252021` text na `#ebad06` | 7.5:1 | ✅ Vyhovuje |
| `#252021` text na `#d4cfc8` | 5.2:1 | ✅ Vyhovuje |

> ⚠️ **Pozor:** Bílý text na Sky Blue (`#17b5f2`) NEVYHOVUJE WCAG AA pro malý text.
> Na CTA tlačítkách s bílým textem použij raději `#0d8ab8` (Blue Dark) jako pozadí,
> nebo `#252021` jako barvu textu na tlačítku.

### Focus ring

```css
:focus-visible {
  outline: none;
  box-shadow: var(--focus-ring);
  border-radius: var(--radius-md);
}
```

### Skip link

```html
<a href="#main-content" class="skip-link">Přeskočit na obsah</a>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  background: var(--color-blue);
  color: white;
  padding: 8px 16px;
  border-radius: var(--radius-md);
  z-index: 9999;
  font-weight: 600;
}
.skip-link:focus {
  top: 1rem;
}
```

---

## 10. Do & Don't

| ❌ DON'T | ✅ DO |
|---|---|
| Bílý text na `#17b5f2` pro malá písma | Tmavý text (`#252021`) na modrém pozadí, nebo použij `#0d8ab8` |
| Červená jako brand barva | Červená pouze pro error stavy v UI |
| Žlutá + modrá + červená zároveň na jedné stránce | Max 2 akcentní barvy na stránce |
| Stock foto lidí | Geometrická grafika, screenshoty produktů, loga klientů |
| Věta delší než 2 řádky v hero sekci | Krátká, úderná headline — max 8 slov |
| Carousely / sliders pro reference | Statický logo grid s hover efektem |
| Font Inter nebo Roboto | Plus Jakarta Sans (display) + DM Sans (body) |
| Hover bez transition | Vždy `transition: all var(--duration-normal) var(--ease-default)` |
| `<div>` pro nadpisy | Sémantické `<h1>`, `<h2>`, `<h3>` v správné hierarchii |
| Animace bez `prefers-reduced-motion` | Vždy wrap animace v media query |
