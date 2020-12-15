import React from "react";
import headerImg from "../assets/header.jpg";
import '../App.css'

const AboutCB = () => {
  return (
    <div className="main">
      <div className="header-container cb-bg-img">
      </div>

      <div className="content-wrapper">
          <div className="headline-container">
            <div className="headline-text">
              <div className="headline-title">COLOR BLINDNESS</div>
              <div className="headline-subtitle">
                Have no fear,
                <br />
                you only see things differently.
              </div>
            </div>
            <div className="headline-image">
              <img src={headerImg} alt="types of colorblind" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default AboutCB;
