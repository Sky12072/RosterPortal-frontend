import { div,  Grid } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneMongoUser, MatchMongoUser } from "../services/authServices";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useGlobalState } from "../utils/stateContext";
import HoursDiagram  from "../userpage/HoursDiagram";
import Rectangle from '../userpage/Rectangle'

import '../assets/rectangle.css'


export default function EmployeePage () {

    const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
        main: '#0971f1',
        darker: '#053e85',
        },
        neutral: {
        main: '#64748B',
        contrastText: '#fff',
        },
    },
    });

    const styles = {        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    
    const {store, dispatch} = useGlobalState();
    const {displayName, token, userClaims} = store
    

    // to get user ID value as a page title
    const [user, setUser] = useState([])

    console.log("Employee user is: ", user)
    // const {id} = useParams()

    // console.log("params is: ", id)
    

    // to get user ID value as a page title
    useEffect(() => {
        MatchMongoUser(userClaims.user_id)
        .then(data => setUser(data))
        .catch((error) => console.log(error))
    }, [])

    console.log("getOneMongoUser IS: ",user._id)
    
    return (
        
        <div style={{
            borderRadius: 35,
            backgroundColor: "#f7f2c6",
            padding: "18px 25px 50px",
            fontSize: "18px",
            margin: "30px"
        }}>
            
            <h1 style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                padding: "18px 36px",
                fontSize: "25px",
                marginBottom: "20px",
                maxWidth: '14%',
                textAlign: 'center'
            }}>Employee Page</h1>
            <h3 className="smallHeader">Employee Name: {displayName}</h3>
            <h3 className="smallHeader">Employee ID: {user._id}</h3>
            {/* <h3>Employee Firebase ID: {userClaims.user_id}</h3> */}
            <h3>Week Period: {user.WeekPeriod}</h3>
            {/* <Link to="/">Go to MAIN page</Link>
            <Link to="/employer">Go to Employer page</Link> */}
            <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: "center", margin:"20px"}}>
                {user &&
                    
                    Object.entries(user).map(([k,v], i) => [
                        // i===0 &&
                        // <div key={i}>   
                        // {/* IMPORTANT: 
                        // 1.This "ID" Originally was _id, so please use the original key to modify
                        // 2. number {1} to {9} are only for display purposes and original index identifer was {i}. ie. {1} actually 0 ( i=== 0 ). */}
                        //     {/* {1}. {"ID"} : {v} */}
                        // </div>,

                        // i===1 &&
                        // <div key={i}>                            
                        //     {2}. {k} : {v}
                        // </div>,

                        
                        // <div>
                        // <Rectangle text1="Monday" text2="SHIFT" text3="9am - 3pm"/>
                        // </div>
                       
                        
                        i===4 &&
                        <div className="rectangle" key={i}>                     
                        <div>
                            <Rectangle text1={k} text2="SHIFT" text3={v} color="#D9D9D9"/>
                        </div>          
                            {/* {4}. {k} : {v} */}
                        </div>,
                        i===5 &&
                        <div className="rectangle" key={i}>                   
                        <div>
                            <Rectangle text1={k} text2="SHIFT" text3={v} color="#D9D9D9"/>
                        </div>            
                            {/* {5}. {k} : {v} */}
                        </div>,
                        i===6 &&
                        <div className="rectangle" key={i}>                     
                        <div>
                            <Rectangle text1={k} text2="SHIFT" text3={v} color="#D9D9D9"/>
                        </div>          
                            {/* {6}. {k} : {v} */}
                        </div>,
                        i===7 &&
                        <div className="rectangle" key={i}>                        
                        <div>
                            <Rectangle text1={k} text2="SHIFT" text3={v} color="#D9D9D9"/>
                        </div>       
                            {/* {7}. {k} : {v} */}
                        </div>,
                        i===8 &&
                        <div className="rectangle" key={i}>                      
                        <div>
                            <Rectangle text1={k} text2="SHIFT" text3={v} color="#D9D9D9"/>
                        </div>         
                            {/* {8}. {k} : {v} */}
                        </div>,
                        i===9 &&
                        <div className="rectangle" key={i}>                     
                        <div>
                            <Rectangle text1={k} text2="SHIFT" text3={v} color="#a9d1ff"/>
                        </div>          
                            {/* {9}. {k} : {v} */}
                        </div>,
                        i===10 &&
                        <div className="rectangle" key={i}>                     
                        <div>
                            <Rectangle text1={k} text2="SHIFT" text3={v} color="#a9d1ff"/>
                        </div>          
                            {/* {10}. {k} : {v} */}
                        </div>,
                        i===11 &&
                        <div className="rectangle" key={i}>                     
                        <div>
                            <Rectangle text1={"Total Hours"} text2="" text3={v} color="#D9D9D9"/>
                        </div>          
                            {/* {10}. {k} : {v} */}
                        </div>,
                        i===12 &&
                        <div className="rectangle" key={i}>                     
                        <div>
                            <Rectangle text1={"Total Break"} text2="" text3={v} color="#D9D9D9"/>
                        </div>          
                            {/* {10}. {k} : {v} */}
                        </div>
                        
                       
                        
                    ]
                    )
                    
                }
                
            </div>

            <div style={styles}>
            <HoursDiagram  />
            </div>

            
            
            
            

        </div>
        
    
    

    )
}