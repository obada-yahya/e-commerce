import React from 'react'
import './style.css'
const Card = ({img}) => {
  return (
    <div className="card" >
      <img src={`/images/${img}`}/>
      <p>Pueraria Mirifica And Study Phyto Estrogens</p>
      <span>$599.00</span>
    </div>
  )
}

export default Card