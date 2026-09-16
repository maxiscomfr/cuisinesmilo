import * as React from 'react'

import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from '@react-email/components'

interface ReauthenticationEmailProps {
  token: string
}

export const ReauthenticationEmail = ({ token }: ReauthenticationEmailProps) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Votre code de vérification</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Confirmez votre identité</Heading>
        <Text style={text}>
          Utilisez le code ci-dessous pour confirmer votre identité :
        </Text>
        <Text style={codeStyle}>{token}</Text>
        <Text style={footer}>
          Ce code expirera rapidement. Si vous n'êtes pas à l'origine de cette
          demande, vous pouvez ignorer cet email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default ReauthenticationEmail

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
const codeStyle = {
  fontFamily: 'Courier, monospace',
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: '#3C2A1E',
  letterSpacing: '0.15em',
  margin: '0 0 30px',
}
const footer = { fontSize: '12px', color: '#78716c', margin: '30px 0 0' }
