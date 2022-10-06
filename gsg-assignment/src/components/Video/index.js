import React from 'react'
import './style.css'
const Video = ({vid}) => {
  return (
    <div className='video'>
        <img src={`/images/${vid}`}/>
    </div>
  )
}

export default Video