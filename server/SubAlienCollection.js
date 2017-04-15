export const subAlienCollection = new Mongo.Collection('sub-alien')
export const subAlienSimpleSchema = new SimpleSchema({
  name: {
    type: String,
  },
  bossAlienId: {
    type: String,
  },
})
