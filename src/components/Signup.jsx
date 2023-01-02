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

    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit (event) {
        event.preventDefault();
        registerUser(formState).then((data) => {
            let displayName = data.displayName;
            let token = data.token;
            let userClaims = data.claims
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", displayName);
            sessionStorage.setItem("userClaims", userClaims);
            dispatch({ type: "setLoggedInUser", data: displayName });
            dispatch({ type: "setToken", data: token });
            dispatch({ type: "setUserClaims", data: userClaims });
            if (userClaims.adminUser === true) {
                console.log (`You're being redirected to admin page`)
                navigate("/employer")
            } else if (userClaims.regularUser === true) {
                console.log (`You're being redirected to Employee page`)
                navigate("/employee")
            } 
        })
        .catch((error) => console.log(error)); 
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
                            {/* <Grid item xs={12} sm={6}>
                                <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                                />
                            </Grid> */}
                            <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                
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
                            {/* <Grid item xs={12}>
                                <TextField
                                required
                                fullWidth
                                name="password_confirmation"
                                label="Confirm Password"
                                type="password"
                                value={formState.password_confirmation}                  
                                onChange={handleChange}
                                />
                            </Grid> */}
                            {/* <Grid item xs={12}>
                                <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid> */}
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
                    
                </Container>
            </ThemeProvider>
        </>
    )
}