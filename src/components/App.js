import React, { useReducer} from "react";
import EmployerPage from "./EmployerPage";
import {Routes, Route} from "react-router-dom";
import EmployeePage from "./EmployeePage";
import { StateContext } from "../utils/stateContext";
import Signup from "./Signup";
import reducer from "../utils/stateReducer"
import Signin from "./Signin";
import Signout from "./Signout";
import Aboutpage from "./Aboutpage";
import ShowOneEmployee from "./ShowOneEmployee";
import UpdateEmployee from "./UpdateEmployee";
import Navbar from './Navbar'
import Timetable from "./Timetable";


function App() {
  const initialState = {
    displayName: sessionStorage.getItem("displayName") || null,
    idToken: sessionStorage.getItem("idToken") || null,
    userClaims: JSON.parse(sessionStorage.getItem("userClaims")) || null
  }
  const [store, dispatch] = useReducer(reducer, initialState);
  
  const {userClaims, displayName, idToken} = store
    
  return (
    <div>
      
      <StateContext.Provider value={{store, dispatch}}>
      
      <div><Navbar /></div>
      
      <Routes>
        {/* This don't display anything on the web, because all content that displays coming from Mainpage component. So this part is purely to set the route path of each component */}
        
        {/* This signup path is allocating url path for signup component, not the signup button */}
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>

        {displayName && userClaims.adminUser && console.log("adminUser Detected")}

        {displayName && userClaims.adminUser && <Route path="/employer" element={<EmployerPage />} />}

        {displayName && userClaims.regularUser && console.log("regularUser Detected")}

        {displayName && userClaims.regularUser && <Route path="/employee" element={<EmployeePage />} />}    

        <Route path="/signedout" element={<Signout />} />
        <Route path="/about" element={<Aboutpage />} />


        <Route path="/check-employee/:id" element={<ShowOneEmployee />} />
        <Route path="/update-employee/:id" element={<UpdateEmployee />} />
        <Route path="/timetable" element={<Timetable />} />

        
      </Routes>
      </StateContext.Provider>
    </div>
  );
}

export default App;
