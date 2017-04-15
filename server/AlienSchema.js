import { createCollectionSchema } from 'meteor/easy:graphqlizer'
import {
  alienCollection,
  alienSimpleSchema,
} from './AlienCollection'
import {
  subAlienCollection,
} from './SubAlienCollection'

export const alienSchema = createCollectionSchema({
  type: 'Alien',
  collection: alienCollection,
  schema: alienSimpleSchema,
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
