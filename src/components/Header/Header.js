import * as React from "react";
import "./Header.css";
import Logo from "./assets/bhLogoBrick.png";
import ScheduleIcon from "./assets/akar-icons_schedule.svg";
import AboutIcon from "./assets/heroicons_information-circle.svg";
import HomeIcon from "./assets/clarity_home-line.svg";
import SponsorIcon from "./assets/simple-icons_githubsponsors.svg";
import FAQIcon from "./assets/akar-icons_chat-question.svg";
import SpotifyIcon from "./assets/icons8-music.svg";
import TeamIcon from "./assets/fluent_people-team-20-regular.svg";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { HashLink as Link } from "react-router-hash-link";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";
import { ListItemIcon } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
// import { useEffect, useHistory } from 'react';

const drawerWidth = "100%";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Header = (props) => {
  // const [setAnchorElNav] = React.useState(null);
  // const [setOpen] = React.useState(false);

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  //used to close the drawer
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //contents inside the drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerToggle}>
          {<ClearIcon sx={{ color: "black" }} />}
        </IconButton>
      </DrawerHeader>
      {/* Buttons on top half of divider */}
      <ListItem sx={{ fontWeight: "bold" }}>
        <ListItemButton>
          <ListItemIcon>
            <img alt="" class="Icon" src={HomeIcon} />
          </ListItemIcon>
          <Link
            style={{
              fontFamily: ["Poppins", "sans-serif"].join(","),
              textDecoration: "none",
              fontSize: "19px",
              color: "black",
              textAlign: "center",
            }}
            to={`/`}
          >
            Home
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ fontWeight: "bold" }}>
        <ListItemButton>
          <ListItemIcon>
            <img alt="" class="Icon" src={AboutIcon} />
          </ListItemIcon>
          <Link
            style={{
              fontFamily: ["Poppins", "sans-serif"].join(","),
              textDecoration: "none",
              fontSize: "19px",
              color: "black",
              textAlign: "center",
            }}
            to="/#about"
          >
            About
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ fontWeight: "bold" }}>
        <ListItemButton>
          <ListItemIcon>
            <img alt="" className="Icon" src={SponsorIcon} />
          </ListItemIcon>
          <Link
            style={{
              fontFamily: ["Poppins", "sans-serif"].join(","),
              textDecoration: "none",
              fontSize: "19px",
              color: "black",
            }}
            to="/#sponsors"
            rel="noreferrer"
          >
            Sponsors
          </Link>
        </ListItemButton>
      </ListItem>
      <ListItem sx={{ fontWeight: "bold" }}>
        <ListItemButton>
          <ListItemIcon>
            <img alt="" class="Icon" src={FAQIcon} />
          </ListItemIcon>
          <Link
            style={{
              fontFamily: ["Poppins", "sans-serif"].join(","),
              textDecoration: "none",
              fontSize: "19px",
              color: "black",
              textAlign: "center",
            }}
            to={"/#faq"}
          >
            FAQ
          </Link>
        </ListItemButton>
      </ListItem>
      <Divider sx={{ color: "black" }} />

      {/* Buttons on bottom half of divider */}
      <List sx={{ fontWeight: "bold" }}>
        <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemIcon>
              <img alt="" class="Icon" src={TeamIcon} />
            </ListItemIcon>
            <Link
              style={{
                fontFamily: ["Poppins", "sans-serif"].join(","),
                textDecoration: "none",
                fontSize: "19px",
                color: "black",
              }}
              to={`/team`}
              rel="noopener"
            >
              Our Team
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemIcon>
              <img alt="" class="Icon" src={SpotifyIcon} />
            </ListItemIcon>
            {/* <a style={{fontFamily: ['Poppins', 'sans-serif'].join(','),textDecoration: "none", fontSize: "19px", color: "black"}} href="https://www.google.com/" target="_blank" rel="noreferrer">Spotify</a> */}
            <Link
              style={{
                fontFamily: ["Poppins", "sans-serif"].join(","),
                textDecoration: "none",
                color: "black",
              }}
              to={`/spotify`}
            >
              BeachMuse
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemIcon>
              <img alt="" class="Icon" src={ScheduleIcon} />
            </ListItemIcon>
            {/* <a style={{fontFamily: ['Poppins', 'sans-serif'].join(','),textDecoration: "none", fontSize: "19px", color: "black"}} href="https://www.google.com/" target="_blank" rel="noreferrer">Schedule</a> */}
            <Link
              style={{
                fontFamily: ["Poppins", "sans-serif"].join(","),
                textDecoration: "none",
                color: "black",
              }}
              to={`/workshop`}
            >
              Schedule
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex-end" }}>
      <CssBaseline />
      {/* start of AppBar */}
      <AppBar
        position="static"
        component="nav"
        elevation={0}
        sx={{ background: "var(--primary-color)" }}
      >
        <Toolbar>
          {/* Beachhacks logo */}
          <img className="logoImg" alt="our logo :)" src={Logo} />
          <IconButton
            aria-label="account of current user"
            onClick={handleDrawerToggle}
            size="large"
            aria-haspopup="true"
            aria-controls="menu-appbar"
            sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}
            justifyContent="flex-end"
          >
            <MenuIcon />
          </IconButton>
          {/* Buttons in the Header */}
          <Box
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Button
              //onClick={handleCloseNavMenu}
              sx={{
                fontSize: "18px",
                color: "#000000",
                marginLeft: "10px",
              }}
              variant="text"
            >
              <Link
                style={{
                  fontFamily: ["Poppins", "sans-serif"].join(","),
                  textDecoration: "none",
                  color: "black",
                }}
                to={`/`}
              >
                Home
              </Link>
            </Button>
            <Button
              //onClick={handleCloseNavMenu}
              sx={{
                fontSize: "18px",
                color: "#000000",
                marginLeft: "10px",
              }}
              variant="text"
            >
              {/* <a style={{fontFamily: ['Poppins', 'sans-serif'].join(','),textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank" rel="noreferrer">Workshop</a> */}
              <Link
                style={{
                  fontFamily: ["Poppins", "sans-serif"].join(","),
                  textDecoration: "none",
                  color: "black",
                }}
                to={`/workshop`}
              >
                Schedule
              </Link>
            </Button>

            <Button
              //onClick={handleCloseNavMenu}
              sx={{
                "&.active": {
                  textDecoration: "underline",
                },
                fontSize: "18px",
                color: "#000000",
                marginLeft: "10px",
              }}
              variant="text"
            >
              <Link
                style={{
                  fontFamily: ["Poppins", "sans-serif"].join(","),
                  textDecoration: "none",
                  color: "black",
                }}
                to={`/team`}
              >
                Our Team
              </Link>
            </Button>
            <Button
              //onClick={handleCloseNavMenu}
              sx={{
                "&.active": {
                  textDecoration: "underline",
                },
                fontSize: "18px",
                color: "#000000",
                marginLeft: "10px",
              }}
              variant="text"
            >
              {/* <a style={{fontFamily: ['Poppins', 'sans-serif'].join(','),textDecoration: "none", color: "black"}} href="https://www.google.com/" target="_blank" rel="noreferrer">Spotify</a> */}
              <Link
                style={{
                  fontFamily: ["Poppins", "sans-serif"].join(","),
                  textDecoration: "none",
                  color: "black",
                }}
                to={`/spotify`}
              >
                BeachMuse
              </Link>
            </Button>
            <Button
              //onClick={handleCloseNavMenu}
              sx={{
                background: "(--primary-color)",
                fontSize: "16px",
                textDecoration: "none",
                marginLeft: "10px",
                color: "white",
              }}
              variant="contained"
              centered
            >
              {/* <a style={{fontFamily: ['Poppins', 'sans-serif'].join(','),textDecoration: "none", color: "var(--primary-color)"}} href="https://www.google.com/" target="_blank" rel="noreferrer">Apply Now</a> */}
              <Link
                style={{
                  fontFamily: ["Poppins", "sans-serif"].join(","),
                  textDecoration: "none",
                  color: "white",
                }}
                to={`/apply`}
              >
                Apply Now
              </Link>
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
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};
export default Header;
