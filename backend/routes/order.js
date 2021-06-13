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

router.get('/orders_placed', async (req, res) => {
  const orders = await Order.find({ });

  res.json(orders);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const order = await Order.findOne({ _id: id });

  res.json(order);
});

router.put('/change_order_status/:id', async (req, res) => {
  const id = req.params.id;
  const order = await Order.findOne({ _id: id });
  const data = req.body;

  order.status = data.status;
  await order.save();

  res.json(order);
});

module.exports = router;