import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-wrapper">
          <div class="logo">[ColorTest]</div>
          <span></span>
          <span>About Color Blindness</span>
          <span>
            <Link to="test">Color Blind Test </Link>
          </span>

          <span>Contact us</span>
        </div>
      </div>
      <div className="main"></div>
      <div className="header-container">
        <div className="content-wrapper">
          <img src={'/assets/header.jpg'} alt="iris of eye" />
        </div>
      </div>
      <div className="content-section">
        <div className="content-wrapper">
          <div className="section-header"> What is color blindness?</div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
