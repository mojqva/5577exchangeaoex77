import s from './style.module.css'
import cn from 'classnames'
import { useState, useContext } from 'react';
import ModalLogin from '../../Modals/ModalLogin'
import { AuthContext } from '../../context/AuthContext';
import ModalRegister from '../../Modals/ModalRegister';

const Header = ({isAuth}) => {
    const auth = useContext(AuthContext)
    const logOut = () => {
        auth.logout()
    }
    const [loginModalActive, setLoginModalActive] = useState(false)
    const [registerModalActive, setRegisterModalActive] = useState(false)
    return (
        <>
        <div className={s.headerTop}>
            <div className={s.inner}>
                <div className={s.left}>
                    <a className={cn(s.eas, s.lang)}>RU</a>
                    <a className={cn(s.eas, s.headerTelegram)}>
                        <span className={cn(s.flaticonChatMessage, s.ico2)}></span>
                        Telegram Бот v1.3
                    </a>
                    <a className={cn(s.eas, s.headerEmail)}>
                        <span className={cn(s.flaticonEmail, s.ico3)}></span>
                        info@avanchange.com
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
                            <a className={cn(s.eas, s.url)} href="/account">Мой аккаунт</a>
                            <a className={s.logout} href="/">
                                <span className={s.flaticonLogout} onClick={logOut}> O</span>
                            </a>
                        </> :
                        <>
                            <a className={s.eas} onClick={() => setLoginModalActive(true)}>Вход</a>
                            /
                            <a className={s.eas} onClick={() => setRegisterModalActive(true)}>Регистрация</a>
                        </>

                    }
                </div>
            </div>
        </div>
        <ModalLogin 
            loginActive={loginModalActive}
            setLoginActive={setLoginModalActive}
		/>
        <ModalRegister
            registerActive={registerModalActive}
            setRegisterActive={setRegisterModalActive}
        />
        </>
    );
};

export default Header;