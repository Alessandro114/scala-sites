// Siti di ESEMPIO, tutti fittizi (nomi, numeri 0000, indirizzi inventati): servono a test, anteprime e screenshot. Nessun dato di clienti reali.
import { draftSite } from './draft.mjs'
const H = (days, opens, closes) => ({ days, opens, closes })
const week = [H(['lun', 'mar', 'mer', 'gio', 'ven'], '09:00', '18:00')]
const addr = (street, cap, city, pr) => ({ street, postal_code: cap, city, province: pr, country: 'IT' })
const base = { phone: '+39 000 0000000', whatsapp: '+39 300 0000000', email: 'info@esempio.invalid', vat_id: 'IT00000000000' }
const FACTS = {
  ristorante: { ...base, name: 'Trattoria Esempio', address: addr('Via dei Tigli 1', '38100', 'Trento', 'TN'), hours: [H(['mar', 'mer', 'gio', 'ven', 'sab', 'dom'], '12:00', '14:30'), H(['mar', 'mer', 'gio', 'ven', 'sab', 'dom'], '19:00', '22:30')], free_text: 'Cucina casalinga con prodotti di stagione. Prenotare consigliato nel fine settimana.', services: [{ name: 'Tagliatelle al ragu’', price: '11 €' }, { name: 'Tagliere di salumi e formaggi', description: 'Selezione del giorno.' }, { name: 'Dolci della casa' }] },
  parrucchiere: { ...base, name: 'Salone Esempio', address: addr('Corso Italia 10', '20121', 'Milano', 'MI'), hours: [H(['mar', 'mer', 'gio', 'ven'], '09:30', '19:00'), H(['sab'], '09:00', '17:00')], free_text: 'Taglio, colore e trattamenti. Si riceve su appuntamento: scrivici su WhatsApp.', services: [{ name: 'Taglio donna' }, { name: 'Taglio uomo' }, { name: 'Colore e riflessi' }] },
  artigiano: { ...base, name: 'Idraulica Esempio', address: addr('Via Roma 5', '00184', 'Roma', 'RM'), service_area: ['Roma', 'Fiumicino', 'Ciampino'], free_text: 'Riparazioni e installazioni idrauliche per casa e condominio.', services: [{ name: 'Riparazione perdite' }, { name: 'Installazione caldaie e scaldabagni' }, { name: 'Sostituzione sanitari' }], hours: week },
  'studio-professionale': { ...base, name: 'Studio Esempio', address: addr('Via Mazzini 22', '40121', 'Bologna', 'BO'), free_text: 'Assistenza a famiglie e piccole imprese. Il primo contatto serve a capire se possiamo esserti utili.', services: [{ name: 'Contratti e consulenza' }, { name: 'Contenzioso civile' }], hours: week, schema_type: 'LegalService' },
  'studio-medico': { ...base, name: 'Studio Dentistico Esempio', address: addr('Via Garibaldi 8', '10122', 'Torino', 'TO'), free_text: 'Visite e igiene dentale. Per appuntamenti chiama lo studio.', services: [{ name: 'Visita di controllo' }, { name: 'Igiene dentale' }], hours: week, schema_type: 'Dentist' },
  bnb: { ...base, name: 'B&B Esempio', address: addr('Via del Lago 3', '25010', 'Sirmione', 'BS'), free_text: 'Camere con colazione, a pochi passi dal centro. Scrivici le date: ti diciamo se siamo liberi.', services: [{ name: 'Camera doppia' }, { name: 'Camera singola' }, { name: 'Colazione' }] },
  freelance: { ...base, name: 'Giulia Esempio', address: addr('Via Dante 1', '50122', 'Firenze', 'FI'), free_text: 'Grafica e identita’ visiva per piccole attivita’.', services: [{ name: 'Logo e identita’ visiva' }, { name: 'Materiali per i social' }], social: { facebook: 'https://www.facebook.com/esempio' } },
  associazione: { ...base, name: 'Associazione Esempio', address: addr('Piazza Centrale 2', '37121', 'Verona', 'VR'), free_text: 'Organizziamo iniziative per il quartiere. Chiunque puo’ partecipare.', services: [{ name: 'Cineforum del giovedi’' }, { name: 'Pulizia dei giardini' }] },
  palestra: { ...base, name: 'Palestra Esempio', address: addr('Via Sport 7', '35121', 'Padova', 'PD'), hours: [H(['lun', 'mar', 'mer', 'gio', 'ven'], '07:00', '21:30'), H(['sab'], '09:00', '13:00')], free_text: 'Sala pesi e corsi di gruppo.', services: [{ name: 'Sala pesi' }, { name: 'Corsi di gruppo' }, { name: 'Personal training' }] },
  negozio: { ...base, name: 'Negozio Esempio', address: addr('Via Mercato 4', '80133', 'Napoli', 'NA'), hours: [H(['lun', 'mar', 'mer', 'gio', 'ven', 'sab'], '09:00', '13:00'), H(['lun', 'mar', 'mer', 'gio', 'ven', 'sab'], '16:00', '19:30')], free_text: 'Articoli per la casa e idee regalo. Per sapere se abbiamo un prodotto, scrivici su WhatsApp.', services: [{ name: 'Articoli per la casa' }, { name: 'Idee regalo' }] },
}
export const SAMPLES = await Promise.all(Object.entries(FACTS).map(async ([id, facts], n) => {
  const { site } = await draftSite({ facts, templateId: id, id: `esempio-${id}` })
  site.slug = `esempio-${id}`
  if (id === 'associazione') site.sections.splice(2, 0, { id: 'event', type: 'event', title: 'Prossimo incontro', starts_at: '2026-12-04T20:45:00+01:00', place: 'Sala civica, Piazza Centrale 2', text: 'Ingresso libero.' })
  if (id === 'freelance') site.sections.splice(4, 0, { id: 'links', type: 'links', title: 'Link utili', items: [{ label: 'Profilo Facebook', url: 'https://www.facebook.com/esempio' }] })
  return site
}))
