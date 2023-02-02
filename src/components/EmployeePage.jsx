import React, {useEffect, useState} from "react";
import { MatchMongoUser } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";
import HoursDiagram  from "../userpage/HoursDiagram";
import Rectangle from '../userpage/Rectangle'
import '../assets/rectangle.css'


export default function EmployeePage () {

    

    const styles = {        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    
    const {store} = useGlobalState();
    const {displayName, userClaims} = store
    

    // to get user ID value as a page title
    const [user, setUser] = useState([])

    // to get user ID value as a page title
    useEffect(() => {
        MatchMongoUser(userClaims.user_id)
        .then(data => setUser(data))
        .catch((error) => console.log(error))
    }, [userClaims.user_id])

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
            
            <h3>Week Period: {user.WeekPeriod}</h3>
            
            <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: "center", margin:"20px"}}>
                {user &&
                    
                    Object.entries(user).map(([k,v], i) => [
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
                    ])
                }
                
            </div>

            <div style={styles}>
            <HoursDiagram  />
            </div>
        </div>
    )
}