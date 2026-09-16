import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components'

interface SignupEmailProps {
  siteName: string
  siteUrl: string
  recipient: string
  confirmationUrl: string
}

export const SignupEmail = ({
  siteName,
  siteUrl,
  recipient,
  confirmationUrl,
}: SignupEmailProps) => (
  <Html lang="fr" dir="ltr">
    <Head>
      <style>{darkModeCss}</style>
    </Head>
    <Preview>Confirmez votre adresse email pour {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Confirmez votre adresse email</Heading>
        <Text style={text}>
          Merci pour votre inscription sur{' '}
          <Link href={siteUrl} style={link}>
            <strong>{siteName}</strong>
          </Link>
          {' '}!
        </Text>
        <Text style={text}>
          Confirmez votre adresse (
          <Link href={`mailto:${recipient}`} style={link}>
            {recipient}
          </Link>
          ) en cliquant sur le bouton ci-dessous :
        </Text>
        <Button className="dm-btn" style={button} href={confirmationUrl}>
          Confirmer mon email
        </Button>
        <Text style={footer}>
          Si vous n'avez pas créé de compte, vous pouvez ignorer cet email.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default SignupEmail

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
const link = { color: '#8C6A45', textDecoration: 'underline' }
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
