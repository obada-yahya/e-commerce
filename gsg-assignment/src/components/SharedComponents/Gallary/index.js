import React from 'react'
import './style.css'
import Card from '../Card'
import Video from '../../Video'
const Gallary = ({cards,isCard}) => {
  console.log("isCard",isCard);
  return (
    <div className='Gallary'>
        {
            cards.map((card) =>(
                isCard ? <Card img={card}/> : <Video vid={card}/>
            ))
        }
    </div>
  )
}

export default Gallary