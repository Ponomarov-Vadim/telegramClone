import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import "./App.module.css";

import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';

const  App = () => {
  return (
    <Router>
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
    </Router>
  );
}

export default App;