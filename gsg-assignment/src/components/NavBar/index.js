import React from 'react'
import "./style.css"
const NavBar = () => {
  return (
    <nav className='navigation'>
        <div className='features-items'>
            <h1>matter</h1>
            <a href='#'>shop</a>
            <a href='#'>fabric</a>
            <a href='#'>journal</a>
            <a href='#'>about</a>
        </div>
        <div className='login-items'>
            <a href='#'>login</a>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-bag-shopping"></i>
        </div>
    </nav>
  )
}

export default NavBar