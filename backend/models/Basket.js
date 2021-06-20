const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BasketSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product'
    }
  ]
})

module.exports = mongoose.model('basket', BasketSchema)