// create react component
import React from "react";
import "./Sponsors.css";
import GoogleCloudIcon from "../../assets/google_cloud.svg";
import CodeAndCoffee from "../../assets/code_and_coffee.svg";
import BisectHosting from "../../assets/Bisect-Hosting.png";
const Sponsors = () => {
  return (
    <section className="sponsor-view" id="sponsors">
      <h1 className="title">Our Sponsors</h1>
      <div className="sponsor">
        <div className="left">
          <div className="top">
            {/* 3 squares */}
            <div className="container medium-sponsor">
              <a href="https://github.com/">
                <img src={"https://i.imgur.com/T23sXbP.png"} alt="Github Goes Here"/>
              </a>
            </div>
            <div className="container medium-sponsor">
              <a href="https://cloud.google.com/">
                <img src={GoogleCloudIcon} alt="Google Goes Here"/>
              </a>
            </div>
            <div className="container medium-sponsor">
              <a href="https://www.codeandcoffee.dev/">
                <img src={CodeAndCoffee} alt="CodeAndCoffee Goes Here"/>
              </a>
            </div>
            <div className="container medium-sponsor">
              <a href="https://www.csulb.edu/college-of-engineering">
                <img src="https://www.csulb.edu/sites/default/files/images/2line.name_.coe_.png" alt="CSULB College of Engineering"/>
               </a>
            </div>
            <div className="container medium-sponsor">
               <a href="https://www.bisecthosting.com/">
                <img src={"https://i.imgur.com/mtgOvig.png"} alt="Bisect Hosting Goes Here"/>
                </a>
            </div>
            <div className="container medium-sponsor">
              <a href="https://csulb.acm.org/">
                <img src={"https://i.imgur.com/k6bsvfR.png"} alt="ACM Hosting Goes Here"/>
              </a>
            </div>
          </div>
          {/* <div className="bottom">
            
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
            <div className="container small-sponsor"></div>
          </div> */}
        </div>
        <div className="right">
          <div className="container big-sponsor">
            <a href="https://www.arduino.cc/">
              <img src="https://i.imgur.com/ffbxOkE.png" alt="Arduino goes here" />
            </a>
          </div>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <button>Become a Sponsor</button>
          </a>
        </div>
          
      </div>
    </section>
  );
};

// export component
export default Sponsors;
