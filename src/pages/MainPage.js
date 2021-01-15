import React from "react";
import { FaAt, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import Section from "../components/Section";
import mainContents from "../data/mainContents";
import SmallCard from "components/SmallCard";
import header1 from "../assets/home-header1.jpg";
import header2 from "../assets/home-header2.jpg";

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
            <div className="CFA">More on Color Blindness</div>
            <div className="CFA">More on Hearing Disability</div>
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
            Credits: Icons made by Freepik from www.flaticon.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
