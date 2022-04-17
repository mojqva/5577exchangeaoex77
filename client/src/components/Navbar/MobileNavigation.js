import React from 'react'
import NavLinks from './NavLinks'
import s from './style.module.css'
import {VscMenu , VscClose} from 'react-icons/vsc'
import {Link} from 'react-router-dom'

const MobileNavigation = ({open, toggleNav}) => {

    const closeIcon = <VscClose 
                            className={s.Hamburger} 
                            size='18px' 
                            color='white'
                        />                     
    return (
        open && <nav className={s.mobNav}>
                    <div className={s.navButtonClose} onClick={toggleNav}>
                        <span>{closeIcon}</span>
                        ЗАКРЫТЬ
                    </div>
                    <ul>
                        <li>
                            <Link to={'/ru/'}>Главная</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/booster'}>Скидки</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/blog'}>Блог</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/about'}>О сервисе</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/pages/help'}>Помощь</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/reviews'}>Отзывы</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/partners'}>Партнерам</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/pages/crypto-helper'}>Крипто-помощник</Link>
                        </li> 
                        <li className={s.last}>
                            <Link  to={'/ru/support'}>Тех.поддержка</Link>
                        </li> 
                    </ul>
                </nav>
    )
}

export default MobileNavigation