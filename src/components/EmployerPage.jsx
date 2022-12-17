import { Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMongoUser } from "../services/authServices";
import { getOneMongoUser } from "../services/authServices";

export default function EmployerPage () {


    const [users, setUsers] = useState([])
    const {id} = useParams()

    const [user, setUser] = useState([])

    let navigate = useNavigate();

    useEffect(() => {
        getMongoUser()
        .then(data => setUsers(data))
        .catch((error) => console.log(error))
    }, [])

    console.log("USERS ARE: ",users.allEmployees)
    console.log("USERS TYPE IS: ",typeof users.allEmployees)

    function handleClick(event) {
        event.preventDefault()
        getOneMongoUser(id)
        .then(data => setUser(data))
        .catch((error) => console.log(error))
        navigate.push(`/check-employee/${id}`)
    }



    // Show all employee names

    return (
        <div>
            <h3>Employer Page</h3>
            <Link to="/">Go to MAIN page</Link>
            <Typography>List of all employees</Typography>
            <div>{users.allEmployees &&
                <ul>
                    {users.allEmployees.map((person, i) => 
                        <Link onClick={handleClick}>
                        <Typography>
                            {<li key={i}>
                                {i} :  
                                {person.name}
                            </li>}
                            </Typography> 
                        </Link>
                    )}
                </ul>
                }
            </div>

        </div>
    )
}