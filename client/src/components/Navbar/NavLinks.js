import { Link , useLocation} from 'react-router-dom'
import React from 'react'
import s from './style.module.css'
import cn from 'classnames'

const NavLinks = () => {
    const location = useLocation()
    return (
        <>
        <ul className={s.ul}>
            <div className={s.common}>
                <li className={s.li}>
                    <Link to={'/ru/'} className={location.pathname === '/ru/' ? s.active : null}>Главная</Link>
                </li> 
                <li className={cn(s.li, s.toNone)}>
                    <Link to={'/ru/booster'} className={location.pathname === '/ru/booster' ? s.active : null}>Скидки</Link>
                </li> 
                <li className={cn(s.li, s.toNone)}>
                    <Link to={'/ru/blog'} className={location.pathname === '/ru/blog' ? s.active : null}>Блог</Link>
                </li>
                <li className={s.li}>
                    <Link to={'/ru/about'} className={location.pathname === '/ru/about' ? s.active : null}>О сервисе</Link>
                </li> 
                <li className={s.li}>
                    <Link to={'/ru/pages/help'} className={location.pathname === '/ru/pages/help' ? s.active : null}>Помощь</Link>
                </li> 
                <li className={cn(s.li, s.toNone)}>
                    <Link to={'/ru/reviews'} className={location.pathname === '/ru/reviews' ? s.active : null}>Отзывы</Link>
                </li> 
                <li className={s.li}>
                    <Link to={'/ru/partners'} className={location.pathname === '/ru/partners' ? s.active : null}>Партнерам</Link>
                </li> 
                <li className={s.li}>
                    <Link to={'/ru/pages/crypto-helper'} className={location.pathname === '/ru/pages/crypto-helper' ? s.active : null}>Крипто-помощник</Link>
                </li> 
            </div>
            
            <li className={cn(s.li, s.last)}>
                <Link  to={'/ru/support'} className={location.pathname === '/ru/support' ? s.active : null}>Тех.поддержка</Link>
            </li> 
        </ul>
        </>
    )
}

export default NavLinks