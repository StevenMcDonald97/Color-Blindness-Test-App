import "./App.css";

import { Switch, Route } from "react-router-dom";

import MenuLink from "components/MenuLink";
import MainPage from "pages/MainPage";
import AboutCB from "pages/AboutCB";
import AboutHD from "pages/AboutHD";
import TestCB from "pages/TestCB";
import TestHD from "pages/TestHD";
import ContactPage from "pages/ContactPage";

function App() {
  return (
    <div className="App">
      <MenuLink />

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/about-color-blind">
          <AboutCB />
        </Route>

        <Route exact path="/about-hearing-disability">
          <AboutHD />
        </Route>

        <Route exact path="/test-colorblindness">
          <TestCB />
        </Route>

        <Route exact path="/test-hearing">
          <TestHD />
        </Route>

        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
