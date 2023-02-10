require('dotenv').config()

const express = require('express')
const app = express()
const products = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send("<h1>Store Api</h1><a href='api/v1/products'>Products route</a>")
})

// app.use('/products', products)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000
app.listen(port, console.log(`Server running at port ${port}...`))
