import { Link } from 'react-router-dom'
import s from './style.module.css'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const Navbar = () => {
  return (
    <div className={s.NavBar}>
        <div className={s.logo}>
            <Link to={'/ru/'}>
                <img src='' alt='AvanChange'/>
            </Link>
        </div>
        <Navigation/>
        <MobileNavigation/>
    </div>
  )
}

export default Navbar
