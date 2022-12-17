import { Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneMongoUser } from "../services/authServices";

export default function ShowOneEmployee () {
    console.log("THis is ShowOneEmployee.js ")

    const [user, setUser] = useState([])
    const {id} = useParams()

    let navigate = useNavigate();


    useEffect(() => {
        getOneMongoUser(id)
        .then(data => setUser(data))
        .catch((error) => console.log(error))
    }, [id])

    console.log("getOneMongoUser IS: ",user)
    console.log("getOneMongoUser Object.keys IS: ",Object.keys(user))
    

    // Show all employee names

    return (
        <div>
            <h3>getOneMongoUser Page</h3>
            <Link to="/">Go to MAIN page</Link>
            <div>
                {user &&
                    
                    Object.entries(user).map(([k,v], i) => [
                        i===0 &&
                        <Typography key={i}>   
                        {/* This "ID" Originally was _id, so please use the original key to modify */}
                            {i}. {"ID"} : {v}
                        </Typography>,
                        i===1 &&
                        <Typography key={i}>                            
                            {i}. {k} : {v}
                        </Typography>,
                        i===3 &&
                        <Typography key={i}>                            
                            {i}. {k} : {v}
                        </Typography>,
                        i===4 &&
                        <Typography key={i}>                            
                            {i}. {k} : {v}
                        </Typography>,
                        i===5 &&
                        <Typography key={i}>                            
                            {i}. {k} : {v}
                        </Typography>,
                        i===6 &&
                        <Typography key={i}>                            
                            {i}. {k} : {v}
                        </Typography>,
                        i===7 &&
                        <Typography key={i}>                            
                            {i}. {k} : {v}
                        </Typography>,
                        i===8 &&
                        <Typography key={i}>                            
                            {i}. {k} : {v}
                        </Typography>,
                        i===9 &&
                        <Typography key={i}>                            
                            {i}. {k} : {v}
                        </Typography>
                        
                    ]
                    )
                }
            </div>

            {/* <div>{JSON.stringify(user, null, 2)}</div>

            <div>
                {JSON.stringify(user, null, 2)}
            
            </div> */}

            {/* <div>{ Object.keys(user) >=1 &&
                <ul>
                    {JSON.stringify(user).map(data => (
                        
                        <Typography>
                            <li key={data.id}>
                                {data}:
                                
                            </li>
                        </Typography> 
                        
                    ))}
                </ul>
                }
            </div> */}

        </div>
    )
}