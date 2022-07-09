// mongoose module 가져오기
const mongoose = require('mongoose')

// define a schema
const userSchema = mongoose.schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // user, manager, or host ... authority
        type: Number,
        default: 0
    },
    image: String,
    token: { // set a validity
        type: String
    },
    tokenExp: { // set a expiration date
        type: Number
    }
})

// wrap the schema up with a model
const user = mongoose.model('User', userSchema)

module.exports = { User }