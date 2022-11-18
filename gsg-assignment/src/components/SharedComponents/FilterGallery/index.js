import React from 'react'
import style from './style.module.css'
import Card from '../Card'
const Gallery = ({cards,isShop}) => {
  // console.log("isCard",isCard);
  return (
    <div className={style.Gallery}>
        {
            cards ? cards.map((card,idx) =>(
                <Card key={idx} card={card} isNew={card.isNew} isShop={isShop}/>
            )):<></>
        }
    </div>
  )
}

export default Gallery