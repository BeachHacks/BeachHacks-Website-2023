import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Team from "./views/Team/Team";
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/Join" component={() => {
    window.location.href = 'https://www.google.com/';
    return null;
    }}/>
      </Routes>
    </div>
  );
}
export default App;

/*<div className={classes.container}>
      <Header/>
      <Routes>
        <Route exact from="/" render={props => <Home {...props}/>}/>
      </Routes>
    </div>*/

    /*<div className="App">
      <Header/>
    </div>*/

