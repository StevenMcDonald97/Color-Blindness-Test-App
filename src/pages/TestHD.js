import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import testCardsOriginal from "data/testCards";
import TestCard from "../components/TestCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TestHD = () => {
  const [value, setValue] = useState(0);
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

  function checkAnswer() {
    if (answer !== "" && answer === testCards[randomIndex].answer) {
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
      currentCardArray.splice(randomIndex, 1);
      setTestCards(currentCardArray);
      setRandomIndex(Math.floor(Math.random() * testCards.length));
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
     <div className="main">
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Color Blind Test" {...a11yProps(0)} />
          <Tab label="Hearing Test" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

     {/*COLOR BLIND TEST*/}
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
                Close
              </div>
            </div>
          )}
        </div>
      </div>
      </TabPanel>


     {/*HEARING TEST*/}
      <TabPanel value={value} index={1}>
      <div className="content-section">
        <div className="content-wrapper">
          <div className="section-header">Hearing Test</div>
          
            <div className="test-content">
              <div className="section-description">
                Press the play button, listen to the word and press the correct picture of the word.
              </div>

            </div>
          

        </div>
      </div>
      </TabPanel>
    </div>
  );
};

export default TestHD;
