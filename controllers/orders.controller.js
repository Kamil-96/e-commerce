const Order = require('../models/order.model');
const validator = require('validator');

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
    
    if(products.length && name && email && phoneNumber && totalOrderPrice) {
      if(name.length <= 40 && email.length <= 50 && phoneNumber.length == 9) {

        // name, email and phoneNumber validation
        if(!validator.isAlpha(name, 'en-US', { ignore: ' ' })) throw new Error('Invalid characters');
        else if(!validator.isEmail(email)) throw new Error('Invalid characters');
        else if(!validator.isMobilePhone(phoneNumber)) throw new Error('Invalid characters');

        const newOrder = await new Order({ products: products, name: name, email: email, phoneNumber: phoneNumber, totalOrderPrice: totalOrderPrice });
        await newOrder.save();
        res.json({ message: 'OK' });
      } else throw new Error('Incorrect inputs');
    } else throw new Error('Incorrect inputs');
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};