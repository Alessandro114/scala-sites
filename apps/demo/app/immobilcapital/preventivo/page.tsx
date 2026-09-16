import './preventivo.css'

export default function PreventivoPage() {
  return (
    <div className="doc">
      {/* Header */}
      <header className="doc-header">
        <div className="doc-eyebrow">Preventivo — PropertyOS Enterprise</div>
        <h1 className="doc-title">PropertyOS — Piattaforma AI per ImmobilCapital</h1>
        <div className="doc-meta">
          <span><strong>Preparato per:</strong> Andrea Vacchelli · ImmobilCapital</span>
          <span><strong>Data:</strong> 15 settembre 2026</span>
          <span><strong>Validità:</strong> 30 giorni</span>
          <span><strong>Contatto:</strong> ale@get-scala.com</span>
        </div>
      </header>

      {/* Intro */}
      <div className="intro">
        PropertyOS è la spina dorsale digitale di ImmobilCapital: CRM multi-mercato, SARA agente autonomo H24 in IT/EN/ES, sistema di booking visite integrato con Koro Calendar, AI render, firma digitale, analytics direttore.{' '}
        <strong>Il canone piattaforma copre l&apos;uso continuativo; il setup una tantum copre la configurazione, l&apos;importazione dati e l&apos;integrazione booking.</strong> Struttura in ramp: 6 mesi al tier Core, poi Full Partnership.
      </div>

      {/* Module 01 — Setup */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">01</span>
          <span className="module-name">Setup & Onboarding — 4 settimane</span>
          <span className="badge-rec">Una tantum</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 2.800</div>
          <div className="module-cadence">una tantum · 2 tranche</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Configurazione completa del tenant ImmobilCapital, importazione dati, attivazione SARA, integrazione booking — tutto gestito da noi, senza che lei tocchi nulla.</div>
          <ul className="module-list">
            <li><strong>W1</strong> — Kick-off 2h, configurazione PropertyOS multi-mercato (IT/Dubai/CH/USA), importazione portfolio immobili esistente, importazione contatti CRM attuale. <em>SARA attiva su WhatsApp dal Giorno 7.</em></li>
            <li><strong>W2</strong> — Knowledge Base SARA custom (immobili, policy NDA, tono luxury IT/EN/ES). Setup book.get-scala.com (pagina booking branded ImmobilCapital) + Koro Calendar (sync agenda agenti). Snippet embed per il vostro fornitore branding. Formazione team Sessione 1 (2h).</li>
            <li><strong>W3</strong> — Calibrazione Autonomy Gate con scenari reali. Dashboard direttore custom. Report concorrenza Q1 (Engel&amp;Völkers, Lionard, RE/MAX Luxury).</li>
            <li><strong>W4</strong> — Fine-tuning da feedback, Formazione team Sessione 2 (2h: agent avanzato, analytics, Autonomy Gate), handover + documentazione completa.</li>
          </ul>
          <p className="module-note">Valore di mercato equivalente (onboarding + integrazione booking + Koro + formazione): €4.000–6.000. <strong>Founding Partner pagano €2.800</strong> — in 2 tranche: €1.400 al kickoff (W1) + €1.400 al go-live (W4). Nessun pagamento prima che il sistema sia live.</p>
        </div>
      </div>

      {/* Module 02 — Mesi 1-6 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">02</span>
          <span className="module-name">Bootcamp Period — Mesi 1–6</span>
          <span className="badge-rec">Tier Core</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 497</div>
          <div className="module-cadence">/mese · 6 mesi</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Tier Core ufficiale di SCALA: piattaforma completa con tutte le funzionalità operative + SARA + booking integrato. È il tier da cui parte ogni cliente — con affiancamento settimanale da parte di Ale incluso.</div>
          <ul className="module-list">
            <li>PropertyOS completo: portfolio, CRM, pipeline, NDA, analisi mercato, calendario, report</li>
            <li>AI Render: 20 rendering/mese inclusi (valore: €1.000–2.000/mese separato)</li>
            <li>Brand Studio: brochure e template con brand ImmobilCapital</li>
            <li>Multi-valuta EUR/USD/CHF/AED — gestione immobili Dubai nativa</li>
            <li>SARA agente autonomo: matching, qualifica, PDF, scheduling, follow-up, escalation</li>
            <li>book.get-scala.com + Koro Calendar: booking visite self-service H24</li>
            <li>10 utenti inclusi (agenti, assistenti)</li>
            <li>SARA Support H24 in piattaforma + ticket SLA 4h + escalation diretta Ale</li>
            <li>Affiancamento settimanale da Ale (call 30 min/settimana)</li>
          </ul>
        </div>
      </div>

      {/* Module 03 — Mesi 7-24 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">03</span>
          <span className="module-name">Full Partnership — Mesi 7–24</span>
          <span className="badge-rec">Tier Full</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 797</div>
          <div className="module-cadence">/mese · 18 mesi</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Dal mese 7, il sistema gira in autonomia e vengono aggiunti i servizi continuativi evolutivi e l&apos;analisi competitiva.</div>
          <ul className="module-list">
            <li>Tutto il Tier Core (modulo 02) confermato</li>
            <li>Agente autonomo con livello Autonomy Gate scelto da lei (OBSERVE / SEMI-AUTO / FULL-AUTO)</li>
            <li>2 ore/mese evolutive: personalizzazioni, nuove funzionalità, ottimizzazioni su richiesta</li>
            <li>Analisi concorrenza trimestrale: Engel&amp;Völkers, Lionard, RE/MAX Luxury nei vostri mercati</li>
            <li>Check-in mensile 30 min con Ale: review KPI, ottimizzazioni, preview novità piattaforma</li>
            <li>Aggiornamenti piattaforma automatici inclusi per tutta la durata del contratto</li>
            <li>SLA 99.5% uptime garantito</li>
          </ul>
          <p className="module-note">Equivalente separato: CRM RE €200-400/mese + AI render €1.000-2.000/mese + WA AI €200-300/mese + booking €70-100/mese + Success Manager €500-800/mese + analisi concorrenza €300-600/trim = <strong>€1.970–3.600/mese</strong>. Voi pagate €797.</p>
        </div>
      </div>

      {/* Summary */}
      <div className="summary">
        <div className="summary-title">Riepilogo investimento</div>
        <table className="config-table">
          <thead>
            <tr>
              <th>Voce</th>
              <th>Dettaglio</th>
              <th>Importo</th>
              <th>Totale</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Setup</td>
              <td>Configurazione + integrazione booking + Koro + formazione (4 settimane) — €1.400 kickoff + €1.400 go-live</td>
              <td>€ 2.800</td>
              <td>€ 2.800</td>
            </tr>
            <tr>
              <td>Canone Mesi 1–6</td>
              <td>Bootcamp Period · Tier Core · RID mensile</td>
              <td>€ 497 × 6</td>
              <td>€ 2.982</td>
            </tr>
            <tr>
              <td>Canone Mesi 7–24</td>
              <td>Full Partnership · Tier Full · RID mensile</td>
              <td>€ 797 × 18</td>
              <td>€ 14.346</td>
            </tr>
          </tbody>
        </table>
        <div className="totals-row">
          <span className="totals-label">Totale 24 mesi</span>
          <div className="totals-values">
            <div className="total-item">
              <div className="t-label">Investimento totale</div>
              <div className="t-val">€ 20.128</div>
            </div>
            <div className="total-item">
              <div className="t-label">Pagamento</div>
              <div className="t-val" style={{fontSize:'14px', color:'var(--c-muted)'}}>Solo RID mensile — nessun anticipo</div>
            </div>
          </div>
        </div>

        {/* Scenarios */}
        <div className="scenarios" style={{ marginTop: '32px' }}>
          <div className="scenarios-title">Condizioni contrattuali</div>
          <div className="scenario-cards">
            <div className="scenario highlighted">
              <div className="scenario-name">Durata</div>
              <div className="scenario-modules">24 mesi</div>
              <div className="scenario-cost">Rinnovo tacito annuale. Disdetta: <strong>60 giorni di preavviso scritto dopo il 6° mese</strong>, senza penale. Nei primi 6 mesi: penale pari a 3 mensilità del canone vigente.</div>
            </div>
            <div className="scenario">
              <div className="scenario-name">Prezzo</div>
              <div className="scenario-modules">Bloccato 24 mesi</div>
              <div className="scenario-cost">Nessun adeguamento ISTAT. <strong>WA Business API Meta: add-on €39/mese</strong> (costo Meta, non incluso). Ore aggiuntive: €140/h.</div>
            </div>
            <div className="scenario">
              <div className="scenario-name">Pagamento</div>
              <div className="scenario-modules">RID mensile automatico</div>
              <div className="scenario-cost">Canone addebitato via RID il 1° di ogni mese. Setup: <strong>€1.400 al kickoff + €1.400 al go-live (W4)</strong> — nessun anticipo sul canone. <strong>IVA esclusa.</strong></div>
            </div>
            <div className="scenario">
              <div className="scenario-name">SLA Uptime</div>
              <div className="scenario-modules">99.9% mensile</div>
              <div className="scenario-cost">Penale graduata: 5% (&lt;99.9%), 10% (&lt;98%), 15% (&lt;95%), 20% (&lt;90%) — cap 20% canone mensile. Export dati certificato entro 30 gg dalla disdetta.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Module 04 — Web Integration */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">04</span>
          <span className="module-name">Integrazione Sito Web — Nuovo ImmobilCapital.it</span>
          <span className="badge-rec">Incluso nel Setup</span>
        </div>
        <div className="module-price-block">
          <div className="module-price" style={{fontSize:'20px', color:'var(--c-accent)'}}>Incluso</div>
          <div className="module-cadence">valore €1.500–2.500</div>
        </div>
        <div className="module-body">
          <div className="module-desc">PropertyOS si integra nativamente nel nuovo sito ImmobilCapital in rifacimento — widget, listing e booking operativi dal giorno del go-live, senza intervento tecnico vostro.</div>
          <ul className="module-list">
            <li><strong>Widget SARA embed</strong> — Chat AI in IT/EN/ES sul sito, personalizzata con brand ImmobilCapital: qualifica contatti, risponde a FAQ, prenota visite in autonomia H24</li>
            <li><strong>Pagine listing PropertyOS → sito</strong> — Feed automatico degli immobili attivi dal CRM verso il sito web: aggiornamento real-time, SEO-ready, nessun doppio inserimento</li>
            <li><strong>Booking widget</strong> — Calendario visite self-service embed (book.get-scala.com branded) sul sito nuovo: il lead prenota direttamente senza passare per email o telefono</li>
            <li><strong>Snippet di contatto AI</strong> — Form di contatto potenziato da SARA: raccoglie dati strutturati (budget, mercato, timeline) e li passa già qualificati al CRM</li>
            <li><strong>Coordinamento con il vostro webmaster</strong> — Forniamo snippet JS pronti all&apos;uso (2-3 righe di codice); compatibili con qualsiasi CMS o stack (WordPress, Webflow, custom)</li>
          </ul>
          <p className="module-note">L&apos;integrazione avviene durante la W3–W4 del Setup, in parallelo con il rifacimento del vostro sito. Nessun costo aggiuntivo per i Founding Partner.</p>
        </div>
      </div>

      {/* CTA Firma */}
      <div className="sign-cta">
        <div className="sign-cta-body">
          <div className="sign-cta-title">Pronto a partire, Andrea?</div>
          <p>Attiva PropertyOS con un click — contratto digitale + addebito RID automatico. Nessun anticipo, nessun bonifico manuale.</p>
          <div className="sign-cta-actions">
            <a href="https://docuseal.get-scala.com/s/siFVs4STu67arY" className="btn-sign-primary" target="_blank" rel="noopener noreferrer">
              ✍ Firma il contratto online — 3 minuti
            </a>
            <a href="/immobilcapital" className="btn-sign-secondary">← Torna alla presentazione</a>
          </div>
        </div>
        <div className="sign-cta-note">
          Firma digitale con validità legale EIDAS · art. 2702 c.c. · Clausole art. 1341 c.c. incluse. L&apos;addebito RID parte solo dopo la firma — nessun anticipo.
        </div>
      </div>

      {/* Footer */}
      <div className="doc-footer">
        <p>Preventivo preparato da Alessandro Binda · <a href="mailto:ale@get-scala.com">ale@get-scala.com</a> · S.C.A.L.A. AI OS</p>
        <p>Valido fino al <strong>15 ottobre 2026</strong>. Setup €2.800 e Bootcamp €497/mese riservati ai Founding Partner di settembre — il prossimo onboarding parte da setup €3.500 e canone €797/mese dal giorno 1.</p>
      </div>
    </div>
  )
}
