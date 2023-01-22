import "./Apply.css";
import bh_logo from "../../assets/bh_logo.svg";
import { Link } from "react-router-dom";

const Apply = () => {
    return (
        <section className="home-container" id="home">
            <div className="home-app-section">
                <div className="home-app-title">
                    <h1>BeachHacks</h1>   
                </div>
                <h3>Date, 2023</h3>
                <h2>Get Involved</h2>
                <Link style={{fontFamily: ['Poppins', 'sans-serif'].join(','),textDecoration: "none", color: "black"}} to={`/Apply`}><button>Apply Now</button></Link>
                
            </div>
            
            <div className="container home-box-section">
                <img className="home-box-img" src="https://i.imgur.com/cdVc6cI.jpg"></img>
            </div>
        </section>
    )
}

export default Apply