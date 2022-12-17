import { Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneMongoUser } from "../services/authServices";

export default function ShowOneEmployee () {


    const [user, setUser] = useState([])
    const {id} = useParams()

    let navigate = useNavigate();


    useEffect(() => {
        getOneMongoUser(id)
        .then(data => setUser(data))
        .catch((error) => console.log(error))
    }, [id])

    console.log("getOneMongoUser IS: ",user)

    // Show all employee names

    return (
        <div>
            <h3>getOneMongoUser Page</h3>
            <Link to="/">Go to MAIN page</Link>
            <Typography>{user}</Typography>
            {/* <div>{users.allEmployees &&
                <ul>
                    {users.allEmployees.map(person => (
                        <Link>
                        <Typography><li key={person.id}>{person.name}</li></Typography> 
                        </Link>
                    ))}
                </ul>
                }
            </div> */}

        </div>
    )
}