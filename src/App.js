import "./App.css";

import { Switch, Route } from "react-router-dom";

import MenuLink from "components/MenuLink";
import MainPage from "pages/MainPage";
import TestPage from "pages/TestPage";
import AboutPage from "pages/AboutPage";
import ContactPage from "pages/ContactPage";

function App() {
  return (
    <div className="App">
      <MenuLink />

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/about">
          <AboutPage />
        </Route>

        <Route exact path="/test">
          <TestPage />
        </Route>

        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
