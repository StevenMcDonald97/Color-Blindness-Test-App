import React from "react";
import "../App.css";
import cbContents from "data/cbContents";
import Section from "components/Section";

const AboutCB = () => {
  return (
    <div className="main">
      <div className="header-container"></div>

      <div className="content-section">
        {cbContents
          .filter((content) => content.filter === "about")
          .map((info, i) => (
            <div>
              <Section key={i} title={info.title} description={info.infos} />
              {/* <img src={info.image} alt={info.altImage}/> */}
            </div>
          ))}
      </div>
      <div className="content-section">
        {cbContents
          .filter((content) => content.filter === "types")
          .map((info, i) => (
            <div>
              <Section key={i} title={info.title} description={info.infos} />
              {/* <img src={info.image} alt={info.altImage}/> */}
            </div>
          ))}
      </div>
      <div className="content-section">
        {cbContents
          .filter((content) => content.filter === "test")
          .map((info, i) => (
            <div>
              <Section key={i} title={info.title} description={info.infos} />
              {/* <img src={info.image} alt={info.altImage}/> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default AboutCB;
