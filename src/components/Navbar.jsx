import React, {useState} from "react";



import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import { AppBar, Stack, Button, Toolbar, Box, Container, Grid } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useGlobalState } from "../utils/stateContext";
import { logoutUser } from "../services/authServices";
import { useNavigate } from "react-router-dom";


const pages = [];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
 

    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  

    let navigate = useNavigate();
    const {store, dispatch} = useGlobalState();
    const {displayName, idToken, userClaims} = store

    // Nav buttons useState
    const [state, setState] = useState(false)

    function handleSignOut(event) {
		event.preventDefault()
        console.log('loggedinUser1: ', displayName)       
        console.log('user Token1: ', idToken)
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
                navigate('/employer')
                console.log("Navigate to home page")
                break;
            case 'about':
                navigate('/about')
                console.log("Navigate to about page")
                break;
        }
    }





  return (
    <AppBar sx={{
      
      
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      height: 'auto',
      justifyContent: 'center',
      backgroundColor: "#28a3d4",
      position: 'static'
      
      
    }}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
        {/* <div style={{backgroundColor:'black', display: "flex", flexWrap:'wrap', flexDirection:"row", alignItems: "center", justifyContent: "space-between"}}>

        </div> */}
        
            
        <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Roster Portal
          </Typography>
                
                {/* I think this one is for hamburger menu */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            Roster
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>


          
                

              {/* Edit this for hi employee and signout button */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} >
            
              

              <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',
        width: '100%'
      }}>
                <Button color = 'inherit' name='home' onClick={changeButton}>Home</Button>
                <Button color='inherit' name='about' onClick={changeButton} >About</Button>

              </Box>
                                
              <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        height: '100%',
        width: '100%'
      }}>

              {displayName ? 
                    <>                
                    <Box >
                        <Typography component="span" m="{10}">Hi, {displayName} ! </Typography>
                    </Box>
                    
                    <Box >
                        <Button variant="contained" color='primary' onClick={handleSignOut}>Sign Out</Button>
                    </Box>
                    
                    
                    </>                    
                :
                    <Container sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      justifyContent: 'space-evenly',
                      height: '100%',
                      width: '100%'
                    }}> 
                    <Button variant="contained" color='primary' onClick={() => navigate('/signup')}>Sign Up</Button>
                    <Button color='primary' variant="contained" onClick={() => navigate('/signin')}>Sign In</Button> 
                    </Container>
                    }

              </Box>

                {/* <Grid container spacing={2}>
                    

                    {displayName ? 
                    <>                
                    <Grid>
                        <Typography component="span" m="{10}">Hi, {displayName} ! </Typography>
                    </Grid>
                    
                    <Grid style={{ margin: '0px 0px 0px 30px' }}>
                        <Button variant="contained" color='primary' onClick={handleSignOut}>Sign Out</Button>
                    </Grid>
                    
                    
                    </>                    
                :
                    <Container > 
                    <Button variant="contained" color='primary' onClick={() => navigate('/signup')}>Sign Up</Button>
                    <Button color='primary' variant="contained" onClick={() => navigate('/signin')}>Sign In</Button> 
                    </Container>
                    }
                </Grid> */}


                
              
            
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
            

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
