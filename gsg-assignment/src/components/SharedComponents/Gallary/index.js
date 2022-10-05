import React from 'react'
import './style.css'
import Card from '../Card'
const Gallary = ({cards}) => {
  return (
    <div className='Gallary'>
        {
            cards.map((card) =>(
                <Card img={card}/>
            ))
        }
    </div>
  )
}

export default Gallary