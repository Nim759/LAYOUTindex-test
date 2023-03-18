import "./searchLocation.css"
import SearchItem from "../../Components/SearchItem/SearchItem";
import {useState} from 'react';
import {useLocation} from "react-router-dom"
import NavBar from "../../Components/Navbar/NavBar";
import useFetch from "../../Components/Hooks/useFetch";

const SearchLocation = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state)

    const handleClick = () => {
      reFetch()
    }

   
    const {data, loading, reFetch} = useFetch(`http://localhost:7000/v1/locations?name=${destination}`)

  return (
    <div><NavBar/>
    <div className="containersearch">
        <div className="search">
        <div className="listSearch">
            <h2 className="lsTitle">Search</h2>
            <div className="lsItem">
              <label>Location</label>
              <input type="text" 
              className="searchbar"
              placeholder={destination}
              onChange={e=>setDestination(e.target.value)}
              />
            </div>
            <div>
              <button  className="sbtn" onClick ={handleClick} ><b>Search</b></button>
            </div>
            

          </div>
          <div className="listResult">
              {loading ? "Loading" : <>
              {data.map(item=>(
                   <SearchItem item={item} key={item._id}/>
              ))}</>}
             
          
            
              </div>  
          </div>
        </div>
        </div>

    
  )
}

export default SearchLocation