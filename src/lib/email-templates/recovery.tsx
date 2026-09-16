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

interface RecoveryEmailProps {
  siteName: string
  confirmationUrl: string
}

export const RecoveryEmail = ({
  siteName,
  confirmationUrl,
}: RecoveryEmailProps) => (
  <Html lang="fr" dir="ltr">
    <Head>
      <style>{darkModeCss}</style>
    </Head>
    <Preview>Réinitialisez votre mot de passe {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Réinitialiser votre mot de passe</Heading>
        <Text style={text}>
          Nous avons reçu une demande de réinitialisation de votre mot de
          passe {siteName}. Cliquez sur le bouton ci-dessous pour en choisir
          un nouveau.
        </Text>
        <Button className="dm-btn" style={button} href={confirmationUrl}>
          Choisir un nouveau mot de passe
        </Button>
        <Text style={footer}>
          Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer
          cet email. Votre mot de passe ne sera pas modifié.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RecoveryEmail

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
