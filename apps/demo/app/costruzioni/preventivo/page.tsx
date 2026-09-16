import './preventivo.css'

export default function PreventivoPage() {
  return (
    <div className="doc">
      {/* Header */}
      <header className="doc-header">
        <div className="doc-eyebrow">Prospetto servizi</div>
        <h1 className="doc-title">GF Costruzioni — Sviluppo Digitale Modulare</h1>
        <div className="doc-meta">
          <span><strong>Preparato per:</strong> Franco &amp; Andrea Santoro</span>
          <span><strong>Data:</strong> 4 settembre 2026</span>
          <span><strong>Validità:</strong> 30 giorni</span>
        </div>
      </header>

      {/* Intro */}
      <div className="intro">
        Ogni modulo è indipendente e attivabile singolarmente. Il sito vetrina (Modulo 1) è la base;
        tutti gli altri si aggiungono quando servono, senza vincoli di ordine.{' '}
        <strong>I costi una tantum si pagano una volta; i canoni si attivano dal mese di avvio del servizio.</strong>
      </div>

      {/* Module 1 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">01</span>
          <span className="module-name">Sito Vetrina Professionale</span>
          <span className="badge-rec">Base</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 1.200</div>
          <div className="module-cadence">una tantum</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Il sito aziendale completo, pronto per andare online.</div>
          <ul className="module-list">
            <li>Design responsive — desktop, tablet, mobile</li>
            <li>5 sezioni: Home, Chi siamo, Servizi, Progetti realizzati, Contatti</li>
            <li>Galleria fotografica con i vostri cantieri</li>
            <li>Form contatti funzionante con notifica email</li>
            <li>Pulsante &quot;Chiama ora&quot; e link Google Maps</li>
            <li>Testi e copy professionali inclusi</li>
          </ul>
        </div>
      </div>

      {/* Module 2 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">02</span>
          <span className="module-name">Dominio, Hosting &amp; Email</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 180</div>
          <div className="module-cadence">all&apos;anno</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Infrastruttura tecnica: il sito va online e resta raggiungibile.</div>
          <ul className="module-list">
            <li>Registrazione dominio (gfcostruzioni.it o simile)</li>
            <li>Hosting veloce con certificato SSL (HTTPS)</li>
            <li>Casella email aziendale (info@gfcostruzioni.it)</li>
            <li>Backup automatici settimanali</li>
          </ul>
        </div>
      </div>

      {/* Module 3 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">03</span>
          <span className="module-name">Indicizzazione Google</span>
          <span className="badge-rec">Consigliato</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 500</div>
          <div className="module-cadence">una tantum</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Il sito diventa visibile su Google. Chiunque cerca &quot;costruzioni&quot; nella vostra zona vi trova.</div>
          <ul className="module-list">
            <li>Registrazione su Google Search Console</li>
            <li>Sitemap XML e indicizzazione accelerata</li>
            <li>Meta tags e Open Graph per condivisione social</li>
            <li>Markup Schema.org (LocalBusiness) — dati strutturati</li>
            <li>Creazione/ottimizzazione scheda Google My Business</li>
            <li>Verifica indicizzazione entro 30 giorni</li>
          </ul>
        </div>
      </div>

      {/* Module 4 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">04</span>
          <span className="module-name">Analytics &amp; Integrazioni</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 300</div>
          <div className="module-cadence">una tantum</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Misurazione visite e strumenti di contatto aggiuntivi.</div>
          <ul className="module-list">
            <li>Google Analytics 4 — dashboard visite e provenienza</li>
            <li>Pulsante WhatsApp Business in ogni pagina</li>
            <li>Cookie banner conforme GDPR</li>
            <li>Facebook Pixel (predisposizione per campagne future)</li>
          </ul>
        </div>
      </div>

      {/* Module 5 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">05</span>
          <span className="module-name">SEO Locale Avanzata</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 350</div>
          <div className="module-cadence">al mese</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Posizionamento continuo: salire nei risultati per le ricerche &quot;costruzioni + [vostra città]&quot;.</div>
          <ul className="module-list">
            <li>Ricerca parole chiave locali e competitor</li>
            <li>2 articoli blog ottimizzati al mese</li>
            <li>Link building locale (directory, portali edilizia)</li>
            <li>Gestione e risposte recensioni Google</li>
            <li>Report mensile posizionamento con metriche chiave</li>
          </ul>
          <div className="module-note">Impegno minimo consigliato: 6 mesi. Risultati visibili dal 3°-4° mese.</div>
        </div>
      </div>

      {/* Module 6 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">06</span>
          <span className="module-name">Google Ads — Campagne PPC</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 400 + €250</div>
          <div className="module-cadence">setup + al mese</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Risultati immediati: annunci a pagamento quando qualcuno cerca i vostri servizi.</div>
          <ul className="module-list">
            <li>Setup campagne Google Search mirate</li>
            <li>Creazione landing page dedicate per conversione</li>
            <li>Gestione e ottimizzazione mensile delle campagne</li>
            <li>Tracciamento conversioni (chiamate, form, WhatsApp)</li>
            <li>Report mensile con costo per lead</li>
          </ul>
          <div className="module-note">Budget pubblicitario Google escluso — consigliato: €300-500/mese a seconda della zona.</div>
        </div>
      </div>

      {/* Module 7 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">07</span>
          <span className="module-name">Social Media</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 400</div>
          <div className="module-cadence">al mese</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Presenza professionale su Instagram e Facebook — foto cantieri, lavori completati, prima/dopo.</div>
          <ul className="module-list">
            <li>Gestione pagina Instagram + Facebook aziendale</li>
            <li>8 post al mese con copywriting professionale</li>
            <li>Storie e reel dai cantieri (materiale foto fornito da voi)</li>
            <li>Risposte commenti e messaggi diretti</li>
          </ul>
          <div className="module-note">Materiale fotografico dai cantieri fornito dal cliente via WhatsApp.</div>
        </div>
      </div>

      {/* Module 8 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">08</span>
          <span className="module-name">Manutenzione &amp; Assistenza</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 80</div>
          <div className="module-cadence">al mese</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Il sito resta aggiornato, sicuro, e potete chiedere piccole modifiche ogni mese.</div>
          <ul className="module-list">
            <li>Aggiornamenti tecnici e di sicurezza</li>
            <li>Backup settimanali con restore garantito</li>
            <li>Modifiche contenuti fino a 2 ore/mese incluse</li>
            <li>Supporto via email e WhatsApp</li>
          </ul>
        </div>
      </div>

      {/* Module 9 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">09</span>
          <span className="module-name">SARA — Assistente AI WhatsApp</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 9,90</div>
          <div className="module-cadence">al mese</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Un&apos;assistente virtuale su WhatsApp che risponde ai clienti 24/7, gestisce appuntamenti e risponde alle domande frequenti.</div>
          <ul className="module-list">
            <li>Risposte automatiche intelligenti su WhatsApp Business</li>
            <li>Gestione appuntamenti e richieste informazioni</li>
            <li>FAQ personalizzate sui vostri servizi e listino</li>
            <li>Disponibile 24 ore su 24, 7 giorni su 7, in 4 lingue</li>
            <li>Vi avvisa solo quando serve il vostro intervento</li>
            <li>Follow-up automatico con clienti inattivi</li>
            <li>Personalità e tono configurabili sulla vostra azienda</li>
          </ul>
          <div className="module-note">
            SARA risponde, informa e fissa appuntamenti. Non esegue preventivi tecnici, non accede ai vostri gestionali
            e non sostituisce il vostro giudizio professionale — vi passa la palla quando serve.
          </div>
        </div>
      </div>

      {/* Summary table */}
      <div className="summary">
        <div className="summary-title">Riepilogo Moduli</div>
        <div style={{ overflowX: 'auto' }}>
          <table className="config-table">
            <thead>
              <tr>
                <th>Modulo</th>
                <th>Tipo</th>
                <th>Una tantum</th>
                <th>Canone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 — Sito Vetrina</td>
                <td>Setup</td>
                <td>€ 1.200</td>
                <td>—</td>
              </tr>
              <tr>
                <td>02 — Dominio &amp; Hosting</td>
                <td>Annuo</td>
                <td>—</td>
                <td>€ 180/anno</td>
              </tr>
              <tr>
                <td>03 — Indicizzazione Google</td>
                <td>Setup</td>
                <td>€ 500</td>
                <td>—</td>
              </tr>
              <tr>
                <td>04 — Analytics &amp; Integrazioni</td>
                <td>Setup</td>
                <td>€ 300</td>
                <td>—</td>
              </tr>
              <tr>
                <td>05 — SEO Locale Avanzata</td>
                <td>Mensile</td>
                <td>—</td>
                <td>€ 350/mese</td>
              </tr>
              <tr>
                <td>06 — Google Ads</td>
                <td>Setup + mensile</td>
                <td>€ 400</td>
                <td>€ 250/mese</td>
              </tr>
              <tr>
                <td>07 — Social Media</td>
                <td>Mensile</td>
                <td>—</td>
                <td>€ 400/mese</td>
              </tr>
              <tr>
                <td>08 — Manutenzione</td>
                <td>Mensile</td>
                <td>—</td>
                <td>€ 80/mese</td>
              </tr>
              <tr>
                <td>09 — SARA AI WhatsApp</td>
                <td>Mensile</td>
                <td>—</td>
                <td>€ 9,90/mese</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="totals-row">
          <div className="totals-label">Se tutto attivo</div>
          <div className="totals-values">
            <div className="total-item">
              <div className="t-label">Una tantum</div>
              <div className="t-val">€ 2.400</div>
            </div>
            <div className="total-item">
              <div className="t-label">Canone mensile</div>
              <div className="t-val">€ 1.105</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scenarios */}
      <div className="scenarios">
        <div className="scenarios-title">Tre configurazioni tipo</div>
        <div className="scenario-cards">
          <div className="scenario">
            <div className="scenario-name">Essenziale</div>
            <div className="scenario-modules">Moduli 01 + 02 + 03</div>
            <div className="scenario-cost">
              Sito online, indicizzato su Google, dominio e email aziendali.<br />
              <strong>€ 1.700</strong> una tantum + <strong>€ 15</strong>/mese (hosting)
            </div>
          </div>

          <div className="scenario highlighted">
            <div className="scenario-name">Consigliata</div>
            <div className="scenario-modules">Moduli 01 + 02 + 03 + 04 + 08 + 09</div>
            <div className="scenario-cost">
              Sito completo con analytics, WhatsApp, GDPR, manutenzione e assistente AI 24/7.<br />
              <strong>€ 2.000</strong> una tantum + <strong>€ 105</strong>/mese
            </div>
          </div>

          <div className="scenario">
            <div className="scenario-name">Crescita</div>
            <div className="scenario-modules">Tutti i moduli (01–09)</div>
            <div className="scenario-cost">
              Presenza digitale completa: sito, SEO, ads, social, manutenzione, assistente AI.<br />
              <strong>€ 2.400</strong> una tantum + <strong>€ 1.105</strong>/mese
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="doc-footer">
        <p>
          Tutti i prezzi sono IVA esclusa. I canoni mensili si attivano dal mese di avvio effettivo del servizio
          e si possono sospendere con 30 giorni di preavviso (tranne SEO, impegno minimo 6 mesi).
          Il budget pubblicitario Google Ads (Modulo 06) è versato direttamente a Google e non è incluso nei costi sopra.
        </p>
        <p>Ogni modulo può essere aggiunto in qualsiasi momento successivo al lancio del sito.</p>
      </div>
    </div>
  )
}
