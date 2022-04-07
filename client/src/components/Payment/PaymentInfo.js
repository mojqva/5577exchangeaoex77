import { useEffect } from "react"
import s from './style.module.css'
const axios = require('axios')


const PaymentInfo = ({giveName, giveSymbol, giveImg, takeName, takeSymbol, takeImg, userAddress, giveAmount, takeAmount, number, ownerAddress}) => {
    const date = new Date(Date.now()).toLocaleString()
    // useEffect(() => {
    //     const sendInfo = async () => {
    //         await axios.post('/api/payment/sendInfo', {
    //             userAmount: `${giveName} ${give}`,
    //             youReceive: `${giveName}`,
    //             yourWallet: `${cryptoAddress}`,
    //             userEmail: `${email}`,
    //             date: `${date}`
    //         })
    //     }
    //     sendInfo()
    // }, [])
    return (
        <div className={s.inner}>
            <h1>Обмен №{number} от 04 Апр 2022, 20:04</h1>
            <div className={s.paymentGive}>
                <h3>
                    <img src={giveImg}/>
                    Отдаете {giveName}
                </h3>
                <div className={s.line}>
                    <span>Сумма</span>
                    <b>{giveAmount} {giveSymbol}</b>
                </div>
                <div className={s.line}>
                    <span>С кошелька</span>
                    <b> - </b>
                </div>
            </div>
            <div className={s.paymentTake}>
                <h3>
                    <img src={takeImg}/>
                    Получаете {takeName}
                </h3>
                <div className={s.line}>
                    <span>Сумма</span>
                    <b>{takeAmount} {takeSymbol}</b>
                </div>
                <div className={s.line}>
                    <span>На кошелек</span>
                    <b>{userAddress}</b>
                </div>
            </div>
            <div className={s.paymentTimer}>
                <div className={s.status}>
                    Статус оплаты: 
                    <b className={s.textBlue}>ожидает оплаты</b>
                </div>
                <div className={s.desc}>
                    Отправьте ровно <b>{giveAmount} {giveSymbol}</b>
                    на адрес
                    <b> {ownerAddress.address}</b>
                </div>
                <div className={s.qrcode}>
                    <img src='/' alt="QR"/>
                </div>
                <div className={s.timer}>01:19:12</div>
                <div className={s.timerInfo}>Осталось времени</div>
                <div className={s.paymentType}>
                    <h5>Тип обмена: <b>Лучший курс</b></h5>
                    <div className={s.desc}>
                        Курс может корректироваться при высоких колебаниях 
                        <a href="https://coinmarketcap.com/" target="_blank" rel="nofollow"> рынка</a>
                    </div>
                </div>
                <div className={s.mempoolFees}>
                    <div className={s.feesTitle}>
                        Информация о комиссии сети на 
                        <b> 04 Апр 2022, 21:01</b>
                    </div>
                    <div className={s.clr}></div>
                    <div className={s.fee}>
                        <h5>High priority</h5>
                        <span>39 gwei</span>
                    </div>
                    <div className={s.fee}>
                        <h5>Medium priority</h5>
                        <span>36 gwei</span>
                    </div>
                    <div className={s.fee}>
                        <h5>Low priority</h5>
                        <span>27 gwei</span>
                    </div>
                </div>
            </div>
            <div className={s.info2}>
                <h3>Важно</h3>
                <ul>
                    <li>Не оплачивайте заявку после истечения таймера, так как кошелек будет удален!</li>
                    <li>Отправьте точную сумму <u><strong>без учета комиссии</strong></u>, иначе платеж может зависнуть на длительный срок;</li>
                    <li>Указывайте комиссию с  <u><strong>быстрым приоритетом</strong></u>, иначе платеж будет идти 2-4 часа и <b>сервис отклонит его</b></li>
                    <li>Страница автоматически обновляется после изменения статуса заявки. Статус заявки изменится на <b className={s.textBlue}>«Оплачено»</b></li>
                    <li>Ознакомьтесь с <a href="/ru/" target="_blank">пользовательским соглашением</a>. Оформляя и оплачивая заявку на обмен, Вы подтверждаете согласие с условиями использования нашего сервиса.</li>
                </ul>
            </div>
            
            {/* <div className={s.paymentTake}>
                <h3>
                    <img src={takeImg}/>
                    Получаете {takeName}
                </h3>
                <div className={s.line}>
                    <span>Сумма</span>
                    <b>{takeAmount} {takeSymbol}</b>
                </div>
                <div className={s.line}>
                    <span>На кошелек</span>
                    <b>{userAddress}</b>
                </div>
            </div>
            <div className={s.paymentTimer}>
                <div className={s.status}>
                    Статус оплаты: 
                    <b className={s.textBlue}>ожидает оплаты</b>
                </div>
                <div className={s.desc}>
                    Отправьте ровно <b>{giveAmount} {giveSymbol}</b>
                    на адрес
                    <b> {ownerAddress}</b>
                </div>
                <div className={s.qrcode}>
                    <img src='/' alt="QR"/>
                </div>
                <div className={s.timer}>01:19:12</div>
                <div className={s.timerInfo}>Осталось времени</div>
                <div className={s.paymentType}>
                    <h5>Тип обмена: <b>Лучший курс</b></h5>
                    <div className={s.desc}>
                        Курс может корректироваться при высоких колебаниях 
                        <a href="https://coinmarketcap.com/" target="_blank" rel="nofollow"> рынка</a>
                    </div>
                </div>
                <div className={s.mempoolFees}>
                    <div className={s.feesTitle}>
                        Информация о комиссии сети на 
                        <b> 04 Апр 2022, 21:01</b>
                    </div>
                    <div className={s.fee}>
                        <h5>High priority</h5>
                        <span>39 gwei</span>
                    </div>
                    <div className={s.fee}>
                        <h5>Medium priority</h5>
                        <span>36 gwei</span>
                    </div>
                    <div className={s.fee}>
                        <h5>Low priority</h5>
                        <span>27 gwei</span>
                    </div>
                </div>
            </div>
            <div className={s.info2}>
                <h3>Важно</h3>
                <ul>
                    <li>Не оплачивайте заявку после истечения таймера, так как кошелек будет удален!</li>
                    <li>Отправьте точную сумму <u><strong>без учета комиссии</strong></u>, иначе платеж может зависнуть на длительный срок;</li>
                    <li>Указывайте комиссию с  <u><strong>быстрым приоритетом</strong></u>, иначе платеж будет идти 2-4 часа и <b>сервис отклонит его</b></li>
                    <li>Страница автоматически обновляется после изменения статуса заявки. Статус заявки изменится на <b className={s.textBlue}>«Оплачено»</b></li>
                    <li>Ознакомьтесь с <a href="/ru/" target="_blank">пользовательским соглашением</a>. Оформляя и оплачивая заявку на обмен, Вы подтверждаете согласие с условиями использования нашего сервиса.</li>
                </ul>
            </div> */}
        </div>
    )
}

export default PaymentInfo