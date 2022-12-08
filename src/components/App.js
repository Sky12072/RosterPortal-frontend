import React, { useReducer } from "react";
import EmployerPage from "./EmployerPage";
import Nav from "./Nav"
import {Routes, Route} from "react-router-dom";
import Mainpage from "./Mainpage"
import EmployeePage from "./EmployeePage";
import { StateContext } from "../utils/stateContext";
import Signup from "./Signup";
import reducer from "../utils/stateReducer"

function App() {
  const initialState = {
    
    loggedInUser: sessionStorage.getItem("user") || null,
    adminUser: sessionStorage.getItem("user") || null,
    auth: sessionStorage.getItem("token") || null,
  }
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <StateContext.Provider value={{store, dispatch}}>
      <Nav />
      
      <Routes>
        {/* This don't display anything on the web, because all content that displays coming from Mainpage component. So this part is purely to set the route path of each component */}
        <Route path="/" element={<Mainpage />} />
        {/* This signup path is allocating url path for signup component, not the signup button */}
        <Route path='/signup' element={<Signup />}/>

        <Route path="/employer" element={<EmployerPage />} />
        <Route path="/employee" element={<EmployeePage />} />
        
      </Routes>
      </StateContext.Provider>
    </div>
  );
}

export default App;
