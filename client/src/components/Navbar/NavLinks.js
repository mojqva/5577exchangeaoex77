import { Link } from 'react-router-dom'
import React from 'react'
import s from './style.module.css'
import cn from 'classnames'

const NavLinks = () => {
    return (
        <>
        <ul className={s.ul}>
            <li className={s.li}>
                <Link to={'/ru/'}>Главная</Link>
            </li> 
            <li className={cn(s.li, s.toNone)}>
                <Link to={'/ru/'}>Скидки</Link>
            </li> 
            <li className={cn(s.li, s.toNone)}>
                <Link to={'/ru/'}>Блог</Link>
            </li>
            <li className={s.li}>
                <Link to={'/ru/'}>О сервисе</Link>
            </li> 
            <li className={s.li}>
                <Link to={'/ru/'}>Помощь</Link>
            </li> 
            <li className={s.li}>
                <Link to={'/ru/'}>Отзывы</Link>
            </li> 
            <li className={s.li}>
                <Link to={'/ru/'}>Партнерам</Link>
            </li> 
            <li className={s.li}>
                <Link to={'/ru/'}>Крипто-помощник</Link>
            </li> 
            <li className={cn(s.li, s.last)}>
                <Link  to={'/ru/'}>Тех.поддержка</Link>
            </li> 
        </ul>
        </>
    )
}

export default NavLinks