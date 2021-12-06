import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Home, Products, Prediction, SignUp } from "./components";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/prediction" exact component={Prediction} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
