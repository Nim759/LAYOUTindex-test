import "./SearchItem.css"
import {Link } from "react-router-dom"; 

const SearchItem = ({item}) => {
  return (
    <div className="searchItem" key = {item._id} >
      <div className="sItemDiscription">
        <h3  className="sItemTitle">{item.name}</h3 >
        <h2  className="sItemTitle">{item.address}</h2 >
        <h2  className="sItemTitle">{item.phone}</h2 >
        
     <Link to = {`/listall/${item._id}`}><button className="sItemButton"><b>View</b></button></Link>
      </div>
    </div>
  )
}

export default SearchItem