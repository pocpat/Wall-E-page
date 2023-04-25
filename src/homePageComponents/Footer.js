import React from 'react'
// import './Footer.css'
import '../styles/footer.css'
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const Footer = () => {
  return (
    <div className='footer'>
     <TrackChangesIcon 
     style={{ width: 15, height: 15 }} 
     sx={{ marginRight: "8px" }} />
     <p>Footer</p>
    </div>
  )
}

export default Footer