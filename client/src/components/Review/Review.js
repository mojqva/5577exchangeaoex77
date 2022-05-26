import React from 'react'
import s from '../../pages/reviews.module.css'
import {BiGhost} from 'react-icons/bi'
import { AiFillStar} from 'react-icons/ai'

const Review = ({srcBest, srcSumo, name, date, text, link}) => {
    const arrDate = date.split(' ')
    const check = link.slice(8, 25) === 'www.bestchange.ru'
    return (
        <div className={s.item}>
            <div className={s.img}>
                <span className={s.flaticonGhost}>
                    <BiGhost size={38} className={s.iconGhost}/>    
                </span>    
            </div>
            <div className={s.name}>
                <a href={link} target={'_blank'} rel={'noreferrer'}>{name}</a>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
                <span className={s.flaticonStar1}><AiFillStar size={15}/></span>
            </div>
            <div className={s.date}>
                <p>{`${arrDate[0]} ${arrDate[1]} ${arrDate[2]} ${arrDate[3]}`}</p>
                <span>{arrDate[4]}</span>
            </div>
            <div className={s.text}>
                <p>
                    {text.replace('Отзыв опубликован на', '')}
                </p>
                <div className={s.external}>  
                    Отзыв опубликован на
                    <a href={link} target={'_blank'} rel={'noreferrer'}>
                        <img src={check ? srcBest : srcSumo} alt={'Review'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Review