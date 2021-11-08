import React from "react";
import Logo from "../atoms/Logo";
import { NavLink } from "react-router-dom";

function Nav({ onClick, className }) {
  return (
    <nav className={className}>
      <NavLink exact to="/" onClick={onClick}>
        <Logo type={"logo"} />
      </NavLink>
      <NavLink exact to="/about" onClick={onClick}>
        <Logo type={"about"} />
      </NavLink>
      {/* <NavLink exact to="/projects" onClick={onClick}>
        <Logo type={"projects"} />
      </NavLink> */}
      <NavLink exact to="/contact" onClick={onClick}>
        <Logo type={"contact"} />
      </NavLink>
    </nav>
  );
}

export default Nav;
