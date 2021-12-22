const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/orders.controller');

router.get('/orders', OrderController.getAll);
router.get('/orders/:id', OrderController.getById);
router.post('/orders', OrderController.postOrder);

module.exports = router;