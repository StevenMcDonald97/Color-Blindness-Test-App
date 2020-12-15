import React from "react";

const Section = (props) => {
  return (
    <div className="content-wrapper">
      <div className="section-header">{props.title}</div>
      <div className="section-description">{props.description.map((info, i) => (<p key={i}>{info}<br/><br/></p>))}</div>
    </div>
  );
};

export default Section;
