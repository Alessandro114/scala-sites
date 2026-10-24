# Installa il tuo sito sul tuo hosting / Install your site on your own hosting

**Stato / Status:** versione 0.1. Verificato solo il modello **bakery**. / Only the **bakery** template is verified.

## IT — Come funziona
1. Apri `installer/index.html` (nel browser, nessun server) e compila i dati: scarica `site.config.json`. Oppure copia `apps/site/site.config.example.json`.
2. Costruisci il sito in uno dei tre modi:
   - **Fork + GitHub Action:** fork di `Alessandro114/scala-sites`, carica `site.config.json` in `apps/site/`, vai in Actions → *Build site* → *Run workflow*, scarica l'artifact `sito-statico` e carica il contenuto sul tuo hosting.
   - **Fork + Cloudflare Pages / Netlify / Vercel:** comando `npm -w scala-sites-installer run build`, cartella di output `apps/site/out`.
   - **Locale** (Node 20): `npm install` e poi `npm -w scala-sites-installer run build`.
3. Carica il contenuto di `apps/site/out/` nella cartella pubblica: **FTP/cPanel** (`public_html`), **Cloudflare Pages** (carica la cartella), **Netlify** (trascina la cartella). Sono file statici: vanno bene anche gli hosting economici.
4. Leggi `apps/site/site-report.md`: elenca cosa è stato cambiato e cosa NON è tuo (righe di `apps/site/app/page.tsx`).

## IT — Accortezze (leggile prima di pubblicare)
- **La prima build è di PROVA:** `noindex` e `robots.txt` chiuso. Per pubblicare servono `"content_reviewed": true` e `"go_live": true`; con `go_live` senza `content_reviewed` la build si ferma.
- **Contenuti della demo:** prodotti, prezzi, orari, FAQ e frasi come "dal 1962" sono della demo e non descrivono la tua attività. Sostituiscili in `apps/site/app/page.tsx` (stessa struttura). Pubblicare prezzi o orari falsi può violare le norme sulle pratiche commerciali.
- **Recensioni:** quelle della demo sono inventate e vengono **rimosse**. Aggiungi solo recensioni vere, con il consenso degli autori. Niente numeri come "142 clienti" senza fonte.
- **Prenotazioni:** la demo simula una prenotazione confermata. Qui il modulo prepara solo un messaggio WhatsApp/email: **non è una prenotazione** e non promette conferma.
- **Immagini:** le foto sono segnaposto (Unsplash, licenza gratuita anche commerciale) copiate nel sito. Sostituiscile con le tue in `apps/site/public/img/`.
- **Privacy:** il sito non usa cookie né strumenti di analisi e non carica nulla da terzi. La pagina `/privacy/` è un **modello da verificare**, non una consulenza legale. Il titolare sei tu: se aggiungi analytics, mappe, moduli o pixel, aggiornala e valuta il banner cookie.
- **Dati legali nel piè di pagina:** ragione sociale, P.IVA e indirizzo sono obbligatori per molte attività; controlla che siano corretti.
- **Lingua:** i testi del modello sono in **inglese**; solo il modulo di contatto e la privacy sono in italiano/inglese. Traduci i testi in `page.tsx`.
- **Colori:** sostituiti i due colori di marca; le sfumature chiare/scure della palette restano quelle della demo.
- **Licenza:** MIT. Il piè di pagina contiene un link a SCALA; puoi lasciarlo o toglierlo.
- **Non incluso:** dominio, certificato HTTPS (di solito offerto dall'hosting), email, assistenza. Verifica sempre il sito su telefono e computer prima di pubblicare.

## EN — How it works
1. Open `installer/index.html` (runs in your browser, no server), fill in your details and download `site.config.json` (or copy `apps/site/site.config.example.json`).
2. Build in one of three ways: **fork + GitHub Action** (Actions → *Build site* → download artifact `sito-statico`), **fork + Cloudflare Pages/Netlify/Vercel** (build `npm -w scala-sites-installer run build`, output `apps/site/out`), or **locally** with Node 20.
3. Upload the contents of `apps/site/out/` via **FTP/cPanel**, **Cloudflare Pages** or **Netlify**. Static files: any cheap hosting works.
4. Read `apps/site/site-report.md`.

## EN — Things to know before going live
- The first build is a **TEST** (`noindex`, closed `robots.txt`). Going live needs `content_reviewed: true` and `go_live: true`; `go_live` without `content_reviewed` stops the build.
- Demo products, prices, hours, FAQ and claims ("since 1962") are not yours: replace them in `apps/site/app/page.tsx`.
- Demo reviews are invented and are **removed**; add only real reviews with the authors' consent.
- The demo's booking widget fakes a confirmation; here the form only prepares a WhatsApp/email message and **is not a booking**.
- Photos are placeholders (Unsplash, free licence incl. commercial use), copied locally; replace them with yours.
- No cookies, analytics or third-party requests. `/privacy/` is a **template to review**, not legal advice; you are the data controller.
- Template copy is **English**. Colour shades other than the two brand colours stay as in the demo. MIT licence; the footer links to SCALA.
- Not included: domain, HTTPS certificate (usually from your host), email, support.

## Verifica automatica / Automated checks
`npm -w scala-sites-installer test` (11 test: validazione config, recensioni/prenotazione finte rimosse, nessuna risorsa esterna, gate go_live). `postbuild` segnala tracker o risorse di terzi nell'HTML esportato.
