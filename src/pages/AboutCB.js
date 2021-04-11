import React from "react";
import "../App.css";
import cbContents from "data/cbContents";
import Section from "components/Section";

const AboutCB = () => {
  return (
    <div className="main">
      <div className="header-container">
        <h1>About Color Blindness</h1>
      </div>

      <div className="content-section">
        {cbContents
          .filter((content) => content.filter === "about")
          .map((info, i) => (
            <div className='gridThree-2x1'>
              <Section key={i} className='about-sectionCB' title={info.title} description={info.infos} />
              <img className='about-imageCB' src={info.image} alt={info.altImage} style={{ float: 'right'}}/>
            </div>
          ))}
      </div>
      <div className="content-section">
        {cbContents
          .filter((content) => content.filter === "types")
          .map((info, i) => (
            <div>
              <Section key={i} className='types-sectionCB' title={info.title} description={info.infos} />
              <img className='types-imageCB' src={info.image} alt={info.altImage} style={{width: '20%'}}/>
            </div>
          ))}
      </div>
      <div className="content-section">
        {cbContents
          .filter((content) => content.filter === "test")
          .map((info, i) => (
            <div>
              <Section key={i} className='test-sectionCB' title={info.title} description={info.infos} />
              <img className='test-imageCB' src={info.image} alt={info.altImage} style={{width: '20%'}}/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AboutCB;
