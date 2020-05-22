import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReduxProvider from './redux';

import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';

const App = () => (
  <ReduxProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/results" component={ResultsPage} />
      </Switch>
    </Router>
  </ReduxProvider>
);

export default App;
