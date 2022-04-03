import React from 'react'
import NavLinks from './NavLinks'
import s from './style.module.css'

const Navigation = ({toggleNav}) => {
    return (
        <>
        <div className={s.navButton} onClick={toggleNav}>
            <p>MENU</p>
            <span className={s.eas}></span>
            <span className={s.eas}></span>
            <span className={s.eas}></span>
        </div>
        <div className={s.nav}>
            <NavLinks/>
        </div>
        </>
    )
}

export default Navigation