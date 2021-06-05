const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  image: String,
  price: String
});

module.exports = mongoose.model('product', ProductSchema);