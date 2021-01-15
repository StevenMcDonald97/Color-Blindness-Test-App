import "./App.css";
import { Switch, Route } from "react-router-dom";

import MainPage from "pages/MainPage";
import AboutCB from "pages/AboutCB";
import AboutHD from "pages/AboutHD";
import TestsPage from "pages/TestsPage";
import ContactPage from "pages/ContactPage";
import MenuLink from "components/MenuLink"

function App() {
  return (
    <div className="App">
      <MenuLink/>
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

        <Route exact path="/tests">
          <TestsPage />
        </Route>


        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
