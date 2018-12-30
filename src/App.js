import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/login" exact strict component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
