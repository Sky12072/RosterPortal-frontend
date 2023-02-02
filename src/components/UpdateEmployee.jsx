import { Typography } from "@mui/material";
import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneMongoUser } from "../services/authServices";
import { updateMongoUser } from "../services/authServices";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useGlobalState } from "../utils/stateContext";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function UpdateEmployee() {
    const initialFormState = {
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: '',
        Sunday: '', 
        TotalHours: '',
        TotalBreak: ''
	}

    // to update form text value
	const [formState, setFormState] = useState(initialFormState)

    // to submit updated value using reducer
	const {dispatch} = useGlobalState()

    // to get user ID value as a page title
    const [user, setUser] = useState([])

    const navigate = useNavigate()
    const {id} = useParams()

    // to get user ID value as a page title
    useEffect(() => {
        getOneMongoUser(id)
        .then(data => setUser(data))
        .catch((error) => console.log(error))
    }, [id])

    // to update form text value using useState
    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        updateMongoUser(id, formState).then((data) => {          
            console.log("UPDATE ROSTER DATA IS: ",data)  
            dispatch({ type: "updateRoster", data: data});
            navigate(`/check-employee/${id}`)
        })
        .catch((error) => console.log(error)); 
    };

    function cancelButton(event) {
        event.preventDefault()
        navigate(`/check-employee/${id}`)
    }

    function changeButton(event) {
        event.preventDefault()
        navigate(`/employer`)
    }
    
    const theme = createTheme();


    return (


        <div style= {{        
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <h3>Update Employee Roster</h3>
            <h3>Employee Name: {user.name}</h3>
            <h3>Employee ID: {id}</h3>
            <Button variant="contained" color="success" style={{
                borderRadius: 35,
                backgroundColor: "#ff8791",
                padding: "18px 36px",
                fontSize: "18px",
                margin: "30px"
            }} onClick={changeButton}>
            Main Page
            </Button>
            
            <Typography component="h1" variant="h5" sx={{
                        marginTop: 8,
                        mb:4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
            }}>
                New Rosters
            </Typography>

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs" sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        alignContent: 'center'
                    }}>
                    <CssBaseline />

                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        
                    }}
                    >   
                     
                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                        Week Period: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="WeekPeriod"
                                
                                    value={formState.WeekPeriod}
                                    onChange={handleChange}
                                    label="Enter new WeekPeriod"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        
                        </Box>
                    
                    
                    
                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                            Monday: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="Monday"
                                    
                                    
                                    value={formState.Monday}
                                    onChange={handleChange}
                                    label="Enter new hours"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        
                        

                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                            Tuesday: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="Tuesday"
                                    
                                    value={formState.Tuesday}
                                    onChange={handleChange}
                                    label="Enter new hours"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                            Wednesday: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="Wednesday"
                                    
                                    value={formState.Wednesday}
                                    onChange={handleChange}
                                    label="Enter new hours"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                            Thursday: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="Thursday"
                                    
                                    value={formState.Thursday}
                                    onChange={handleChange}
                                    label="Enter new hours"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                            Friday: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="Friday"
                                    
                                    value={formState.Friday}
                                    onChange={handleChange}
                                    label="Enter new hours"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                            Saturday: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="Saturday"
                                   
                                    value={formState.Saturday}
                                    onChange={handleChange}
                                    label="Enter new hours"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                            Sunday: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="Sunday"
                                   
                                    value={formState.Sunday}
                                    onChange={handleChange}
                                    label="Enter new hours"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                            Total Work: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="TotalHours"
                                   
                                    value={formState.TotalHours}
                                    onChange={handleChange}
                                    label="Enter new hours"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        

                        <Typography component="h1" variant="h5" sx={{ m: 3}}>
                           Total Break: 
                        </Typography>
                        <Box component="form" noValidate >
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                    name="TotalBreak"
                                    
                                    
                                    value={formState.TotalBreak}
                                    onChange={handleChange}
                                    label="Enter new hours"
                                    autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        

                        
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mr: 2, mb: 5, ml: 3 }}
                        
                        onClick={handleSubmit}
                        >
                        Confirm Update
                    </Button>
                    
                    <Button 
                        color="primary" 
                        variant="outlined" 
                        sx={{ mt: 3, mr: 3, mb: 5, ml: 2 }}
                        onClick={cancelButton}
                        >
                        Cancel
                    </Button>
                </Container>
            </ThemeProvider>           

        </div>
    )



}