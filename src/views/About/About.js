import "./About.css";
import Cap from "./assets/cap.svg";
import Clock from "./assets/clock.svg";
import Folder from "./assets/folder.svg";
import Globe from "./assets/globe.svg";

const About = () => {
    return (
        <section className="about-container" id="about">
            {/* test comment */}
            <div className="about-photo">
                {/* <h1 className="about-photo-text">Photo</h1> */}
                <img src="https://i.imgur.com/xmGUW3p.jpeg"></img>
            </div>
            <div className="about-text-box">
                <h1>About BeachHacks</h1>
                <h3>BeachHacks is a 24-hour event at California State University, Long Beach where students come together and create technical projects. Teams can compete for prizes, connect with industry sponsors, and participate in workshops.</h3>
            </div>
            <div className="about-text-box">
                <h1>Our Mission</h1>
                <h3>This year, BeachHacks is dedicated to providing an enriching and inclusive space for all students to learn, network, and prepare for careers in tech. As a federally-designated Minority Serving Institution, we believe through events like these, we can empower our students to achieve excellence through collaboration and innovation.</h3>
            </div>
            <div className="about-mini-boxes">
                <div className="mini-box">
                    <div className="mini-box-icon">
                        <img src={Cap} alt="Students"/>
                    </div>
                    <h2 className="mini-box-number">700+</h2>
                    <h3 className="mini-box-text">Students</h3>
                </div>
                <div className="mini-box">
                    <div className="mini-box-icon">
                        <img src={Globe} alt="Countries"/>
                    </div>
                    <h2 className="mini-box-number">10+</h2>
                    <h3 className="mini-box-text">Countries</h3>
                </div>
                <div className="mini-box">
                    <div className="mini-box-icon">
                        <img src={Clock} alt="Hours"/>
                    </div>
                    <h2 className="mini-box-number">144+</h2>
                    <h3 className="mini-box-text">Hours</h3>
                </div>
                <div className="mini-box">
                    <div className="mini-box-icon">
                        <img src={Folder} alt="Projects"/>
                    </div>
                    <h2 className="mini-box-number">120+</h2>
                    <h3 className="mini-box-text">Projects</h3>
                </div>
            </div>
        </section>
    )
}

export default About;