import "./Home.css"
import {Link} from "react-router-dom"
import React from 'react'

const Home = () => {
  return (
    <div className="home">
        <div className="homecontainer">
        <div className="container">
            <h1 style={{textAlign:"center"}}>Hello User Getting start with </h1>
           
            <div className="buttons1">
            <Link to="/addlocation"><button className="navButton1">add location</button></Link>
            <Link to="/ListAll"> <button className="navButton1">search location</button></Link>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Home