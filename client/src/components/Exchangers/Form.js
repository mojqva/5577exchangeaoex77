import React from 'react'
import s from './style.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom'

const Form = ({giveItem, takeItem, form, messages, changeHandler, handleSubmit, handleInputChange, handleOutputChange}) => {
    const emailValidation = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    const errorsHandler = () => {
        const amountInputEmpty = form.give.length === 0 || form.take.length === 0
        const emailInputWrong = form.email.length === 0 || !emailValidation.test(String(form.email).toLowerCase())
        const userAddressWrong = form.address.length < 26 || form.address.length > 35
        
        if(amountInputEmpty) {
            return 'inputs'
        }
        if(emailInputWrong) {
            return 'email'
        }
        if(userAddressWrong) {
            return 'address'
        }
        return null
    }

    const toContin = e => {
        e.preventDefault()
        const handlerResult = errorsHandler()
        if(handlerResult === null) {
            handleSubmit()
        } else {
            console.log(messages[handlerResult]);
        }
    }
    
    return (
        <form className={s.formExchange}>
            <div className={s.lines}>
                <div className={s.line}>
                    <div className={s.lineInput}>
                        <input type='number' id='giveCoins' name='give' onChange={handleInputChange}/>
                        <label htmlFor='giveCoins'>Отдаете <span>{giveItem.symbol.toUpperCase()}</span></label>
                    </div>
                    <div className={s.i}>
                        Min: <span>0.3</span> Max: <span>6.5</span>
                        <br/>
                        С учетом скидки партнера: 
                        <span>2</span>%
                    </div>
                </div>
                <div className={s.line}>
                    <div className={s.lineInput}>
                        <input type='number' id='takeCoins' name='take' onChange={handleOutputChange}/>
                        <label htmlFor='takeCoins'>Получаете <span>{takeItem.symbol.toUpperCase()}</span></label>
                    </div>
                    <div className={s.i}>
                        Резерв: <span>706.52</span>
                    </div>
                </div>
                <div className={cn(s.line, s.lineFull)}>
                    <div className={s.lineInput}>
                        <input type='text' id='addressCoins' name='address' onChange={changeHandler}/>
                        <label htmlFor='addressCoins'>
                            <i>Адрес </i>
                            <b>{takeItem.name}</b>
                        </label>
                    </div>
                    <div className={s.i}>
                        Например
                        <span>0x16E60a51AAeFFEbEB7b69E2...</span>
                    </div>
                </div>
                <div className={cn(s.line, s.lineEmail)}>
                    <div className={s.lineInput}>
                        <input type='text' id='emailCoins' name='email' onChange={changeHandler}/>
                        <label htmlFor='emailCoins'>Электронная почта</label>
                    </div>
                    <div className={s.i}>Например john.doe@gmail.com</div>
                </div>
                <div className={cn(s.line, s.lineContacts)}>
                    <div className={s.lineInput}>
                        <input type='text' id='telegramCoins' name='telegram' onChange={changeHandler}/>
                        <label htmlFor='telegramCoins'>Ваш Telegram</label>
                    </div>
                    <div className={s.i}>Например @selld2 (необязательно)</div>
                </div>
            </div>
            <div className={s.lineBreak}></div>
            <div className={s.exchangeRightF}>
                <div className={s.terms}>
                    Нажимая кнопку <b>"Обменять"</b> вы подтверждаете свое согласие с 
                    <a href="/" target="_blank" rel="noreferrer">Правилами предоставления услуг</a>
                </div>
                <div className={s.button}>
                    <button className={cn(s.btn, s.green)} onClick={toContin} type='button'>
                        Обменять
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form