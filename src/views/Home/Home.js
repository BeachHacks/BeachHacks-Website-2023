import "./Home.css";
import bh_logo from "../../assets/bh_logo.svg";

const Home = () => {
    return (
        <section className="home-container">
        
            <div className="home-page" id="home">
                <div className="home-app-section">
                    <div className="home-app-title">
                        <img src={bh_logo} alt="BeachHacks" className="home-app-logo" />
                        <h1>Date, 2023</h1>
                        <h1>Get Involved</h1>
                        <button>Apply Now</button>
                    </div>
                </div>
                <div className="home-box">
                    <div className="apply-box"></div>
                </div>
            </div>
   
        </section>
   
   
   );
}

export default Home;