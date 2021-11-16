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
import CommunityProject from "./components/pages/Community/CommunityProject";
import useScrollBlock from "./hooks/useScrollBlock";
import useResetScroll from "./hooks/useResetScroll";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  useResetScroll();

  if (menuOpen) blockScroll();
  if (!menuOpen) allowScroll();

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AnimatePresence>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/projects/community">
            <CommunityProject />
          </Route>
          <Route exact path="/projects/biojuego">
            <Projects />
          </Route>
          <Route exact path="/contact" component={Contact} />
          <Route component={ErrorPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
