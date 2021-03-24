import React, { useEffect, useState } from "react";
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import testAudioOriginal from "data/testPitchs";
import hdContents from "data/pitchContents"
import Section from "components/Section"

// const englishAudio = require.context("../../public/all-audio/English", false);
// const hindiAudio = require.context("../../public/all-audio/hindi", false);
// const kannadaAudio = require.context("../../public/all-audio/Kannada", false);

const TestPitch = () => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [testAudio, setTestAudio] = useState([...testAudioOriginal]);
  const [value, setValue] = useState(25);
  const [audio, setAudio] = useState(null);
  const [playTime, setPlayTime] = useState(0);
  const [notSelected, setNotSelected] = useState(true);

  useEffect(() => setAudio(document.getElementById("audio-element")), [notSelected, score, value, audio, testAudio, playTime]);

  const playAudio = () => {
    let timeout = 100*(Math.floor(Math.random() * 45) + 20);
    setTimeout(function () {
      var d = new Date();
      setPlayTime(d.getTime());
      audio.volume = value/100.0;
      audio.play();
    }, timeout); 

  };

  const checkAnswer = () => {
    setNotSelected(false);
    var d = new Date();
    var clickTime=d.getTime();
    if (clickTime-playTime < 1500 && clickTime>playTime){
      setScore(score + 1);
    } else {
      setScore(score + 0);
    };
  }

  const nextTestAudio = () => {
    setNotSelected(true);
    let currentAudioArray = testAudio;
    if (currentAudioArray.length > 1) {
      currentAudioArray.splice(0, 1);
      setTestAudio(currentAudioArray);
      console.log(currentAudioArray[0]);
    } else {
      setShowScore(true);
      setTestAudio([...testAudioOriginal]);
    }
  }

  const startTest = () => {
    setShowTest(true);
  }

  const submitAnswer = () => {
    audio.pause();
    checkAnswer();
    nextTestAudio();
  }

  const passOnAnswer = () => {
    console.log("clicked");
    setNotSelected(false);
    audio.pause();
    setPlayTime(0);
    setScore(score + 0);
    nextTestAudio();
  }

  const resetTest = () => {
    setNotSelected(true);
    setScore(0);
    setShowTest(false);
    setShowScore(false);
    setTestAudio([...testAudioOriginal]);
    setAudio(document.getElementById("audio-element"));
  }


  const handleVolumeChange = (event, newValue) => {
    setValue(newValue);
    audio.volume = value/100.0;
  };

  return (
    <div className="content-section">
      <div className="content-wrapper">
        {/*Choose Languages Section before entering the test */}
        
        <div className="section-header">Hearing Frequency Test</div>
        { showTest === false ?
          (   <div className="test-content">
                <div className="section-description">
                  <div className="buttons-container">
                    <div
                      className="button start-button"
                      onClick={() => {
                        startTest();
                      }}
                    >
                      Start Test
                    </div>
                  </div>
                  <div className="content-section">
                    {hdContents
                      .filter((content) => content.filter === "test")
                      .map((info, i) => (
                        <div>
                          <Section key={i} title={info.title} description={info.infos} />
                        </div>
                      ))}
                  </div>
                  <div className="content-section">
                    {hdContents
                      .filter((content) => content.filter === "instructions")
                      .map((info, i) => (
                        <div>
                          <Section key={i} title={info.title} description={info.infos} />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="buttons-container">
                  <div
                    className="button"
                    onClick={() => {
                      startTest();
                    }}
                  >
                    Start Test
                  </div>
                </div>
                <div>
                  <audio id="audio-element" key={testAudio[0]["file"]}>
                    <source src={testAudio[0]["file"]} type="audio/mp3"></source>
                  </audio>
                </div>
              </div>
          ) : showScore === false ? (
              <div className="test-content">
                <div className="section-description">
                  Press the play button, listen for a tone and press the submit button when you hear the tone. The tone will play within 8 seconds.
                </div>
                <div className="section-header"> {testAudio[0]["pitch"]} </div>
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
                <div className="buttons-container">
                  <div
                    className="button"
                    onClick={() => {
                      passOnAnswer();
                    }}
                  >
                    Didn't hear
                  </div>
                  <div
                    className="button"
                    onClick={() => {
                      submitAnswer();
                    }}
                  >
                    Heard
                  </div>
                </div>
                <div>
                  <audio id="audio-element" key={testAudio[0]["file"]}>
                    <source src={testAudio[0]["file"]} type="audio/mp3"></source>
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

export default TestPitch;
