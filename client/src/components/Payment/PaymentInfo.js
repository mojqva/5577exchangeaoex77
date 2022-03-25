import { useEffect } from "react"
const axios = require('axios')


const PaymentInfo = ({give, take, address, email, telegram, giveName, cryptoAddress}) => {
    const date = new Date(Date.now()).toLocaleString()
    useEffect(() => {
        const sendInfo = async () => {
            await axios.post('/api/payment/sendInfo', {
                userAmount: `${giveName} ${give}`,
                youReceive: `${giveName}`,
                yourWallet: `${cryptoAddress}`,
                userEmail: `${email}`,
                date: `${date}`
            })
        }
        sendInfo()
    }, [])
    return (
        <>
            PaymentPage
            <p>Отдаете {give}</p>
            <p>Получаете {take}</p>
            <p>На адрес {address}</p>
            <p>Ваша почта {email}</p>
            <p>Ваш телеграм {telegram}</p>   
            <br/>
            <p>Нужно оплатить {give} {giveName} по адресу {cryptoAddress}</p>
        </>
    )
}

export default PaymentInfo