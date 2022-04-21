import s from './style.module.css'
import cn from 'classnames'
import { useState, useContext } from 'react';
import ModalLogin from '../../Modals/ModalLogin'
import { AuthContext } from '../../context/AuthContext';
import ModalRegister from '../../Modals/ModalRegister';
import {FaTelegramPlane} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
import {FiUser} from 'react-icons/fi'
// import {FaTelegramPlane} from 'react-icons/fa'
import Navbar from '../Navbar/Navbar';

const Header = ({isAuth}) => {
    const auth = useContext(AuthContext)
    const logOut = () => {
        auth.logout()
    }
    const [loginModalActive, setLoginModalActive] = useState(false)
    const [registerModalActive, setRegisterModalActive] = useState(false)

    const switchModals = () => {
        setRegisterModalActive(prev => !prev)
        setLoginModalActive(prev => !prev)
    }
    return (
        <div className={s.wrapperHeader}>
            <div className={s.headerTop}>
                <div className={s.inner}>
                    <div className={s.left}>
                        <a className={cn(s.eas, s.lang)}>RU</a>
                        <a className={cn(s.eas, s.headerTelegram)}>
                            <FaTelegramPlane color='#0facf3' size={12}/>
                            <span> Telegram Бот v1.3</span>
                        </a>
                        <a className={cn(s.eas, s.headerEmail)}>
                            <FiMail size={12} color='#3dd94b'/>
                            <span> info@avanchange.com</span>
                        </a>
                        <span className={s.worktime}>
                            <span>
                                Сервис работает <b>круглосуточно</b>
                            </span>
                        </span>
                    </div>
                    <div className={s.right}>
                        <span className={cn(s.flaticonUser, s.ico4)}></span>
                        {
                            isAuth ?
                            <>
                                <FiUser size={14} color='#ff7d00'/>
                                <a className={cn(s.eas, s.url)} href="/account">Мой аккаунт</a>
                                <a className={s.logout} href="/">
                                    <span className={s.flaticonLogout} onClick={logOut}> O</span>
                                </a>
                            </> :
                            <>
                                <FiUser size={14} color='#ff7d00'/>
                                <a className={s.eas} onClick={() => setLoginModalActive(true)}> Вход </a>
                                /
                                <a className={s.eas} onClick={() => setRegisterModalActive(true)}> Регистрация</a>
                            </>

                        }
                    </div>
                </div>
            </div>
            <Navbar/>
            <ModalLogin 
                loginActive={loginModalActive}
                setLoginActive={setLoginModalActive}
                switchModals={switchModals}
            />
            <ModalRegister
                registerActive={registerModalActive}
                setRegisterActive={setRegisterModalActive}
                switchModals={switchModals}
            />
        </div>
    );
};

export default Header;