import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import translationEN from "../locales/en/translation.json";
import translationRU from "../locales/ru/translation.json";

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
    },
    debug: false,
    lng: "en",
  });

export default i18n;
