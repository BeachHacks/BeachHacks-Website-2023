import * as React from 'react';
import "./Header.css";
import Logo from "./assets/bhLogoBrick.png";
import ScheduleIcon from './assets/white_schedule_icon.svg';
import AboutIcon from './assets/information_circle_light.svg';
import HomeIcon from './assets/home_icon_light.svg';
import SponsorIcon from './assets/money_icon_light.svg';
import FAQIcon from './assets/FAQ_icon_light.svg';
import SpotifyIcon from './assets/spotify_icon_light.svg';
import TeamIcon from './assets/team_icon_light.svg';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from "@material-ui/core/ListItem";
import { styled, useTheme } from '@mui/material/styles';
import { ListItemIcon} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const drawerWidth = "100%";
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Header = (props) =>{
    const [setAnchorElNav] = React.useState(null);
    const [setOpen] = React.useState(false); 
    const [selectedIndex, setSelectedIndex] = React.useState(1);

   

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  //used to close the drawer
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
//contents inside the drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {<ClearIcon sx={{color: 'white'}}/>}
          </IconButton>
        </DrawerHeader>
        {/* Buttons on top half of divider */}
      <List sx={{ fontWeight: 'bold' }}>
        <ListItem>
              <ListItemIcon>
                <img class="Icon"src={HomeIcon}/>
              </ListItemIcon>
                <Link className="link" style={{fontFamily: "Poppins",textDecoration: "none", fontSize: "19px",  color: "#DFF2FF", textAlign: "center", textDecorationColor:"black"}} to={`/Home`} >Home</Link>
        </ListItem>
        <ListItem>
              <ListItemIcon>
                <img class="Icon"src={AboutIcon}/>
              </ListItemIcon>
                <Link style={{fontFamily: "Poppins",textDecoration: "none", fontSize: "19px", color: "#DFF2FF", textAlign: "center"}} to={'/About'}>About</Link>
            
        </ListItem>
        <ListItem>
              <ListItemIcon>
                <img className='Icon' src={SponsorIcon}/>
              </ListItemIcon>
              <Link style={{fontFamily: "Poppins",textDecoration: "none", fontSize: "19px", color: "#DFF2FF"}} to={`/Sponsors`}>Sponsors</Link>
        </ListItem>
        <ListItem>
              <ListItemIcon>
                <img class="Icon"src={FAQIcon}/>
              </ListItemIcon>
                <Link style={{fontFamily: "Poppins",textDecoration: "none", fontSize: "19px", color: "#DFF2FF", textAlign: "center"}} to={'/FAQ'}>FAQ</Link>
            
        </ListItem>
        
  <Divider sx={{ bgcolor: "#FFFFFF" }} />

      {/* Buttons on bottom half of divider */}
      <ListItem>
              <ListItemIcon>
                <img className='Icon' src={ScheduleIcon}/>
              </ListItemIcon>
              <a style={{fontFamily: "Poppins",textDecoration: "none", fontSize: "19px", color: "#DFF2FF"}} href="https://www.google.com/" target="_blank">Workshop</a>
            
        </ListItem>
          <ListItem>
            <ListItemIcon>
                <img class="Icon"src={TeamIcon}/>
              </ListItemIcon>
                <Link style={{fontFamily: "Poppins",textDecoration: "none", fontSize: "19px", color: "#DFF2FF"}} to={`/Team`}>Our Team</Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
                <img class="Icon"src={SpotifyIcon}/>
              </ListItemIcon>
            <a style={{fontFamily: "Poppins",textDecoration: "none", fontSize: "19px", color: "#DFF2FF"}} href="https://www.google.com/" target="_blank">Spotify</a>
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
                  sx={{background: "#2047DD", fontSize: "16px", textDecoration: "none", marginLeft: "10px"}}
                  variant="contained"
                  startIcon={<img class="Schedule"src={ScheduleIcon}/>}
                >
                    <Link style={{fontFamily: "Poppins",textDecoration: "none", color: "white"}} to={`/Apply`}>Join Now</Link>
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
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,  backgroundColor: "#04121C"},

            }}
          >
           {drawer}
          </Drawer>
        </Box>
        
    </Box>
    );
  }
export default Header;