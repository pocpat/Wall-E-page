import React from 'react'
// import './Section2.css'
import { CardSection2 } from './CardSection2'
import robot1 from '../imgs/robot1.png'
import robot2 from '../imgs/robot2.png'
import robot3 from '../imgs/robot3.png'
import '../styles/section2.css'
const Section2 = () => {
  return (
    <div className='bodyContainerS2'>
  
    <CardSection2 
    imgCardS2Src={robot1}
    titleS2="Lorem Ipsum"
    textS2="Ex ea commodo"/>

    <CardSection2
    imgCardS2Src={robot2}
    titleS2="Duis aute"
    textS2="Quis nostrud"/>
    
    <CardSection2
    imgCardS2Src={robot3}
    titleS2="Excepteur sint"
    textS2="Cillum dolore"/>
    </div>
  )
}

export default Section2