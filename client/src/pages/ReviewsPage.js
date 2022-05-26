import React, {useEffect, useState} from 'react'
import s from './reviews.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom';
import Review from '../components/Review/Review';
import findImg from '../utils/img';
import { useMessage } from '../hooks/message.hook';
import { AiFillStar} from 'react-icons/ai'

const axios = require('axios')

const ReviewsPage = () => {
    const {Best, Summo, Kurs, Pro, Glazok, Top, Ex, Mmgp, Talk, Pilot, Wot} = findImg()
    const message = useMessage()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const finalMsg = error === '' ? 'Загрузка...' : 'Не удалось загрузить отзывы, попробуйте еще раз'

    let reviewObj = {
        names: [],
        text: [],
        date: [],
        links: [],
        amount: []
    }

    const [reviews, setReviews] = useState(reviewObj)

    useEffect(() => {
        let isCancel = false
        const getReviews = async () => {
            try {
                if(!isCancel) {
                    setLoading(true)
                    const response = await axios.get('/api/payment/abc')
                    const data = await response.data
                    // const data = await response.data
                    data !== undefined && setReviews(data)
                    setLoading(false)

                    return data
                }
            } catch (e) {
                console.log(e)
                setError(e)
            }
        }
        getReviews()

        return () => {isCancel = true}
    }, [])

    return (
        <>
        <div className={cn(s.static, s.reviews)}>
            <div className={s.inner}>
                <h1>Отзывы</h1>
            </div>
        </div>
        <div className={s.reviewsExt}>
            <div className={s.inner}>
                <h2>Что о нас пишут</h2>
                <div className={s.info}>
                    Есть какие-либо сомнения относительно нас? Прочитайте публикации крупных информационных изданий о работе 
                    <Link to={'/'}> AvanChange</Link>
                    , как мы помогаем нашим клиентам осуществлять обмен с минимально возможной комиссией и всего за несколько кликов!
                </div>
                <div className={s.box}>
                    <h3>На мониторингах</h3>
                    <ul>
                        <li>
                            <a href="https://www.bestchange.ru/avanchange-exchanger.html" target="_blank" rel="noreferrer">
                                <img src={Best} alt="AvanChange"/>
                                <span className={s.count}>1752+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://exchangesumo.com/exchanger/955/Avanchange/" target="_blank" rel="noreferrer">
                                <img src={Summo} alt="AvanChange"/>
                                <span className={s.count}>1430+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://kurs.expert/ru/obmennik/avanchange-com/feedbacks.html" target="_blank" rel="noreferrer">
                                <img src={Kurs} alt="AvanChange"/>
                                <span className={s.count}>85+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://pro-obmen.ru/avanchange" target="_blank" rel="noreferrer">
                                <img src={Pro} alt="AvanChange"/>
                                <span className={s.count}>47+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Glazok} alt="AvanChange"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://topmonitoring.ru/exchangers/493/" target="_blank" rel="noreferrer">
                                <img src={Top} alt="AvanChange"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://pro-ex.club/ru/exchangers/Avanchange" target="_blank" rel="noreferrer">
                                <img src={Ex} alt="AvanChange"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={s.box}>
                    <h3>На форумах</h3>
                    <ul>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Mmgp} alt="AvanChange"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Talk} alt="AvanChange"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={s.box}>
                    <h3>А также</h3>
                    <ul>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Pilot} alt="AvanChange"/>
                                <span className={s.count}>186+</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://glazok.org/exchange/?details=911" target="_blank" rel="noreferrer">
                                <img src={Wot} alt="AvanChange"/>
                                <span className={s.count}>24+</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={cn(s.static, s.reviewsBlock)}>
            <div className={s.inner}>
                <div className={s.reviewsL}>
                    <h3>Отзывы после сделок</h3>
                    {
                        loading 
                        ? <b>{finalMsg}</b>
                        : reviews.names.map((name, index) => {
                            return <Review
                                    key={index}
                                    srcBest={Best}
                                    srcSumo={Summo}
                                    name={name}
                                    link={reviews.links[index]}
                                    date={reviews.date[index]}
                                    text={reviews.text[index]}
                            />
                        })
                    }
                </div>
                <div className={s.reviewsR}>
                    <div className={s.reviewsTotal}>
                        <div className={s.t}>
                            Оценка сервиса
                        </div>
                        <div className={s.n}>
                            {!loading ? 5 : 'Загрузка...'}
                        </div>
                        <div className={s.s}>
                            {!loading ? 
                            <div>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                                <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                            </div>
                            : null
                            }
                        </div>
                        <div className={s.o}>
                            {!loading ? reviews.amount[0] : null}
                        </div>
                    </div>
                    <div className={s.reviewsAdd}>
                        <form name='form-review'>
                            <div className={s.t}></div>
                            <div className={s.line}>
                                <input type={'text'} name={'name'} className={s.inp} placeholder='Ваше Имя'/>
                            </div>
                            <div className={s.line}>
                                <input type={'text'} name={'email'} className={s.inp} placeholder='E-mail'/>
                            </div>
                            <div className={s.line}>
                                <textarea name='message' className={s.textarea} placeholder='Текст отзыва'></textarea>
                            </div>
                            <div className={s.line}>
                                <div className={s.button}>
                                    <button className={s.btn} type='button' onClick={() => message('Не удалось отправить отзыв, попробуйте позже')}>Написать</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ReviewsPage;