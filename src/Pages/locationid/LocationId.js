import "./LocationId.css";
import { useLocation } from "react-router-dom";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Device from "../../Components/Device/Device";
import NavBar from "../../Components/Navbar/NavBar";

const LocationId = () => {

    const location = useLocation();
    
  return (
    <div><NavBar/>
    <div className="idcontainer">
        <div className="idWrapper">
          <h1 className="idTitle">Location name</h1>
            <FontAwesomeIcon icon={faLocationDot}/>

          <hr />
          <div className="idDetails">
            <h1>Address</h1>
            <p>Address</p>
          </div>
          <hr />
          <div className="idDetails">
            <h1>Phone number</h1>
            <p>number </p>
          </div>
          <hr />
          <div className="deviceDetails">
            <h1>Devices</h1>
            <Device/>
            <button >Back</button>
          </div>
          
          <hr />
  
        </div>
        </div>
    </div>
  )
}

export default LocationId