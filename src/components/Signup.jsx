import React, {useState} from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { registerUser } from "../services/authServices";

export default function Signup () {
    const initialFormState = {
        displayName: "",
        email: "",
        password: "",
        
    };

    const [formState, setFormState] = useState(initialFormState)
    const {dispatch} = useGlobalState();
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        try {
            if (!formState.email || !formState.password || !formState.displayName) {
                setErrorMessage('Name, Email and password are required fields.');
                
            }
            else {
                registerUser(formState)
                .then((data) => {
                    let displayName = data.displayName;
                    let token = data.idToken;
                    let userClaims = data.claims
                    if (!!data.error === true){
                        console.error("data.error.code is: ",data.error.code)
                        return setErrorMessage("Email or Password is invalid")
                    }
                    //setItem sets values in sessionStorage started when the webPage is loaded
                    sessionStorage.setItem("idToken", token);
                    sessionStorage.setItem("displayName", displayName);
                    console.log("SIGN UP DATA is: ",data)
                    sessionStorage.setItem("userClaims", JSON.stringify(userClaims));
                    
                    
                    // dispatch is to set values in store(initialState)
                    dispatch({ type: "setLoggedInUser", data: displayName });
                    dispatch({ type: "setToken", data: token });
                    console.log("Dispatching UserClaims Data Reducer")
                    dispatch({ type: "setUserClaims", data: userClaims });

                    if (userClaims.adminUser === true) {
                        console.log (`You're being redirected to admin page`)
                        navigate("/employer")
                    } else if (userClaims.regularUser === true) {
                        console.log (`You're being redirected to Employee page`)
                        navigate("/employee")
                    } 
                }).catch((error) => {
                    setErrorMessage(error.code)
                    console.error("ERROR IS",error)                    
                }
            )}
            
            
        }catch(error){
            console.error("ERROR IS: ", error);
        }
    };
        
    
    const theme = createTheme();


    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                
                                name="displayName"
                                required
                                fullWidth
                                value={formState.displayName}
                                onChange={handleChange}
                                label="Name"
                                autoFocus
                                />
                            </Grid>
                           
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                type="email"
                                label="Email Address"
                                name="email"
                                value={formState.email}
                                onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                                />
                            </Grid>
                           
                        </Grid>
                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit}
                            >
                            Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link onClick={() => navigate('/signin')} variant="body2">
                                Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    </Box>
                    {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                </Container>
            </ThemeProvider>
        </>
    )
}