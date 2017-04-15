import { createCollectionSchema } from 'meteor/easy:graphqlizer'
import {
  alienCollection,
} from './AlienCollection'
import {
  subAlienCollection,
  subAlienSimpleSchema,
} from './SubAlienCollection'

export const subAlienSchema = createCollectionSchema({
  type: 'SubAlien',
  collection: subAlienCollection,
  schema: subAlienSimpleSchema,
  fields: {
    type: {
      bossAlienId: false,
      bossAlien: {
        type: 'Alien',
        resolve: root => alienCollection.findOne({ _id: root.bossAlienId })
      }
    }
  }
})
