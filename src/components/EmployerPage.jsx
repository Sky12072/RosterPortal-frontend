import { Typography, Button } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { getMongoUser } from "../services/authServices";
import DataTable from 'react-data-table-component';
import '../assets/table.css'



export default function EmployerPage () {

    // we don't need useParams here because we don't use it here but we pass the value of mongoUser id as params' value on line 36
    const [users, setUsers] = useState([])

    let navigate = useNavigate();    

    useEffect(() => {
        getMongoUser()
        .then(data => setUsers(data))
        .catch((error) => console.log(error))
    }, [])

    function changeButton(event) {
        event.preventDefault()
        navigate(`/timetable`)
    }

    const columns = [
        {
            name: 'Number',
            selector: row => row[0].id,
        },
        {
            name: 'Name',
            selector: row => (
                <Link to={`/check-employee/${row[0].uniqueid}`}>{row[0].name}</Link>
            )
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
            uniqueid: person._id
        },
        
    ])

    // Show all employee names
    return (
        <div style={{
            borderRadius: 35,
            backgroundColor: "#fce9b3",
            padding: "18px 250px",
            fontSize: "18px",
            margin: "30px"
        }}>
           
            <Button variant="contained" style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                padding: "18px 36px",
                fontSize: "18px",
                marginBottom: "20px"
            }} onClick={changeButton}>
            Time Table
            </Button>

            <Typography variant="h3" sx={{textAlign:"center", mb:3}}>List of all Employees</Typography>
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