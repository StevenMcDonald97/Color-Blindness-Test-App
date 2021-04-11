import React from "react";
import "../App.css";
import hdContents from "data/hdContents"
import Section from "components/Section"

const AboutHD = () => {
  return (
    <div className="main">
      <div className="header-container">
        <h1>About Hearing Disability</h1>
      </div>

      <div className="content-section">
        {hdContents
          .filter((content) => content.filter === "about")
          .map((info, i) => (
            <div>
              <Section key={i} title={info.title} description={info.infos} />
              <img className='about-imageHD' src={info.image} alt={info.altImage} style={{width: '20%'}}/>
            </div>
          ))}
      </div>
      <div className="content-section">
        {hdContents
          .filter((content) => content.filter === "types")
          .map((info, i) => (
            <div>
              <Section key={i} title={info.title} description={info.infos} />
              <img className='types-imageHD' src={info.image} alt={info.altImage} style={{width: '20%'}}/>
            </div>
          ))}
      </div>
      <div className="content-section">
        {hdContents
          .filter((content) => content.filter === "test")
          .map((info, i) => (
            <Section key={i} title={info.title} description={info.infos} />
          ))}
      </div>
    </div>
  );
};

export default AboutHD;
