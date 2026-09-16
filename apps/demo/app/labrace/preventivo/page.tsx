import './preventivo.css'

export default function PreventivoLaBracePage() {
  return (
    <div className="doc">
      {/* Header */}
      <header className="doc-header">
        <div className="doc-eyebrow">Preventivo — DineOS Enterprise Hospitality</div>
        <h1 className="doc-title">DineOS — Piattaforma AI per La Brace</h1>
        <div className="doc-meta">
          <span><strong>Preparato per:</strong> Aristide · La Brace / Osteria Del Conte SRL</span>
          <span><strong>Data:</strong> 15 settembre 2026</span>
          <span><strong>Validità:</strong> 30 giorni</span>
          <span><strong>Contatto:</strong> ale@get-scala.com</span>
        </div>
      </header>

      {/* Intro */}
      <div className="intro">
        DineOS è la piattaforma AI per hospitality de La Brace: ristorante, hotel (28 camere), eventi e banqueting. La proposta è strutturata in due fasi per abbassare il rischio iniziale — <strong>Fase 1 (3 mesi)</strong> con KPI misurabili, poi <strong>Fase 2</strong> con piena operatività.{' '}
        <strong>Il frame cambia rispetto a giugno: non vendiamo risparmio software — vendiamo €143-232K di ricavi recuperabili ogni anno contro €48K di canone.</strong>
      </div>

      {/* Module 01 — Setup */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">01</span>
          <span className="module-name">Setup — 2 giorni on-site</span>
          <span className="badge-rec">Una tantum</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 2.000</div>
          <div className="module-cadence">una tantum</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Due giorni a La Brace, in presenza. Non una call — un audit reale sul campo, con configurazione live entro la giornata.</div>
          <ul className="module-list">
            <li><strong>Giorno 1 — Audit &amp; Mappatura:</strong> Censimento sistemi (cassa, POS, gestionale, canali prenotazione). Interviste sala, cucina, eventi, reception. Mappatura flussi reali prenotazione→conto, evento→preventivo→conferma.</li>
            <li><strong>Giorno 2 — Configurazione Live:</strong> DineOS setup completo (menu, tavoli, orari, policy). Knowledge Base SARA custom (menu stagionale, allergie, FAQ, tono La Brace). <em>SARA attiva su WhatsApp entro sera.</em> Dashboard KPI personalizzata: no-show rate, coperti per turno, revenue eventi. Formazione staff sala + reception (2h).</li>
          </ul>
          <p className="module-note">Spese vive viaggio (treno/auto + eventuale pernottamento) a parte — concordate a preventivo. Valore setup equivalente (audit + configurazione + formazione in loco): €8.000–12.000. Voi pagate €2.000.</p>
        </div>
      </div>

      {/* Module 02 — Fase 1 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">02</span>
          <span className="module-name">Fase 1 — Prova di Fuoco</span>
          <span className="badge-rec">Mesi 1–3</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 1.500</div>
          <div className="module-cadence">/mese · 3 mesi</div>
        </div>
        <div className="module-body">
          <div className="module-desc">I moduli con impatto immediato e misurabile: no-show, prenotazioni H24, review. Dopo 90 giorni, KPI verificati insieme prima di passare alla Fase 2.</div>
          <ul className="module-list">
            <li>Booking Engine H24: SARA risponde su WhatsApp per prenotazioni, modifiche, cancellazioni — anche alle 23:00</li>
            <li>No-show Management: reminder T-24h + T-2h automatici via WhatsApp; tracking no-show per cliente</li>
            <li>Review Monitoring: Google Maps + TripAdvisor, risposta AI approvata da Aristide</li>
            <li>Dashboard KPI base: no-show rate, occupazione per turno, prenotazioni per canale, tempo medio risposta</li>
            <li>SARA Support H24 in piattaforma (conosce il setup La Brace)</li>
            <li>Ticket SLA 4h + escalation diretta Ale</li>
            <li>Affiancamento settimanale (call 30 min/settimana con Ale)</li>
          </ul>
          <p className="module-note">KPI target dopo 90 giorni: no-show rate &lt;4% (da 8-12%), tempo risposta &lt;60s (da 24-48h), 100% prenotazioni fuori orario gestite. Se non migliorano del 30%, ne parliamo prima di procedere.</p>
        </div>
      </div>

      {/* Module 03 — Fase 2 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">03</span>
          <span className="module-name">Fase 2 — Full Operational Control</span>
          <span className="badge-rec">Mesi 4–24</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 4.000</div>
          <div className="module-cadence">/mese · 21 mesi</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Piena operatività su ristorante, hotel, eventi. Yield management, food cost, loyalty, cross-sell, analytics internazionali. Il sistema che i migliori hotel e ristoranti usano a €10-15K/mese — qui integrato.</div>
          <ul className="module-list">
            <li>Tutto Fase 1 confermato</li>
            <li><strong>Yield Management Camere:</strong> pricing dinamico per stagione/giorno. ADR target €120-140 (da ~€110). RevPAR dashboard real-time.</li>
            <li><strong>Pipeline Eventi &amp; Banqueting:</strong> risposta preventivi &lt;1h, tracking lead→conferma, cross-sell evento→pernottamento</li>
            <li><strong>Hotel Management:</strong> 28 camere, check-in/out digitale, gestione disponibilità, occupancy tracking</li>
            <li><strong>Food Cost Analyzer:</strong> margine per piatto, ottimizzazione menu stagionale, alert soglie ingredienti</li>
            <li><strong>Cross-sell Automatico:</strong> SARA propone cena a chi prenota camera, camera a chi prenota cena, aperitivo a chi prenota per sera</li>
            <li><strong>Loyalty Program:</strong> CLV tracking, reward fedeltà dopo N visite, reactivation clienti inattivi 6 mesi</li>
            <li><strong>Staff Shift Management:</strong> turni, orari, comunicazioni team</li>
            <li><strong>Analytics Full Hospitality:</strong> RevPAR, ADR, RevPASH, conversion eventi, food cost per categoria</li>
            <li>QBR trimestrale (1h call con Ale: review KPI, ottimizzazioni, preview novità)</li>
            <li>2h/mese evolutive: personalizzazioni e nuove funzionalità su richiesta</li>
          </ul>
          <p className="module-note">Equivalente separato: PMS alberghiero €300-600/mese + CRM ristorante €150-300/mese + yield mgmt €200-400/mese + eventi CRM €300-500/mese + food cost €100-200/mese + agente AI WA €200-300/mese = <strong>€1.250–2.300/mese</strong> frammentato. Voi pagate €4.000 integrato — con un ROI stimato di €143-232K/anno sulle leve di ricavo.</p>
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
              <td>2 giorni on-site: audit + configurazione + formazione + SARA live</td>
              <td>€ 2.000</td>
              <td>€ 2.000</td>
            </tr>
            <tr>
              <td>Fase 1</td>
              <td>Mesi 1–3 · Booking H24, no-show, review, KPI base</td>
              <td>€ 1.500 × 3</td>
              <td>€ 4.500</td>
            </tr>
            <tr>
              <td>Fase 2</td>
              <td>Mesi 4–24 · Full hospitality: yield, hotel, eventi, food cost, loyalty</td>
              <td>€ 4.000 × 21</td>
              <td>€ 84.000</td>
            </tr>
          </tbody>
        </table>
        <div className="totals-row">
          <span className="totals-label">Totale 24 mesi</span>
          <div className="totals-values">
            <div className="total-item">
              <div className="t-label">Investimento totale</div>
              <div className="t-val">€ 90.500</div>
            </div>
          </div>
        </div>

        <div className="scenarios" style={{ marginTop: '32px' }}>
          <div className="scenarios-title">ROI stimato vs investimento</div>
          <div className="scenario-cards">
            <div className="scenario highlighted">
              <div className="scenario-name">ROI minimo</div>
              <div className="scenario-modules">€143K / anno</div>
              <div className="scenario-cost">Canone annuo <strong>€48.000</strong>. ROI: <strong>+198%</strong>. Breakeven in 4 mesi.</div>
            </div>
            <div className="scenario highlighted">
              <div className="scenario-name">ROI massimo</div>
              <div className="scenario-modules">€232K / anno</div>
              <div className="scenario-cost">Canone annuo <strong>€48.000</strong>. ROI: <strong>+383%</strong>. Breakeven in 2.5 mesi.</div>
            </div>
            <div className="scenario">
              <div className="scenario-name">Condizioni</div>
              <div className="scenario-modules">24 mesi · biennale</div>
              <div className="scenario-cost">Rinnovo tacito 12m. Disdetta dopo mese 12 con <strong>90 gg preavviso</strong>. Pagamento SEPA mensile. <strong>IVA esclusa.</strong></div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Firma */}
      <div className="sign-cta">
        <div className="sign-cta-body">
          <div className="sign-cta-title">Pronto a partire, Aristide?</div>
          <p>Firma il contratto DineOS online in 3 minuti — firma digitale con validità legale EIDAS. L&apos;addebito SEPA RID parte solo dopo la firma.</p>
          <div className="sign-cta-actions">
            <a href="https://docuseal.get-scala.com/s/RP1uT1ddhWYhqY" className="btn-sign-primary" target="_blank" rel="noopener noreferrer">
              ✍ Firma il contratto online — 3 minuti
            </a>
            <a href="/labrace" className="btn-sign-secondary">← Torna alla presentazione</a>
          </div>
        </div>
        <div className="sign-cta-note">
          Firma digitale · validità legale EIDAS · art. 2702 c.c. · Clausole onerose art. 1341 c.c. incluse. Nessun anticipo prima del go-live.
        </div>
      </div>

      {/* Footer */}
      <div className="doc-footer">
        <p>Preventivo preparato da Alessandro Binda · <a href="mailto:ale@get-scala.com">ale@get-scala.com</a> · S.C.A.L.A. AI OS</p>
        <p>Valido fino al <strong>15 ottobre 2026</strong>. I dati ROI sono stime basate su bilancio Osteria Del Conte SRL (P.IVA 00570240143) e benchmark hospitality italiani — i numeri reali dipendono dai vostri KPI attuali che verificheremo insieme nelle prime settimane.</p>
        <p><a href="/labrace">← Torna alla presentazione</a></p>
      </div>
    </div>
  )
}
