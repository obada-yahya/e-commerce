import React from 'react'
import style from './style.module.css'
const Button = ({text}) => {
  return (
    <div className={style.buttonDesign}>
        <button className={style.buttonContent}>{text}</button>
    </div>
  )
}

export default Button