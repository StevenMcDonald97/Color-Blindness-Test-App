import React from "react";

import header1 from "../assets/header/home-header1.jpg";
import header2 from "../assets/header/home-header2.jpg";

import { FaAt, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const MainPage = () => {
  return (
    <div className="main">
      <div className="header-container grid2x1">
        <div className="header-half">
          <img src={header1} alt="colorful gates" />
        </div>
        <div className="header-half">
          <img src={header2} alt="headphones" />
        </div>
        <div className="header-CPA-container">
          <div className="header-headline">Welcome to .....</div>
          <div className="headline-subtitle">bla bla bla bla bla</div>
          <div className="headline-subtitle">bla bla bla bla bla</div>
          <div className="CPA-container">
            <div className="CFA">
              <a href="/about-color-blind">More on Color Blindness</a>
            </div>
            <div className="CFA">
              <a href="/about-hearing-disability">More on Hearing Disability</a>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <span style={{height: '80vh'}}></span>
      </div>

      <div className="footer">
        <div className="content-wrapper">
          <div className="social-media-icons-container">
            <a href=" ">
              <div className="icon white-bg">
                <FaLinkedinIn />
              </div>
            </a>
            <a href=" " target="_blank" rel="noopener noreferrer">
              <div className="icon white-bg">
                <FaGithub />
              </div>
            </a>
            <a href=" " target="_blank" rel="noopener noreferrer">
              <div className="icon white-bg">
                <FaAt />
              </div>
            </a>
            <a href=" " target="_blank" rel="noopener noreferrer">
              <div className="icon white-bg">
                <FaTwitter />
              </div>
            </a>
          </div>
          <div className="footer-description">
            Finely tuned by Kavitha and Neo Hsueh Yen <br />
            Credits: Icons made by Freepik from www.flaticon.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
