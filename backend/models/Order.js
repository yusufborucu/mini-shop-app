const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product'
    }
  ],
  total_price: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['ordered', 'preparing', 'on_way', 'delivered'],
    default: 'ordered'
  }
});

module.exports = mongoose.model('order', OrderSchema);