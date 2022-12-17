import { Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getMongoUser } from "../services/authServices";

export default function EmployerPage () {


    const [users, setUsers] = useState([])

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
                    {users.allEmployees.map(person => (
                        <Link onClick={handleClick}>
                        <Typography><li key={person.id}>{person.name}</li></Typography> 
                        </Link>
                    ))}
                </ul>
                }
            </div>

        </div>
    )
}