import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

import Addlocation from "./Pages/addlocation/addlocation";
import Adddevice from "./Pages/adddevice/adddevice";
import LocationId from "./Pages/locationid/LocationId";
import SearchLocation from "./Pages/searchlocation/searchLocation";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/addlocation" element={<Addlocation/>}/>
          <Route path="/adddevice" element={<Adddevice/>}/>
          <Route path="/searchLocation" element ={<SearchLocation/>}/>
          <Route path="/searchLocation/:id" element = {<LocationId/>}/>
          <Route path="/" element = {<Home/>}/>



          
        </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
