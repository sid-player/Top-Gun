import "./App.css";
import React from 'react';
import About from "./Container/AboutContainer";
import Home from "./Container/HomeContainer";
import Login from "./Container/LoginContainer";
import Signup from "./Container/SignupContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(props) {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Home" container={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
      </Switch>
    </Router>
  );
}