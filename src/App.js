import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Team from "./views/Team/Team";
import {Route, Routes} from "react-router-dom";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/material";


//const useStyles = makeStyles({})
export default function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

/*<div className={classes.container}>
      <Header/>
      <Routes>
        <Route exact from="/" render={props => <Home {...props}/>}/>
      </Routes>
    </div>*/

