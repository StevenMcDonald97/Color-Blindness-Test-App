import { useEffect, useState } from 'react';
import styles from './index.module.css';

import QuestionsPage from './questionpage';

import ResultsPage from './resultspage';

import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const TestPage = () => {
  return (
    <div className={styles.page}>
      <h1>this is the test page</h1>
      <Router basename="test">
        <Switch>
          <Route path="/results">
            <ResultsPage />
          </Route>
          <Route path="/">
            <QuestionsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default TestPage;
