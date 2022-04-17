import {useState, useEffect} from 'react'
import s from './style.module.css'
import cn from 'classnames'
import Dropdown from '../Dropdown/Dropdown'
import {ReactComponent as Switch} from '../../img/switch.svg'
import ratioPrice from '../../utils/ratio'

const reserves = {
    'btc': 21.35,
    'eth': 615.81,
    'ltc': 4001.29,
    'xlm': 21.35,
    'xtz': 11050.18,
    'zec': 5665.62,
    'trx': 242515.16,
    'xmr': 615.81,
    'doge': 187308.55,
    'dash': 897.58,
    'usdt': 554035.4,
}


const ExchangerIn = ({ filteredApi, walletsTemplate, selected, selectCurrency, setSelected}) => {
    const reserve = Object.keys(reserves).find(item => selected.take.toLowerCase() === item)

    let giveItem = filteredApi? filteredApi.find(item => item.symbol.toLowerCase() === selected.give) : null

    let takeItem = filteredApi ? filteredApi.find(item => item.symbol.toLowerCase() === selected.take) : null

    const swapItems = () => {
        giveItem = [takeItem, takeItem = giveItem][0]
        setSelected({
            give: giveItem.symbol.toLowerCase(),
            take: takeItem.symbol.toLowerCase()
        })
    }

    const ratio = ratioPrice(giveItem.current_price, takeItem.current_price)
    const reverseRatio = ratioPrice(takeItem.current_price, giveItem.current_price)

    const priceZero = ratio <= 0.0001

    return (
        <div className={s.exchangeLeftBorder}>
            <div className={cn(s.exchangeLeft, s.exchangeEquels)}>
                <div className={s.bigArrow}>
                    <span className={s.flaticonArrRight}>&#8594;</span>
                </div>
                <div className={s.title}>
                    <span className={cn(s.flaticonMoney1, s.icon, s.i1)}>
                        <b>Направление</b> обмена
                    </span>
                </div>
                <div className={s.in}>
                    <div className={s.exchangeRateChoice}>
                        <div 
                            className={s.t}
                            data-tooltip="<b class='tooltip-rate-title'><span class='flaticon-star-1 tooltip-s10'></span> Лучший курс</b><br>Система автоматически пересчитает Вашу заявку при резких колебаниях курса. Обращаем Ваше внимание, что сумма к получению изменяется как в меньшую, так и в большую для Вас сторону.<br><br><b class='tooltip-rate-title'><span class='flaticon-lock-1 tooltip-s10'></span> Фиксированный курс</b><br>Система фиксирует курс при создании заявки на все время отведенное для вашей заявки. В среднем это 60 минут." data-hasqtip="142" aria-describedby="qtip-142"
                        >
                            Выберите тип курса
                            <span className={cn(s.flaticonQuestion, s.help)}>

                            </span>
                        </div>
                        <div className={s.r}>
                            <div className={cn(s.option, s.active)} data-retype='1'>Фикс</div>
                            <div className={s.option} data-retype=''>Лучший</div>
                        </div>
                    </div>
                    <div className={s.exchangeDir}>Отдаете</div>
                    <Dropdown
                        selected={selected}
                        selectCurrency={selectCurrency}
                        giveItem={giveItem}
                        takeItem={takeItem}
                        give={true}
                        filteredApi={filteredApi}
                        walletsTemplate={walletsTemplate}
                    />
                    <div className={s.exchangeDir}>
                        Получаете
                        <div 
                            className={cn(s.exchangeReverseSwitch, s.eas)}
                            data-tooltip='Обратное направление'
                            onClick={swapItems}
                        >
                            <Switch className={s.reverseSvg}/>
                        </div>
                    </div>
                    <Dropdown
                        selected={selected}
                        selectCurrency={selectCurrency}
                        giveItem={giveItem}
                        takeItem={takeItem}
                        give={false}
                        filteredApi={filteredApi}
                        walletsTemplate={walletsTemplate}
                    />
                    <div className={s.exchangeRate}>
                        <div className={s.rate}>
                            <div className={s.row}>
                                Курс
                                {
                                    priceZero ?
                                    <b className={s.customCurrencyRate}>
                                        {reverseRatio}
                                        <span>{giveItem.symbol.toUpperCase()}</span>
                                        ~ 1
                                        <span>{takeItem.symbol.toUpperCase()}</span>
                                    </b>
                                    : <b className={s.customCurrencyRate}>
                                            1
                                            <span>{giveItem.symbol.toUpperCase()}</span>
                                            ~ {ratio}
                                            <span>{takeItem.symbol.toUpperCase()}</span>
                                        </b>
                                }
                                
                            </div>
                            <div className={s.row}>
                                Резерв
                                <b className={s.customCurrencyReserve}>
                                    {reserves[reserve]}
                                    <span>{selected.take.toUpperCase()}</span>
                                </b>
                            </div>
                            <div className={s.row}>
                                Последний обмен
                                <b className={s.customCurrencyLastexchange}>
                                    18 мин
                                    <span> назад</span>
                                </b>
                            </div>
                        </div>
                        <div className={s.exchangeTerms}>
                            <h5>Условия для направления</h5>
                            <ul>
                                <li className={s.termsRateType}>
                                    Обмен будет инициирован после получения 
                                    <b>2 подтверждений</b>
                                    транзакции
                                </li>
                                <li className={s.termsRateType}>
                                    Комиссия сервиса 
                                    <b>0.4</b>
                                    %. Обновление биржевого курса на основе
                                    <a href='https://coinmarketcap.com/' target='_blank'>CoinMarketCap</a>
                                </li>
                                <li className={s.termsRateType}>
                                    Курс корректируется каждые  
                                    <b>5 минут</b>
                                    , подробнее в разделе
                                    <a href='/' target='_blank'>помощь</a>
                                </li>
                                <li className={s.termsRateType}>
                                    Курс в заявке может быть изменен на актуальный, согласно пункту 5.5  
                                    <a href="/">текущих правил</a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div> 
                </div>
            </div>
    )
}

export default ExchangerIn