import React from 'react'
import './Section2.css'

export const CardSection2 = () => {
  return (
    <div className='cardContainerS2'>
    
    <img 
    src='https://images.unsplash.com/photo-1611181928379-8b8b2b2b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' 
    alt='img' 
    className='imgCardS2'/>

    
    {/*  ===== text container ====  */}
    <div className='textContainerS2'>
    <h4 className='titleCardS2'>Lorem ipsum </h4>
    <p className='textCardS2'> Sit amet
    </p>
    </div>

    </div>
  )
}
