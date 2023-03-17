import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Addlocation from "./Pages/addlocation/addlocation";
import Adddevice from "./Pages/adddevice/adddevice"

import './App.css';
import SearchLocation from "./Pages/searchlocation/searchLocation";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Addlocation/>}/>
          <Route path="/adddevice" element={<Adddevice/>}/>
          <Route path="/searchLocation" element ={<SearchLocation/>}/>



          
        </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
