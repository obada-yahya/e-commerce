import React from 'react'
import style from "./style.module.css"
const NavBar = () => {
  return (
    <nav className={style.navigation}>
        <div className={style.featuresItems}>
            <h1>matter</h1>
            <a href='/shop'>shop</a>
            <a href='#'>fabric</a>
            <a href='#'>journal</a>
            <a href='#'>about</a>
        </div>
        <div className={style.loginItems}>
            <a href='#'>login</a>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-bag-shopping"></i>
        </div>
    </nav>
  )
}

export default NavBar