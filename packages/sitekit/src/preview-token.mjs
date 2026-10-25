// Solo Node (server): usa node:crypto. Separato da guard.mjs, che deve girare anche nel browser dell'editor.
import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto'

// ---- anteprima a URL non indovinabile e revocabile ----
// token = base64url(nonce[16]) . base64url(HMAC(secret, siteId|nonce)[16]). Revoca = cambiare il nonce salvato col sito.
export const newPreviewNonce = () => randomBytes(16).toString('base64url')
export function previewToken(siteId, nonce, secret) { return nonce + '.' + createHmac('sha256', secret).update(`${siteId}|${nonce}`).digest().subarray(0, 16).toString('base64url') }
export function verifyPreviewToken(siteId, nonce, token, secret) { const a = Buffer.from(previewToken(siteId, nonce, secret)), b = Buffer.from(String(token)); return a.length === b.length && timingSafeEqual(a, b) }

