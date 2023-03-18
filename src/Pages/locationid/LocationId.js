import "./LocationId.css";
import { useLocation ,Link } from "react-router-dom";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Device from "../../Components/Device/Device";
import NavBar from "../../Components/Navbar/NavBar";
import useFetch from "../../Components/Hooks/useFetch";

const LocationId = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const { data, loading, error } = useFetch(`http://localhost:7000/v1/location/find/${id}`)


  return (
    <div><NavBar/>
    <div className="idcontainer">
      {loading ? ("loading"):(
        <>
        <div className="idWrapper">
          <h1 className="idTitle">{data.name}</h1>
          

          <hr />
          <div className="idDetails">
            <h2>Address</h2>
            <FontAwesomeIcon icon={faLocationDot}/>
            <p>{data.address}</p>
          </div>
          <hr />
          <div className="idDetails">
            <h2>Phone number</h2>
            <p>{data.phone}</p>
          </div>
          <hr />
          <div className="deviceDetails">
            
            <Device/>
            <Link to = "/adddevice"><button className="add" >Add devices</button></Link>
          </div>
          
          <hr />
  
        </div></>
      )}
        </div>
    </div>
  )
}

export default LocationId