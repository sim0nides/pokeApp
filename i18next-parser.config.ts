import { UserConfig } from 'i18next-parser'
import { languages } from './src/i18n'

const config: UserConfig = {
  defaultNamespace: 'translation',
  locales: languages,
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{tsx,ts,js,jsx}'],
  keepRemoved: false
}

export default config
