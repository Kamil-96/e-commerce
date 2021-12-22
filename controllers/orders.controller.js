const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Order.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if(order) res.json(order);
    else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.postOrder = async (req, res) => {
  try {
    const { products, name, email, phoneNumber, totalOrderPrice } = req.body;
    const newOrder = await new Order({ products: products, name: name, email: email, phoneNumber: phoneNumber, totalOrderPrice: totalOrderPrice });
    await newOrder.save();
    res.json({ message: 'OK' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};