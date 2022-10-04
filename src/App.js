import "./App.css";

import Navbar from "./Components/Navbar";
import { Pagination } from "./Components/Pagination";


import  Issues  from "./Components/Issues";
function App() {
  
  return (
    <div className="App">
      <Navbar />
      
      <Issues/>
      

     

      
      <Pagination />
    </div>
  );
}

export default App;
