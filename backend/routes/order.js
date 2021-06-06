const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

router.get('/', async (req, res) => {
  const user_id = req.decode.userId;

  const orders = await Order.find({ user_id });

  res.json(orders);
});

router.post('/', async (req, res) => {
  const user_id = req.decode.userId;
  const data = req.body;
  data.user_id = user_id;

  const order = new Order(data);
  await order.save();

  res.json(order);
});

module.exports = router;