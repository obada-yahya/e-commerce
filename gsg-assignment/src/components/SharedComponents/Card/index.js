import React from 'react'
import './style.css'
const Card = ({card,isNew,isShop,func}) => {
  return (
    <div className="card" >
      <img src={`/images/${card.imgPath}`}/>
      {
        isNew == true ? <div className='new-icon'>New</div>: <></>
      }
      <img onClick={func ? ()=>func(): null} className="middle-img" src={'/ButtonImages/Button/Primary/M.png'}/>
      {card.category ? <div className='category'>{card.category}</div> : <></>}
      {
        !isShop ?
        <>
          <p>Pueraria Mirifica And Study Phyto Estrogens</p>
          <span>$599.00</span>
        </>: <></>
      }
    </div>
  )
}

export default Card