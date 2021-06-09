import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./Container/AboutContainer";
import Landing from "./Container/LandingContainer";
import Login from "./Container/LoginContainer";
import Signup from "./Container/SignupContainer";
import Home from "./Container/HomeContainer";
import Loading from "./Container/LoadingScreen";
import Bookmark from "./Container/BookmarksContainer";

export default function App() {  

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Loading" component={Loading} />
        <Route exact path="/Bookmarks" component={Bookmark}/>
      </Switch>
    </Router>
  );
}