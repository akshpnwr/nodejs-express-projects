const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect') //Executes the mongoose.connect fn automatically
const notFound = require('./middleware/notFound')
const errorHandlerMiddleware = require('./middleware/error-handler')

require('dotenv').config()

//Middleware

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.get('/hello', (req, res) => {
  res.send('Hey, wat you doin')
})

app.use(notFound)

app.use(errorHandlerMiddleware)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()
