import React from 'react'
import s from '../../pages/reviews.module.css'
import {BiGhost} from 'react-icons/bi'
import { AiFillStar} from 'react-icons/ai'

const Review = ({src, name, date, ip, text, link}) => {
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
                <p>{date}</p>
                <span>{ip}</span>
            </div>
            <div className={s.text}>
                <p>
                    {text}
                </p>
                <div className={s.external}>  
                    Отзыв опубликован на
                    <a href={link} target={'_blank'} rel={'noreferrer'}>
                        <img src={src} alt={'Review'}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Review