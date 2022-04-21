const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    symbol: {type: String, required: true},
    address: {type: String, required: true}, 
    qr: {type: String, required: true}, 
})

module.exports = model('Wallet', schema)