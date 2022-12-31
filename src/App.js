import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Sponsors from "./views/Sponsors/Sponsors";
import FAQ from "./views/FAQ/FAQ";
import SideNavBar from "./components/SideNavbar/SideNavbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideNavBar />
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Sponsors" element={<Sponsors />}/>
        <Route path="/FAQ" element={<FAQ />} />
        {/* <Route path="/Sponsors"component={() => {
            window.location.href = "https://www.google.com/";
            return null;
          }}/> */}

        {/* <Route
          path="/Join"
          component={() => {
            window.location.href = "https://www.google.com/";
            return null;
          }}
        /> */}
      </Routes>
    </div>
  );
}
export default App;
