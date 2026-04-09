import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, DM_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display-var',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NG Consulting — Digitální skupina pro váš online růst',
  description:
    'NG Consulting s.r.o. — mateřská agentura skupiny projektů zaměřených na tvorbu webů, e-mailing a lokální online komunity. Liberec.',
  metadataBase: new URL('https://ngconsulting.cz'),
  openGraph: {
    title: 'NG Consulting — Digitální skupina pro váš online růst',
    description:
      'Tvoříme weby, spravujeme e-mailing a budujeme online komunity. Vyberte si projekt, který vám pomůže.',
    url: 'https://ngconsulting.cz',
    siteName: 'NG Consulting',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NG Consulting — Digitální skupina pro váš online růst',
    description:
      'Tvoříme weby, spravujeme e-mailing a budujeme online komunity. Vyberte si projekt, který vám pomůže.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ngconsulting.cz',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NG Consulting s.r.o.',
  url: 'https://ngconsulting.cz',
  logo: 'https://ngconsulting.cz/opengraph-image',
  image: 'https://ngconsulting.cz/opengraph-image',
  description:
    'Mateřská agentura skupiny projektů zaměřených na tvorbu webů, e-mailing a lokální online komunity.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hanychovská 575/33',
    addressLocality: 'Liberec',
    postalCode: '460 07',
    addressCountry: 'CZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.7663,
    longitude: 15.0543,
  },
  telephone: '+420608133557',
  email: 'vytiska@ngstranky.cz',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+420608133557',
    contactType: 'customer service',
    email: 'vytiska@ngstranky.cz',
    availableLanguage: 'Czech',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Česká republika',
  },
  sameAs: [
    'https://ngstranky.cz',
    'https://ngemailing.cz',
    'https://vasemesto.cz',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="cs"
      className={`${plusJakarta.variable} ${dmSans.variable}`}
    >
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Přeskočit na obsah
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
