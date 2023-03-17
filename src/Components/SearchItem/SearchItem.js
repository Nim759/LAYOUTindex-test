import "./SearchItem.css"

import {Link } from "react-router-dom"; 

const SearchItem = (props) => {
  return (
    <div className="searchItem" >
      <div className="sItemDiscription">
        <h3  className="sItemTitle">Location name</h3 >
        
     <button className="sItemButton"><b>View</b></button>
      </div>
    </div>
  )
}

export default SearchItem