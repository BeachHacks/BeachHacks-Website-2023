import "./Apply.css";
import bh_logo from "../../assets/bh_logo.svg";

const Apply = () => {
    return (
        <section className="apply-container" id="apply">
            <div className="apply-app-section">
                <div className="apply-app-title">
                    <img src={bh_logo} alt="BeachHacks" className="apply-app-logo"/>
                    <h1>BeachHacks</h1>
                </div>
                <h3>Want to participate?</h3>
                {/* <button>Apply Now!</button> */}
            </div>
            <div className="apply-sposor-section">
                <div className="container apply-box">
                    <h1 className="apply-box-title">Looking to Compete?</h1>
                    <h3 className="apply-box-desc">Code for 24 hours and join workshops to network with people! Swags, music, and food are provided! If you are interested, please fill out the form.</h3>
                    <div className="apply-box-btn">
                        <a href="https://bit.ly/bh7attendee">
                            <button className="apply-button" >APPLY TO COMPETE</button>
                        </a>
                    </div>
                </div>
                <div className="container apply-box">
                    <h1 className="apply-box-title">Looking to be a Mentor?</h1>
                    <h3 className="apply-box-desc">BeachHacks is looking for mentors to help students with their projects. If you are interested in mentoring, please fill out the form below.</h3>
                    <div className="apply-box-btn">
                        <a href="https://bit.ly/bh7mentor">
                            <button className="apply-button">APPLY TO MENTOR</button>
                        </a>
                    </div>
                </div>
                <div className="container apply-box">
                    <h1 className="apply-box-title">Looking to be a Judge?</h1>
                    <h3 className="apply-box-desc">BeachHacks is looking for judges to help us evaluate projects and provide feedback to students. If you are interested in judging, please fill out the form below.</h3>
                    <div className="apply-box-btn">
                        <a href="https://drive.google.com/file/d/1l3p-3Cju9sHnrNiguq4Uylv80qgGqvFM/view">
                            <button className="apply-button ">APPLY TO JUDGE</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apply;