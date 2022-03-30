import { Link } from 'react-router-dom'
import React from 'react'
import s from './style.module.css'

const NavLinks = () => {
    return (
        <>
        <ul>
            <li>
                <Link to={'/ru/'}>Главная</Link>
            </li> 
            <li>
                <Link to={'/ru/'}>Риски</Link>
            </li> 
            <li>
                <Link to={'/ru/'}>О нас</Link>
            </li>   
        </ul>
        <Link className={s.last} to={'/ru/'}>Поддержка</Link>
        </>
    )
}

export default NavLinks