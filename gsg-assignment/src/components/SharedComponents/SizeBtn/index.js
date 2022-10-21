import React from 'react'
import style from './style.module.css'
const SizeBtn = ({value,func,isActive}) => {
  return (
    <button className={isActive ? style.box + ' ' + style.isActive: style.box } onClick={func}>{value}</button>
  )
}

export default SizeBtn