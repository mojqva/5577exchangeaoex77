const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    username: {type: String, required: false, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})

module.exports = model('User', schema)