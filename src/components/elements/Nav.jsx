import React from "react";
import Title from "../atoms/Logo/Title";
import { NavLink } from "react-router-dom";

function Nav({ onClick, className }) {
  return (
    <nav className={className}>
      <NavLink exact to="/" onClick={onClick}>
        <Title />
      </NavLink>
      <NavLink exact to="/about" onClick={onClick}>
        <Title type={"about"} />
      </NavLink>
      {/* <NavLink exact to="/projects" onClick={onClick}>
        <Title type={"projects"} />
      </NavLink> */}
      <NavLink exact to="/contact" onClick={onClick}>
        <Title type={"contact"} />
      </NavLink>
    </nav>
  );
}

export default Nav;
