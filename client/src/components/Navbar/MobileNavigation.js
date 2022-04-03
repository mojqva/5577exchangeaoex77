import React from 'react'
import NavLinks from './NavLinks'
import s from './style.module.css'
import {VscMenu , VscClose} from 'react-icons/vsc'
import {Link} from 'react-router-dom'

const MobileNavigation = ({open, toggleNav}) => {

    // const hamburgerIcon = <VscMenu 
    //                             className={s.Hamburger} 
    //                             size='40px' 
    //                             color='white'
    //                             onClick={() => setOpen(!open)}
    //                         />
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
                            <Link to={'/ru/'}>Риски</Link>
                        </li> 
                        <li>
                            <Link to={'/ru/'}>О нас</Link>
                        </li> 
                        <li className={s.last}>
                            <Link  to={'/ru/'}>Поддержка</Link>
                        </li> 
                    </ul>
                </nav>
    )
}

export default MobileNavigation