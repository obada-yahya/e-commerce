import React from 'react'
import style from "./style.module.css";
const FilterSubItem = ({text,func}) => {
  return (
    <button onClick={(e)=>func(e,text)} className={style.subItem}>
        <div className={style.triangle_right}></div>
        <div>{text}</div>
        {/* <button >Click me</button> */}
    </button>
  )
}

export default FilterSubItem;