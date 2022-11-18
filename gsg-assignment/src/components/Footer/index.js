import React from 'react'
import style from './style.module.css'
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.gridContainer}>
        <div className={`${style.gridItem} ${style.bold}`}>Categories</div>
        <div className={`${style.gridItem} ${style.bold}`}>Partners </div>
        <div className={`${style.gridItem} ${style.bold}`}>Contact us</div>
        <div className={`${style.gridItem} ${style.bold}`}>Subscribe to newsletter</div>
        <div className={`${style.gridItem}`}>
          <div className={style.flexContainer}>
            <li>About us</li>
            <li>Testimonials</li>
            <li>Contact</li> 
            <li>Journal</li> 
            <li>Privacy Policy</li>
          </div>
        </div>
        <div className={style.gridItem}>
          <div className={style.flexContainer}>
              <li>Support</li>
              <li>Shipping & Returns</li>
              <li>Size Guide</li>
              <li>Product Care</li>
          </div>
        </div>
        <div className={style.gridItem}>
          <div className={style.flexContainer}>
              <li>26A Pagoda St, TANGS,</li>
              <li>Singapore, 058187</li>
              <li className={style.hide}>d</li>
              <li>+65 6221 5462</li>
          </div>
        </div>
        <div className={style.gridItem}>
          <form className={style.form}>
            <input placeholder='ENTER YOUR EMAIL'></input>
            <button>Subscribe</button>
            <div className={style.icons}><img src={'/icons/Facebook.svg'}/> <img src={'/icons/Twitter Icon.svg'}/></div>
          </form>
        </div>
      </div>
      <div className={style.copyrights}>© Copyright Matter PTE LTD  2017</div>
    </div>
  )
}

export default Footer;