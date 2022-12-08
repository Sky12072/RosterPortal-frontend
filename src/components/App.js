import React from "react";
import EmployerPage from "./EmployerPage";
import Nav from "./Nav"
import {Routes, Route} from "react-router-dom";
import Mainpage from "./Mainpage"
import EmployeePage from "./EmployeePage";

function App() {
  return (
    <div className="App">
      <Nav />
      
      <Routes>
        
        <Route path="/" element={<Mainpage />} />
        <Route path="/employer" element={<EmployerPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        
      </Routes>
      
    </div>
  );
}

export default App;
