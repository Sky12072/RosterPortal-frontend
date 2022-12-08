import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


export default function Nav() {
    let navigate = useNavigate();

    return (
        <nav>
             <Box sx={{bgcolor: 'lightblue', py: 2 }}>
                <Container maxWidth="lg">
                    <Typography align= 'center' >
                        <a href="/">Home</a>
                        <a href="/">About </a>
                        {/* The signup and signin routes here to connect from signup button to signup component (just redirection to the actual signin and signup component) */}
                        <Button variant="contained"  onClick={() => navigate('/signup')}>Sign Up</Button>
                        <Button variant="contained" onClick={() => navigate('/signin')}>Sign In</Button> 
                    </Typography>
                </Container>
            </Box>
        </nav>
    )
}