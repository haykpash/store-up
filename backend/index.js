import express from 'express'
import products from './data/productData.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

//app.use(express.static(path.join(__dirname, 'build')))

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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Mode ${process.env.NODE_ENV}, Port ${PORT}`))
