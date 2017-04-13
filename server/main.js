import {
  createCollectionSchema,
  generateTypeDefsAndResolvers,
} from 'meteor/easy:graphqlizer'
import { createApolloServer } from 'meteor/apollo'
import { Mongo } from 'meteor/mongo'
import { makeExecutableSchema } from 'graphql-tools'
import {
  collection,
  simpleSchema,
} from './AlienCollection'

const subAlienCollection = new Mongo.Collection('sub-alien')
const subAlienSimpleSchema = new SimpleSchema({
  name: {
    type: String,
  },
  bossAlienId: {
    type: String,
  },
})

const subAlienSchema = createCollectionSchema({
  type: 'SubAlien',
  collection: subAlienCollection,
  schema: subAlienSimpleSchema,
  fields: {
    type: {
      bossAlienId: false,
      bossAlien: {
        type: 'Alien',
        resolve: root => collection.findOne({ _id: root.bossAlienId })
      }
    }
  }
})

const alienSchema = createCollectionSchema({
  type: 'Alien',
  collection: collection,
  schema: simpleSchema,
  fields: {
    type: {
      subAliens: {
        type: '[SubAlien]',
        resolve: root => subAlienCollection
          .find({ bossAlienId: root._id })
          .fetch(),
      },
    },
  },
})

const { typeDefs, resolvers } = generateTypeDefsAndResolvers({
  schemas: [subAlienSchema, alienSchema],
})

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

createApolloServer({ graphiql: true, schema })
