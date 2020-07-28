import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/:company?' render={routeProps => <Home {...routeProps} />} />
      </Switch>
    </Router>
  );
}

export default App;
