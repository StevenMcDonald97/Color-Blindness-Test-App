import './App.css';

import { Switch, Route } from 'react-router-dom';

import MainPage from 'pages/Main';
import TestPage from 'pages/test';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/test">
          <TestPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
