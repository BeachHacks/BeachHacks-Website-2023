import "./Apply.css";
import bh_logo from "../../assets/bh_logo.svg";
import { Link } from "react-router-dom";
import Count from "./Count";

const Apply = () => {
    return (
        <section className="home-container" id="home">
            <div className="home-section-left">
                <div className="home-title">
                    <img src={bh_logo} alt="BeachHacks" className="home-section-logo"/>
                    <h1>BeachHacks</h1>
                </div>
                <h2>February 25th-26th</h2>
                <Count />
                <h3>Get Involved!</h3>
            <div className="padding">
                <Link to="/apply">
                    <button className="home-btn">Apply Now</button>
                </Link>
                </div>
            </div>
            <div className="home-section-right">
                <div className="container home-box">
                    <img src="https://i.imgur.com/84Hc5Wo.png" alt="BeachHacks"></img>
                </div>
            </div>
        </section>
    )
}

export default Apply