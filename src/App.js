import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Sponsors from "./views/Sponsors/Sponsors";
import FAQ from "./views/FAQ/FAQ";
import { Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
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
      {/* <Footer /> */}
    </div>
  );
}
export default App;
