import { Link } from 'react-router-dom'
import React from 'react'
import s from './style.module.css'
import cn from 'classnames'

const NavLinks = () => {
    return (
        <>
        <ul className={s.ul}>
            <div>
                <li className={s.li}>
                    <Link to={'/ru/'}>Главная</Link>
                </li> 
                <li className={cn(s.li, s.toNone)}>
                    <Link to={'/ru/booster'}>Скидки</Link>
                </li> 
                <li className={cn(s.li, s.toNone)}>
                    <Link to={'/ru/blog'}>Блог</Link>
                </li>
                <li className={s.li}>
                    <Link to={'/ru/about'}>О сервисе</Link>
                </li> 
                <li className={s.li}>
                    <Link to={'/ru/pages/help'}>Помощь</Link>
                </li> 
                <li className={cn(s.li, s.toNone)}>
                    <Link to={'/ru/reviews'}>Отзывы</Link>
                </li> 
                <li className={s.li}>
                    <Link to={'/ru/partners'}>Партнерам</Link>
                </li> 
                <li className={s.li}>
                    <Link to={'/ru/pages/crypto-helper'}>Крипто-помощник</Link>
                </li> 
            </div>
            
            <li className={cn(s.li, s.last)}>
                <Link  to={'/ru/support'}>Тех.поддержка</Link>
            </li> 
        </ul>
        </>
    )
}

export default NavLinks