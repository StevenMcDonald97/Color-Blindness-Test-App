import React, { useState } from "react";
import testAudioOriginal from "data/testDataHD";
import testDataHD from "data/testDataHD";

const TestHD = () => {
  const [randomIndexHD, setRandomIndexHD] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [testAudio, setTestAudio] = useState([...testAudioOriginal]);

  const playAudio = () => {
    let audio = document.getElementById("audio-element");
    audio.play();
    console.log("Clicked");
  };

  function checkAnswer(answer) {
    console.log(answer);
    if (answer !== "" && answer === testAudio[randomIndexHD].answer) {
      setScore(score + 1);
    } else {
      setScore(score + 0);
    }
    nextTestAudio();
  }

  function nextTestAudio() {
    let currentAudioArray = testAudio;
    if (currentAudioArray.length > 1) {
      currentAudioArray.splice(randomIndexHD, 1);
      setTestAudio(currentAudioArray);
      setRandomIndexHD(Math.floor(Math.random() * testAudio.length));
      console.log(testAudio);
    } else {
      setShowScore(true);
      setTestAudio([...testAudioOriginal]);
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
                  <img
                    src={pad.imgSrc}
                    alt={pad.alt}
                    onClick={() => {
                      checkAnswer(pad.answer);
                      console.log(pad.answer)
                    }}
                  />
                </div>
              ))}
            </div>
            <div>{testAudio[randomIndexHD].audioSrc}</div>
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
              <audio id="audio-element">
                <source src={testAudio[randomIndexHD].audioSrc}></source>
              </audio>
            </div>
          </div>
        ) : (
          <div className="score-container">
            <div className="score">Your score is {score}/{testAudio.length}.</div>
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
