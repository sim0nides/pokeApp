import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector, {
  DetectorOptions
} from 'i18next-browser-languagedetector'
import backend from 'i18next-http-backend'

export const languages = ['en', 'sk']

const detectionOptions: DetectorOptions = {
  convertDetectedLanguage: (lang: string) =>
    languages.find((i) => lang.startsWith(i)) || lang
}

i18n
  .use(backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: !import.meta.env.PROD,
    fallbackLng: [languages[0], languages[1]],
    detection: detectionOptions
  })

export default i18n
