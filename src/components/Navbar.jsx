import React from "react";
import Typography from '@mui/material/Typography';
import { AppBar, Button, Toolbar, Box, Container} from '@mui/material'
import { useGlobalState } from "../utils/stateContext";
import { logoutUser } from "../services/authServices";
import { useNavigate } from "react-router-dom";


const pages = [];

function Navbar() {

  

  let navigate = useNavigate();
  const {store, dispatch} = useGlobalState();
  const {displayName, userClaims} = store

  console.log ("Store Navbar is: ", userClaims)

  // Nav buttons useState
  // const [state, setState] = useState(false)

  function handleSignOut(event) {
    event.preventDefault()  
    logoutUser(displayName)
    .then(() => {
    dispatch({type: 'setLoggedInUser', data: null})
    dispatch({type: 'setToken', data: null})
    dispatch({type: 'setUserClaims', data: null})
    navigate('/signedout')
    })
        
	}

  function changeButton(event) {
    event.preventDefault()
    // setState(prevState => !prevState)
    // console.log("Button Clicked")
    // console.log(event.target.name)
    switch(event.target.name){
        case 'home':
            userClaims.adminUser===true ? navigate('/employer') : navigate('/employee')
            
            console.log("Navigate to home page")
            break;
        case 'about':
            navigate('/about')
            console.log("Navigate to about page")
            break;
        default:
            userClaims.regularUser ? navigate('/employer') : navigate('/employee')
            
            console.log("Default Switch Case Navbar Executed")
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
                

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
               
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

                
          </Box>
            

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
