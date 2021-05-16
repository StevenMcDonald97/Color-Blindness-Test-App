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
      </div>

      <div className="content-section">
        <span style={{ height: "40vh" }}>
          <div className="content-container gridTwo-2x1">
            <div className="content3">
            <h2>Goal</h2>
            <p>
              We set out to provide easily accessible hearing and sight tests
              for rural populations in India who have limited access to medical
              care. The idea was that by making a lightweight, front-end only
              application it could be taken by health groups into rural areas
              without needing expensive equipment or having people come to
              cities to be tested. This is not the first test of this kind, but
              it is the first to be translated into Hindi, Kannada, Telugu, and
              Tamil so that it's easily accessible to the people living in the
              rural areas of India.
            </p>
            </div>
            <div className='content4'>
            <h2>Testing Idea</h2>
            <p>
              The three things we made tests for are color blindness, hearing
              loss, and hearing sensitivity to different frequencies. These are
              a few of the most common problems people may have with seeing and
              hearing, and helping people diagnose issues can dramatically
              improve their quality of life. Each test we made was based on
              existing medical tests for the same issue.
            </p>

            </div>
          </div>
        </span>
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
            Finely Tuned by Kavitha Krishnamurthy, Neo Hsueh Yen, Steven McDonald, and Joey Bruno 
            <br />
            Credits: Icons Made by Freepik from www.flaticon.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
