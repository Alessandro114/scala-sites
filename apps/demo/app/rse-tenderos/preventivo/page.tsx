import './preventivo.css'

export default function PreventivoPage() {
  return (
    <div className="doc">
      {/* Header */}
      <header className="doc-header">
        <div className="doc-eyebrow">Prospetto servizi — Enterprise</div>
        <h1 className="doc-title">TenderOS — Piattaforma AI per Gare e Bandi RSE</h1>
        <div className="doc-meta">
          <span><strong>Preparato per:</strong> Ufficio Gare RSE</span>
          <span><strong>Data:</strong> 4 settembre 2026</span>
          <span><strong>Validità:</strong> 30 giorni</span>
        </div>
      </header>

      {/* Intro */}
      <div className="intro">
        TenderOS è un&apos;unica piattaforma enterprise: il motore core (radar gare, parsing disciplinare,
        gap analysis, agente autonomo) è già funzionante. Il setup dedicato costruisce il tenant specifico
        RSE — connettori sulle fonti rilevanti e assistente SARA su WhatsApp — in 2-3 settimane, operativo
        dalla quarta.{' '}
        <strong>Il canone piattaforma copre l&apos;uso continuativo; il setup una tantum copre l&apos;onboarding e la costruzione del tenant dedicato.</strong>
      </div>

      {/* Module 1 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">01</span>
          <span className="module-name">Piattaforma Core TenderOS</span>
          <span className="badge-rec">Già funzionante</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">Incluso</div>
          <div className="module-cadence">nel canone</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Il motore applicativo, pronto e in uso: nessuno sviluppo da attendere per iniziare.</div>
          <ul className="module-list">
            <li>Dashboard gare — CRUD completo, stato, scadenze, score</li>
            <li>Parser disciplinare AI — estrazione criteri, punteggi, scadenze, requisiti in ~3 minuti</li>
            <li>Gap Analyzer — motore RAG, confronto documentazione RSE vs criteri bando, score 0-10 per sub-criterio</li>
            <li>Agente autonomo — pipeline a 6 step: Parse → Research → Draft → Gap Check → Iterate → Output</li>
            <li>Supervisione umana garantita — ogni bozza resta &quot;da rivedere&quot; finché un ricercatore o PM non approva</li>
          </ul>
        </div>
      </div>

      {/* Module 2 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">02</span>
          <span className="module-name">Setup & Onboarding Tenant RSE</span>
          <span className="badge-rec">Base</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">€ 7.500</div>
          <div className="module-cadence">una tantum</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Costruzione del tenant dedicato RSE — non una configurazione generica.</div>
          <ul className="module-list">
            <li>Import storico gare e knowledge base documentale RSE</li>
            <li>Calibrazione filtri AI sui domini di ricerca specifici (grid, storage, idrogeno, nucleare, efficienza)</li>
            <li>Configurazione utenti e ruoli (RBAC) — fino a 25 utenti</li>
            <li>Migrazione dati da strumenti esistenti</li>
            <li>Due sessioni di formazione da 90 minuti + referente dedicato nei primi 30 giorni</li>
          </ul>
          <div className="module-note">Timeline: 2-3 settimane di setup, piattaforma operativa dalla 4ª settimana.</div>
        </div>
      </div>

      {/* Module 3 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">03</span>
          <span className="module-name">Connettori Fonti EU</span>
          <span className="badge-rec">Da costruire</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">Incluso</div>
          <div className="module-cadence">nel setup</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Radar automatico su 8 fonti europee, con filtro AI semantico per rilevanza RSE.</div>
          <ul className="module-list">
            <li>TED — Tenders Electronic Daily (daily)</li>
            <li>CORDIS — EU Research Projects (daily)</li>
            <li>EC Funding &amp; Tenders Portal (daily)</li>
            <li>Innovation Fund, LIFE Programme, CEF Energy (weekly)</li>
            <li>CETPartnership, Interreg Alpine Space (weekly)</li>
          </ul>
          <div className="module-note">Sviluppo dedicato incluso nel setup — non presente nel core generico.</div>
        </div>
      </div>

      {/* Module 4 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">04</span>
          <span className="module-name">Connettori Fonti Italia</span>
          <span className="badge-rec">Da costruire</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">Incluso</div>
          <div className="module-cadence">nel setup</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Copertura degli enti e portali italiani rilevanti per bandi ed appalti RSE.</div>
          <ul className="module-list">
            <li>ANAC — Banca Dati Contratti Pubblici (daily)</li>
            <li>SimoG, MePA / CONSIP (daily)</li>
            <li>MASE — Ministero Ambiente (weekly)</li>
            <li>MiSE / MIMIT, GSE, ARERA (weekly)</li>
            <li>Regione Lombardia (weekly)</li>
          </ul>
          <div className="module-note">Sviluppo dedicato incluso nel setup — non presente nel core generico.</div>
        </div>
      </div>

      {/* Module 5 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">05</span>
          <span className="module-name">SARA — Assistente Gare su WhatsApp</span>
          <span className="badge-rec">Da costruire</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">Incluso</div>
          <div className="module-cadence">nel setup</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Un&apos;assistente dedicata al tenant RSE, non un chatbot generico: risponde nel linguaggio del team gare.</div>
          <ul className="module-list">
            <li>Disponibile 24/7 su WhatsApp — nessuna app da installare</li>
            <li>Risponde in linguaggio naturale: stato gare, scadenze, gap aperti</li>
            <li>Alert automatici a 15, 7 e 3 giorni prima di ogni scadenza</li>
            <li>Escalation al responsabile per decisioni bid/no-bid</li>
            <li>Log completo delle interazioni, integrato con la dashboard</li>
            <li>Tre livelli di autonomia: Osservazione → Semi-auto → Full-auto</li>
          </ul>
          <div className="module-note">Costruita come parte del setup dedicato tenant RSE — la configurazione, i prompt e le soglie di alert sono specifici, non un modulo condiviso.</div>
        </div>
      </div>

      {/* Module 6 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">06</span>
          <span className="module-name">Formazione & Adozione Graduale</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">Incluso</div>
          <div className="module-cadence">nel setup</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Adozione a step controllati: il team mantiene sempre il controllo, l&apos;automazione cresce con la fiducia.</div>
          <ul className="module-list">
            <li>Settimana 1-2 — Setup: configurazione connettori, import storico gare</li>
            <li>Settimana 3-4 — Training: SARA in modalità Osservazione (Livello 1), legge e suggerisce</li>
            <li>Mese 2 — Semi-auto: SARA risponde a FAQ, aggiorna scadenze, genera checklist</li>
            <li>Mese 3+ — Full-auto: gestione autonoma della pipeline, escalation solo su decisioni strategiche</li>
          </ul>
        </div>
      </div>

      {/* Module 7 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">07</span>
          <span className="module-name">Sicurezza & Compliance</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">Incluso</div>
          <div className="module-cadence">nel canone</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Infrastruttura pensata per dati sensibili di ricerca e appalti pubblici.</div>
          <ul className="module-list">
            <li>Infrastruttura in UE</li>
            <li>Crittografia in transito e a riposo</li>
            <li>Accesso RBAC per ruolo e progetto</li>
            <li>Conforme GDPR</li>
            <li>Integrazione via API REST con i sistemi documentali esistenti, senza migrazione dati obbligatoria</li>
          </ul>
        </div>
      </div>

      {/* Module 8 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">08</span>
          <span className="module-name">Supporto Dedicato & SLA</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">Incluso</div>
          <div className="module-cadence">nel canone</div>
        </div>
        <div className="module-body">
          <div className="module-desc">Un referente, non un ticket in coda.</div>
          <ul className="module-list">
            <li>Referente dedicato nei primi 30 giorni post go-live</li>
            <li>Supporto continuo via email e WhatsApp</li>
            <li>Aggiornamenti tecnici e di sicurezza della piattaforma</li>
            <li>Fino a 25 utenti inclusi nel canone</li>
          </ul>
        </div>
      </div>

      {/* Module 9 */}
      <div className="module">
        <div className="module-head">
          <span className="module-num">09</span>
          <span className="module-name">Manutenzione & Evoluzione Piattaforma</span>
        </div>
        <div className="module-price-block">
          <div className="module-price">Incluso</div>
          <div className="module-cadence">nel canone</div>
        </div>
        <div className="module-body">
          <div className="module-desc">La piattaforma core evolve, il vostro tenant ne beneficia senza costi aggiuntivi.</div>
          <ul className="module-list">
            <li>Nuovi connettori e fonti aggiunti alla piattaforma core</li>
            <li>Miglioramenti al motore di gap analysis e all&apos;agente autonomo</li>
            <li>Backup e continuità operativa</li>
            <li>Roadmap condivisa — priorità RSE considerate negli sviluppi futuri</li>
          </ul>
        </div>
      </div>

      {/* Summary table */}
      <div className="summary">
        <div className="summary-title">Riepilogo Investimento</div>
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
                <td>01 — Piattaforma Core</td>
                <td>Canone</td>
                <td>—</td>
                <td>Incluso</td>
              </tr>
              <tr>
                <td>02 — Setup &amp; Onboarding</td>
                <td>Setup</td>
                <td>€ 7.500</td>
                <td>—</td>
              </tr>
              <tr>
                <td>03 — Connettori EU</td>
                <td>Setup</td>
                <td>Incluso in 02</td>
                <td>—</td>
              </tr>
              <tr>
                <td>04 — Connettori Italia</td>
                <td>Setup</td>
                <td>Incluso in 02</td>
                <td>—</td>
              </tr>
              <tr>
                <td>05 — SARA WhatsApp</td>
                <td>Setup</td>
                <td>Incluso in 02</td>
                <td>—</td>
              </tr>
              <tr>
                <td>06 — Formazione &amp; Adozione</td>
                <td>Setup</td>
                <td>Incluso in 02</td>
                <td>—</td>
              </tr>
              <tr>
                <td>07 — Sicurezza &amp; Compliance</td>
                <td>Canone</td>
                <td>—</td>
                <td>Incluso</td>
              </tr>
              <tr>
                <td>08 — Supporto Dedicato &amp; SLA</td>
                <td>Canone</td>
                <td>—</td>
                <td>Incluso</td>
              </tr>
              <tr>
                <td>09 — Manutenzione &amp; Evoluzione</td>
                <td>Canone</td>
                <td>—</td>
                <td>Incluso</td>
              </tr>
              <tr>
                <td>Piattaforma — fino a 25 utenti</td>
                <td>Mensile</td>
                <td>—</td>
                <td>€ 2.500/mese</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="totals-row">
          <div className="totals-label">Investimento totale</div>
          <div className="totals-values">
            <div className="total-item">
              <div className="t-label">Setup una tantum</div>
              <div className="t-val">€ 7.500</div>
            </div>
            <div className="total-item">
              <div className="t-label">Canone mensile</div>
              <div className="t-val">€ 2.500</div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline / TCO comparison */}
      <div className="scenarios">
        <div className="scenarios-title">Confronto TCO — perché una piattaforma unica</div>
        <div className="scenario-cards">
          <div className="scenario">
            <div className="scenario-name">Tool frammentati</div>
            <div className="scenario-modules">Salesforce + scraping custom + monitoring manuale</div>
            <div className="scenario-cost">
              Più licenze, più integrazioni da mantenere, nessuna gap analysis automatica.<br />
              <strong>€ 12.000–18.000</strong>/mese
            </div>
          </div>

          <div className="scenario highlighted">
            <div className="scenario-name">TenderOS</div>
            <div className="scenario-modules">Piattaforma unica, AI integrata, SARA inclusa</div>
            <div className="scenario-cost">
              Radar, parsing, gap analysis, agente autonomo e assistente WhatsApp in un unico canone.<br />
              <strong>€ 7.500</strong> setup + <strong>€ 2.500</strong>/mese
            </div>
          </div>

          <div className="scenario">
            <div className="scenario-name">Il costo di non averlo</div>
            <div className="scenario-modules">1 gara persa per deadline mancata</div>
            <div className="scenario-cost">
              40 ore/persona per relazione tecnica manuale, 3-5 persone impegnate in lavoro ripetitivo.<br />
              <strong>€ 500.000–2.000.000</strong> di funding a rischio
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="doc-footer">
        <p>
          Tutti i prezzi sono IVA esclusa. Il canone piattaforma copre fino a 25 utenti; utenti aggiuntivi
          su richiesta. Il setup una tantum copre onboarding, migrazione dati, configurazione dei connettori
          EU e Italia e attivazione di SARA su WhatsApp per il tenant dedicato RSE.
        </p>
        <p>Setup: 2-3 settimane. Piattaforma operativa dalla 4ª settimana, con adozione graduale su tre livelli di autonomia.</p>
      </div>
    </div>
  )
}
