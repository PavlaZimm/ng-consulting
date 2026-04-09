import type { Metadata } from 'next'
import { Mail, Phone, MapPin, User } from 'lucide-react'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt | NG Consulting',
  description: 'Kontaktujte NG Consulting — tvorba webů, e-mailing, lokální komunity. Liberec a celá ČR.',
  alternates: {
    canonical: 'https://ngconsulting.cz/kontakt',
  },
  openGraph: {
    title: 'Kontakt | NG Consulting',
    description: 'Kontaktujte NG Consulting — tvorba webů, e-mailing, lokální komunity. Liberec a celá ČR.',
    url: 'https://ngconsulting.cz/kontakt',
  },
}

const contactItems = [
  { icon: User,   label: 'Kontaktní osoba', value: 'Ing. Jakub Vytiska' },
  { icon: Mail,   label: 'E-mail',          value: 'vytiska@ngstranky.cz', href: 'mailto:vytiska@ngstranky.cz' },
  { icon: Phone,  label: 'Telefon',         value: '+420 608 133 557',     href: 'tel:+420608133557' },
  { icon: MapPin, label: 'Adresa',          value: 'Hanychovská 575/33\n460 07 Liberec' },
]

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Domů',
      item: 'https://ngconsulting.cz',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Kontakt',
      item: 'https://ngconsulting.cz/kontakt',
    },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontakt — NG Consulting',
  url: 'https://ngconsulting.cz/kontakt',
  description: 'Kontaktujte NG Consulting — tvorba webů, e-mailing, lokální komunity. Liberec a celá ČR.',
  mainEntity: {
    '@type': 'Organization',
    name: 'NG Consulting s.r.o.',
    url: 'https://ngconsulting.cz',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hanychovská 575/33',
      addressLocality: 'Liberec',
      postalCode: '460 07',
      addressCountry: 'CZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+420608133557',
      email: 'vytiska@ngstranky.cz',
      contactType: 'customer service',
      availableLanguage: 'Czech',
    },
  },
}

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <section
          aria-labelledby="kontakt-heading"
          style={{
            background: '#f9fffe',
            padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
            minHeight: 'calc(100vh - 64px)',
          }}
        >
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>

            {/* Page header */}
            <div style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
              <p
                style={{
                  fontFamily: 'var(--font-display-var, sans-serif)',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  color: '#17b5f2',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                Napište nám
              </p>
              <h1
                id="kontakt-heading"
                style={{
                  fontFamily: 'var(--font-display-var, sans-serif)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  color: '#252021',
                  letterSpacing: '-0.02em',
                  margin: '0 0 1rem',
                  lineHeight: 1.15,
                }}
              >
                Kontaktujte nás
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-body-var, sans-serif)',
                  fontSize: '1.0625rem',
                  color: '#3d3839',
                  maxWidth: '540px',
                  margin: 0,
                  lineHeight: 1.65,
                }}
              >
                Řešíte web, e-mailing nebo lokální komunitu? Ozvěte se — rádi se nezávazně pobavíme.
              </p>
            </div>

            {/* Two-column layout */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                gap: 'clamp(2rem, 5vw, 4rem)',
                alignItems: 'start',
              }}
            >
              {/* Form column */}
              <div
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e8e4e0',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                }}
              >
                <ContactForm />
              </div>

              {/* Contact info column */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div
                  style={{
                    background: '#252021',
                    borderRadius: '16px',
                    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                    color: '#ffffff',
                  }}
                >
                  <h2
                    style={{
                      fontFamily: 'var(--font-display-var, sans-serif)',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      color: '#ffffff',
                      margin: '0 0 1.5rem',
                    }}
                  >
                    Kontaktní údaje
                  </h2>

                  <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {contactItems.map(({ icon: Icon, label, value, href }) => (
                      <li key={label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div
                          style={{
                            flexShrink: 0,
                            width: '38px',
                            height: '38px',
                            background: 'rgba(23,181,242,0.15)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Icon size={18} color="#17b5f2" aria-hidden="true" />
                        </div>
                        <div>
                          <p
                            style={{
                              fontFamily: 'var(--font-body-var, sans-serif)',
                              fontSize: '0.75rem',
                              color: '#d4cfc8',
                              margin: '0 0 3px',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {label}
                          </p>
                          {href ? (
                            <a
                              href={href}
                              style={{
                                fontFamily: 'var(--font-display-var, sans-serif)',
                                fontWeight: 600,
                                fontSize: '0.9375rem',
                                color: '#ffffff',
                                textDecoration: 'none',
                              }}
                            >
                              {value}
                            </a>
                          ) : (
                            <p
                              style={{
                                fontFamily: 'var(--font-display-var, sans-serif)',
                                fontWeight: 600,
                                fontSize: '0.9375rem',
                                color: '#ffffff',
                                margin: 0,
                                whiteSpace: 'pre-line',
                              }}
                            >
                              {value}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company badge */}
                <div
                  style={{
                    background: '#f0eeeb',
                    borderRadius: '12px',
                    padding: '1.25rem 1.5rem',
                    borderLeft: '3px solid #17b5f2',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body-var, sans-serif)',
                      fontSize: '0.875rem',
                      color: '#3d3839',
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    <strong style={{ color: '#252021' }}>NG Consulting s.r.o.</strong>
                    {' '}— mateřská agentura skupiny projektů zaměřených na online marketing, tvorbu webů a e-mailing.
                    Sídlíme v Liberci, pracujeme pro celou ČR.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
