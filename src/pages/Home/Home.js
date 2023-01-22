import React from "react";
import Apply from "../../views/Apply/Apply";
import About from "../../views/About/About";
import Sponsors from "../../views/Sponsors/Sponsors";
import FAQ from "../../views/FAQ/FAQ";
import SideNavBar from "../../components/SideNavbar/SideNavbar";


const Home = () => {
    return (
        <div className="home">
            <SideNavBar />
            <Apply />
            <About />
            <Sponsors />
            <FAQ />
        </div>
    );
};
export default Home;