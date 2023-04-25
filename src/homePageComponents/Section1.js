import React from 'react'
// import './Section1.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../styles/section1.css'

const Section1 = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <div className='bodySection1 bgImgS1'
    >

    {/* titleS1 is the container of title only */}
    <div className='titleS1'>
      <h1 className='title'>Lorem ipsum dolor  sit amet</h1>
    </div>


    {/* inputS1 is the container of input and button */}
    <div className='inputS1'>
    <input 
    className='userInputS1' 
    type='text' 
    placeholder='adipiscing elit' 
    sx={{
      backgroundColor: "rgb (228, 250, 233)",
      color: "rgb (48, 111, 85)",
      outline: "rgb(58, 112, 56)",
    }}
    
    
    />
  { /* <button className='btnS1'>Ullamco </button> */}
    <Button className='btnS1' 
    sx={{
      minWidth: "100px",
      backgroundColor: "rgb(58, 112, 56)",
      color: "rgb(255, 255, 255)",
      borderRadius: "0 0 6px 6px ",
    }}
    
    >Ullamco </Button>
   

    </div>


    </div>
    </Box>
  )
}

export default Section1