import React, { useContext, useEffect, useState } from 'react';
import cn from 'classnames'
import s from './register.module.css'
import { useHttp } from '../hooks/http.hook';
import { useMessage } from '../hooks/message.hook';
import { AuthContext } from '../context/AuthContext';

const ModalRegister = ({registerActive, setRegisterActive, switchModals}) => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [rePassword, setRePassword] = useState("")
    const [formErrors, setFormErrors] = useState("")
    const [form, setForm] = useState({
        username: "", email: "", password: ""
    })


    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const rePasswordHandler = event => {
        setRePassword(event.target.value)
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form, formErrors: formErrors})
            const loginAfterRegister = await request('/api/auth/login', 'POST', {...form})
            auth.login(loginAfterRegister.token, loginAfterRegister.userId)
            if(error == null) {
                setRegisterActive(false)
            }
        } catch (e) {}
    }

    const errorsHandler = () => {
        const passwordWrong = form.password.length === 0
        const emailWrong = form.email.length === 0
        const usernameWrong = form.username.length === 0
        const repasswordWrong = rePassword !== form.password || rePassword.length === 0

        if(repasswordWrong) {
            setFormErrors("Repeat password") 
        } else if (usernameWrong) {
            setFormErrors("Input username")
        } else if (emailWrong) {
            setFormErrors("Input email")
        } else if (passwordWrong) {
            setFormErrors("Input password")
        } else {
            setFormErrors("")
        }
    }

    const toContin = () => {
        if(formErrors.length !== 0) {
            console.log(formErrors);
        } else {
            registerHandler()
        }
    }

    useEffect(() => {
        errorsHandler()
    }, [form, rePassword])

    return (
        <div className={registerActive ? cn(s.popup, s.active): s.popup}>
            <div className={s.in}>
                <div className={s.popupHeader}>
                    <h3>
                        Регистрация
                    </h3>
                    <div className={cn(s.close, s.eas)} onClick={() => setRegisterActive(false)}>
                        <span className={s.flaticonClose}>X</span>
                    </div>
                </div>
                <div className={s.popupContainer}>
                    <form name='form-signup'>
                        <div className={s.line}>
                            <input 
                                type='text' 
                                className={s.inp} 
                                name='username' 
                                placeholder='Логин'
                                onChange={changeHandler}
                            />
                        </div>
                        <div className={s.line}>
                            <input 
                                type='text' 
                                className={s.inp} 
                                name='email' 
                                placeholder='E-mail'
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
                        <div className={s.line}>
                            <input 
                                type='text' 
                                id='repassword'
                                className={s.inp} 
                                name='repassword' 
                                placeholder='Повтор пароля'
                                onChange={rePasswordHandler}
                            />
                        </div>
                        <div className={s.lineInfo}>
                            Создавая аккаунт вы соглашаетесь с <a href='/#'> правилами обработки персональных данных </a> и
                            <a href='/#'> правилами сервиса</a>
                        </div>
                        <div className={cn(s.line, s.lineButtons)}>
                            <div className={s.fl}>
                                <button 
                                    className={cn(s.btn, s.green)}
                                    type="button"
                                    onClick={toContin}
                                    disabled={loading}
                                >
                                    Создать аккаунт
                                </button>
                            </div>
                            <div className={s.fl}>
                                Есть аккаунт?
                                <a onClick={switchModals}> Войти</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalRegister