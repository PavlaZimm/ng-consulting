import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#17b5f2',
          borderRadius: '7px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.3px',
              lineHeight: 1,
            }}
          >
            NG
          </span>
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1,
            }}
          >
            .
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
