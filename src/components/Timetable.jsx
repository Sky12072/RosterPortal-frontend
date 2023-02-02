import DataTable from 'react-data-table-component';
import React, {useEffect, useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import '../assets/table.css'
import { useGlobalState } from "../utils/stateContext";
import { getMongoUser } from "../services/authServices";
import { Button } from "@mui/material";

function Timetable() {
    const [users, setUsers] = useState([])
    
    let navigate = useNavigate();
    

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
            name: 'Monday',
            selector: row => row[0].monday,
        },
        {
            name: 'Tuesday',
            selector: row => row[0].tuesday,
        },
        {
            name: 'Wednesday',
            selector: row => row[0].wednesday,
        },
        {
            name: 'Thursday',
            selector: row => row[0].thursday,
        },
        {
            name: 'Friday',
            selector: row => row[0].friday,
        },
        {
            name: 'Saturday',
            selector: row => row[0].saturday,
        },
        {
            name: 'Sunday',
            selector: row => row[0].sunday,
        },
        {
            name: 'Total Working Hours',
            selector: row => row[0].hours,
        },
        {
            name: 'Total Break Time',
            selector: row => row[0].totalbreak,
        },
    ];
    users.allEmployees && users.allEmployees.map((person, index) => {
        console.log("person timetable is: ", person.name)
        console.log("Index timetable is:", index)
        console.log("Monday timetable is:", person.Monday)
    })

    const data = users.allEmployees && users.allEmployees.map((person, index) => [
        {
            id: index,
            name: person.name,
            monday: person.Monday,
            tuesday: person.Tuesday,
            wednesday: person.Wednesday,
            thursday: person.Wednesday,
            friday: person.Friday,
            saturday: person.Saturday,
            sunday: person.Sunday,
            hours: person.TotalHours,
            totalbreak: person.TotalBreak
            
        },
        
    ])

    function changeButton(event) {
        event.preventDefault()
        navigate(`/employer`)
    }



    useEffect(() => {
        getMongoUser()
        .then(data => setUsers(data))
        .catch((error) => console.log(error))
    }, [])

    return (
        <div style={{
            borderRadius: 35,
            backgroundColor: "#fce9b3",
            padding: "18px 250px",
            fontSize: "18px",
            margin: "30px"
        }}>
            {/* <Link to="/employer">Go to Employer page</Link> */}
            <Button variant="contained" color="success" style={{
                borderRadius: 35,
                backgroundColor: "#ff8791",
                padding: "18px 36px",
                fontSize: "18px",
                marginBottom: "20px"
            }} onClick={changeButton}>
            Main Page
            </Button>
            <div className='table'>
                    
                <DataTable 
                columns ={columns}
                data={data}
                pagination={true}
                />
            </div>
        </div>
        
        
    );
};
export default Timetable