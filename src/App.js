import "./App.css";
import React, { Component } from 'react';
import Header from "./Mycomponents/Header";
import Footer from "./Mycomponents/Footer";
import Hero from "./Mycomponents/Hero";
import Title from "./Mycomponents/Title";
import Pricing from "./Mycomponents/Pricing";
import About from "./Mycomponents/About";
import Login from "./Mycomponents/Login";
import Signup from './Mycomponents/Signup'
import Home from "./Mycomponents/Home";
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReactReduxContext } from "react-redux";
import * as actions from './store/actions/auth';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {  
    return (
    <>
      {" "}
      <Router>
      
        <Switch>

        <Route
            exact
            path="/Login"
            render={() => {
              return (
                <>
                  <Header />
                  <Login {...this.props}/>
                </>
              );
            }}
          ></Route>

          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <Header />
                  <Hero />
                  <Title />
                  <Pricing />
                  <Footer />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/About"
            render={() => {
              return (
                <>
                  <Header />
                  <About />
                </>
              );
            }}
          ></Route>
          <Route
            exact
            path="/Home"
            render={() => {
              return (
                <>
                  <Header />
                  <Hero />
                  <Title />
                  <Pricing />
                  <Footer />
                </>
              );
            }}
          ></Route>
          
          <Route
            exact
            path="/Signup"
            render={() => {
              return (
                <>
                  <Header />
                  <Signup/>
                </>
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </>
  );
}
}



const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);