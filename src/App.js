import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./Container/AboutContainer";
import Landing from "./Container/LandingContainer";
import Login from "./Container/LoginContainer";
import Signup from "./Container/SignupContainer";
import Loading from "./Container/LoadingScreen";
import Bookmark from "./Container/BookmarksContainer";
import Portfolio from "./Container/PortfolioContainer";
import Team from "./Container/TeamContainer";
import { DataProvider } from "./ContextApi";

export default function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/loading" component={Loading} />
          <Route exact path="/bookmarks" component={Bookmark} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/team" component={Team} />
        </Switch>
      </Router>
    </DataProvider>
  );
}
