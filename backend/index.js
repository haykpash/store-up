const express = require('express')
const products = require('./data/productData')

const app = express()

app.get('/', (req, res) => {
  res.send("send Hayk's data")
})
app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((i) => i.id === req.params.id)
  res.json(product)
})

app.listen(5000, console.log('Server 5000'))
