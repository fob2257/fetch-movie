import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ReduxProvider from './redux';

import HomePage from './pages/HomePage';

const App = () => (
  <ReduxProvider>
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  </ReduxProvider>
);

export default App;
