const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  imageOne: { type: String, required: true },
  imageTwo: { type: String, required: true },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);