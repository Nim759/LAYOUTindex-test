import "./listall.css"
import SearchItem from "../../Components/SearchItem/SearchItem";
import NavBar from "../../Components/Navbar/NavBar";
import useFetch from "../../Components/Hooks/useFetch";

const ListAll = () => {

  const {data,loading} = useFetch("http://localhost:7000/v1/locations")

    
  return (
    <div><NavBar/>
    <div className="containersearch">
          <div className="listResult">
            {loading ? "Loading" : <>
            {data.map(item=>(
                <SearchItem item={item} key={item._id}/>
            ))}
              
              </>}
            
              </div>  
          </div>
        </div>
        

    
  )
}

export default ListAll