import s from './style.module.css'
import cn from 'classnames'
import {Link} from 'react-router-dom'
import {ReactComponent as LogoBlue} from '../../img/logo-blue.svg'

const Footer = () => {
    return (
        <>
        <div className={s.footer}>
            <div className={s.inner}>
                <div className={cn(s.row, s.row1)}>
                    <div className={s.logo}>
                        <Link to={'/ru/'}>
                            <LogoBlue/>
                        </Link>
                    </div>
                    <div className={s.copyright}>
                    <p>Удобный онлайн обменник валют AvanChange. Обменяйте Bitcoin, Ethereum, Monero, TrueUSD и другие криптовалюты, всего в пару кликов. Также принимаем электронные валюты и банковские карты.</p>                   
                    © 2018-2022 AvanChange
                    </div>
                </div>
                <div className={cn(s.row, s.row2)}>
                    <div className={s.title}>
                        Основное
                    </div>
                    <ul>
                        <li>
                            <Link to={'/ru/'}>Обмен Криптовалют</Link>
                        </li>
                        <li>
                            <Link to={'/ru/about'}>О сервисе</Link>
                        </li>
                        <li>
                            <Link to={'/ru/reviews'}>Отзывы</Link>
                        </li>
                        <li>
                            <Link to={'/ru/reserves'}>Резервы валют</Link>
                        </li>
                        <li>
                            <Link to={'/ru/crypto-helper'}>Все направления</Link>
                        </li>
                        <li>
                            <Link to={'/ru/support'}>Крипто-помощник</Link>
                        </li>
                    </ul>
                </div>
                <div className={cn(s.row, s.row3)}>
                    <div className={s.title}>
                        Полезное
                    </div>
                    <ul>
                        <li>
                            <Link to={'/ru/blog'}>Блог</Link>
                        </li>
                        <li>
                            <Link to={'/ru/booster'}>Скидки</Link>
                        </li>
                        <li>
                            <Link to={'/ru/partners'}>Регулярный розыгрыш</Link>
                        </li>
                        <li>
                            <a href="https://api.avanchange.com/" target="_blank">Документация API</a>
                        </li>
                    </ul>
                </div>
                <div className={s.row}>
                    <div className={s.title}>
                        Документация
                    </div>
                    <ul>
                        <li>
                            <Link to={'/ru/blog'}>Помощь</Link>
                        </li>
                        <li>
                            <Link to={'/ru/booster'}>Правила сервиса</Link>
                        </li>
                        <li>
                            <a href="https://api.avanchange.com/" target="_blank">Источник происхождения средств</a>
                        </li>
                    </ul>

                    <div className={cn(s.title, s.titleSocial)}>
                        Мы в соц сетях
                    </div>
                    <ul className={s.social}>
                        <li>
                            <a href="https://t.me/avanchange_bot" rel="nofollow" target="_blank" class="eas">
                                <b>Telegram (Бот)</b>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/avanchange" rel="nofollow" target="_blank" class="eas">
                                <b>Telegram (Канал)</b>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/avanchange/" rel="nofollow" target="_blank" class="eas">
                                <b>Instagram</b>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;