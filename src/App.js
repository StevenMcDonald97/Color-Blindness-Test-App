import "./App.css";
import header from "./assets/header.jpg";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="nav-wrapper">
          <div class="logo">[ColorTest]</div>
          <span></span>
          <span>About Color Blindness</span>
          <span>Color Blind Test</span>
          <span>Contact us</span>
        </div>
      </div>
      <div className="main"></div>
      <div className="header-container">
        <div className="content-wrapper">
          <img src={header} alt="iris of eye" />
        </div>
      </div>
      <div className="content-section">
        <div className="content-wrapper">
          <div className="section-header"> What is color blindness?</div></div>
      </div>
    </div>
  );
}

export default App;
