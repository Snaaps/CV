import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './src/locales/en/translation.json';
import translationFR from './src/locales/fr/translation.json';
import translationES from './src/locales/es/translation.json';
import translationDE from './src/locales/de/translation.json';


// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
  es: {
    translation: translationES
  },
  de: {
    translation: translationDE
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr', // default language
    fallbackLng: 'fr', // fallback language if translation is not available
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
