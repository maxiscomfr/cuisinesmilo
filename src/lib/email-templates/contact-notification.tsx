import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  message?: string
  receivedAt?: string
}

const Email = ({ name, email, message, receivedAt }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>{`Nouveau message de ${name || 'un visiteur'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Nouvelle demande depuis le site</Heading>
        <Text style={label}>Nom</Text>
        <Text style={value}>{name || '—'}</Text>
        <Text style={label}>Email</Text>
        <Text style={value}>{email || '—'}</Text>
        {receivedAt ? (
          <>
            <Text style={label}>Reçu le</Text>
            <Text style={value}>{receivedAt}</Text>
          </>
        ) : null}
        <Hr style={hr} />
        <Section>
          <Text style={label}>Message</Text>
          <Text style={messageStyle}>{message || '—'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Répondez directement à cet email pour contacter la personne.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Nouveau message de ${data['name'] || 'un visiteur'} — Cuisines Milo`,
  displayName: 'Notification formulaire de contact',
  previewData: {
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    message: "Bonjour, je souhaite un devis pour une cuisine sur mesure.",
    receivedAt: '10/09/2026 11:20',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '24px 28px', maxWidth: '560px', border: '1px solid #e5e0d8', borderRadius: '10px' }
const heading = { fontSize: '20px', color: '#3C2A1E', margin: '0 0 20px' }
const label = { fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase' as const, color: '#8C6A45', margin: '12px 0 2px' }
const value = { fontSize: '15px', color: '#1c1917', margin: '0' }
const messageStyle = { fontSize: '15px', color: '#1c1917', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const, margin: '0' }
const hr = { borderColor: '#e5e0d8', margin: '20px 0' }
const footer = { fontSize: '13px', color: '#78716c', margin: '0' }
