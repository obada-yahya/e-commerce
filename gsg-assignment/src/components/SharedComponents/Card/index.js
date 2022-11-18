import React from 'react'
import style from './style.module.css'
const Card = ({card,isNew,isShop,func}) => {
  return (
    <div className={style.card} >
      {card.assets ? <img src={`/images/${card.imgPath}`}/>:<img src={`${card.imgPath}`}/>}
      {
        isNew == true ? <div className={style.newIcon}>New</div>: <></>
      }
      <img onClick={func ? ()=>func(): null} className={style.middleImg} src={'/ButtonImages/Button/Primary/M.png'}/>
      {card.category ? <div className={style.category}>{card.category}</div> : <></>}
      {
        !isShop ?
        <>
          <p>Pueraria Mirifica And Study Phyto Estrogens</p>
          <span>${card.price}</span>
        </>:<></>
      }
    </div>
  )
}

export default Card