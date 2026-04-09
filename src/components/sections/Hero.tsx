'use client'

import { useState, useEffect } from 'react'

const STEPS = [
  { word: 'weby',       year: '2013' },
  { word: 'e-mailing',  year: '2016' },
  { word: 'komunity',   year: '2020' },
  { word: 'projekty',   year: '2026' },
] as const

const TIMELINE = [
  { year: '2013', title: 'Vznik NG Stránky',      desc: 'Začínáme s tvorbou webů v Liberci' },
  { year: '2016', title: 'Spuštění NG Emailing',  desc: 'Profesionální e-mail marketing' },
  { year: '2020', title: 'Vznik Vaše Město',       desc: 'Lokální online komunity a portály' },
  { year: '2026', title: '500+ projektů',          desc: 'Pomohli jsme stovkám firem po celé ČR' },
]

type TypingPhase = 'typing' | 'deleting'

export default function Hero() {
  const [displayed, setDisplayed]     = useState('')
  const [typingPhase, setTypingPhase] = useState<TypingPhase>('typing')
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleIndex, setVisibleIndex] = useState(0)   // lags behind — updates only when new word starts appearing
  const [reducedMotion, setReducedMotion] = useState(false)

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Typing state machine
  useEffect(() => {
    if (reducedMotion) return

    const current = STEPS[activeIndex].word

    if (typingPhase === 'typing') {
      if (displayed === current) {
        // Hold 2600ms then start deleting
        const t = setTimeout(() => setTypingPhase('deleting'), 3200)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1))
      }, 150)
      return () => clearTimeout(t)
    }

    if (typingPhase === 'deleting') {
      if (displayed === '') {
        setActiveIndex(prev => (prev + 1) % STEPS.length)
        setTypingPhase('typing')
        return
      }
      const t = setTimeout(() => {
        setDisplayed(d => d.slice(0, -1))
      }, 85)
      return () => clearTimeout(t)
    }
  }, [displayed, typingPhase, activeIndex, reducedMotion])

  // Update visibleIndex only when first char of new word appears — avoids empty-word flash
  useEffect(() => {
    if (displayed.length > 0) setVisibleIndex(activeIndex)
  }, [displayed, activeIndex])

  const shownWord  = reducedMotion ? STEPS[0].word : displayed
  const shownYear  = STEPS[visibleIndex].year
  const shownIndex = reducedMotion ? -1 : visibleIndex  // -1 = all active in reduced motion

  return (
    <section
      suppressHydrationWarning
      aria-labelledby="hero-heading"
      style={{
        background: '#f9fffe',
        padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 6vw, 5rem)',
      }}
    >
      <style suppressHydrationWarning>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          gap: clamp(2rem, 5vw, 4rem);
          align-items: center;
          max-width: 960px;
          margin: 0 auto;
          width: 100%;
          padding: 0 clamp(1rem, 5vw, 2rem);
          box-sizing: border-box;
        }
        .timeline-wrap {
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .timeline-line-v {
          position: absolute;
          left: 7px;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: #e8e4e0;
        }
        .timeline-line-h { display: none; }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .tl-item {
          display: flex;
          gap: 1.25rem;
          padding: 0.5rem 0 1.25rem;
          position: relative;
        }
        .tl-dot-col {
          flex-shrink: 0;
          width: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 2px;
        }
        .tl-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #d4cfc8;
          transition: background 300ms ease, box-shadow 300ms ease, transform 300ms ease;
          flex-shrink: 0;
        }
        .tl-dot.active {
          background: #17b5f2;
          box-shadow: 0 0 0 4px rgba(23,181,242,0.15), 0 0 14px rgba(23,181,242,0.35);
          transform: scale(1.15);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        .tl-content { flex: 1; min-width: 0; }
        .tl-year {
          font-family: var(--font-display-var, sans-serif);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #d4cfc8;
          transition: color 300ms ease;
          margin-bottom: 2px;
        }
        .tl-year.active { color: #17b5f2; }
        .tl-title {
          font-family: var(--font-display-var, sans-serif);
          font-size: 0.9375rem;
          font-weight: 700;
          color: #d4cfc8;
          transition: color 300ms ease;
          line-height: 1.3;
        }
        .tl-title.active { color: #17b5f2; }
        .tl-desc {
          font-family: var(--font-body-var, sans-serif);
          font-size: 0.8125rem;
          color: #3d3839;
          line-height: 1.55;
          max-height: 0;
          overflow: hidden;
          transition: max-height 400ms ease, opacity 400ms ease, margin-top 400ms ease;
          opacity: 0;
          margin-top: 0;
        }
        .tl-desc.active {
          max-height: 80px;
          opacity: 1;
          margin-top: 4px;
        }
        .typing-cursor {
          display: inline-block;
          border-right: 2px solid #17b5f2;
          margin-left: 2px;
          height: 0.85em;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        /* Mobile: horizontal timeline */
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .timeline-wrap {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          .timeline-line-v { display: none; }
          .timeline-line-h {
            display: block;
            position: absolute;
            top: 8px;
            left: 8px;
            right: 8px;
            height: 2px;
            background: #e8e4e0;
          }
          .timeline-items {
            flex-direction: row;
            gap: 0;
            min-width: 560px;
          }
          .tl-item {
            flex: 1;
            flex-direction: column;
            gap: 0.5rem;
            padding: 0 0.75rem 0;
            align-items: flex-start;
          }
          .tl-dot-col {
            width: auto;
            flex-direction: row;
            padding-top: 0;
            margin-bottom: 0.5rem;
          }
          .tl-dot {
            width: 16px;
            height: 16px;
          }
        }

        .hero-year {
          display: inline;
          transition: opacity 300ms ease;
        }
        .typing-cursor {
          display: inline-block;
          border-right: 2px solid #17b5f2;
          margin-left: 2px;
          height: 0.85em;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
        }

        /* Keyframes */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); opacity: 0.35; }
          50%       { transform: translateY(6px); opacity: 0.6; }
        }
        .scroll-hint {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          animation: bounce-down 1.8s ease-in-out infinite;
          color: #d4cfc8;
          transition: color 200ms ease;
          cursor: pointer;
          text-decoration: none;
        }
        .scroll-hint:hover { color: #17b5f2; }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 4px rgba(23,181,242,0.15), 0 0 14px rgba(23,181,242,0.35); }
          50%       { box-shadow: 0 0 0 6px rgba(23,181,242,0.25), 0 0 20px rgba(23,181,242,0.5); }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .tl-dot.active  { animation: none; }
          .typing-cursor  { animation: none; }
          .scroll-hint    { animation: none; }
          .hero-year      { transition: none; }
          .tl-desc        { transition: none; max-height: 80px; opacity: 1; margin-top: 4px; }
          .tl-desc.active { max-height: 80px; }
        }
      `}</style>

      <div className="hero-grid">

        {/* ── LEFT: text ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              alignItems: 'center',
              gap: '6px',
              background: '#e8f8fe',
              color: '#0d8ab8',
              border: '1px solid #17b5f2',
              borderRadius: '9999px',
              padding: '4px 14px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              fontFamily: 'var(--font-display-var, sans-serif)',
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#17b5f2', display: 'inline-block' }} />
            Digitální skupina z Liberce
          </span>

          {/* Headline with typing effect */}
          <h1
            id="hero-heading"
            suppressHydrationWarning
            style={{
              fontFamily: 'var(--font-display-var, sans-serif)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.15,
              color: '#252021',
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Tvoříme{' '}
            <span
              style={{
                color: '#17b5f2',
                borderRight: reducedMotion ? 'none' : '2px solid #17b5f2',
                paddingRight: reducedMotion ? 0 : '3px',
                transition: 'border-color 100ms',
              }}
            >
              {shownWord}
            </span>
            {' '}od roku{' '}
            <span className="hero-year" key={shownYear}>
              {shownYear}
            </span>.
          </h1>

          {/* Perex */}
          <p
            style={{
              fontFamily: 'var(--font-body-var, sans-serif)',
              fontSize: 'clamp(1rem, 2vw, 1.0625rem)',
              lineHeight: 1.7,
              color: '#3d3839',
              margin: 0,
              maxWidth: '480px',
            }}
          >
            Přes deset let budujeme online přítomnost českých firem.
            Weby, e-mailing, lokální komunity.
          </p>

          {/* CTA */}
          <div>
            <a
              href="/kontakt"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: '#17b5f2',
                color: '#252021',
                fontFamily: 'var(--font-display-var, sans-serif)',
                fontWeight: 700,
                fontSize: '0.9375rem',
                padding: '14px 28px',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'background 200ms ease, transform 200ms ease, box-shadow 200ms ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = '#0d8ab8'
                el.style.transform = 'translateY(-2px)'
                el.style.boxShadow = '0 6px 20px rgba(23,181,242,0.3)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = '#17b5f2'
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
              }}
            >
              Nezávazná poptávka →
            </a>
          </div>
        </div>

        {/* ── RIGHT: timeline ── */}
        <div className="timeline-wrap" aria-label="Milníky NG Consulting">
          <div className="timeline-line-v" aria-hidden="true" />
          <div className="timeline-line-h" aria-hidden="true" />
          <ol className="timeline-items" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {TIMELINE.map((item, i) => {
              const isActive = reducedMotion || i === shownIndex
              return (
                <li key={item.year} className="tl-item">
                  <div className="tl-dot-col" aria-hidden="true">
                    <div className={`tl-dot${isActive ? ' active' : ''}`} />
                  </div>
                  <div className="tl-content">
                    <div className={`tl-year${isActive ? ' active' : ''}`}>{item.year}</div>
                    <div className={`tl-title${isActive ? ' active' : ''}`}>{item.title}</div>
                    <div className={`tl-desc${isActive ? ' active' : ''}`}>{item.desc}</div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>

      </div>

      {/* Scroll hint */}
      <div style={{ textAlign: 'center', marginTop: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <a href="#projekty" className="scroll-hint" aria-label="Přejít na projekty">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </a>
      </div>
    </section>
  )
}
