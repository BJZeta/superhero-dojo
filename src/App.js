import React from "react";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import CharChard from "./components/CharCard";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharCard from "./components/CharCard";

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
            <CharCard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
