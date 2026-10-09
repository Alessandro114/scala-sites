'use client'

import { LANGS, LANG_NAMES, isLang } from '../lib/i18n'
import { useLang } from './lang-provider'

export function LangSwitcher() {
  const { lang, setLang, t } = useLang()
  return (
    <label className="flex items-center">
      <span className="sr-only">{t('aria.langSwitch')}</span>
      <select
        value={lang}
        onChange={(e) => isLang(e.target.value) && setLang(e.target.value)}
        aria-label={t('aria.langSwitch')}
        className="text-sm font-medium rounded-lg px-2 py-2 cursor-pointer"
        style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
      >
        {LANGS.map((l) => (
          <option key={l} value={l} style={{ color: '#000' }}>
            {LANG_NAMES[l]}
          </option>
        ))}
      </select>
    </label>
  )
}
