// create react component
import React from "react";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <section className="sponsor-view" id="sponsor">
      <h1 className="title">Our Sponsor</h1>
      <div className="sponsor">
        <div className="left">
          <div className="top">
            {/* 3 squares */}
            <div className="medium-sponsor"></div>
            <div className="medium-sponsor"></div>
            <div className="medium-sponsor"></div>
          </div>
          <div className="bottom">
            <div className="small-sponsor"></div>
            <div className="small-sponsor"></div>
            <div className="small-sponsor"></div>
            <div className="small-sponsor"></div>
            <div className="small-sponsor"></div>
            <div className="small-sponsor"></div>
            <div className="small-sponsor"></div>
            <div className="small-sponsor"></div>
            <div className="small-sponsor"></div>
            <div className="small-sponsor"></div>
          </div>
        </div>
        <div className="right">
          <div className="big-sponsor"></div>
        </div>
      </div>
    </section>
  );
};

// export component
export default Sponsors;
