const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

module.exports = () => {
  mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
      console.log('MongoDB error: ', error)
    } else {
      console.log('MongoDB connected')
    }
  })
}