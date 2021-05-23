import React, { useEffect, useState } from "react";
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import testAudioOriginal from "data/testDataHD";
import testDataHD from "data/testDataHD";
import hdContents from "data/hdContents";
import Section from "components/Section";
import englishIcon from "../assets/language-icons/English.JPG";
import hindiIcon from "../assets/language-icons/Hindi.JPG";
import kannadaIcon from "../assets/language-icons/Kannada.JPG";
import tamilIcon from "../assets/language-icons/Tamil.JPG";
import teluguIcon from "../assets/language-icons/Telugu.JPG";


// const englishAudio = require.context("../../public/all-audio/English", false);
// const hindiAudio = require.context("../../public/all-audio/hindi", false);
// const kannadaAudio = require.context("../../public/all-audio/Kannada", false);

const TestHD = () => {
  const [randomIndexHD, setRandomIndexHD] = useState(0);
  const [language, setLanguage] = useState("audioSrcEN");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [HideLangSelect, setHideLangSelect] = useState(false);
  const [testAudio, setTestAudio] = useState([...testAudioOriginal]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [value, setValue] = useState(30);
  const [audio, setAudio] = useState(null);
  const [audioNumber, setAudioNumber] = useState(0);


  useEffect(() => setAudio(document.getElementById("audio-element")), [randomIndexHD, language, score, value, audio]);

  const playAudio = () => {   
    audio.volume = value/100.0;
    // console.log(audio.volume);
    audio.play();
  };

  const checkAnswer = () => {
    if (selectedAnswer !== "" && selectedAnswer === testAudio[randomIndexHD].answer) {
      setScore(score + 1);
    } else {
      setScore(score + 0);
    };
    // console.log(score)
  }

  const nextTestAudio = () => {
    let currentAudioArray = testAudio;
    if (currentAudioArray.length > 1) {
      currentAudioArray.splice(randomIndexHD, 1);
      setTestAudio(currentAudioArray);
      setRandomIndexHD(Math.floor(Math.random() * testAudio.length));
      setAudioNumber(audioNumber+1);
    } else {
      setShowScore(true);
      setTestAudio([...testAudioOriginal]);
    }
  }

  const startTest = () => {
    setShowTest(true);
  }

  const selectLanguage = (lang) => {
    setHideLangSelect(true);
    setLanguage(lang);
  }

  const submitAnswer = () => {
    audio.pause();
    checkAnswer();
    nextTestAudio()
  }

  const resetTest = () => {
    setRandomIndexHD(0);
    setScore(0);
    setShowTest(false);
    setHideLangSelect(false);
    setShowScore(false);
    setTestAudio([...testAudioOriginal]);
    setAudio(document.getElementById("audio-element"));
  }

  const handleToggle = (answer) => {
    setSelectedAnswer(answer);
    // console.log(answer);
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
        { showTest === false ?
          (   <div className="test-content">
                <div className="section-description">
                  <div className="buttons-container">
                    <div
                      key ="hearingTestStart"
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
                  <audio id="audio-element" key={testAudio[randomIndexHD][language]}>
                    <source src={testAudio[randomIndexHD][language]} type="audio/mp3"></source>
                  </audio>
                </div>
              </div>
          ) : HideLangSelect === false ? (
            <div className="test-content">
              <div className="section-description">
                Select A Langugage:
              </div>
              <div className="buttons-container">
                <div
                  className="language-button"
                  name="English"
                  onClick={
                    ()=>selectLanguage("audioSrcEN")
                  }
                >
                  <img className="language-icon" alt="english icon" src={englishIcon}/>
                </div>
                <div
                  className="language-button"
                  name="Hindi"
                  onClick={
                    ()=>selectLanguage("audioSrcHI")
                  }
                >
                  <img className="language-icon" alt="hindi icon" src={hindiIcon}/>
                </div>
                <div
                  className="language-button"
                  name="Kannada"
                  onClick={
                    ()=>selectLanguage("audioSrcKA")
                  }
                >
                  <img className="language-icon" alt="kannadaicon" src={kannadaIcon}/>
                </div>
              </div>
              <div className="line-break"></div>
              <div className="buttons-container">
                <div
                  className="language-button"
                  name="Tamil"
                  onClick={
                    ()=>selectLanguage("audioSrcTM")
                  }
                >
                  <img className="language-icon" alt="tamil icon"src={tamilIcon}/>
                </div>
                <div
                  className="language-button"
                  name="Telugu"
                  onClick={
                    ()=>selectLanguage("audioSrcTE")
                  }
                >
                  <img className="language-icon" alt="telugu icon" src={teluguIcon}/>
                </div>
              </div>
              <div>
                <audio id="audio-element" key={testAudio[randomIndexHD][language]}>
                  <source src={testAudio[randomIndexHD][language]} type="audio/mp3"></source>
                </audio>
              </div>
            </div>
          ) : showScore === false ? (
              <div className="test-content">
                <div className="section-description">
                  Press the play button, listen to the word and press the correct
                  picture of the word. Then click submit. <b> When you submit, a new word will be loaded and you will need to click play again </b>
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
                  {testDataHD.map((pad,index) => (
                    <div key={index} className={`pad ${selectedAnswer === pad.answer ? "selected" : ""}`}>
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
                <div className="buttons-container">
                  <div
                    className="button"
                    onClick={() => {
                      submitAnswer();
                    }}
                  >
                    Submit
                  </div>
                  <div className="counter-container">
                    { audioNumber } / 9 
                  </div>
                </div>
                <div>
                  <audio id="audio-element" key={testAudio[randomIndexHD][language]}>
                    <source src={testAudio[randomIndexHD][language]} type="audio/mp3"></source>
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
