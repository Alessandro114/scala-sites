'use client'
// Sostituisce il BookingWidget della demo: la demo finge una prenotazione confermata (slot finti, "142 consulenze",
// conferma dopo 800 ms). Su un sito reale questo e' ingannevole. Qui il modulo prepara SOLO una richiesta, che il
// visitatore invia da se' su WhatsApp o email; nessun dato passa da server nostri e nessuna conferma e' promessa.
import { useState } from 'react'

const T = {
  it: { title: 'Invia una richiesta', name: 'Nome', phone: 'Telefono', msg: 'Cosa ti serve? (data, orario, persone...)', wa: 'Scrivici su WhatsApp', mail: 'Oppure via email', note: 'Non e\' una prenotazione: ti risponderemo per confermare disponibilita\' e orario.', hello: 'Ciao, sono' },
  en: { title: 'Send a request', name: 'Name', phone: 'Phone', msg: 'What do you need? (date, time, people...)', wa: 'Message us on WhatsApp', mail: 'Or send an email', note: 'This is not a booking: we will reply to confirm availability and time.', hello: 'Hello, I am' },
} as const

export function ContactRequest({ whatsapp, email, business, locale = 'it' }: { whatsapp: string; email: string; business: string; locale?: 'it' | 'en' }) {
  const t = T[locale] ?? T.it
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [msg, setMsg] = useState('')
  const text = `${t.hello} ${name || '...'} (${business}). ${msg}${phone ? ` - ${t.phone}: ${phone}` : ''}`.trim()
  const digits = whatsapp.replace(/[^0-9]/g, '')
  const input = { width: '100%', padding: '.7rem .9rem', border: '1px solid #ccc', borderRadius: 8, font: 'inherit', background: '#fff', color: '#111' } as const
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gap: '.8rem', maxWidth: 480 }} aria-label={t.title}>
      <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>{t.title}</h3>
      <label>{t.name}<input style={input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
      <label>{t.phone}<input style={input} value={phone} onChange={(e) => setPhone(e.target.value)} autoComplete="tel" inputMode="tel" /></label>
      <label>{t.msg}<textarea style={{ ...input, minHeight: 96 }} value={msg} onChange={(e) => setMsg(e.target.value)} /></label>
      <a href={`https://wa.me/${digits}?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer"
         style={{ background: '#128c7e', color: '#fff', padding: '.8rem 1rem', borderRadius: 8, textAlign: 'center', fontWeight: 600, textDecoration: 'none' }}>{t.wa}</a>
      <a href={`mailto:${email}?subject=${encodeURIComponent(business)}&body=${encodeURIComponent(text)}`} style={{ textAlign: 'center', textDecoration: 'underline' }}>{t.mail}</a>
      <p style={{ fontSize: '.85rem', opacity: .75 }}>{t.note}</p>
    </form>
  )
}
