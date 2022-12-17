import React, { useState, useReducer, useEffect} from "react";
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
import ShowOneEmployee from "./ShowOneEmployee";
import UpdateEmployee from "./UpdateEmployee";


function App() {
  console.log("FIRST LOAD is APP.js")
  console.log("Initial State 1")
  const initialState = {
    // these one are to be used with useReducer
    // so the steps are: sign up/ sign in using form and then update loggedInUser, auth and userClaims value from the returned value after logging in/signing up that comesback from express-firebase.
    displayName: sessionStorage.getItem("displayName") || null,
    token: sessionStorage.getItem("token") || null,
    userClaims: JSON.parse(sessionStorage.getItem("userClaims")) || null,    
  }
  console.log("Initial State 2")
  // console.log("APP.js SESSIONSTORAGE userCLAIMS is :", JSON.parse(sessionStorage.userClaims))

  console.log("APP.js SESSIONSTORAGE is :", sessionStorage)
  
  // const reAuth = getAuth(db);
  // console.log("REAUTH in APP.js is: ", reAuth)
  

  const [store, dispatch] = useReducer(reducer, initialState);
  
  const {userClaims, displayName, token} = store
  

  
  console.log("Store in APP.js is: ", store)

  
  // console.log("APP.js LoggedIn User is: ", displayName)
  // console.log("APP.js userClaims User is:\n ", userClaims)
  // console.log('APP.js user Token1: ',token)
  // console.log('APP.js user adminUser ', adminUser) 
  
  // useEffect(() => {
  //   console.log("User state changed 1") 
  //   // const adminUser = JSON.parse(sessionStorage.getItem("userClaims", userClaims.name));
  //   if (userClaims) {
  //     // dispatch({ type: "setUserClaims", data: JSON.stringify(userClaims) })
  //     setState(sessionStorage.getItem("userClaims", JSON.parse(userClaims)))
  //     // dispatch({ type: "setUserClaims", data: JSON.parse(userClaims) })
  //     // const bla = JSON.parse(userClaims).adminUser;
  //     // console.log("User state changed 1: ADMIN USER: ", adminUser) 
  //     console.log("User state changed : BLA: ") 
  //   }
    
  // }, [state]);

  // useEffect(() => {
  //   if (userClaims) {
  //     console.log("User state changed 2") 
  //     dispatch({ type: "setUserClaims", data: JSON.parse(userClaims) })
      
  //   }
  // }, []);

  
 


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
