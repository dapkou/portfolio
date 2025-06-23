// src/contexts/LocaleContext.tsx
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { translations } from "../i18n";
import type { Locale as I18nLocale } from "../i18n";
export type Locale = I18nLocale;
/* ─────────── 型別 ─────────── */
type Translations = (typeof translations)[Locale];

interface LocaleContextValue {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
}

/* ─────────── Context ─────────── */
const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

/* ─────────── Provider ─────────── */
export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("zh");
  const t = translations[locale];

  return (
    <LocaleContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

/* ─────────── Hook ─────────── */
export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within <LocaleProvider>");
  }
  return ctx;
};