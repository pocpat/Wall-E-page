import React from 'react'
// import './Section2.css'
import '../styles/section2.css'

export const CardSection2 = (props) => {
  return (
    <div className='cardContainerS2' style={{ boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.4)' }}>
    
    <img 
    src={props.imgCardS2Src} 
    alt='img' 
    className='imgCardS2'/>

    
    {/*  ===== text container ====  */}
    <div className='textContainerS2'>
    <h4 className='titleCardS2'>{props.titleS2} </h4>
    <p className='textCardS2'> {props.textS2}
    </p>
    </div>

    </div>
  )
}
