'use client'

import { useState, FormEvent } from 'react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  fontFamily: 'var(--font-body-var, sans-serif)',
  fontSize: '0.9375rem',
  color: '#252021',
  background: '#ffffff',
  border: '1.5px solid #d4cfc8',
  borderRadius: '10px',
  outline: 'none',
  transition: 'border-color 180ms ease',
  boxSizing: 'border-box' as const,
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-display-var, sans-serif)',
  fontSize: '0.875rem',
  fontWeight: 600,
  color: '#252021',
  marginBottom: '6px',
}

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [focused, setFocused] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name:    (form.elements.namedItem('name')    as HTMLInputElement).value,
      email:   (form.elements.namedItem('email')   as HTMLInputElement).value,
      phone:   (form.elements.namedItem('phone')   as HTMLInputElement).value || undefined,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        const json = await res.json() as { error?: string }
        setErrorMsg(json.error ?? 'Odeslání se nezdařilo, zkuste to prosím znovu.')
        setState('error')
      }
    } catch {
      setErrorMsg('Nastala chyba sítě. Zkuste to prosím znovu.')
      setState('error')
    }
  }

  const focusStyle = (name: string) =>
    focused === name ? { ...inputStyle, borderColor: '#17b5f2' } : inputStyle

  if (state === 'success') {
    return (
      <div
        style={{
          padding: '2.5rem',
          background: '#e8f8fe',
          borderRadius: '16px',
          border: '1.5px solid #17b5f2',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
        <h2
          style={{
            fontFamily: 'var(--font-display-var, sans-serif)',
            fontWeight: 700,
            fontSize: '1.25rem',
            color: '#252021',
            margin: '0 0 8px',
          }}
        >
          Zpráva odeslána
        </h2>
        <p style={{ fontFamily: 'var(--font-body-var, sans-serif)', color: '#3d3839', margin: 0 }}>
          Děkujeme, ozveme se vám co nejdříve.
        </p>
        <button
          onClick={() => setState('idle')}
          style={{
            marginTop: '1.5rem',
            fontFamily: 'var(--font-display-var, sans-serif)',
            fontWeight: 600,
            fontSize: '0.875rem',
            color: '#17b5f2',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
        >
          Odeslat další zprávu
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* Jméno */}
      <div>
        <label htmlFor="name" style={labelStyle}>
          Jméno a příjmení <span style={{ color: '#d6342d' }}>*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Jan Novák"
          style={focusStyle('name')}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
          suppressHydrationWarning
        />
      </div>

      {/* E-mail */}
      <div>
        <label htmlFor="email" style={labelStyle}>
          E-mailová adresa <span style={{ color: '#d6342d' }}>*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jan@firma.cz"
          style={focusStyle('email')}
          onFocus={() => setFocused('email')}
          onBlur={() => setFocused(null)}
          suppressHydrationWarning
        />
      </div>

      {/* Telefon */}
      <div>
        <label htmlFor="phone" style={labelStyle}>
          Telefon <span style={{ color: '#3d3839', fontWeight: 400 }}>(volitelný)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="+420 123 456 789"
          style={focusStyle('phone')}
          onFocus={() => setFocused('phone')}
          onBlur={() => setFocused(null)}
          suppressHydrationWarning
        />
      </div>

      {/* Zpráva */}
      <div>
        <label htmlFor="message" style={labelStyle}>
          Zpráva <span style={{ color: '#d6342d' }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Popište, s čím vám můžeme pomoci..."
          style={{
            ...focusStyle('message'),
            resize: 'vertical',
            minHeight: '130px',
          }}
          onFocus={() => setFocused('message')}
          onBlur={() => setFocused(null)}
          suppressHydrationWarning
        />
      </div>

      {/* Error message */}
      {state === 'error' && errorMsg && (
        <p
          role="alert"
          style={{
            fontFamily: 'var(--font-body-var, sans-serif)',
            fontSize: '0.875rem',
            color: '#d6342d',
            background: '#fef2f2',
            border: '1px solid #fca5a5',
            borderRadius: '8px',
            padding: '10px 14px',
            margin: 0,
          }}
        >
          {errorMsg}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={state === 'loading'}
        style={{
          fontFamily: 'var(--font-display-var, sans-serif)',
          fontWeight: 700,
          fontSize: '1rem',
          color: '#252021',
          background: state === 'loading' ? '#d4cfc8' : '#17b5f2',
          border: 'none',
          borderRadius: '10px',
          padding: '14px 28px',
          cursor: state === 'loading' ? 'not-allowed' : 'pointer',
          transition: 'background 200ms ease',
          alignSelf: 'flex-start',
        }}
      >
        {state === 'loading' ? 'Odesílám…' : 'Odeslat zprávu →'}
      </button>
    </form>
  )
}
