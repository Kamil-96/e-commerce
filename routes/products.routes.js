const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');

router.get('/products', ProductController.getAll);
router.get('/product/:id', ProductController.getById);
router.post('/product', ProductController.postProduct);
router.put('/product/:id', ProductController.putProduct);
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router;