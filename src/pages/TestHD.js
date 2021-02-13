import React, { useEffect, useState } from "react";
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import testAudioOriginal from "data/testDataHD";
import testDataHD from "data/testDataHD";


const TestHD = () => {
  const [randomIndexHD, setRandomIndexHD] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [testAudio, setTestAudio] = useState([...testAudioOriginal]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [value, setValue] = useState(30);
  const [audio, setAudio] = useState(null);

  useEffect(() => setAudio(document.getElementById("audio-element")), [randomIndexHD,value]);

  const playAudio = () => {    
    audio.volume = value/100.0;
    console.log(audio.volume);
    audio.play();
  };

  const checkAnswer = () => {
    if (selectedAnswer !== "" && selectedAnswer === testAudio[randomIndexHD].answer) {
      setScore(score + 1);
    } else {
      setScore(score + 0);
    };
    console.log(score)
  }

  const nextTestAudio = () => {
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

  const submitAnswer = () => {
    checkAnswer();
    nextTestAudio()
  }

  const resetTest = () => {
    setScore(0);
    setShowScore(false);
  }

  const handleToggle = (answer) => {
    setSelectedAnswer(answer);
    console.log(answer);
  }

  const handleVolumeChange = (event, newValue) => {
    setValue(newValue);
    audio.volume = value/100.0;
  };

  return (
    <div className="content-section">
      <div className="content-wrapper">
        {/*Choose Languages Section before entering the test */}
        
        <div className="section-header">Hearing Test</div>

        {showScore === false ? (
          <div className="test-content">
            <div className="section-description">
              Press the play button, listen to the word and press the correct
              picture of the word.
            </div>
            <div className="buttons-container">
              <div className="button" onClick={playAudio}>
                Play
              </div>
              <div className="slider-container">
                <VolumeDown />
                  <Slider value={value} onChange={handleVolumeChange} aria-labelledby="continuous-slider" />
                <VolumeUp />
                {value}
              </div>
            </div>
            <div className="pad-container">
              {testDataHD.map((pad) => (
                <div className={`pad ${selectedAnswer === pad.answer ? "selected" : ""}`}>
                  <img
                    src={pad.imgSrc}
                    alt={pad.alt}
                    onClick={() => {
                      handleToggle(pad.answer);
                    }}
                  />
                </div>
              ))}
            </div>
            <div>{testAudio[randomIndexHD].audioSrcEN}</div>
            <div className="buttons-container">
              <div
                className="button"
                onClick={() => {
                  submitAnswer();
                }}
              >
                Submit
              </div>
            </div>
            <div>
              <audio id="audio-element" key={testAudio[randomIndexHD].audioSrcEN}>
                <source src="/assets/audio-hearing-test/en/houseEN.mp3" type="audio/mp3"></source>
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
