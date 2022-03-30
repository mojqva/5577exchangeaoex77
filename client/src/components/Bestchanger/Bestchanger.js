import React from 'react'
import s from './style.module.css'

const Bestchanger = () => {
  return (
    <div className={s.bestchange}>
        <h5>Понравился обменник</h5>
        <div className={s.desc}>
            Оставь отзыв на 
            <a href="https://www.bestchange.ru/avanchange-exchanger.html" target="_blank">BestChange</a> 
            и получи <b>5 USDT TRC20</b>
        </div>
        <div className={s.logo}>
            <a href="https://www.bestchange.ru/avanchange-exchanger.html" target="_blank">
                <img src="/uploads/images/static/reviews/bestchange.png" alt="BestChange"/>
            </a>
        </div>
        <div className={s.button}>
            <a href='/' className={s.btn}>
                Как это работает
            </a>
        </div>
    </div>
  )
}

export default Bestchanger