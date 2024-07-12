import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

import common_en from './translations/en/common.json'
import common_fi from './translations/fi/common.json'
import main_en from './translations/en/main.json'
import main_fi from './translations/fi/main.json'
import featureToggles_en from './translations/en/featureToggles.json'
import featureToggles_fi from './translations/fi/featureToggles.json'
import migrations_en from './translations/en/migrations.json'
import migrations_fi from './translations/fi/migrations.json'

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        common: common_en,
        main: main_en,
        featureToggles: featureToggles_en,
      },
      'en-US': {
        common: common_en,
        main: main_en,
        featureToggles: featureToggles_en,
        migrations: migrations_en
      },
      fi: {
        common: common_fi,
        main: main_fi,
        featureToggles: featureToggles_fi,
        migrations: migrations_fi
      },
    },
  })

export default i18n
