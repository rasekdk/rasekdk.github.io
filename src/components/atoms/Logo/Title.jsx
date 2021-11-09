import React from "react";
import Logo from "./Logo";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

function Title({ size, type }) {
  switch (type) {
    case "about":
      return <About className={size === "small" ? "about_sm" : "about"} />;
    case "contact":
      return (
        <Contact className={size === "small" ? "contact_sm" : "contact"} />
      );
    case "projects":
      return (
        <Projects className={size === "small" ? "projects_sm" : "projects"} />
      );
    default:
      return <Logo className={size === "small" ? "logo_sm" : "logo"} />;
  }
}

export default Title;
