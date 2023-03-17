import "./LocationId.css";
import { useLocation ,Link } from "react-router-dom";
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
          

          <hr />
          <div className="idDetails">
            <h2>Address</h2>
            <FontAwesomeIcon icon={faLocationDot}/>
            <p>Address</p>
          </div>
          <hr />
          <div className="idDetails">
            <h2>Phone number</h2>
            <p>number </p>
          </div>
          <hr />
          <div className="deviceDetails">
            
            <Device/>
            <Link to = "/adddevice"><button className="add" >Add devices</button></Link>
          </div>
          
          <hr />
  
        </div>
        </div>
    </div>
  )
}

export default LocationId