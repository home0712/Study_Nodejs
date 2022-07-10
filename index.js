// get express module
const express = require('express') 
// create a new express "app" by using the function
const app = express()
// anything is possible: 3000 or 5000 etc.
// server 5000 as a back server
const port = 5000

// BodyParser 가져오기
const bodyParser = require('body-parser');

// 
const config = require('./config/key')

// User model 가져오기
const { User } = require('./models/User');



// parse these types files (things) below before it goes to the server
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// application/json
app.use(bodyParser.json())



// Connet my application (app) and Mongo DB
const mongoose = require('mongoose'); 
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB connected...')).catch(err => console.log(err))


// Adding my connection string into your application code


// '/': route directory (simple route)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// create a route to sign up (to store information when you sign up)
app.post('/register', (req, res) => {

  // 회원가입 시 필요한 정보들 client에서 가져오면, 그것들을 database에 넣어줌

  // Create a User instance
  // As a result of the body-parser, req.body(client info) is created
  const user = new User(req.body)
  
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})



// execut the app on port "5000"
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})