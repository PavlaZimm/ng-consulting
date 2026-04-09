import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'NG Consulting — Digitální skupina pro váš online růst'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 100px',
          background: '#f9fffe',
          position: 'relative',
        }}
      >
        {/* Top accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: '#17b5f2',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            marginBottom: '24px',
          }}
        >
          <span style={{ fontSize: 72, fontWeight: 800, color: '#252021', letterSpacing: '-2px' }}>
            NG
          </span>
          <span style={{ fontSize: 72, fontWeight: 800, color: '#17b5f2' }}>.</span>
          <span style={{ fontSize: 72, fontWeight: 800, color: '#252021', letterSpacing: '-2px' }}>
            Consulting
          </span>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 32, color: '#3d3839', fontWeight: 400, marginBottom: '32px' }}>
          Digitální skupina pro váš online růst
        </div>

        {/* Blue divider */}
        <div style={{ width: '80px', height: '4px', background: '#17b5f2', borderRadius: '2px', marginBottom: '32px' }} />

        {/* Services */}
        <div style={{ fontSize: 22, color: '#3d3839', display: 'flex', gap: '24px' }}>
          <span>Weby</span>
          <span style={{ color: '#d4cfc8' }}>·</span>
          <span>E-mailing</span>
          <span style={{ color: '#d4cfc8' }}>·</span>
          <span>Lokální komunity</span>
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '100px',
            fontSize: 20,
            fontWeight: 600,
            color: '#17b5f2',
          }}
        >
          ngconsulting.cz
        </div>
      </div>
    ),
    { ...size },
  )
}
