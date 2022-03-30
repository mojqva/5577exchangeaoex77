import React from 'react'
import NavLinks from './NavLinks'
import s from './style.module.css'
import {VscMenu , VscClose} from 'react-icons/vsc'
import { useState } from 'react'

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)

    const hamburgerIcon = <VscMenu 
                                className={s.Hamburger} 
                                size='40px' 
                                color='white'
                                onClick={() => setOpen(!open)}
                            />
    const closeIcon = <VscClose 
                            className={s.Hamburger} 
                            size='40px' 
                            color='white'
                            onClick={() => setOpen(!open)}
                        />                     
    return (
        <nav className={s.MobileNavigation}>

            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks/>}
        </nav>
    )
}

export default MobileNavigation