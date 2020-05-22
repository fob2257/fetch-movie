import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ReduxProvider from './redux';

import HomePage from './pages/HomePage';
import ResultsPage from './pages/ResultsPage';
import ResultDetailPage from './pages/ResultDetailPage';

const App = () => (
  <ReduxProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route path="/results/:id" component={ResultDetailPage} />
      </Switch>
    </Router>
  </ReduxProvider>
);

export default App;
