import "./App.css";
import Header from "./Mycomponents/Header";
import Footer from "./Mycomponents/Footer";
import Hero from "./Mycomponents/Hero";
import Title from "./Mycomponents/Title";
import Pricing from "./Mycomponents/Pricing";
import About from "./Mycomponents/About";
import Login from "./Mycomponents/Login";
import Signup from './Mycomponents/Signup'
import Home from "./Mycomponents/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <Router>
      
        <Switch>
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
            path="/Login"
            render={() => {
              return (
                <>
                  <Header />
                  <Login/>
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

export default App;
