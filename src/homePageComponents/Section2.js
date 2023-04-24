import React from 'react'
import '../styles/section2.css'
import { CardSection2 } from './CardSection2'

const Section2 = () => {
  return (
    <div className='bodyContainerS2'>
  
    <CardSection2 
    imgCardS2Src="#"
    titleS2="Lorem Ipsum"
    textS2="Ex ea commodo"/>
    <CardSection2
    imgCardS2Src="#"
    titleS2="Duis aute"
    textS2="Quis nostrud"/>
    <CardSection2
    imgCardS2Src="#"
    titleS2="Excepteur sint"
    textS2="Cillum dolore"/>
    </div>
  )
}

export default Section2