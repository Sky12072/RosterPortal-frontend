import { Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { getMongoUser } from "../services/authServices";


export default function EmployerPage () {


    const [users, setUsers] = useState([])
    const {id} = useParams()

    

    useEffect(() => {
        getMongoUser()
        .then(data => setUsers(data))
        .catch((error) => console.log(error))
    }, [])

    console.log("USERS ARE: ",users.allEmployees)
    console.log("USERS TYPE IS: ",typeof users.allEmployees)
    console.log("USER PARAMS: ",id)
    console.log("USE Params EmployerPage: ",useParams())

    // Show all employee names
    return (
        <div>
            <h3>Employer Page</h3>
            <Link to="/">Go to MAIN page</Link>
            <Typography>List of all employees</Typography>
            <div>{users.allEmployees &&
                <ul>
                    {users.allEmployees.map((person, index) => 
                        <Link to={`/check-employee/${person._id}`} key={index} >
                            {
                            <Typography >                        
                                {index} :  
                                {person.name}, -
                                {person._id}
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