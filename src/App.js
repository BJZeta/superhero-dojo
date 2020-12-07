import "./custom.css";
import React, { Component } from "react";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import BattleRoom from "./pages/BattleRoom";
import Character from "./pages/Character";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/characters" component={Characters} />
            <Route path="/battle-room" component={BattleRoom} />
            <Route path="/character/:key" component={Character} />
          </Switch>
        </Router>
      </div>
    );
  }
}
