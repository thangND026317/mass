import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Home, Prediction, Footer } from "./components";

import "./App.css";

function App() {
  return <Router>
    <Navbar />

    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/prediction" exact component={Prediction} />
    </Switch>

    <Footer />
  </Router>
}

export default App;
