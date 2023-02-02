import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { loginUser } from "../services/authServices";


export default function Signin() {

    const initialFormState = {
		email: '', 
		password: ''
	}
	const [formState, setFormState] = useState(initialFormState)

	const {store, dispatch} = useGlobalState()

    const [errorMessage, setErrorMessage] = useState('');
    

    let navigate = useNavigate();

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            if (!formState.email || !formState.password) {
                setErrorMessage('Email and password are required fields.');
                
            }
            else {
                loginUser(formState)
                .then((data) => {
                    console.log("DATAAA ISSS",data)
                    console.log(!!data.error)
                    if (!!data.error == true){
                        console.error("data.error.code is: ",data.error.code)
                        return setErrorMessage("Email or Password are invalid")
                        
                        
                    }
                    
                    let displayName = data.displayName;
                    let token = data.idToken;
                    let userClaims = data.claims
                    //setItem sets values in sessionStorage started when the webPage is loaded
                    sessionStorage.setItem("idToken", token);
                    sessionStorage.setItem("displayName", displayName);
                    console.log("SIGN IN DATA is: ",data)
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
                 
                }) .catch((error) => {
                    setErrorMessage(error.code)
                    console.error("ERROR IS",error)                    
                })      
                             
            }
                    

                    
        } catch(error){
            console.error(error);
            
            
        }
        
           
    };

    // useEffect(() => {
    //     if (typeof sessionStorage.userClaims === 'string') {
    //         sessionStorage.setItem("userClaims", JSON.parse(userClaims));
    //     //   dispatch('setUserClaims', JSON.parse(sessionStorage.userClaims));
    //     //   dispatch('setUserClaims', JSON.parse(userClaims));
    //     }
    //   }, []);

    const theme = createTheme();

    return (
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
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                
                label="Email Address"
                name="email"
                value={formState.email}
                onChange={handleChange}
                autoFocus
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                
                />
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
                >
                Sign In
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link onClick={() => navigate('/signup')} variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        </Container>
        </ThemeProvider>
    );
}