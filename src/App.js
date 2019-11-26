import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import BookPage from './components/BookPage/BookPage'


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/details" component={BookPage} />
    </Router>
  );
}

export default App;
