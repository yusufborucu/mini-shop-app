const express = require('express');
const router = express.Router();

const Order = require('../models/Order');
const Basket = require('../models/Basket');
const Product = require('../models/Product');

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

  const basket = await Basket.findOne({ user_id });
  await basket.delete();

  res.json(order);
});

router.get('/orders_placed', async (req, res) => {
  const orders = await Order.find({ });

  res.json(orders);
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const order = await Order.findOne({ _id: id });

  let products = [];
  await order.products.forEach(async (val) => {
    let product = await Product.findOne({ _id: val });
    products.push({
      id: val,
      name: product.name,
      price: product.price
    });
  });

  let response;

  setTimeout(() => {
    response = {
      total_price: order.total_price,
      status: order.status,
      products
    }

    res.json(response);
  }, 1000);
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