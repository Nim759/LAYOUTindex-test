import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



import Addlocation from "./Pages/addlocation/addlocation";
import Adddevice from "./Pages/adddevice/adddevice";
import LocationId from "./Pages/locationid/LocationId";

import Home from "./Pages/Home/Home";
import ListAll from "./Pages/Listall/ListAll";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/addlocation" element={<Addlocation/>}/>
          <Route path="/adddevice" element={<Adddevice/>}/>
          
          <Route path="/ListAll/:id" element = {<LocationId/>}/>
          <Route path="/" element = {<Home/>}/>
          <Route path="/ListAll" element = {<ListAll/>}/>



          
        </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
