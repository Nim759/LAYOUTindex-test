import "./NavBar.css"
import { Link } from "react-router-dom"
import React from 'react'

const NavBar = () => {
  return (
    <div className="navcontainer">
        <div className="navbtn">
        <Link to = "/addlocation"><button className="navbutton">Add location</button></Link>
        <Link to = "/ListAll"><button className="navbutton">Search location</button></Link>
        
</div>
    </div>
  )
}

export default NavBar