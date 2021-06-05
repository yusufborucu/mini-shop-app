const express = require('express');
const router = express.Router();

const Order = require('../models/Order');

router.get('/', (req, res) => {
  res.json({ message: 'success' });
});

module.exports = router;