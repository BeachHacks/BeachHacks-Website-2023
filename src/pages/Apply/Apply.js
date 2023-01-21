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
                <button>Apply Now!</button>
            </div>
            <div className="apply-sposor-section">
                <div className="container apply-box">
                    <h1 className="apply-box-title">Looking to be a Judge?</h1>
                    <h3 className="apply-box-desc">BeachHacks is looking for judges to help us evaluate projects and provide feedback to students. If you are interested in judging, please fill out the form below.</h3>
                    <div className="apply-box-btn">
                        <button className="apply-button">APPLY TO JUDGE</button>
                    </div>
                </div>
                <div className="container apply-box">
                    <h1 className="apply-box-title">Looking to be a Mentor?</h1>
                    <h3 className="apply-box-desc">BeachHacks is looking for mentors to help students with their projects. If you are interested in mentoring, please fill out the form below.</h3>
                    <div className="apply-box-btn">
                        <button className="apply-button">APPLY TO MENTOR</button>
                    </div>
                </div>
                <div className="container apply-box">
                    <h1 className="apply-box-title">Looking to be a Sponsor?</h1>
                    <h3 className="apply-box-desc">BeachHacks is looking for sponsors to help us provide swag, food, and prizes for our event. If you are interested in sponsoring, please fill out the form below.</h3>
                    <div className="apply-box-btn">
                        <button className="apply-button ">APPLY TO SPONSOR</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apply;