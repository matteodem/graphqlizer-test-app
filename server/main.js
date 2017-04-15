import {
  generateTypeDefsAndResolvers,
} from 'meteor/easy:graphqlizer'
import { createApolloServer } from 'meteor/apollo'
import { Mongo } from 'meteor/mongo'
import { makeExecutableSchema } from 'graphql-tools'
import { subAlienSchema } from './SubAlienSchema'
import { alienSchema } from './AlienSchema'

const { typeDefs, resolvers } = generateTypeDefsAndResolvers({
  schemas: [subAlienSchema, alienSchema],
})

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

createApolloServer({ graphiql: true, schema })
