import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ro from './ro.json';

export enum LanguageEnum {
  RO = 'ro',
  EN = 'en',
}

const savedLanguage = localStorage.getItem('lng') || LanguageEnum.RO;

i18next.use(initReactI18next).init({
  lng: savedLanguage,
  debug: false,
  resources: {
    en: {
      translation: en,
    },
    ro: {
      translation: ro,
    },
  },
});

export default i18next;
