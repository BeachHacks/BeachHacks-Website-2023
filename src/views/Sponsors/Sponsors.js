// create react component
import React from "react";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <section className="sponsor-view" id="sponsors">
      <h1 className="title">Our Sponsors</h1>
      <div className="sponsor">
        <div className="left">
          <div className="top">
            {/* 3 squares */}
            <div className="container medium-sponsor"></div>
            <div className="container medium-sponsor"></div>
            <div className="container medium-sponsor"></div>
          </div>
          <div className="bottom">
            <div className="container small-sponsor"></div>
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
          <div className="container big-sponsor"></div>
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
