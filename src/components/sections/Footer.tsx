import Link from 'next/link'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { contact } from '@/lib/data'

const footerLinks = [
  { label: 'Projekty',  href: '#projekty' },
  { label: 'Reference', href: '#reference' },
  { label: 'Kontakt',   href: '#kontakt' },
]

export default function Footer() {
  return (
    <footer
      id="kontakt"
      aria-label="Patička"
      style={{
        background: '#252021',
        color: '#f9fffe',
        padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem) clamp(1.5rem, 4vw, 2rem)',
      }}
    >
      <style>{`
        .footer-link {
          color: rgba(249,255,254,0.7);
          text-decoration: none;
          transition: color 150ms ease;
        }
        .footer-link:hover { color: #17b5f2; }
        .footer-link-dim {
          color: rgba(249,255,254,0.4);
          text-decoration: none;
          transition: color 150ms ease;
        }
        .footer-link-dim:hover { color: #17b5f2; }
      `}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'clamp(2rem, 5vw, 4rem)',
            paddingBottom: 'clamp(2rem, 5vw, 3rem)',
            borderBottom: '1px solid rgba(212, 207, 200, 0.2)',
          }}
        >
          {/* Brand col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display-var, sans-serif)',
                  fontWeight: 800,
                  fontSize: '1.125rem',
                  color: '#f9fffe',
                  letterSpacing: '-0.01em',
                }}
              >
                NG<span style={{ color: '#17b5f2' }}>.</span>Consulting
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body-var, sans-serif)',
                fontSize: '0.875rem',
                color: 'rgba(249, 255, 254, 0.6)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Mateřská agentura skupiny projektů zaměřených na online marketing,
              tvorbu webů a e-mailing. Sídlíme v Liberci, pracujeme pro celou ČR.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Patičková navigace">
            <h3
              style={{
                fontFamily: 'var(--font-display-var, sans-serif)',
                fontWeight: 700,
                fontSize: '0.875rem',
                color: '#f9fffe',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                marginTop: 0,
              }}
            >
              Rychlé odkazy
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link"
                    style={{
                      fontFamily: 'var(--font-body-var, sans-serif)',
                      fontSize: '0.9375rem',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact col */}
          <address
            style={{
              fontStyle: 'normal',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display-var, sans-serif)',
                fontWeight: 700,
                fontSize: '0.875rem',
                color: '#f9fffe',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
                marginTop: 0,
              }}
            >
              Kontakt
            </h3>

            <a
              href={`mailto:${contact.email}`}
              className="footer-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-body-var, sans-serif)',
                fontSize: '0.9375rem',
              }}
            >
              <Mail size={15} style={{ flexShrink: 0, color: '#17b5f2' }} aria-hidden="true" />
              {contact.email}
            </a>

            <a
              href={`tel:${contact.phone.replace(/\s/g, '')}`}
              className="footer-link"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontFamily: 'var(--font-body-var, sans-serif)',
                fontSize: '0.9375rem',
              }}
            >
              <Phone size={15} style={{ flexShrink: 0, color: '#17b5f2' }} aria-hidden="true" />
              {contact.phone}
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                fontFamily: 'var(--font-body-var, sans-serif)',
                fontSize: '0.9375rem',
                color: 'rgba(249, 255, 254, 0.7)',
              }}
            >
              <MapPin size={15} style={{ flexShrink: 0, marginTop: '3px', color: '#17b5f2' }} aria-hidden="true" />
              {contact.address}
            </div>
          </address>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            paddingTop: '1.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body-var, sans-serif)',
              fontSize: '0.8125rem',
              color: 'rgba(249, 255, 254, 0.4)',
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} {contact.company}. Všechna práva vyhrazena.
          </p>

          <a
            href={contact.web}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-dim"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-body-var, sans-serif)',
              fontSize: '0.8125rem',
            }}
          >
            Weby dělá NG Stránky
            <ExternalLink size={11} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
