import { Typography } from "@mui/material";
import React, {useEffect, useState, useReducer} from "react";
import { Link} from "react-router-dom";
import { getMongoUser } from "../services/authServices";
import reducer from "../utils/stateReducer"
import { useGlobalState } from "../utils/stateContext";
import DataTable from 'react-data-table-component';



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
    
    const columns = [
        {
            name: 'Number',
            selector: row => row[0].id,
            
        },
        {
            name: 'Name',
            selector: row => row[0].name,
            
        },
        {
            name: 'Unique ID',
            selector: row => row[0].uniqueid,
        }
    ];


    const data = users.allEmployees && users.allEmployees.map((person, index) => [
        {
            id: index,
            name: person.name,
            uniqueid: person.employeeID
            
        },
        
    ])
    // Show all employee names
  
            

    
    return (
        <div>
            <h1>Employer Page</h1>
            <Link to="/">Go to MAIN page</Link>
            <Link to="/timetable">Go to TimeTable</Link>

            <Typography>List of all employees</Typography>
                <div className='table'>
                        
                    <DataTable 
                    columns ={columns}
                    data={data}
                    pagination={true}
                    />
                </div>
        </div>
        
        
    );
    
}