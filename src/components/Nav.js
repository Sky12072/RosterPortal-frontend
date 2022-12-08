import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Nav() {


    return (
        <nav>
             <Box sx={{bgcolor: 'lightblue', py: 2 }}>
                <Container maxWidth="lg">
                    <Typography align= 'center' >
                        <a href="/">Home</a>
                        <a href="/">About </a>
                        <Button variant="contained">Sign Up</Button>
                        <Button variant="contained">Sign In</Button> 
                    </Typography>
                </Container>
            </Box>
        </nav>
    )
}