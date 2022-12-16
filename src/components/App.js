import React, { useReducer, useEffect} from "react";
import EmployerPage from "./EmployerPage";
import Nav from "./Nav"
import {Routes, Route} from "react-router-dom";
import Mainpage from "./Mainpage"
import EmployeePage from "./EmployeePage";
import { StateContext } from "../utils/stateContext";
import Signup from "./Signup";
import reducer from "../utils/stateReducer"
import Signin from "./Signin";
import Signout from "./Signout";
import {getAuth} from "firebase/auth"
import db from "../services/firebase"
import Aboutpage from "./Aboutpage";


function App() {
  const initialState = {
    
    loggedInUser: localStorage.getItem("user") || null,
    adminUser: localStorage.getItem("user") || null,
    auth: localStorage.getItem("token") || null,
    userClaims: localStorage.getItem("userClaims") || null
  }

  
  // const reAuth = getAuth(db);
  // console.log("REAUTH in APP.js is: ", reAuth)


  const [store, dispatch] = useReducer(reducer, initialState);
  
  const {userClaims, loggedInUser} = store
  

  console.log("Store in APP.js is: ", store)
  
  
  const reAuth = getAuth(db);  
  
  useEffect(() => {
    console.log("User state changed")
    localStorage.getItem("userClaims", userClaims)
    console.log("SessionStorage APP is: ", sessionStorage)
    console.log("SessionStorage userClaim APP is:\n ", JSON.stringify(sessionStorage.userClaims))
    
    console.log("REAUTH in APP.js is: ", reAuth)
    let currentUserCopy = reAuth.currentUser;
    // sessionStorage.getItem("userClaims")
    console.log("Current user obj:\n" + JSON.stringify(currentUserCopy))
    console.log("Loggedin userClaims is", (userClaims))
    
  },[store])
 


  return (
    <div>
      <StateContext.Provider value={{store, dispatch}}>
      <Nav />
      
      <Routes>
        {/* This don't display anything on the web, because all content that displays coming from Mainpage component. So this part is purely to set the route path of each component */}
        <Route path="/" element={<Mainpage />} />
        {/* This signup path is allocating url path for signup component, not the signup button */}
        <Route path='/signup' element={<Signup />}/>
        <Route path='/signin' element={<Signin />}/>
        {loggedInUser !== 'undefined' && userClaims.adminUser && <Route path="/employer" element={<EmployerPage />} />}
        {loggedInUser !== 'undefined' && userClaims.regularUser && <Route path="/employee" element={<EmployeePage />} />}        
        <Route path="/signedout" element={<Signout />} />
        <Route path="/about" element={<Aboutpage />} />
        
      </Routes>
      </StateContext.Provider>
    </div>
  );
}

export default App;
