import React from 'react'
import './Section1.css'
import Button from '@mui/material/Button';

const Section1 = () => {
  return (
    <div className='bodySection1'>

    {/* titleS1 is the container of title only */}
    <div className='titleS1'>
      <h1 className='title'>Lorem ipsum dolor  sit amet</h1>
    </div>


    {/* inputS1 is the container of input and button */}
    <div className='inputS1'>
    <input className='userInputS1' type='text' placeholder='adipiscing elit' />
  { /* <button className='btnS1'>Ullamco </button> */}
    <Button  sx={{ color: '#fff', bgcolor: 'grey.900' }}>Ullamco </Button>
   

    </div>


    </div>
  )
}

export default Section1