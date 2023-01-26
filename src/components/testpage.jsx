import { Typography,  Grid } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneMongoUser, MatchMongoUser } from "../services/authServices";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useGlobalState } from "../utils/stateContext";
import { HoursDiagram } from "../userpage/HoursDiagram";


export default function EmployeePage () {

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

    
    const {store, dispatch} = useGlobalState();
    const {displayName, token, userClaims} = store
    

    // to get user ID value as a page title
    const [user, setUser] = useState([])

    console.log("Employee user is: ", user)
    // const {id} = useParams()

    // console.log("params is: ", id)
    

    // to get user ID value as a page title
    useEffect(() => {
        MatchMongoUser(userClaims.user_id)
        .then(data => setUser(data))
        .catch((error) => console.log(error))
    }, [])

    console.log("getOneMongoUser IS: ",user._id)
    
    return (
        <div>
            <h1>Employee Page</h1>
            <h3>Employee Name: {displayName}</h3>
            <h3>Employee Mongo ID: {user._id}</h3>
            <h3>Employee Firebase ID: {userClaims.user_id}</h3>
            <Link to="/">Go to MAIN page</Link>
            <Link to="/employer">Go to Employer page</Link>
            <div>
                {user &&
                    
                    Object.entries(user).map(([k,v], i) => [
                        i===0 &&
                        <Typography key={i}>   
                        {/* IMPORTANT: 
                        1.This "ID" Originally was _id, so please use the original key to modify
                        2. number {1} to {9} are only for display purposes and original index identifer was {i}. ie. {1} actually 0 ( i=== 0 ). */}
                            {1}. {"ID"} : {v}
                        </Typography>,
                        i===1 &&
                        <Typography key={i}>                            
                            {2}. {k} : {v}
                        </Typography>,
                        i===3 &&
                        <Typography key={i}>                            
                            {3}. {k} : {v}
                        </Typography>,
                        i===4 &&
                        <Typography key={i}>                            
                            {4}. {k} : {v}
                        </Typography>,
                        i===5 &&
                        <Typography key={i}>                            
                            {5}. {k} : {v}
                        </Typography>,
                        i===6 &&
                        <Typography key={i}>                            
                            {6}. {k} : {v}
                        </Typography>,
                        i===7 &&
                        <Typography key={i}>                            
                            {7}. {k} : {v}
                        </Typography>,
                        i===8 &&
                        <Typography key={i}>                            
                            {8}. {k} : {v}
                        </Typography>,
                        i===9 &&
                        <Typography key={i}>                            
                            {9}. {k} : {v}
                        </Typography>,
                        i===10 &&
                        <Typography key={i}>                            
                            {10}. {k} : {v}
                        </Typography>
                        
                       
                        
                    ]
                    )
                    
                }
                
            </div>

            
            <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
            >
                <HoursDiagram sx={{ height: '100%' }} />
            </Grid>
                
            

        </div>
        
    
    

    )
}