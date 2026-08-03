import { ImageResponse } from 'next/og'

export const SOCIAL_IMAGE_ALT =
  'Superbrut — Le vrai salaire, c’est le superbrut'
export const SOCIAL_IMAGE_SIZE = {
  width: 1200,
  height: 630,
}

export function createSocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'stretch',
          background: '#f6f2e9',
          color: '#17201c',
          display: 'flex',
          gap: 56,
          height: '100%',
          padding: 64,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              alignItems: 'baseline',
              display: 'flex',
              fontFamily: 'sans-serif',
              fontSize: 40,
              fontWeight: 900,
              letterSpacing: -3,
            }}
          >
            <div style={{ color: '#183d31', display: 'flex' }}>super</div>
            <div style={{ color: '#e9492e', display: 'flex' }}>brut</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                color: '#b72d1a',
                display: 'flex',
                fontFamily: 'sans-serif',
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 3,
                marginBottom: 22,
              }}
            >
              INITIATIVE CITOYENNE INDÉPENDANTE
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'serif',
                fontSize: 78,
                fontWeight: 500,
                letterSpacing: -4,
                lineHeight: 0.96,
              }}
            >
              <div style={{ display: 'flex' }}>Le vrai salaire,</div>
              <div style={{ display: 'flex' }}>c’est le superbrut.</div>
            </div>
          </div>

          <div
            style={{
              color: '#59635d',
              display: 'flex',
              fontFamily: 'sans-serif',
              fontSize: 25,
              lineHeight: 1.35,
              maxWidth: 650,
            }}
          >
            Pour des fiches de paie claires et transparentes.
          </div>
        </div>

        <div
          style={{
            alignSelf: 'center',
            background: '#183d31',
            color: '#fffdf8',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'sans-serif',
            paddingBottom: 38,
            paddingLeft: 34,
            paddingRight: 34,
            paddingTop: 38,
            transform: 'rotate(1.5deg)',
            width: 360,
          }}
        >
          <div
            style={{
              color: '#f29380',
              display: 'flex',
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: 2,
              marginBottom: 30,
            }}
          >
            LA RÉALITÉ, SIMPLEMENT
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <SocialImageRow label="Superbrut" operator="+" value="3 052,70 €" />
            <SocialImageRow
              label="Cotisations sociales"
              operator="−"
              value="1 253,97 €"
            />
            <SocialImageRow label="Salaire net" operator="=" value="1 798,73 €" />
          </div>
        </div>
      </div>
    ),
    SOCIAL_IMAGE_SIZE,
  )
}

function SocialImageRow(props: {
  label: string
  operator: string
  value: string
}) {
  return (
    <div
      style={{
        alignItems: 'center',
        borderBottomColor: '#527064',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        display: 'flex',
        fontSize: 17,
        gap: 10,
        justifyContent: 'space-between',
        paddingBottom: 18,
        paddingTop: 18,
      }}
    >
      <div style={{ color: '#f29380', display: 'flex', fontWeight: 900 }}>
        {props.operator}
      </div>
      <div style={{ display: 'flex', flex: 1 }}>{props.label}</div>
      <div style={{ display: 'flex', fontWeight: 800, whiteSpace: 'nowrap' }}>
        {props.value}
      </div>
    </div>
  )
}
