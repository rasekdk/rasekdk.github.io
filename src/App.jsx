import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Route, Switch } from "react-router";
import { Helmet } from "react-helmet";

import Header from "./components/elements/Header";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home/Home";
import Projects from "./components/pages/Projects/Projects";

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
          {/* <Route exact path="/projects">
            <Projects />
          </Route> */}
          <Route exact path="/contact" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
