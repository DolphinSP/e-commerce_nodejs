import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'src/gql/types/schema.graphql',
  generates: {
    'src/gql/types/typedSchema.ts': {
      plugins: ['typescript', 'typescript-resolvers', 'typescript-mongodb']
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
