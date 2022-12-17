import { Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneMongoUser } from "../services/authServices";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useGlobalState } from "../utils/stateContext";


export default function UpdateEmployee() {
    const initialFormState = {
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: '',
        Sunday: ''
	}

	const [formState, setFormState] = useState(initialFormState)
	const {dispatch} = useGlobalState()

    const navigate = useNavigate()
    const {id} = useParams()
    

    return (
        <div>
            <h3>getOneMongoUser Page</h3>
            <h3>Employee Name: {user.name}</h3>
            <h3>Employee ID: {id}</h3>
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
                        </Typography>
                        
                    ]
                    )
                }
            </div>

            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}>
                Confirm Update
            </Button>
            <ThemeProvider theme={theme}>
                <Button color="primary" variant="outlined" startIcon={<DeleteIcon />} sx={{ mt: 3, mb: 2 }}>
                    Cancel
                </Button>
            </ThemeProvider>
            
            

            

        </div>
    )



}