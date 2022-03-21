import { useState } from 'react'
import s from './style.module.css'
import TestC from './TestC'

const AMOUNT = 2

const giveCoins = document.querySelector('#giveCoins')
const takeCoins = document.querySelector('#takeCoins')
const addressCoins = document.querySelector('#addressCoins')
const emailCoins = document.querySelector('#emailCoins')
const telegramCoins = document.querySelector('#telegramCoins')

document.addEventListener("wheel", function(event){
    if(document.activeElement.type === "number"){
        document.activeElement.blur();
    }
});

const TestB = ({coins, giveName, takeName}) => {
    const [step, setStep] = useState(false)
    const [errors, setErrors] = useState('')
    const [form, setForm] = useState({
        give: '', take: '', address: '', email: '', telegram: ''
    })
    const give = coins.find(item => item.name === giveName)
    const take = coins.find(item => item.name === takeName)

    const ErrorsHandler = () => {
        const amountInputEmpty = giveCoins.value === '' || takeCoins.value === ''
        const emailValidation = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        const emailInputWrong = emailCoins.value === '' || !emailValidation.test(String(emailCoins.value).toLowerCase())
        const telegramInputEmpty = telegramCoins.value === ''

        if(amountInputEmpty) {
            setErrors('Введите количество монет для отправки и получения')
        } else if(emailInputWrong) {
            setErrors('Введите адрес электронной почты')
        } else if(telegramInputEmpty) {
            setErrors('Введите телеграм')
        }
        console.log(errors);
    }

    const calculateTakeAmount = (input, amount) => {
        return input*amount
    }

    const calculateGiveAmount = (output, amount) => {
        return output/amount
    }

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
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
        setStep(true)
    }
    return (
        <div className={s.container}>
            {
                !step && errors === '' ?
                <>
                    <div className={s.header}>
                        <p>Обмен {giveName} на {takeName}</p>
                    </div>
                    <div className={s.body}>
                        <form>
                            <label>
                                Отдаете {give.code}
                                <input 
                                    id='giveCoins' 
                                    type='number' 
                                    name='give'
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Получаете {take.code}
                                <input 
                                    id='takeCoins' 
                                    type='number'
                                    name='take'
                                    onChange={handleOutputChange}
                                />
                            </label>
                            <label>
                                Адрес {takeName}
                                <input 
                                    id='addressCoins'
                                    type='text'
                                    name='address'
                                    onChange={changeHandler}
                                />
                            </label>
                            <label>
                                Электронная почта
                                <input 
                                    id='emailCoins'
                                    type='text'
                                    name='email'
                                    onChange={changeHandler}
                                />
                            </label>
                            <label>
                                Ваш телеграм
                                <input 
                                    id='telegramCoins'
                                    type='text'
                                    name='telegram'
                                    onChange={changeHandler}
                                />
                            </label>
                            <button onClick={() => {
                                ErrorsHandler();
                                handleSubmit();
                            }}>
                                обменять
                            </button>

                        </form>
                    </div>
                </> :
                <TestC
                    give={form.give}
                    take={form.take}
                    address={form.address}
                    email={form.email}
                    telegram={form.telegram}
                    form={form}
                />
            }
        </div>
    )
}

export default TestB