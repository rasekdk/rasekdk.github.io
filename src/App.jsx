import React, { useState } from "react";
import { Route, Switch } from "react-router";

import Header from "./components/elements/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={menuOpen ? "App menuOpen" : "App"}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
