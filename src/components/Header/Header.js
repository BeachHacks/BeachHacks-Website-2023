import "./Header.css";
import *  as React from "react";
import { makeStyles } from "@material-ui/core";
import Logo from "./assets/bhLogoBrick.png";
import ScheduleIcon from "./assets/scheduleIcon.png";
import {AppBar, Toolbar, Button} from "@mui/material";
import { CalendarToday } from "@material-ui/icons";
import styled from "@emotion/styled";


const Header = props =>{
    //const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const { history } = props;

    const handleButtonClick = pageURL =>{
        history.push(pageURL);
    };
return(
    <React.Fragment>
        <AppBar sx={{background: "#ededef"}}>
            <Toolbar>
                <img src={Logo}/>
                <Button 
                sx={{fontSize: "18px",color: "#000000", marginLeft: "auto"}}
                onClick ={() => handleButtonClick('/')}
                variant="text">
                Home</Button>
                <Button sx={{fontSize: "18px",color: "#000000", marginLeft: "10px"}} 
                variant="text">
                Workshop</Button>
                <Button sx={{fontSize: "18px",color: "#000000", marginLeft: "10px"}} 
                variant="text">
                Our Team</Button>
                <Button sx={{fontSize: "18px",color: "#000000", marginLeft: "10px"}} 
                variant="text">
                Spotify</Button>
                <Button sx={{fontSize: "18px",color: "#000000", background: "#c7cbd1",marginLeft: "10px"}} 
                variant="contained"
                startIcon={<img class="Icon"src={ScheduleIcon}/>}>
                Join Now</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
    )
}
export default Header

