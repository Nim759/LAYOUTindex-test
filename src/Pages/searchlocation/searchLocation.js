import "./searchLocation.css"
import SearchItem from "../../Components/SearchItem/SearchItem";
import {useState} from 'react';
import {useLocation} from "react-router-dom"

const SearchLocation = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state)

  return (
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
              <button  className="sbtn" ><b>Search</b></button>
            </div>
            

          </div>
          <div className="listResult">
            
              <SearchItem/>
          
            
            
          </div>
        </div>
        </div>

    
  )
}

export default SearchLocation