import { CodegenConfig } from '@graphql-codegen/cli'

import 'dotenv/config'

const config: CodegenConfig = {
  schema: process.env.VITE_APOLLO_URI,
  documents: ['src/**/*.graphql'],
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}

export default config
