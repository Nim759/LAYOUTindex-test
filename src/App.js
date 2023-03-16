import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Addlocation from "./Pages/addlocation/addlocation";

import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Addlocation/>}/>



          
        </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
