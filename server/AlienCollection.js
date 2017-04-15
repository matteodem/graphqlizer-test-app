const alienSimpleSchema = new SimpleSchema({
  age: {
    type: Number,
  },
  name: {
    type: String,
  },
  spaceDimension: {
    type: Number,
    decimal: true,
    optional: true,
  },
})

class AlienCollection extends Mongo.Collection
{

}

const alienCollection = new AlienCollection('aliens')

alienCollection.attachSchema(alienSimpleSchema)

export {
  alienSimpleSchema,
  alienCollection,
}
