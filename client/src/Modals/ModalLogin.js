import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames'
import s from './modal.module.css'
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

const ModalLogin = ({loginActive, setLoginActive}) => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: "", password: ""
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            auth.login(data.token, data.userId)
            if(error == null) {
                setLoginActive(false)
            }
        } catch (e) {}
    }

    return (
        <div className={loginActive ? cn(s.popup, s.active): s.popup}>
            <div className={s.in}>
                <div className={s.popupHeader}>
                    <h3>
                        <span className={cn(s.flaticonSignin, s.icon)}>
                            Вход в AvanChange
                        </span>
                    </h3>
                    <div className={cn(s.close, s.eas)} onClick={() => setLoginActive(false)}>
                        <span className={s.flaticonClose}>X</span>
                    </div>
                </div>
                <div className={s.popupContainer}>
                    <form name='form-signin'>
                        <div className={s.line}>
                            <input 
                                type='text' 
                                className={s.inp} 
                                name='email' 
                                placeholder='Логин/Email'
                                onChange={changeHandler}
                            />
                        </div>

                        <div className={s.line}>
                            <input 
                                type='password' 
                                className={s.inp} 
                                name='password' 
                                placeholder='Пароль'
                                onChange={changeHandler}
                            />
                        </div>

                        <div className={cn(s.line, s.lineButtons)}>
                            <div className={s.l}>
                                <a href='#'>Забыли пароль?</a>
                                <br/>
                                <a href='#'><b>Создать аккаунт</b></a>
                            </div>
                            <div className={s.r}>
                                <button 
                                    className={s.btn}
                                    onClick={loginHandler}
                                    disabled={loading}
                                >
                                    Войти
                                </button> {'now is a register & login button for test'}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;