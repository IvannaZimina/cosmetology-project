import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

import translationEstonian from "../translations/est/translation.json"
import translationRussian from "../translations/rus/translation.json"

const resources = {
    est: {
        translation: translationEstonian,
    },
    rus: {
        translation: translationRussian,
    },
};


export default i18next
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "est",
        interpolation: {
            escapeValue: false
        },
        resources
    });
