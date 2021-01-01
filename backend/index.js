import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddelware.js'
import connectDB from './dbConfig/db.js'
import path from 'path'

import productRouts from './routs/productRouts.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())
//-------//app.use(express.static(path.join(__dirname, 'build')))

// app.get('/', (req, res) => {
//   res.send("send Hayk's data")
// })

app.use('/api/products', productRouts)

// Error Handlers
app.use(notFound)
app.use(errorHandler)

const __dirname = path.resolve()
//app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send("send Hayk's data")
  })
}

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Mode ${process.env.NODE_ENV} , Port ${PORT}`.cyan.dim)
)
