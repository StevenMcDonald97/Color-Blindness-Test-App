import React from "react";

const Section = (props) => {
  return (
    <div className="content-wrapper">
      <div className="section-header">{props.title}</div>
      <div className="section-description" style={{fontSize: '1.25rem'}}>{props.description.map((info, i) => (<div key={i}>{info}<br/><br/></div>))}</div>
    </div>
  );
};

export default Section;
