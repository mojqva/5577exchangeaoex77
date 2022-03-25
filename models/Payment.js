const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    yourWallet: {type: String, required: true},
    youReceive: {type: String, required: true},
    userAmount: {type: String, required: true},
    userEmail: {type: String, required: true},
    date: {type: String, required: true}
})

module.exports = model('Payment', schema)