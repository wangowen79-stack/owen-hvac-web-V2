import { createContext, useContext, useState } from 'react';
import en from './en.json';
import zh from './zh.json';

const langs = { en, zh };
const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('owenhvac-lang');
      if (saved && langs[saved]) return saved;
      
    }
    return 'en';
  });

  const toggleLang = () => {
    const next = lang === 'en' ? 'zh' : 'en';
    setLang(next);
    localStorage.setItem('owenhvac-lang', next);
  };

  const t = (path) => {
    const keys = path.split('.');
    let val = langs[lang];
    for (const k of keys) {
      val = val?.[k];
      if (val === undefined) return path;
    }
    return val;
  };

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
