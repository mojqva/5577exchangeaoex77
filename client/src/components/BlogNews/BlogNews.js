import React from 'react'
import s from './style.module.css'

const BlogNews = () => {
  return (
    <div className={s.news}>
        <div className={s.image}>
            <a href='/'>
                <img src={'/'} alt='Цена выросла'/>
            </a>
        </div>
        <div className={s.c}>
            <h3>
                <a href="/">Цена Биткоина выросла на 10% на этой неделе - три возможные причины</a>
            </h3>
            <div className={s.date}>
                25 Мар 2022 
            </div>
            <div className={s.short}>
                За последнюю неделю биткоин подорожал на 10% - на момент написания статьи крупнейшая в мире криптовалюта достигла отметки $44 651. Пробив отметку $45 000, BTC достигнет цены, которой не было в течение месяца, и преодолеет важнейший уровень сопротивления.
            </div>
        </div>
    </div>
  )
}

export default BlogNews