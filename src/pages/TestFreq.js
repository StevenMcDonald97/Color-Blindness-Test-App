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
  const [value, setValue] = useState(20);
  const [audio, setAudio] = useState(null);
  const [playTime, setPlayTime] = useState(0);
  const [notSelected, setNotSelected] = useState(true);

  useEffect(() => setAudio(document.getElementById("audio-element")), [notSelected, score, value, audio, testAudio, playTime]);

  const playAudio = () => {
    let timeout = 100*(Math.floor(Math.random() * 50) + 15);
    let currentAudio=testAudio[0];
    setTimeout(function () {
      if (testAudio[0]===currentAudio){
        var d = new Date();
        setPlayTime(d.getTime());
        audio.volume = value/100.0;
        audio.play();
      }
    }, timeout); 
  };

  const checkAnswer = () => {
    setNotSelected(false);
    var d = new Date();
    var clickTime=d.getTime();
    // SET TIME T CLICK HEARD HERE
    if (clickTime-playTime < 5000 && clickTime>playTime){
      setScore(score + 1);
    } else {
      setScore(score + 0);
    };
  }

  const nextTestAudio = () => {
    setNotSelected(true);
    setPlayTime(playTime-6000);
    let currentAudioArray = testAudio;
    if (currentAudioArray.length > 1) {
      currentAudioArray.splice(0, 1);
      setTestAudio(currentAudioArray);
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
        
        <div className="section-header">Hearing Test for Frequencies</div>
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
                          <Section key={`test-${i}`} title={info.title} description={info.infos} />
                        </div>
                      ))}
                  </div>
                  <div className="content-section">
                    {hdContents
                      .filter((content) => content.filter === "instructions")
                      .map((info, i) => (
                        <div>
                          <Section key={`instructions-${i}`} title={info.title} description={info.infos} />
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
                  <p>Press the play button and listen for a tone. Press "Heard" if you hear the tone, or press "Didn't hear" if you do not hear it after <b>10 seconds</b>.</p> 
                  <p>If you need to you can adjust the volume to a more comfortable level.</p>
                  <p><b>When you click either "Didn't Hear" or "Heard" the next audio will be loaded and you will need to press play again.</b></p>
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
