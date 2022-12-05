import React from 'react'
import style from "./style.module.css"
const NavBar = () => {
  return (
    <nav className={style.navigation}>
        <div className={style.featuresItems}>
            <a href='/'>matter</a>
            <a href='/shop'>shop</a>
            <a href='/product'>fabric</a>
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