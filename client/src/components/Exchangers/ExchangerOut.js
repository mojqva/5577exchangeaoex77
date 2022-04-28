import React from 'react'
import {useState, useEffect} from 'react'
import Confirmation from './Confirmation'
import Form from './Form'
import ratioPrice from '../../utils/ratio'
import s from './style.module.css'
import {ErrorBoundary} from 'react-error-boundary'
import {ErrorFallback} from '../ErrorFallback'
const axios = require('axios')

const ExchangerOut = ({selected, coins, filteredApi, green}) => {
    const [wallet, setWallet] = useState('')
    const [qr, setQr] = useState('')

    const giveItem = filteredApi? filteredApi.find(item => item.symbol.toLowerCase() === selected.give) : null

    const takeItem = filteredApi ? filteredApi.find(item => item.symbol.toLowerCase() === selected.take) : null
    
    useEffect(() => { 
        let isApi = true 
        const getWallets = async () => {
            try {
                if(isApi) {
                    const response = await axios.get('/api/payment/wallets')
                    const data = await response.data
                    const ownerAddress = data && data.find(item => item.symbol.toLowerCase() === giveItem.symbol)
                    setWallet(ownerAddress === undefined ? '' : ownerAddress.address)

                    return ownerAddress
                }
            } catch (e) {
                console.log(e);
            }
        }

        const getQr = async () => {
            try {
                if(isApi) {
                    const response = await axios.get('/api/payment/wallets')
                    const data = await response.data
                    const ownerQr = data && data.find(item => item.symbol.toLowerCase() === giveItem.symbol)
                    setQr(ownerQr.qr === undefined ? '' : ownerQr.qr)

                    return ownerQr
                }
            } catch (e) {
                console.log(e);
            }
        }

        getWallets()
        getQr()
        
        return () => {
            isApi = false
        }
    }, [giveItem.symbol])

    let AMOUNT = ratioPrice(giveItem.current_price, takeItem.current_price)

    const messages = {
        inputs: 'Введите количество монет для отправки и получения',
        address: `Введите действительный адрес кошелька ${selected.take.toUpperCase()}`,
        email: 'Введите действительный email',
        telegram: 'Телеграм должен начинаться с @',
        reserve: `Превышен лимит резерва ${selected.take.toUpperCase()}`
    }

    const [step, setStep] = useState(false)

    const [form, setForm] = useState({
        give: '', take: '', address: '', email: '', telegram: ''
    })

    const clearForm = () => {
        setForm({give: '', take: '', address: '', email: '', telegram: ''})
    }

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const calculateTakeAmount = (input, amount) => {
        const a = input*amount
        if(a > 1) return a.toFixed(3)
        if(a === 0) return a.toFixed(0)
        return a.toFixed(7)   
    }

    const calculateGiveAmount = (output, amount) => {
        const a = output/amount
        if(a > 1) return a.toFixed(3)
        if(a === 0) return a.toFixed(1)
        return a.toFixed(7)  
    }

    const handleInputChange = event => {
        const giveCoins = document.querySelector('#giveCoins')
        const takeCoins = document.querySelector('#takeCoins')

        const takeAmount = calculateTakeAmount(giveCoins.value, AMOUNT)

        takeCoins.value = takeAmount
        setForm({...form, [event.target.name]: event.target.value, take: takeAmount})
    }

    const handleOutputChange = event => {
        const giveCoins = document.querySelector('#giveCoins')
        const takeCoins = document.querySelector('#takeCoins')

        const giveAmount = calculateGiveAmount(takeCoins.value, AMOUNT)

        giveCoins.value = giveAmount
        setForm({...form, [event.target.name]: event.target.value, give: giveAmount})
    }

    const handleSubmit = (bool) => {
        setStep(bool)
    }

    return (
        <div className={s.exchangeRightBorder}>
            <div className={s.exchangeRight}>
                <div className={s.title}>
                    Обмен <b className={s.exchangeGiveName}>{giveItem.name}</b> на <b className={s.exchangeTakeName}>{takeItem.name}</b>
                </div>
                <div className={s.in}>
                    {
                        !step ?
                        <Form
                            giveItem={giveItem}
                            takeItem={takeItem}
                            form={form}
                            messages={messages}
                            changeHandler={changeHandler}
                            handleInputChange={handleInputChange}
                            handleOutputChange={handleOutputChange}
                            handleSubmit={handleSubmit}
                        />  
                         :
                        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => clearForm()}>
                            <Confirmation
                                giveItem={giveItem}
                                takeItem={takeItem}
                                AMOUNT={AMOUNT}
                                form={form}
                                handleSubmit={handleSubmit}
                                clearForm={clearForm}
                                ownerAddress={wallet}
                                qr={qr}
                                green={green}
                            />  
                        </ErrorBoundary>
                    }      
                </div>
            </div>
        </div>
    )
}

export default ExchangerOut