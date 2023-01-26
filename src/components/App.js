import React, { useReducer} from "react";
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
import Aboutpage from "./Aboutpage";
import ShowOneEmployee from "./ShowOneEmployee";
import UpdateEmployee from "./UpdateEmployee";
import Navbar from './Navbar'


function App() {
  console.log("FIRST LOAD is APP.js")
  console.log("Initial State 1")
  
    const initialState = {
      // these one are to be used with useReducer
      // so the steps are: sign up/ sign in using form and then update loggedInUser, auth and userClaims value from the returned value after logging in/signing up that comesback from express-firebase.
      displayName: sessionStorage.getItem("displayName") || null,
      idToken: sessionStorage.getItem("idToken") || null,
      userClaims: JSON.parse(sessionStorage.getItem("userClaims")) || null
    }
    
  console.log("Initial State 2")
  // console.log("APP.js SESSIONSTORAGE userCLAIMS is :", JSON.parse(sessionStorage.userClaims))

  console.log("APP.js SESSIONSTORAGE is :", sessionStorage)  

  const [store, dispatch] = useReducer(reducer, initialState);
  
  const {userClaims, displayName, idToken} = store
  
  console.log("Store in APP.js is: ", store)

  console.log(idToken)
  console.log("TYPEOF STORE is: ", typeof userClaims)
  console.log("TYPEOF SESSIONSTORAGE is: ", typeof (sessionStorage.userClaims))
  console.log("SESSIONSTORAGE is: ", sessionStorage.userClaims)


  return (
    <div>
      <StateContext.Provider value={{store, dispatch}}>
      {/* <Nav /> */}
      <div><Navbar /></div>
      
      <Routes>
        {/* This don't display anything on the web, because all content that displays coming from Mainpage component. So this part is purely to set the route path of each component */}
        <Route path="/" element={<Mainpage />} />
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

        
      </Routes>
      </StateContext.Provider>
    </div>
  );
}

export default App;
