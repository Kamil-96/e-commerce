const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Product.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if(product) res.json(product);
    else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.postProduct = async (req, res) => {
  try {
    const { name, price, imageOne, imageTwo, imageThree, description } = req.body;
    const newProduct = await new Product({ name: name, price: price, imageOne: imageOne, imageTwo: imageTwo, imageThree: imageThree, description: description });
    await newProduct.save();
    res.json({ message: 'OK' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.putProduct = async (req, res) => {
  try {
    const { name, price, imageOne, imageTwo, imageThree, description } = req.body;
    const product = await Product.findById(req.params.id);
    if(concert) {
      await Product.updateOne({ _id: req.params.id }, { $set: { name: name, price: price, imageOne: imageOne, imageTwo: imageTwo, imageThree: imageThree, description: description }});
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if(product) {
      await Product.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found' });
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};