// get express module
const express = require('express') 
// create a new express "app" by using the function
const app = express()
// anything is possible: 3000 or 5000 etc.
// server 5000 as a back server
const port = 5000

// Connet my application (app) and Mongo DB
const mongoose = require('mongoose') 
mongoose.connect('mongodb+srv://Lindsay:mincho886677@clusterfortest.ousrazk.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB connected...')).catch(err => console.log(err))


// Adding my connection string into your application code


// '/': route directory
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// execut the app on port "5000"
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
