import { useState } from 'react'
import s from './style.module.css'
import TestC from './TestC'

const AMOUNT = 2

const TestB = ({coins, giveName, takeName}) => {
    const [step, setStep] = useState(false)
    const [form, setForm] = useState({
        give: '', take: '', address: '', email: '', telegram: ''
    })
    const give = coins.find(item => item.name === giveName)
    const take = coins.find(item => item.name === takeName)

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
                !step ?
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
                                    type='text' 
                                    name='give'
                                    onChange={handleInputChange}
                                />
                            </label>
                            <label>
                                Получаете {take.code}
                                <input 
                                    id='takeCoins' 
                                    type='text'
                                    name='take'
                                    onChange={handleOutputChange}
                                />
                            </label>
                            <label>
                                Адрес {takeName}
                                <input 
                                    type='text'
                                    name='address'
                                    onChange={changeHandler}
                                />
                            </label>
                            <label>
                                Электронная почта
                                <input 
                                    type='text'
                                    name='email'
                                    onChange={changeHandler}
                                />
                            </label>
                            <label>
                                Ваш телеграм
                                <input 
                                    type='text'
                                    name='telegram'
                                    onChange={changeHandler}
                                />
                            </label>
                            <button onClick={handleSubmit}>
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