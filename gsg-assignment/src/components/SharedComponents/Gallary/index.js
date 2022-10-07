import React from 'react'
import './style.css'
import Card from '../Card'
import Video from '../../Video'
const Gallary = ({cards,isCard}) => {
  console.log("isCard",isCard);
  return (
    <div className='Gallary'>
        {
            cards.map((card,idx) =>(
                isCard ? <Card key={card} img={card}/> : <Video key={card}vid={card}/>
            ))
        }
    </div>
  )
}

export default Gallary