import React from 'react'
import "./footer.css"
import { PiLaptopThin } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='footer-main'>
         <p className='footer-text'>  © 2024 | designed and developed by Shaiq Ahmed <PiLaptopThin style={{fontSize:"13px", marginLeft:"5px"}} /> </p>
    </div>
  )
}

export default Footer