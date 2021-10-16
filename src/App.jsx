import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router";

import Header from "./components/elements/Header";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home/Home";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={menuOpen ? "App menuOpen" : "App"}>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
