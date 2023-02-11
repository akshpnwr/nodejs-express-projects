require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()
const productsRouter = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')

// middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.send("<h1>Store Api</h1><a href='api/v1/products'>Products route</a>")
})

// routes
app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)

//$env:MY_VAR="8000"
//node app.js
const port = process.env.PORT || 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server running at port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
