import React from "react";
import logo from "./logo.png";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "reactstrap";
import CreateSurvey from "./components/CreateSurvey";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/create">
              <CreateSurvey />
            </Route>
            <Route path="/take">Take Survey</Route>
            <Route path="/">
              <Link to="/create">
                <Button className="survey-main-btn">Create Survey</Button>
              </Link>
              <Link to="/take">
                <Button className="survey-main-btn">Take Survey</Button>
              </Link>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
