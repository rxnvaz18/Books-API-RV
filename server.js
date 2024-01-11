// DEPENDENCIES
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();

require('dotenv').config()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

// ROOT INDEX
app.get('/', (req, res) => {
  res.send('Hello world')
})

// BOOKS
const booksController = require('./controller/books_controller')
app.use('/books', booksController)

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})