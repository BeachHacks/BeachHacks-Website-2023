import * as React from 'react';
import "./Header.css";
import Logo from "./assets/bhLogoBrick.png";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import ScheduleIcon from "./assets/scheduleIcon.svg";
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';

const drawerWidth = "100%";
const Header = (props) =>{
    const [setAnchorElNav] = React.useState(null);
    const [setAnchorElUser] = React.useState(null);
  
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        {/* Buttons on top half of divider */}
        <ListItem sx={{ fontWeight: 'bold' }}>
            <ListItemButton>
                <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "black", textAlign: "center"}} to={`/Home`} >Home</Link>
            </ListItemButton>
        </ListItem>
        <ListItem sx={{ fontWeight: 'bold' }}>
            <ListItemButton>
                <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "black", textAlign: "center"}} to={'/About'}>About</Link>
            </ListItemButton>
        </ListItem>
        <ListItem sx={{ fontWeight: 'bold' }}>
            <ListItemButton>
                <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "black", textAlign: "center"}} to={'/'}>Sponsors</Link>
            </ListItemButton>
        </ListItem>
        <ListItem sx={{ fontWeight: 'bold' }}>
            <ListItemButton>
                <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "black", textAlign: "center"}} to={'/'}>FAQ</Link>
            </ListItemButton>
        </ListItem>
      <Divider sx={{color:"black"}}/>

      {/* Buttons on bottom half of divider */}
      <List sx={{ fontWeight: 'bold' }}>
          <ListItem >
            <ListItemButton sx={{ textAlign: 'center' }}>
            <a style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank">Workshop</a>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton sx={{ textAlign: 'center' }}>
            <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} to={`/Team`}>Our Team</Link>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton sx={{ textAlign: 'center' }}>
            <a style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank">Spotify</a>
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton sx={{ textAlign: 'center' }}>
            <a style={{fontFamily: "Poppins",textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank">Join Now</a>
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


    
    return (
        <Box sx={{ display: 'flex-end' }}>
        <CssBaseline />
        {/* start of AppBar */}
        <AppBar  position="static" component="nav" elevation={0} sx={{background: "transparent"}}>
          <Toolbar>

        {/* Beachhacks logo */}
          <img  src={Logo}/>
            <IconButton
              aria-label="account of current user"
              onClick={handleDrawerToggle}
              size="large"
              aria-haspopup="true"
              aria-controls="menu-appbar"
              sx={{ display: {xs:'flex', md: 'none' }, marginLeft: "auto"}}
              justifyContent="flex-end"
            >
              <MenuIcon />
            </IconButton>
            {/* Buttons in the Header */}
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
         
        </AppBar>
        {/* creates the drawer frame */}
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            anchor="right"
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },

            }}
          >
           {drawer}
          </Drawer>
        </Box>
        
    </Box>
    );
  }
export default Header;
