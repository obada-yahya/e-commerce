import React from 'react'
import style from "./style.module.css";
const FilterSubItem = (props) => {
  return (
    <>
    <section className={style.subItem}>
        <div className={style.triangle_right}></div>
        <div>{props.text}</div>
    </section>
    </>
  )
}

export default FilterSubItem;