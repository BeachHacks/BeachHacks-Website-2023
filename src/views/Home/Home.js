import "./Home.css";
import bh_logo from "../../assets/bh_logo.svg";

const Home = () => {
    return (
        <section className="home-container">
            <div className="home-page" id="home">
                <div className="home-app-section">
                    <div className="home-app-title">
                        <img src={bh_logo} alt="BeachHacks" className="home-app-logo" />   
                    </div>
                        <h1>Date, 2023</h1>
                        <h1>Get Involved</h1>
                        <button>Apply Now</button>
                </div>
                <div className="home-box-section">
                    <div className="home-box">
                        <h1 className="home-box-title">3D ISOMETRIC ART?</h1>
                    </div>
                </div>
            </div>
        </section>
   );
}

export default Home;