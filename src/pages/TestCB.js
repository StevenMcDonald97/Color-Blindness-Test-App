import React, { useState } from "react";
import testCardsOriginal from "data/testCards";
import TestCard from "../components/TestCard";

const TestCB = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [testCards, setTestCards] = useState([...testCardsOriginal]);

  function handleKeyDown(e) {
    if (e.key === "Enter" && answer !== "") {
      checkAnswer();
    }
  }

  function unSureAnswer() {
    setScore(score + 0);
    nextTestCard();
    setAnswer("");
  }

  function checkAnswer() {
    if (answer !== "" && answer === testCards[randomIndex].answer) {
      setScore(score + 1);
    } else {
      setScore(score + 0);
    }
    nextTestCard();
    setAnswer("");
  }

  function resetTest() {
    setScore(0);
    setTestCards([...testCardsOriginal]);
    setShowScore(false);
    console.log(score);
    console.log(testCards);
  }

  function nextTestCard() {
    let currentCardArray = testCards;
    if (currentCardArray.length > 1) {
      currentCardArray.splice(randomIndex, 1);
      setTestCards(currentCardArray);
      setRandomIndex(Math.floor(Math.random() * testCards.length));
    } else {
      setShowScore(true);
      setTestCards(testCards);
    }
  }


  return (
    <div className="main">
      <div className="content-section">
        <div className="content-wrapper">
          <div className="section-header">Color Blind Test</div>

          {showScore === false ? (
            <div className="test-content">
              <div className="section-description">
                Look at the number inside the picture and enter the correct
                answer in the box below.
              </div>
              <TestCard
                imgSrc={testCards[randomIndex].imgSrc}
                alt={testCards[randomIndex].alt}
              />
              <div className="input-container flex">
                <input
                  type="number"
                  placeholder="Enter your answer here"
                  value={answer}
                  onKeyPress={(e) => {
                    handleKeyDown(e);
                  }}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                                <div
                  className="button"
                  onClick={() => {
                    unSureAnswer();
                  }}
                >
                  Not Sure
                </div>
                <div
                  className="button"
                  onClick={() => {
                    checkAnswer();
                  }}
                >
                  Submit
                </div>
              </div>{" "}
            </div>
          ) : (
            <div className="score-container">
              <div className="score">Your score is {score}/15.</div>
              <div
                className="button"
                onClick={() => {
                  resetTest();
                }}
              >
                Reset/Close
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestCB;
