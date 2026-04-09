'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Projekty',  href: '#projekty' },
  { label: 'Reference', href: '#reference' },
  { label: 'Kontakt',   href: '/kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header
      suppressHydrationWarning
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(249, 255, 254, 0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: 'none',
        height: '64px',
      }}
    >
      <div
        suppressHydrationWarning
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '0 clamp(1.5rem, 6vw, 4rem)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="NG Consulting – domovská stránka"
          style={{
            fontFamily: 'var(--font-display-var, sans-serif)',
            fontWeight: 800,
            fontSize: '1.125rem',
            color: '#252021',
            textDecoration: 'none',
            letterSpacing: '-0.01em',
          }}
        >
          NG<span style={{ color: '#17b5f2' }}>.</span>Consulting
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Hlavní navigace" className="hidden md:block">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body-var, sans-serif)',
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    color: '#3d3839',
                    textDecoration: 'none',
                    transition: 'color 150ms ease',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#17b5f2' }}
                  onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = '#3d3839' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA button desktop */}
        <Link
          href="/kontakt"
          className="hidden md:inline-flex"
          style={{
            fontFamily: 'var(--font-display-var, sans-serif)',
            fontWeight: 600,
            fontSize: '0.9375rem',
            background: '#17b5f2',
            color: '#252021',
            padding: '8px 20px',
            borderRadius: '12px',
            textDecoration: 'none',
            transition: 'background 200ms ease, transform 200ms ease',
            border: '2px solid transparent',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.background = '#0d8ab8'
            el.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.background = '#17b5f2'
            el.style.transform = 'translateY(0)'
          }}
        >
          Napište nám
        </Link>

        {/* Hamburger mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          aria-expanded={open}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#252021',
            padding: '4px',
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            background: '#f9fffe',
            borderTop: '1px solid #d4cfc8',
            padding: '1rem clamp(1rem, 5vw, 2rem)',
          }}
        >
          <nav aria-label="Mobilní navigace">
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: 'var(--font-body-var, sans-serif)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: '#252021',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 0',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/kontakt"
                  style={{
                    display: 'inline-block',
                    marginTop: '0.5rem',
                    background: '#17b5f2',
                    color: '#252021',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontFamily: 'var(--font-display-var, sans-serif)',
                  }}
                >
                  Napište nám
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
