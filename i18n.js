import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './public/locales/en/common.json';
import zhTranslations from './public/locales/zh/common.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enTranslations },
      zh: { common: zhTranslations },
    },
    lng: 'zh', // Set Chinese as the default language
    fallbackLng: 'zh',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
