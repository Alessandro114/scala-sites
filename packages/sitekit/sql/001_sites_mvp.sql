-- PROPOSTA (non applicata a nessun database reale). Archivio dei siti = una riga JSONB per sito, RLS per tenant.
-- Prima dell'applicazione: numerare come NNN_*.sql nel backend, allineare la funzione RLS alla convenzione di prod
-- (qui `app.current_tenant`), verificare PROD separatamente e passare dall'orchestratore.
CREATE TABLE IF NOT EXISTS sites (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id       UUID NOT NULL,
  owner_user_id   UUID NOT NULL,
  slug            TEXT NOT NULL CHECK (slug ~ '^[a-z0-9][a-z0-9-]{2,40}$'),
  status          TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','review','preview','live','suspended')),
  doc             JSONB NOT NULL,                 -- il JSON validato da sitekit.validateSite
  doc_version     INT  NOT NULL DEFAULT 1,
  preview_nonce   TEXT NOT NULL,                  -- cambiarlo revoca i link di anteprima
  content_reviewed_at TIMESTAMPTZ,
  suspended_reason TEXT,
  last_activity_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (slug)
);
CREATE TABLE IF NOT EXISTS site_lead_events (   -- prova di consenso + scadenza (retention) di ogni richiesta ricevuta dal sito
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id             UUID NOT NULL,
  site_id               UUID NOT NULL REFERENCES sites(id) ON DELETE CASCADE,
  contact_id            UUID,
  consent_text_sha256   TEXT NOT NULL,
  consent_text_version  TEXT NOT NULL,
  marketing_consent     BOOLEAN NOT NULL DEFAULT false,
  ip_truncated          INET,
  user_agent_sha256     TEXT,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT now(),
  retention_until       TIMESTAMPTZ NOT NULL
);
CREATE TABLE IF NOT EXISTS site_reports (       -- segnalazioni di abuso (DSA art. 16): inserimento pubblico, lettura solo staff
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(), site_slug TEXT NOT NULL, reason TEXT NOT NULL, details TEXT, reporter_email TEXT,
  ip_truncated INET, status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open','actioned','rejected')), decision_note TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT now(), decided_at TIMESTAMPTZ
);
CREATE INDEX IF NOT EXISTS idx_site_lead_events_retention ON site_lead_events (retention_until);
CREATE INDEX IF NOT EXISTS idx_sites_tenant ON sites (tenant_id);
ALTER TABLE sites ENABLE ROW LEVEL SECURITY; ALTER TABLE site_lead_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY sites_tenant ON sites USING (tenant_id = nullif(current_setting('app.current_tenant', true),'')::uuid);
CREATE POLICY site_lead_events_tenant ON site_lead_events USING (tenant_id = nullif(current_setting('app.current_tenant', true),'')::uuid);
