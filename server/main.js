import {
  createCollectionSchema,
  generateTypeDefsAndResolvers,
} from 'meteor/easy:graphqlizer'
import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import {
  collection,
  simpleSchema,
} from './AlienCollection'

const alienSchema = createCollectionSchema({
  type: 'Alien',
  collection: collection,
  schema: simpleSchema,
})

const { typeDefs, resolvers } = generateTypeDefsAndResolvers({
  schemas: [alienSchema],
})

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

createApolloServer({ graphiql: true, schema })
