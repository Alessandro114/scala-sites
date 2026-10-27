# @scala-sites/sitekit

Motore a sezioni guidato da dati: **un sito = un JSON**, un renderer unico lo trasforma in HTML statico (nessun JavaScript al browser, CSS inline, nessuna risorsa di terzi). Zero dipendenze.

```bash
node --test tests/                                  # 32 test (+6 con Postgres usa e getta: SITEKIT_PG_URL)
node bin/sitekit.mjs build-samples ./out            # 10 siti di esempio fittizi + audit
node bin/sitekit.mjs preview ./out/ristorante 8101  # anteprima locale, X-Robots-Tag: noindex
```

- `src/schema.mjs` modello + validazione (recensioni solo con fonte e consenso, foto solo caricate, `indexable` solo se revisionato)
- `src/render.mjs` renderer; `src/theme.mjs` temi (token S.C.A.L.A. + 6 palette cliente, contrasto >= 4,5:1 verificato nei test)
- `src/draft.mjs` fatti -> bozza; l'AI e' opzionale e inietta solo testo, con filtro anti-invenzione; tutto cio' che scrive e' "da verificare"
- `src/guard.mjs` moderazione, quote, `canPublish` (disattivato in beta), token di anteprima, `auditHtml`
- `src/lead.mjs` + `sql/` contratto form -> CRM con consenso GDPR (proposta, non applicata a nessun DB)

I test E2E richiedono Chromium (`SITEKIT_CHROME`), `playwright-core` (`SITEKIT_PW_PKG`) e `pg` (`SITEKIT_PG_PKG`) installati fuori dal repo: il pacchetto non ha dipendenze.

## Editor self-service (modello "esporta e pubblica sul tuo dominio")
```bash
node bin/sitekit.mjs editor 8110      # http://127.0.0.1:8110/editor/ — tutto nel browser, nessun dato inviato
SITEKIT_E2E=1 node --test tests/editor.e2e.test.mjs   # E2E in Chromium headless locale
```
