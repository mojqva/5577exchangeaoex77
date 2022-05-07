const {Router} = require('express')
const router = Router()
const Wallet = require('../models/Wallet')
const Payment = require('../models/Payment')

// /api/payment/wallets
router.get(
    '/wallets',
    (req, res) => {
        try {
           Wallet.find()
           .then((result) => {
               res.send(result)
           })
           .catch(e => {
               console.log(e);
           })

        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)
// /api/payment/sendInfo
router.post(
    '/sendInfo',
    async (req,res) => {
        try {
            const {zayavkaNa, otdaet, naKoschelek, koschelekKlienta, date} = req.body
            const payment = new Payment({zayavkaNa, otdaet, naKoschelek, koschelekKlienta, date})

            await payment.save()
            res.status(201).json({ message: 'Заявка отправлена'})
            
        } catch (e) {
            res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

module.exports = router