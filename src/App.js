import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import MainHeader from './components/Headers/MainHeader';

const App = () => {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/about">
          About
        </Route>
        <Route exact path="/projects">
          Projects
        </Route>
        <Route exact path="/contact">
          Contact
        </Route>
        <Route exact path="/resume">
          Resume
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
