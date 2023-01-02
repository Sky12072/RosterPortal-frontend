import { Typography } from "@mui/material";
import React, {useEffect, useState, useReducer} from "react";
import { Link} from "react-router-dom";
import { getMongoUser } from "../services/authServices";
import reducer from "../utils/stateReducer"
import { useGlobalState } from "../utils/stateContext";


export default function EmployerPage () {

    // we don't need useParams here because we don't use it here but we pass the value of mongoUser id as params' value on line 36
    const [users, setUsers] = useState([])

    // const [store, dispatch] = useReducer(reducer, initialState);
    const {store, dispatch} = useGlobalState();
    const {userClaims} = store
    

    

    useEffect(() => {
        getMongoUser()
        .then(data => setUsers(data))
        .catch((error) => console.log(error))
    }, [])

    console.log("USERS ARE: ",users.allEmployees)
    console.log("USERS TYPE IS: ",typeof users.allEmployees)
    

    // Show all employee names
    return (
        <div>
            <h3>Employer Page</h3>
            <Link to="/">Go to MAIN page</Link>
            <Typography>List of all employees</Typography>
            <div>{users.allEmployees &&
                <ul>
                    {users.allEmployees.map((person, index) => 
                        // This is when you pass using mongoDB user id as a params
                        <Link to={`/check-employee/${person._id}`} key={index} >
                            {
                            <Typography >                        
                                {index} :  
                                {person.name}, -
                                {person._id},
                                {/* {userClaims.adminUser? "ADMIN USER" : "NOT ADMIN"} */}
                                {/* {userClaims.regularUser? userClaims.regularUser : "Not an Employee" }
                                {userClaims == null ? userClaims.regularUser : "Neither" } */}
                                
                                {/* {userClaims.adminUser.map((userstatus) => {
                                    {(() => {
                                        if (userstatus.adminUser === true) {
                                        return (
                                            <div>Employer</div>
                                        )
                                        } else if (userstatus.regularUser === true) {
                                        return (
                                            <div>Employee</div>
                                        )
                                        } else {
                                        return (
                                            <div>NO STATUS</div>
                                        )
                                        }
                                    })()}

                                })} */}
                                
                            </Typography> 
                            }
                            
                        </Link>
                    )}
                </ul>
                }
            </div>

        </div>
    )
}