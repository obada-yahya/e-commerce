import React from 'react'
import './style.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='grid-container'>
        <div className='grid-item'>Categories</div>
        <div className='grid-item'>Partners </div>
        <div className='grid-item'>Contact us</div>
        <div className='grid-item'>Subscribe to newsletter</div>
        <div className='grid-item'>
          <div className='flex-container'>
            <li>About us</li>
            <li>Testimonials</li>
            <li>Contact</li> 
            <li>Journal</li> 
            <li>Privacy Policy</li>
          </div>
        </div>
        <div className='grid-item'>
          <div className='flex-container'>
              <li>Support</li>
              <li>Shipping & Returns</li>
              <li>Size Guide</li>
              <li>Product Care</li>
          </div>
        </div>
        <div className='grid-item'>
          <div className='flex-container'>
              <li>26A Pagoda St, TANGS,</li>
              <li>Singapore, 058187</li>
              <li className='hide'>d</li>
              <li>+65 6221 5462</li>
          </div>
        </div>
        <div className='grid-item'>
          <form className='form'>
            <input placeholder='ENTER YOUR EMAIL'></input>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer;