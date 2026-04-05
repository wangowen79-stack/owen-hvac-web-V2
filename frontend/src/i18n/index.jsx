import { createContext, useContext, useState } from 'react';
import en from './en.json';
import zh from './zh.json';
import fr from './fr.json';

const langs = { en, zh, fr };
const langOrder = ['en', 'zh', 'fr'];
const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('owenhvac-lang');
      if (saved && langs[saved]) return saved;
    }
    return 'en';
  });

  const cycleLang = () => {
    const idx = langOrder.indexOf(lang);
    const next = langOrder[(idx + 1) % langOrder.length];
    setLang(next);
    localStorage.setItem('owenhvac-lang', next);
  };

  const t = (path) => {
    const keys = path.split('.');
    let val = langs[lang];
    for (const k of keys) {
      val = val?.[k];
      if (val === undefined) {
        // Fallback to English
        let fallback = langs.en;
        for (const fk of keys) { fallback = fallback?.[fk]; }
        return fallback || path;
      }
    }
    return val;
  };

  return (
    <I18nContext.Provider value={{ lang, cycleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
