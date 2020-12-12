import React from "react";
import { FaAt, FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import Section from "../components/Section";
import mainContents from "../data/mainContents";
import SmallCard from "components/SmallCard";


const MainPage = () => {
  return (
    <div className="main">
      <div className="header-container home-bg-img">
      </div>


      <div className="content-section">
        {mainContents
          .filter((content) => content.section === "About")
          .map((info,i) => (
            <Section key={i} title={info.title} description={info.infos} />
          ))}
        <SmallCard title="Facts" description="statisctics"/>
      </div>

      <div className="content-section light-grey">
        {mainContents
          .filter((content) => content.section === "Test")
          .map((info, i) => (
            <Section key={i} title={info.title} description={info.infos} />
          ))}
      </div>

      <div className="content-section">
        {mainContents
          .filter((content) => content.section === "Contact")
          .map((info, i) => (
            <Section key={i} title={info.title} description={info.infos} />
          ))}
      </div>

      <div className="footer">
        <div className="content-wrapper">
          <div className="social-media-icons-container">
            <a href=" ">
              <div className="icon white-bg">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon white-bg">
                <FaGithub />
              </div>
            </a>
            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon white-bg">
                <FaAt />
              </div>
            </a>
            <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
            >
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
