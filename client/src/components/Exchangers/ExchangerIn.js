import s from './style.module.css'
import cn from 'classnames'

const ExchangerIn = () => {
    return (
        <div className={s.exchangeLeftBorder}>
            <div className={cn(s.exchangeLeft, s.exchangeEquels)}>
                <div className={s.bigArrow}>
                    <span className={s.flaticonArrRight}></span>
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
                                <div className={cn(s.customCurrencyDropdown, s.give)} data-type='give'>
                                    <div className={s.selected}>
                                        <span className={cn(s.icon, s.customCurrencyGiveIcon)}>
                                            <img src='/' alt='Bitcoin'></img>
                                        </span>
                                        <span className={s.customCurrencyDropdownTitle}>
                                            <span className={cn(s.name, s.customCurrencyGiveName)}>
                                                Bitcoin
                                            </span>
                                            {/* Props*/}
                                            <span className={cn(s.currency, s.customCurrencyGiveCurrency)}>
                                                BTC
                                            </span>
                                            {/* Props*/}
                                            <span className={cn(s.arrow, s.eas)}>
                                                <span className={s.flaticonArrDown}>
                                                    \/
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className={s.search}>
                                        <input
                                            type='text'
                                            className={s.inp}
                                            placeholder='Какая валюта нужна'
                                        />
                                        <span className={cn(s.icon, s.eas)}></span>
                                        <span className={cn(s.arrow, s.close, s.eas)}>
                                            <span className={s.flaticonArrTop}></span>
                                        </span>
                                    </div>
                                    <ul className={s.list}>
                                        <li className={s.empty}>Ничего не найдено</li>
                                        <li 
                                            className={s.active}
                                            data-id='8'
                                            data-name='Bitcoin'
                                            data-ticker='BTC'
                                            data-currency='BTC'
                                            data-icon='/'
                                            data-type='give'
                                        >
                                            <span className={s.icon}>
                                                <img src='/' alt='Bitcoin'></img>
                                            </span>
                                            <span className={s.customCurrencyDropdownTitle}>
                                                <span className={s.name}>Bitcoin</span>
                                                <span className={s.currency}>BTC</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={s.exchangeDir}>
                                    Получаете
                                    <div 
                                        className={cn(s.exchangeReverseSwitch, s.eas)}
                                        data-tooltip='Обратное направление'
                                    >
                                        <img src='/' alt='Switch'/>
                                    </div>
                                </div>

                                <div className={cn(s.customCurrencyDropdown, s.take, s.opened)} data-type='take'>
                                    <div className={s.selected}>
                                        <span className={cn(s.icon, s.customCurrencyTakeIcon)}>
                                            <img src='/' alt='Bitcoin'></img>
                                        </span>
                                        <span className={s.customCurrencyDropdownTitle}>
                                            <span className={cn(s.name, s.customCurrencyTakeName)}>
                                                Bitcoin
                                            </span>
                                            {/* Props*/}
                                            <span className={cn(s.currency, s.customCurrencyTakeCurrency)}>
                                                BTC
                                            </span>
                                            {/* Props*/}
                                            <span className={cn(s.arrow, s.eas)}>
                                                <span className={s.flaticonArrDown}>
                                                    \/
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <div className={s.search}>
                                        <input
                                            type='text'
                                            className={s.inp}
                                            placeholder='Какая валюта нужна'
                                        />
                                        <span className={cn(s.icon, s.eas)}></span>
                                        <span className={cn(s.arrow, s.close, s.eas)}>
                                            <span className={s.flaticonArrTop}></span>
                                        </span>
                                    </div>
                                    <ul className={s.list}>
                                        <li className={s.empty}>Ничего не найдено</li>
                                        <li 
                                            className={s.active}
                                            data-id='8'
                                            data-name='Bitcoin'
                                            data-ticker='BTC'
                                            data-currency='BTC'
                                            data-icon='/'
                                            data-type='give'
                                        >
                                            <span className={s.icon}>
                                                <img src='/' alt='Bitcoin'></img>
                                            </span>
                                            <span className={s.customCurrencyDropdownTitle}>
                                                <span className={s.name}>Bitcoin</span>
                                                <span className={s.currency}>BTC</span>
                                                <span className={s.rate}>1:1</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={s.exchangeRate}>
                                    <div className={s.rate}>
                                        <div className={s.row}>
                                            Курс
                                            <b className={s.customCurrencyRate}>
                                                1
                                                <span>BTC</span>
                                                ~ 13.914
                                                <span>ETH</span>
                                            </b>
                                        </div>
                                        <div className={s.row}>
                                            Резерв
                                            <b className={s.customCurrencyReserve}>
                                                709.4
                                                <span>ETH</span>
                                            </b>
                                        </div>
                                        <div className={s.row}>
                                            Последний обмен
                                            <b className={s.customCurrencyLastexchange}>
                                                18 мин
                                                <span>назад</span>
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