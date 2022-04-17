const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const AdminBro = require('admin-bro')
const mongooseAdminBro = require('@admin-bro/mongoose')
const expressAdminBro = require('@admin-bro/express')
const Wallet = require('./models/Wallet')
const Payment = require('./models/Payment')
const User = require('./models/User')

const app = express()

//Admin Bro
AdminBro.registerAdapter(mongooseAdminBro)
const AdminBroOptions = {
    resources: [Wallet, Payment, User],
}

const adminBro = new AdminBro(AdminBroOptions)
const router = expressAdminBro.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router) //localhost:5000/admin

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/payment', require('./routes/payment.routes'))

const PORT = config.get('port') || 5000



async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App started on port ${PORT}`))
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
}

start()