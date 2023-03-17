import "./Device.css"
import campsite from "./campsite.jpg"
import tent from "./tent.jpg"
import gril from "./gril.jpg"
import light from "./light.jpg"
import {Link } from "react-router-dom"; 

import React from 'react'

const Device = (props) => {
  return (
    <div className="fp">
         <div className="fpItem" >
        <img src={tent}  alt="" className="fpImg"/>
        <div className="fpdetail">
        <span className="fpname">device name :</span><br/>
        <span className="fpnumber">Serial number :</span>
        <span className="fptype">Type :</span><br/>
        
        <span className="fpstatus">Status</span></div>
      
        
      </div>
    </div>
  )
}

export default Device