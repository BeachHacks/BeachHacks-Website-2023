import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import Team from "./views/Team/Team";
import About from "./views/About/About"
import FAQ from "./views/FAQ/FAQ"
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/FAQ" element={<FAQ/>} />
        <Route path="/Join" component={() => {
    window.location.href = 'https://www.google.com/';
    return null;
    }}/>
      </Routes>
    </div>
  );
}
export default App;