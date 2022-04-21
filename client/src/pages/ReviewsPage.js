import s from './reviews.module.css'
import cn from 'classnames'
import { Link } from 'react-router-dom';
import Review from '../components/Review/Review';
import findImg from '../utils/img';
import { useMessage } from '../hooks/message.hook';
import { AiFillStar} from 'react-icons/ai'

const ReviewsPage = () => {
    const {Best, Summo, Kurs, Pro, Glazok, Top, Ex, Mmgp, Talk, Pilot, Wot} = findImg()
    const message = useMessage()
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
                    <Review
                        src={Best}
                        name='Белуга'
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1405564'
                        date='16 Апр 2022, 08:16 '
                        ip='82.118.22.*'
                        text='Классный и быстрый обменник. Рекомендую'
                    />

                    <Review
                        src={Best}
                        name='Дима'
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1405341'
                        date='15 Апр 2022, 22:17 '
                        ip='188.241.177.*'
                        text='Спасибо за быструю сделку. Не смотря на то, что у меня 2 часа ночи, время обмена заняло 5 минут'
                    />
                    <Review
                        src={Summo}
                        name='Aygul'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 19:23 '
                        ip='188.241.177.*'
                        text='Обмен за 5 минут'
                    />
                    <Review
                        src={Summo}
                        name='Avaz'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 19:22 '
                        ip='188.241.177.*'
                        text='Топ из топов!'
                    />
                    <Review
                        src={Summo}
                        name='Kuriyama'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 19:21 '
                        ip='188.241.177.*'
                        text='Быстрый обменник'
                    />
                    <Review
                        src={Summo}
                        name='Азалия'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 19:19  '
                        ip='188.241.177.*'
                        text='Молниеносный обмен'
                    />
                    <Review
                        src={Best}
                        name='Genium'
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1405067'
                        date='15 Апр 2022, 18:09 '
                        ip='92.124.163.*'
                        text='Всё прошло чётко и быстро!'
                    />
                    <Review
                        src={Summo}
                        name='Tron'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 16:19 '
                        ip='31.40.25.*'
                        text='Спасибо большое за обмен'
                    />
                    <Review
                        src={Best}
                        name='Белуга'
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1405564'
                        date='16 Апр 2022, 08:16 '
                        ip='188.241.177.*'
                        text='Спасибо за быструю сделку. Не смотря на то, что у меня 2 часа ночи, время обмена заняло 5 минут'
                    />
                    <Review
                        src={Summo}
                        name='Катерина'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 14:56 '
                        ip='31.40.25.*'
                        text='Обменял очень быстро'
                    />
                    <Review
                        src={Summo}
                        name='Garry Mirosh'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 12:32 '
                        ip='146.70.82.*'
                        text='Быстро обменяли'
                    />
                    <Review
                        src={Summo}
                        name='ACP'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 11:52 '
                        ip='31.40.25.*'
                        text='Хороший обменник'
                    />
                    <Review
                        src={Best}
                        name='Ярик'
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1404544'
                        date='15 Апр 2022, 10:57 '
                        ip='185.245.85.*'
                        text='Выводил деньги со счёта AdvCash на карту Тиньков. Лучший курс, который смог найти и моментальное зачисление на карту.'
                    />
                    <Review
                        src={Best}
                        name='Smash'
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1404541'
                        date='15 Апр 2022, 10:55 '
                        ip='88.208.221.*'
                        text='Отличный курс, самый выгодный'
                    />
                    <Review
                        src={Summo}
                        name='Escobar'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 10:43 '
                        ip='146.70.16.*'
                        text='Очень быстрый обмен ETH-Сбер, рекомендую. Комиссия мизер. Обмен идёт 10 мин от перевода денег до поступления на кошелек. Спасибо'
                    />
                    <Review
                        src={Summo}
                        name='Максим'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 08:38 '
                        ip='31.207.207.*'
                        text='Обменялся всё хорошо! Рекомендую!'
                    />
                    <Review
                        src={Summo}
                        name='Шептун'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 07:30 '
                        ip='31.40.25.*'
                        text='Удобно и в конце ждёт котик)'
                    />
                    <Review
                        src={Summo}
                        name='Captown'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='15 Апр 2022, 03:23 '
                        ip='31.40.25.*'
                        text='Курс как всегда топовый Советую всем!'
                    />
                    <Review
                        src={Best}
                        name='Vagarsh'
                        link='https://www.bestchange.ru/avanchange-exchanger.html#review1404313'
                        date='15 Апр 2022, 02:15 '
                        ip='37.252.80.*'
                        text='Как всегда круто и без проблем'
                    />
                    <Review
                        src={Summo}
                        name='Аваз'
                        link='https://exchangesumo.com/exchanger/955/Avanchange/'
                        date='14 Апр 2022, 19:08 '
                        ip='51.15.107.*'
                        text='Лучший обменник'
                    />
                </div>
                <div className={s.reviewsR}>
                    <div className={s.reviewsTotal}>
                        <div className={s.t}>
                            Оценка сервиса
                        </div>
                        <div className={s.n}>
                            5
                        </div>
                        <div className={s.s}>
                            <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                            <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                            <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                            <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                            <span className={s.flaticonStar1}><AiFillStar size={20}/></span>
                        </div>
                        <div className={s.o}>
                            На основе 3918 отзывов
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