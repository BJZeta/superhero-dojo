import React from "react";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import BattleRoom from "./pages/BattleRoom";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/battle-room">
            <BattleRoom />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
