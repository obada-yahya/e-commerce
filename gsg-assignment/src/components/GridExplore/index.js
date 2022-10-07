import React from 'react'
import './style.css'
const GridExplore = () => {
  return (
    <>    
    <div className='grid-container-explore'>
        <div className='grid-explore-item span-item'>
            <p>FIELDTESTED JANUARY 19, 2017</p>
            <h2>Connected Clothing: Raye Padit</h2>
            <p>As a voice for conscious fashion, Raye Padit is motivated by the belief that one person’s actions, no matter how small, holds great impact. This core ideal has driven him to start his three passion projects: Connected Threads Asia, PeyaR, and Swagalls. </p>
        </div>
        <div className='grid-explore-item'>
            <p>FIELDTESTED JANUARY 19, 2017</p>
            <h2>Kérastase: A Collaboration</h2>
            <img src='/images/pillow.png'/>
        </div>
        <div className='grid-explore-item item-3'>
            <p>FIELDTESTED JANUARY 19, 2017</p>
            <h2>Jaclynn Seah</h2>
            <p>Jaclynn’s wandering spirit has brought her from the lush greenery of South America to the craters of Indonesia.</p>
        </div>
        <div className='grid-explore-item span-item no-border'><img src={'/images/man.png'}/></div>
        <div className='grid-explore-item item-5'>
            <p>FIELDTESTED JANUARY 19, 2017</p>
            <h2>Remarkable Resilience: Grace Kim</h2>
            <p>A woman in my life who has shown remarkable resilience is my best friend Grace. Since she was a kid, she struggled with general anxiety disorder and panic disorder.</p>
        </div>
        <div className='grid-explore-item'>
            <p>FIELDTESTED JANUARY 19, 2017</p>
            <h2>How To Wear The Lounge Lunghi</h2>
            <img src={'/images/img15.png'}/>
        </div>       
    </div>
   
    </>

  )
}

export default GridExplore