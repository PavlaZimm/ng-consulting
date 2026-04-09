import Image from 'next/image'
import { references } from '@/lib/data'

export default function References() {
  return (
    <section
      id="reference"
      aria-labelledby="reference-heading"
      style={{
        background: '#ffffff',
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
      }}
    >
      <style>{`
        .ref-card {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 1.75rem;
          background: #ffffff;
          border: 1px solid #e8e4e0;
          border-radius: 14px;
          transition: background 220ms ease, border-color 220ms ease;
          cursor: default;
          min-height: 100px;
        }
        .ref-card:hover {
          background: #e8f8fe;
          border-color: #17b5f2;
        }
        .ref-img {
          filter: grayscale(100%);
          opacity: 0.45;
          transition: filter 260ms ease, opacity 260ms ease;
          object-fit: contain;
        }
        .ref-card:hover .ref-img {
          filter: none;
          opacity: 1;
        }
        .ref-more-link {
          opacity: 1;
          transition: opacity 150ms ease;
        }
        .ref-more-link:hover { opacity: 0.7; }
      `}</style>

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
            Klienti
          </p>
          <h2
            id="reference-heading"
            style={{
              fontFamily: 'var(--font-display-var, sans-serif)',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#252021',
              margin: 0,
            }}
          >
            Důvěřují nám
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body-var, sans-serif)',
              fontSize: '1rem',
              color: '#3d3839',
              marginTop: '12px',
              marginBottom: 0,
            }}
          >
            Pracujeme pro firmy všech velikostí — od lokálních podnikatelů po velké korporace.
          </p>
        </div>

        {/* Logo grid */}
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          aria-label="Reference klientů"
        >
          {references.map((ref) =>
            ref.logoPath ? (
              <li key={ref.id} style={{ flex: '0 0 clamp(200px, 28vw, 280px)' }}>
                <div className="ref-card">
                  <div style={{ position: 'relative', width: '100%', height: '60px' }}>
                    <Image
                      src={ref.logoPath}
                      alt={`Logo ${ref.name}`}
                      fill
                      className="ref-img"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                    />
                  </div>
                </div>
              </li>
            ) : null
          )}
        </ul>

        {/* Link to full references */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="https://ngstranky.cz/reference"
            target="_blank"
            rel="noopener noreferrer"
            className="ref-more-link"
            style={{
              fontFamily: 'var(--font-display-var, sans-serif)',
              fontWeight: 600,
              fontSize: '0.9375rem',
              color: '#17b5f2',
              textDecoration: 'none',
              borderBottom: '2px solid #17b5f2',
              paddingBottom: '2px',
            }}
          >
            Zobrazit všechny reference →
          </a>
        </div>
      </div>
    </section>
  )
}
