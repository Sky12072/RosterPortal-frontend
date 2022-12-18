import React, {useState}from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Stack, Button, Toolbar, Box, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useGlobalState } from "../utils/stateContext";
import { logoutUser } from "../services/authServices";


export default function Nav() {

    

    const theme = createTheme({
        palette: {
            primary: {
                main: "#f5f6f7",
                contrastText: "black",
            },
        },
    });

    let navigate = useNavigate();
    const {store, dispatch} = useGlobalState();
    const {displayName, token, userClaims} = store

    // Nav buttons useState
    const [state, setState] = useState(false)

    function handleSignOut(event) {
		event.preventDefault()
        console.log('loggedinUser1: ', displayName)       
        console.log('user Token1: ', token)
        console.log('Handlesignout userclaims: ', userClaims)
        
		logoutUser(displayName)
		.then((data) => {
            console.log("Logout data is: ", data)
        
            
			dispatch({type: 'setLoggedInUser', data: null})
			dispatch({type: 'setToken', data: null})
			dispatch({type: 'setUserClaims', data: null})
            
            
            
            navigate('/signedout')
		})
        
	}

    function changeButton(event) {
        event.preventDefault()
        setState(prevState => !prevState)
        console.log("Button Clicked")
        console.log(event.target.name)
        switch(event.target.name){
            case 'home':
                navigate('/')
                console.log("Navigate to home page")
                break;
            case 'about':
                navigate('/about')
                console.log("Navigate to about page")
                break;
        }
    }
    

    return (
        // <AppBar>
            <ThemeProvider theme={theme}>
            <Toolbar>
            
                {/* <Box maxWidth="lg"> */}
                    <Stack direction='row' spacing={2}>
                        <Button color = 'inherit' name='home' onClick={changeButton}>Home</Button>
                        <Button color='inherit' name='about' onClick={changeButton} >About</Button>
                        {displayName ? 
                        <>
                        <Button variant="contained" color='primary' onClick={handleSignOut}>Sign Out</Button>
                        
                        <Box component="span" m="{10}">Hi, {displayName} ! </Box>
                        </>                    
                    :
                        <> 
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