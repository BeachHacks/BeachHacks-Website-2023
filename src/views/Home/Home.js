import "./Home.css";
import bh_logo from "../../assets/bh_logo.svg";

const Home = () => {
    return (
        <section className="home-container" id="home">
            <div className="home-app-section">
                <div className="home-app-title">
                    <img src={bh_logo} alt="BeachHacks" className="home-app-logo" />   
                </div>
                <h2>Date, 2023</h2>
                <h3>Get Involved</h3>
                <button>Apply Now</button>
            </div>
            
            <div className="home-box-section">
                <div className="home-box">
                    <h2 className="home-box-title">3D ISOMETRIC ART?</h2>
                </div>
            </div>
        </section>
   );
}

export default Home;