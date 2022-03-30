import React from 'react'
import NavLinks from './NavLinks'
import s from './style.module.css'

const Navigation = () => {
  return (
      <div className={s.Navigation}>
          <NavLinks/>
      </div>
    
  )
}

export default Navigation