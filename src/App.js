import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import Home from "./views/Home/Home";
// import Team from "./views/Team/Team";
// import About from "./views/About/About";
// import FAQ from "./views/FAQ/FAQ";
// import SideNavBar from "./components/SideNavbar/SideNavbar";
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <SideNavBar />
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route
          path="/Join"
          component={() => {
            window.location.href = "https://www.google.com/";
            return null;
          }}
        />
      </Routes> */}
      <Footer />
    </div>
  );
}
export default App;
