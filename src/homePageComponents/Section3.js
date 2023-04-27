import React from 'react'
import  { CardSection2 } from './CardSection2'
import '../styles/section2.css'
const cardItems = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8"]

const Section3 = () => {
  return (
   <div className='lotOfCards_container'>
   {/* render <CardSection/> for each item in cardItems*/}
   {cardItems.map((itemCard) => (
        <CardSection2 key={itemCard}
        imgCardS2Src="#"
        titleS2="Lorem Ipsum"
        textS2="Ex ea commodo" 
        width="300px"/>
        )
   )}
   
   </div>
   )
}

export default Section3