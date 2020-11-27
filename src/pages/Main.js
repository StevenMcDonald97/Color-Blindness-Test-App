import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-wrapper">
          <div class="logo">[ColorTest]</div>
          <span></span>
          <span>ABOUT COLOR BLINDNESS</span>
          <span>
            <Link to="test">COLOR BLIND TEST </Link>
          </span>

          <span>CONTACT US</span>
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
          <div className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, enim vel lobortis pretium, lacus ligula volutpat metus, vel feugiat massa nisl id ex. Praesent in lacus auctor, dapibus mi accumsan, facilisis leo. Donec egestas nulla leo, eu porta orci venenatis ac. Duis mollis metus in massa pulvinar, a ullamcorper ex congue. Fusce placerat nunc sapien, fringilla dictum quam congue dapibus. Donec sem metus, vulputate vel venenatis ut, tristique id sapien. Aenean quis viverra ex.</div>
        </div>
      </div>
      <div className="content-section">
        <div className="content-wrapper">
          <div className="section-header"> Take a quick test?</div>
          <div className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque gravida, enim vel lobortis pretium, lacus ligula volutpat metus, vel feugiat massa nisl id ex. Praesent in lacus auctor, dapibus mi accumsan, facilisis leo. Donec egestas nulla leo, eu porta orci venenatis ac. Duis mollis metus in massa pulvinar, a ullamcorper ex congue. Fusce placerat nunc sapien, fringilla dictum quam congue dapibus. Donec sem metus, vulputate vel venenatis ut, tristique id sapien. Aenean quis viverra ex.</div>
        </div>
      </div>
      <div className="content-section">
        <div className="content-wrapper">
          <div className="section-header"> Contact us</div>
        </div>
      </div>
      <div className="footer">
        <div className="content-wrapper">
          <div className="footer-description">
          © 2020 ColorTest Private Limited All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
