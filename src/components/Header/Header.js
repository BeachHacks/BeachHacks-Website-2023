import * as React from 'react';
import "./Header.css";
import Logo from "./assets/bhLogoBrick.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom'
import ScheduleIcon from "./assets/scheduleIcon.svg";
import link from '@mui/material/Link';


const Header = () =>{
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

    
    return (
      <AppBar position="static" elevation={0} sx={{background: "transparent"}}>
        <Container maxWidth="flex-end">
          <Toolbar disableGutters>
            <img src={Logo}/>
  
            <Box 
            justifyContent="flex-end" 
            alignItems="flex-end"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} to={`/Home`}>Home</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                  <a style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank">Workshop</a>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} to={`/Team`}>Our Team</Link>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                  <a style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank">Spotify</a>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                  <a style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank">Join Now</a>
                  </MenuItem>
               
              </Menu>
            </Box>
           
            <Box justifyContent="flex-end" 
            alignItems="flex-end"
            sx={{ flexGrow: 1, 
                display: { xs: 'none', md: 'flex' }
                }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "18px",
                    color: "#000000",
                    marginLeft: "10px"
                  }}
                  variant="text"
                >
                    <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} to={`/Home`}>Home</Link>
                </Button>
                <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: "18px",
                    color: "#000000",
                    marginLeft: "10px"}}
                  variant="text"
                >
                    <a style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank">Workshop</a>
                </Button>

                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&.active":{
                        textDecoration: "underline"
                    },
                    fontSize: "18px",
                    color: "#000000",
                    marginLeft: "10px"}}
                  variant="text"
                >
                    <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} to={`/Team`}>Our Team</Link>
                </Button>
                <Button
                  
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&.active":{
                        textDecoration: "underline"
                    },
                    fontSize: "18px",
                    color: "#000000",
                    marginLeft: "10px"}}
                  variant="text"
                >
                    <a style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank">Spotify</a>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{background: "#c7cbd1", fontSize: "18px",color: "#000000", marginLeft: "10px"}}
                  variant="contained"
                  startIcon={<img class="Icon"src={ScheduleIcon}/>}
                >
                    <a style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank">Join Now</a>
                </Button>
              
            </Box>

            
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
export default Header;

