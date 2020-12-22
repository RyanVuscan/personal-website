// @ts-check
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import MainHeader from './components/Headers/MainHeader';
import About from './components/Screens/About/About';
import Contact from './components/Screens/Contact/Contact';
import Projects from './components/Screens/Projects/Projects';
import ScrollToTop from './components/Utility/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <MainHeader />
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/about" />
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
