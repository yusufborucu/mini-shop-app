const express = require('express');
const router = express.Router();

const faker = require('faker');

const Product = require('../models/Product');

router.get('/save_fake_products/:count', async (req, res) => {
  for (let i = 0; i < req.params.count; i++) {
    let name = faker.commerce.productName();
    let price = faker.commerce.price();
    let image = faker.image.imageUrl();

    let product = new Product({ name, price, image });
    await product.save();
  }

  res.json({ message: 'success' });
});

router.get('/', async (req, res) => {
  const products = await Product.find({ }).limit(10);

  res.json(products);
});

module.exports = router;