const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    address: {type: String, required: true, unique: true},
    code: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
})

module.exports = model('Wallet', schema)