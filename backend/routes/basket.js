const express = require('express')
const router = express.Router()

const Basket = require('../models/Basket')

router.get('/', async (req, res) => {
  const user_id = req.decode.userId

  const basket = await Basket.findOne({ user_id })

  res.json(basket)
})

router.put('/', async (req, res) => {
  const user_id = req.decode.userId
  const products = req.body.products

  let basket = await Basket.findOne({ user_id })
  
  if (basket) {
    basket.products = products
  } else {    
    basket = new Basket({ user_id, products })
  }
  await basket.save()

  res.json(basket)
})

module.exports = router