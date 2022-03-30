import React from 'react'
import s from './style.module.css'

const Gamity = () => {
  return (
    <div className={s.gamityMain}>
        <div className={s.fifty}>
            <div className={s.in}>
                <div className={s.image}>
                    <a className={s.eas}>
                        <img src='' alt ='Party'></img>
                    </a>
                </div>
                <h3>
                    Розыгрыш из <span>метавселенной </span>
                </h3>
                <div className={s.desc}>
                    Криптовалюты <span>The Sandbox, Decentraland, Gala</span> ждут вас
                </div>
                <div className={s.button}>
                    <a>Розыгрыш</a>
                </div>
            </div>   
        </div>
        <div className={s.fifty}>
            <div className={s.in}>
                <div className={s.image}>
                    <a className={s.eas}>
                        <img src='' alt ='Party'></img>
                    </a>
                </div>
                <h3>
                    Розыгрыш <span>6 500 руб</span>
                </h3>
                <div className={s.desc}>
                    Регулярный розыгрыш, с автоматическим ростом фонда, каждый час!
                </div>
                <div className={s.button}>
                    <a>Розыгрыш</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gamity