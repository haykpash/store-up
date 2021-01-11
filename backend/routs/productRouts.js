import express from 'express'
const router = express.Router()
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// Fatch all productsData
// GET /api/products
// Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)
// Fatch single productData
// GET /api/products
// Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ messge: 'product not found' })
      //throw new Error('Product not found')
    }
  })
)

export default router
