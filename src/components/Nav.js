import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, ToolBar, IconButton, Stack, Button, Box, Typography, Container, Toolbar } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

    return (
        <AppBar>
            <ThemeProvider theme={theme}>
            <Toolbar>
            
                {/* <Container maxWidth="lg"> */}
                    <Stack direction='row' spacing={2}>
                        <Button color='inherit' href="/">Home</Button>
                        <Button color='inherit' href="/">About</Button>
                        
                            
                        <Button variant="contained" color='primary' onClick={() => navigate('/signup')}>Sign Up</Button>
                        <Button color='primary' variant="contained" onClick={() => navigate('/signin')}>Sign In</Button> 
                        
                    </Stack>
                    {/* The signup and signin routes here to connect from signup button to signup component (just redirection to the actual signin and signup component) */}
                    
                {/* </Container> */}
            
            </Toolbar>
            </ThemeProvider>
        </AppBar>
    )
}