import React from 'react'
import './Section1.css'

const Section1 = () => {
  return (
    <div className='bodySection1'>

    {/* titleS1 is the container of title only */}
    <div className='titleS1'>
      <h1 className='title'>Lorem ipsum dolor sit amet</h1>
    </div>


    {/* inputS1 is the container of input and button */}
    <div className='inputS1'>
    <input className='userInputS1' type='text' placeholder='adipiscing elit' />
    <button className='btnS1'>Ullamco </button>
    </div>


    </div>
  )
}

export default Section1