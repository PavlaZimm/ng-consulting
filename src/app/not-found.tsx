import Link from 'next/link'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section
          style={{
            background: '#f9fffe',
            minHeight: 'calc(100vh - 64px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              maxWidth: '560px',
            }}
          >
            {/* 404 hero number */}
            <div
              style={{
                fontFamily: 'var(--font-display-var, sans-serif)',
                fontWeight: 800,
                fontSize: 'clamp(7rem, 22vw, 12rem)',
                lineHeight: 1,
                color: '#17b5f2',
                letterSpacing: '-0.04em',
                marginBottom: '1.5rem',
                animation: 'float 3s ease-in-out infinite',
              }}
              aria-hidden="true"
            >
              404
            </div>

            {/* Heading */}
            <h1
              style={{
                fontFamily: 'var(--font-display-var, sans-serif)',
                fontWeight: 800,
                fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                color: '#252021',
                letterSpacing: '-0.02em',
                margin: '0 0 1rem',
                lineHeight: 1.2,
              }}
            >
              Tuhle stránku jsme asi zapomněli nakódovat.
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontFamily: 'var(--font-body-var, sans-serif)',
                fontSize: '1.0625rem',
                color: '#3d3839',
                lineHeight: 1.65,
                margin: '0 0 2.5rem',
              }}
            >
              Ale weby na míru umíme. Vraťte se zpět nebo nás kontaktujte.
            </p>

            {/* CTA buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Link
                href="/"
                style={{
                  fontFamily: 'var(--font-display-var, sans-serif)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  background: '#17b5f2',
                  color: '#252021',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'background 200ms ease',
                }}
              >
                ← Zpět na homepage
              </Link>
              <Link
                href="/kontakt"
                style={{
                  fontFamily: 'var(--font-display-var, sans-serif)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  background: 'transparent',
                  color: '#252021',
                  padding: '12px 24px',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '2px solid #252021',
                  transition: 'border-color 200ms ease, color 200ms ease',
                }}
              >
                Kontaktovat nás →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-14px); }
        }
        @media (prefers-reduced-motion: reduce) {
          @keyframes float {
            0%, 100%, 50% { transform: translateY(0px); }
          }
        }
      `}</style>
    </>
  )
}
