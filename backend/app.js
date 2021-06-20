const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const verifyToken = require('./middlewares/verify-token')

const authRouter = require('./routes/auth')
const productRouter = require('./routes/product')
const basketRouter = require('./routes/basket')
const orderRouter = require('./routes/order')

require('dotenv').config()

require('./db')()

app.use(bodyParser.json())
app.use(cors())

app.use('/auth', authRouter)
app.use('/products', productRouter)
app.use('/baskets', verifyToken, basketRouter)
app.use('/orders', verifyToken, orderRouter)

app.listen(PORT, () => {
  console.log('server is running...')
})

app.get('/', (req, res) => {
  res.json({ message: 'mini-shop-app backend' })
})

module.exports = app