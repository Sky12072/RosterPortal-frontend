import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Stack, Button, Toolbar, Box, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useGlobalState } from "../utils/stateContext";
import { logoutUser } from "../services/authServices";


export default function Nav() {

    let navigate = useNavigate();

    const theme = createTheme({
        palette: {
            primary: {
                main: "#f5f6f7",
                contrastText: "black",
            },
        },
    });

    const {store, dispatch} = useGlobalState();
    const {loggedInUser, auth} = store

    function handleSignOut(event) {
		event.preventDefault()
        console.log('loggedinUser1: ', loggedInUser)
       
        console.log('user Token1: ', auth.token)
		logoutUser(loggedInUser)
		.then((data) => {
            let displayName = data.displayName;
            let token = data.token;
			dispatch({type: 'setLoggedInUser', data: null})
			dispatch({type: 'setToken', data: null})
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("user", displayName);
            // console.log('loggedinUser2: ', loggedInUser)
            console.log('displayName2: ', displayName)
            console.log('user Token2: ', token)
            navigate('/signedout')
		})
        console.log('loggedinUser3: ', loggedInUser)
      
        console.log('user Token3: ', auth.token)
	}


    

    return (
        // <AppBar>
            <ThemeProvider theme={theme}>
            <Toolbar>
            
                {/* <Box maxWidth="lg"> */}
                    <Stack direction='row' spacing={2}>
                        {loggedInUser && loggedInUser !== 'undefined' ? 
                        <>

                        <Button onClick={() => navigate('/')} color='inherit' href="/">Home</Button>
                        <Button color='inherit' >About</Button>
                        
                            
                        <Button variant="contained" color='primary' onClick={handleSignOut}>Sign Out</Button>
                        
                        
                        <Box component="span" m="{10}">Hi, {loggedInUser} ! </Box>

                        </>
                    
                    :

                        <>

                        <Button onClick={() => navigate('/')} color='inherit' >Home</Button>
                        <Button color='inherit' href="/">About</Button>
                        
                            
                        <Button variant="contained" color='primary' onClick={() => navigate('/signup')}>Sign Up</Button>
                        <Button color='primary' variant="contained" onClick={() => navigate('/signin')}>Sign In</Button> 
                        
                        
                        
                        </>
                    

                        

                        }
                    </Stack>
                    {/* The signup and signin routes here to connect from signup button to signup component (just redirection to the actual signin and signup component) */}
                    
                {/* </Box> */}
            
            </Toolbar>
            </ThemeProvider>
        // </AppBar>
    )
}