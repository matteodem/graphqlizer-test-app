const simpleSchema = new SimpleSchema({
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

const collection = new AlienCollection('aliens')

collection.attachSchema(simpleSchema)

export {
  simpleSchema,
  collection,
}
