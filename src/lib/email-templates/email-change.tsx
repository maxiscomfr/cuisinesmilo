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

interface EmailChangeEmailProps {
  siteName: string
  // oldEmail is the user's current address (HookData.OldEmail). For the
  // NEW-recipient half of a secure email_change fanout, `email` equals the
  // recipient (NEW), so the "from" line must render oldEmail to read
  // "from OLD to NEW" instead of "from NEW to NEW".
  oldEmail: string
  email: string
  newEmail: string
  confirmationUrl: string
}

export const EmailChangeEmail = ({
  siteName,
  oldEmail,
  newEmail,
  confirmationUrl,
}: EmailChangeEmailProps) => (
  <Html lang="fr" dir="ltr">
    <Head>
      <style>{darkModeCss}</style>
    </Head>
    <Preview>Confirmez votre changement d'adresse email pour {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Confirmez votre changement d'email</Heading>
        <Text style={text}>
          Vous avez demandé à changer votre adresse email {siteName} de{' '}
          <Link href={`mailto:${oldEmail}`} style={link}>
            {oldEmail}
          </Link>{' '}
          vers{' '}
          <Link href={`mailto:${newEmail}`} style={link}>
            {newEmail}
          </Link>
          .
        </Text>
        <Text style={text}>
          Cliquez sur le bouton ci-dessous pour confirmer ce changement :
        </Text>
        <Button className="dm-btn" style={button} href={confirmationUrl}>
          Confirmer le changement
        </Button>
        <Text style={footer}>
          Si vous n'êtes pas à l'origine de cette demande, sécurisez votre
          compte immédiatement.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

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
