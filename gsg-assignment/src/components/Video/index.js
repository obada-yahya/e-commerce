import React from 'react'
import './style.css'
const Video = ({vid}) => {
  return (
    <div className='video'>
        <i class="fa-regular fa-circle-play"></i>
        <img src={`/images/${vid}`}/>
    </div>
  )
}

export default Video