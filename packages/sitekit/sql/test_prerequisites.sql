-- Replica MINIMA delle colonne di prod usate dal contratto (da migrations/_schema/produzione.txt e 234_*.sql). Solo per Postgres usa e getta.
CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE crm_contacts (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), tenant_id UUID, user_id UUID, name TEXT, email TEXT, phone TEXT, source TEXT, status TEXT DEFAULT 'lead', notes TEXT, tags TEXT[], email_consent BOOLEAN, email_consent_given_at TIMESTAMPTZ, email_consent_source TEXT, email_consent_version INT, created_at TIMESTAMPTZ DEFAULT now());
CREATE TABLE consent_history (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), user_id UUID, contact_id UUID REFERENCES crm_contacts(id) ON DELETE SET NULL, tenant_id UUID, consent_type TEXT NOT NULL, action TEXT NOT NULL CHECK (action IN ('given','revoked')), version INT NOT NULL DEFAULT 1, ip_address INET, source TEXT, created_at TIMESTAMPTZ NOT NULL DEFAULT now());
ALTER TABLE crm_contacts ENABLE ROW LEVEL SECURITY; ALTER TABLE crm_contacts FORCE ROW LEVEL SECURITY;
CREATE POLICY t ON crm_contacts USING (tenant_id = nullif(current_setting('app.current_tenant', true),'')::uuid);
