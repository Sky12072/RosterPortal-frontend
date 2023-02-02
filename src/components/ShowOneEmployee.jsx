import { Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneMongoUser } from "../services/authServices";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deleteUserMongoDB, deleteUserFirebase } from "../services/authServices";
import DataTable from 'react-data-table-component';
import '../assets/table.css'

export default function ShowOneEmployee () {
    console.log("THis is ShowOneEmployee.js ")

    const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
        main: '#0971f1',
        darker: '#053e85',
        },
        neutral: {
        main: '#64748B',
        contrastText: '#fff',
        },
    },
    });

    let navigate = useNavigate();

    

    // to get user ID value as a page title
    const [user, setUser] = useState([])


    const {id} = useParams()

    
    

    // to get user ID value as a page title
    useEffect(() => {
        getOneMongoUser(id)
        .then(data => setUser(data))
        .catch((error) => console.log(error))
    }, [id])
   
    console.log("Show 1 employee IS: ",user)
    

    const columns = [
        {
            name: 'Number',
            selector: row => row[0].id,            
        },
        {
            name: 'Key',
            selector: row => row[0].key,            
        },
        {
            name: 'value',
            selector: row => row[0].value,
        },
        
    ];

   
    const data = user && Object.entries(user).map(([k,v], i) => [ 
        {
            id: i,
            key: k,
            value: v,
        }
        
    ])


    function changeButton(event) {
        event.preventDefault()
       
        switch(event.target.name){
            case 'home':
                navigate('/employer')
                console.log("Navigate to home page")
                break;
            case 'update':
                navigate(`/update-employee/${id}`)
                console.log("Navigate to update page")
                break;
            case 'timetable':
                navigate('/timetable')
                console.log("Navigate to timetable page")
                break;
        }
    }

    function deleteClick(event) {
        event.preventDefault()
        deleteUserFirebase(user.employeeID)
        .then((data) => {
            console.log("deleteClick FirebaseUser-data is: ", data)
        })
        deleteUserMongoDB(id)
        .then((data) => {
            console.log("deleteClick MongoUser-data is: ", data)
        })
        
        navigate("/employer")
        
    }

    return (
        <div style={{
            
            padding: "0px 250px",
            
        }}>
            {/* <h1>Employer Page</h1> */}
            {/* <Link to="/">Go to MAIN page</Link> */}
            <Button 
            variant="contained" 
            name='timetable'
            style={{
                borderRadius: 35,
                backgroundColor: "#21b6ae",
                padding: "18px 36px",
                fontSize: "18px",
                margin: "30px 0px 0px 30px"
            }} onClick={changeButton}>
            Time Table
            </Button>

            <Button 
            variant="contained" 
            color="success" 
            name="home"
            style={{
                borderRadius: 35,
                backgroundColor: "#ff8791",
                padding: "18px 36px",
                fontSize: "18px",
                margin: "30px 0px 0px 30px"
            }} onClick={changeButton}>
            Main Page
            </Button>
            {/* <Link to="/timetable">Go to TimeTable</Link> */}

            <Typography variant="h3" sx={{textAlign:"center", mb:3}}>
                Employee Details
            </Typography>
            <div className='table'  style={{
            
            backgroundColor: "#fce9b3",
            padding: "18px 36px",
            fontSize: "18px",
            margin: "30px"
            }}>
                    
                <DataTable 
                columns ={columns}
                data={data}
                pagination={true}
                />
            </div>
            <Button
                name="update"
                type="submit"
                variant="contained"
                sx={{ mt: 0, mr: 2, mb: 5, ml: 3 }}
                onClick={changeButton}
                >
                Update Roster
            </Button>
            <ThemeProvider theme={theme}>
                <Button 
                    color="primary" 
                    variant="outlined" 
                    startIcon={<DeleteIcon />} 
                    sx={{ mt: 0, mr: 3, mb: 5, ml: 2  }}
                    onClick={deleteClick}
                    >
                    Delete Employee
                </Button>
            </ThemeProvider>
        </div>
    );


}