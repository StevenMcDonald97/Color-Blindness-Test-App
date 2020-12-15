import React, { useState } from "react";
import testCardsOriginal from "data/testDataHD";
import testDataHD from "data/testDataHD";

const TestHD = () => {
  const [randomIndexHD, setRandomIndexCB] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [testCards, setTestCards] = useState([...testCardsOriginal]);

  const playAudio = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };

  function checkAnswer() {
    if (answer !== "" && answer === testCards[randomIndexHD].answer) {
      setScore(score + 1);
    } else {
      setScore(score + 0);
    }
    nextTestCard();
    setAnswer("");
  }

  function nextTestCard() {
    let currentCardArray = testCards;
    if (currentCardArray.length > 1) {
      currentCardArray.splice(randomIndexHD, 1);
      setTestCards(currentCardArray);
      setRandomIndexCB(Math.floor(Math.random() * testCards.length));
      console.log(testCards);
    } else {
      setShowScore(true);
      setTestCards([...testCardsOriginal]);
    }
  }

  function resetTest() {
    setScore(0);
    setShowScore(false);
  }

  return (
    <div className="content-section">
      <div className="content-wrapper">
        <div className="section-header">Hearing Test</div>

        {showScore === false ? (
        <div className="test-content">
          <div className="section-description">
            Press the play button, listen to the word and press the correct
            picture of the word.
          </div>

          <div className="pad-container">
            {testDataHD.map((pad) => (
              <div className="pad">
                <img src={pad.imgSrc} alt={pad.alt} />
              </div>
            ))}
          </div>
          <div className="buttons-container">
            <div className="button" onClick={playAudio}>
              Play
            </div>
            <div
              className="button"
              onClick={() => {
                checkAnswer();
              }}
            >
              Submit
            </div>
          </div>
          <div>
            <audio className="audio-element">
              <source src={testCards[randomIndexHD].audioSrc}></source>
            </audio>
          </div>
        </div>
        ): (
          <div className="score-container">
          <div className="score">Your score is {score}/15.</div>
          <div
            className="button"
            onClick={() => {
              resetTest();
            }}
          >
            Close
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default TestHD;
