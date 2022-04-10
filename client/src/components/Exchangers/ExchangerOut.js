import {useState} from 'react'
import Confirmation from './Confirmation'
import Form from './Form'
import ratioPrice from '../../utils/ratio'
import s from './style.module.css'

const ExchangerOut = ({selected, coins, filteredApi}) => {

    const giveItem = filteredApi? filteredApi.find(item => item.symbol.toLowerCase() === selected.give) : null

    const takeItem = filteredApi ? filteredApi.find(item => item.symbol.toLowerCase() === selected.take) : null

    const AMOUNT = ratioPrice(giveItem.current_price, takeItem.current_price)

    const messages = {
        inputs: 'Введите количество монет для отправки и получения',
        address: `Введите действительный адрес кошелька ${selected.take.name}`,
        email: 'Введите действительный email',
        telegram: 'Телеграм должен начинаться с @',
    }

    const [step, setStep] = useState(false)

    const [form, setForm] = useState({
        give: '', take: '', address: '', email: '', telegram: ''
    })

    const ownerAddress = coins.find(item => item.symbol.toLowerCase() === giveItem.symbol)
    console.log(ownerAddress);

    const clearForm = () => {
        setForm({give: '', take: '', address: '', email: '', telegram: ''})
    }

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const calculateTakeAmount = (input, amount) => {
        return input*amount
    }

    const calculateGiveAmount = (output, amount) => {
        return output/amount
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

    const handleSubmit = () => {
        setStep(prev => !prev)
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
                        <Confirmation
                            giveItem={giveItem}
                            takeItem={takeItem}
                            AMOUNT={AMOUNT}
                            form={form}
                            handleSubmit={handleSubmit}
                            clearForm={clearForm}
                            ownerAddress={ownerAddress}
                        />
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default ExchangerOut