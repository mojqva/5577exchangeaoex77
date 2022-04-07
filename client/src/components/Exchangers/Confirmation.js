import {useContext} from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import cn from 'classnames'
import ratioPrice from '../../utils/ratio'
import { AuthContext } from "../../context/AuthContext"

const Confirmation = ({form, giveItem, takeItem, handleSubmit, clearForm, ownerAddress}) => {
    const hashes = [
        '6234518dfc5c9374d6ec5e3b', 
        '623464181c1740bba9ca83fa',
        '62346ac0c36e14e20063070f'
    ]

    function getRandom(max) {
        return Math.floor(Math.random() * max)
    }

    const auth = useContext(AuthContext)
    const hash = auth.userId ? auth.userId : hashes[getRandom(3)]


    const stepBack = () => {
        clearForm()
        handleSubmit()
    }
    const takeRatio = ratioPrice(giveItem.current_price, takeItem.current_price)

    const owner = ownerAddress
    const giveName = giveItem.name
    const giveImg = giveItem.image
    const giveSymbol = giveItem.symbol
    const takeName = takeItem.name
    const takeImg = takeItem.image
    const takeSymbol = takeItem.symbol

  return (
    <div className={s.exchangeConfirmation}>
        <h3>
            Ожидаем оплаты по заявке <b>№51510</b>
            от
            <b> 04 Апр 2022</b>
        </h3>
        Для завершения необходимо оплатить <b>{form.give} {giveSymbol}</b>
        в платежной системе <b>{giveName}</b>
        <div className={s.warning}>
            <b className={s.textBlue}>Внимание:</b> заявка активна <b>120 минут </b>, после чего она будет отменена
        </div>
        <div className={s.orderInfo}>
            <div className={s.ol}>
                <b>По курсу: </b>
                1 {giveSymbol} : {takeRatio} {takeSymbol}
            </div>
            <div className={s.ol}>
                <b>Отдаете: </b>
                {form.give} {giveSymbol}
            </div>
            <div className={s.ol}>
                <b>&nbsp;</b>
                <i className={s.purse}></i>
            </div>
            <div className={s.ol}>
                <b>Получаете: </b>
                {form.take} {takeSymbol}
            </div>
            <div className={s.ol}>
                <b>&nbsp;</b>
                <i className={s.purse}>{form.address}</i>
            </div>
        </div> 
        <Link 
            to={`/payment/go/${hash}`} 
            state={{
                number: 5555,
                ownerAddress: owner,
                giveAmount: form.give,
                takeAmount: form.take,
                giveName: giveName,
                takeName: takeName,
                giveSymbol: giveSymbol,
                takeSymbol: takeSymbol,
                giveImg: giveImg,
                takeImg: takeImg,
                userAddress: form.address,
            }}
            className={cn(s.btn, s.green)} 
            onClick={() => auth.pay()}
        >
            Оплатить
        </Link>
        <a className={cn(s.btn, s.ghost)} onClick={stepBack}>Отменить</a>
    </div>
  )
}

export default Confirmation