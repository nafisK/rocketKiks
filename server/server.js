// All imports
const express = require('express')
const cors = require('cors')
const SneaksAPI = require('sneaks-api')
const sneaks = new SneaksAPI()

// initialize express app
const app = express()
app.use(cors())

// Route Setup
app.get('/products', (req, res) => {
  //getMostPopular(limit, callback) takes in a limit and returns an array of the current popular products curated by StockX
  sneaks.getMostPopular(20, function (err, products) {
    res.send(products)

    // handle error
    if (err) {
      console.log(err)
    }
  })
})

// get product by id
app.get('/product/:id', (req, res) => {
  sneaks.getProductPrices(req.params.id, function (err, product) {
    res.send(product)

    // handle error
    if (err) {
      console.log(err)
    }
  })
})

// search for product
app.get('/search/:query', (req, res) => {
  sneaks.getProducts(req.params.query, 10, function (err, products) {
    res.send(products)

    // handle error
    if (err) {
      console.log(err)
    }
  })
})

// Start Server Listening
PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}..`)
})
