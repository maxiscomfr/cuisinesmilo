import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'

interface MagicLinkEmailProps {
  siteName: string
  confirmationUrl: string
}

export const MagicLinkEmail = ({
  siteName,
  confirmationUrl,
}: MagicLinkEmailProps) => (
  <Html lang="fr" dir="ltr">
    <Head>
      <style>{darkModeCss}</style>
    </Head>
    <Preview>Votre lien de connexion {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Votre lien de connexion</Heading>
        <Text style={text}>
          Cliquez sur le bouton ci-dessous pour vous connecter à {siteName}.
          Ce lien expirera rapidement.
        </Text>
        <Button className="dm-btn" style={button} href={confirmationUrl}>
          Me connecter
        </Button>
        <Text style={footer}>
          Si vous n'avez pas demandé ce lien, vous pouvez ignorer cet email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default MagicLinkEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px', border: '1px solid #e5e0d8', borderRadius: '10px' }
const h1 = {
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: '#3C2A1E',
  margin: '0 0 20px',
}
const text = {
  fontSize: '14px',
  color: '#44403c',
  lineHeight: '1.6',
  margin: '0 0 25px',
}
const button = {
  backgroundColor: '#3C2A1E',
  color: '#ffffff',
  fontSize: '14px',
  border: '1px solid #3C2A1E',
  borderRadius: '8px',
  padding: '12px 20px',
  textDecoration: 'none',
}
const footer = { fontSize: '12px', color: '#78716c', margin: '30px 0 0' }
// Rendered as a text child, which React may HTML-escape: keep this CSS free of >, &, and quotes.
const darkModeCss = `
  @media (prefers-color-scheme: dark) {
    .dm-btn { background-color: #ffffff !important; color: #3C2A1E !important; }
  }
  [data-ogsc] .dm-btn { background-color: #ffffff !important; color: #3C2A1E !important; }
  [data-ogsb] .dm-btn { background-color: #ffffff !important; color: #3C2A1E !important; }
`
