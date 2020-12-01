import testCards from "data/testCards";
import React, { useState } from "react";
import TestCard from "../components/TestCard";

const TestPage = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [answer, setAnswer] = useState();

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      checkAnswer();
    }
    nextTestCard();
  }

  function nextTestCard() {
    setRandomIndex(Math.floor(Math.random() * testCards.length));
  }

  function checkAnswer() {
    console.log(answer);
    console.log(testCards[randomIndex].answer);
    nextTestCard();
  }

  return (
    <div className="main">
      <div className="header-container light-grey">
        <div className="content-wrapper"></div>
      </div>

      <div className="content-section">
        <div className="content-wrapper">
          <div className="section-header">Simple Color Blind Test</div>
          <div className="section-description">Test Info</div>
          <TestCard
            imgSrc={testCards[randomIndex].imgSrc}
            alt={testCards[randomIndex].alt}
          />
          <div className="input-container">
            <input
              type="number"
              onKeyPress={(e) => {
                handleKeyDown(e);
              }}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
            <button
              onClick={() => {
                checkAnswer();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;

/*          {testCards.map((testCard) => (
            <TestCard imgSrc={testCard.imgSrc} alt={testCard.alt} />
          ))}*/
