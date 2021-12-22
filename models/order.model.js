const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: { type: Array, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  totalOrderPrice: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema);