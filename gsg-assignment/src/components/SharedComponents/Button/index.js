import React from 'react'
import './style.css'
const Button = ({text}) => {
  return (
    <div className='button-design'>
        <button>{text}</button>
    </div>
  )
}

export default Button