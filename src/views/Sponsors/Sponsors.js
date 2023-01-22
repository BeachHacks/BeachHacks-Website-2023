// create react component
import React from "react";
import "./Sponsors.css";
import Arduino from "../../assets/Arduino_CMYK_Black-01.png";
import GoogleCloudIcon from "../../assets/google_cloud.svg";
import CodeAndCoffee from "../../assets/code_and_coffee.svg";
const Sponsors = () => {
  return (
    <section className="sponsor-view" id="sponsors">
      <h1 className="title">Our Sponsors</h1>
      <div className="sponsor">
        <div className="left">
          <div className="top">
            {/* 3 squares */}
            <div className="container medium-sponsor">
            <img src={"https://i.imgur.com/T23sXbP.png"} alt="Discord Goes Here"/>
            </div>
            <div className="container medium-sponsor">
              <img src={GoogleCloudIcon} alt="Google Goes Here"/>
            </div>
            <div className="container medium-sponsor">
            <img src={CodeAndCoffee} alt="CodeAndCoffee Goes Here"/>
            </div>
          </div>
          <div className="bottom">
            <div className="container small-sponsor">
              <img src="https://www.csulb.edu/sites/default/files/images/2line.name_.coe_.png" alt="CSULB College of Engineering"/>
            </div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
          </div>
        </div>
        <div className="right">
          <div className="container big-sponsor">
            <img src="https://i.imgur.com/ffbxOkE.png" alt="Arduino goes here" />
          </div>
        </div>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <button>Become a Sponsor</button>
          </a>
      </div>
    </section>
  );
};

// export component
export default Sponsors;
