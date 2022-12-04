import "./Home.css";
import bh_logo from "../../assets/bh_logo.svg";

const Home = () => {
    return (
        <section className="home-container" id="home"> 
            <div className="home-page" id="home">
                <div className="home-app-section">
                    <div className="home-app-title">
                        <img src={bh_logo} alt="BeachHacks" className="home-app-logo" />
                        <h1>BeachHacks</h1>
                        <h3>BeachHacks starting soon</h3> 
                    </div>    
                </div>           
            </div>
            <div className="home-date-section">
                <h3 className="home-box-title">Hackathon - Date and Location</h3>
                <button>JOIN NOW</button>
                <button>click</button>

            </div>
        </section>
    );
}
export default Home;