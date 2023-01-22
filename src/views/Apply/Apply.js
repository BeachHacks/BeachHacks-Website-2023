import "./Apply.css";
import bh_logo from "../../assets/bh_logo.svg";
import { Link } from "react-router-dom";

const Apply = () => {
    return (
        <section className="home-container" id="home">
            <div className="home-section-left">
                <div className="home-title">
                    <img src={bh_logo} alt="BeachHacks" className="home-section-logo"/>
                    <h1>BeachHacks</h1>
                </div>
                <Link to="/apply">
                    <button className="home-btn">Apply Now</button>
                </Link>
                
            </div>
            <div className="home-section-right">
                <div className="container home-box">
                    <img src="https://i.imgur.com/cdVc6cI.jpg"></img>
                </div>
            </div>
        </section>
    )
}

export default Apply