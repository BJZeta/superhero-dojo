import React from "react";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import BattleRoom from "./pages/BattleRoom";
// import Character from "./pages/Character";
import TestPage from "./pages/TestCharPage";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/character/:key" component={TestPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
