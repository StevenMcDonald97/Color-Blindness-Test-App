import React from "react";

const TestCard = (props) => {
  return (
    <div className="test-card">
      <div className="test-image">
        <img src={props.imgSrc} alt={props.alt} />{" "}
      </div>
      <p>{props.quote}</p>
    </div>
  );
};

export default TestCard;
