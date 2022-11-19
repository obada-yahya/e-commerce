import React, {useState} from 'react'
import style from "./style.module.css"
const SortingMenu = ({handleOptionChange}) => {
  return (
    <div className={style.container}>
        <div>Women</div>
        <div className={style.sort}>
            <div>Sort By</div>
            <select onChange={handleOptionChange}>
                <option>Nothing</option>
                <option>Price</option>
            </select>
        </div>
    </div>
  )
}

export default SortingMenu