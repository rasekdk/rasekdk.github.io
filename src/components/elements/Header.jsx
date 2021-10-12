import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../atoms/Logo";

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="menu">
      <Logo size={menuOpen ? "small" : ""} />
      <div
        className={menuOpen ? "menu_burger open" : "menu_burger"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>&#91;</span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>u</span>
        <span>&#93;</span>
      </div>
      <nav className={menuOpen ? "open" : ""}>
        <NavLink exact to="/">
          <Logo type={"logo"} />
        </NavLink>
        <NavLink exact to="/about">
          <Logo type={"about"} />
        </NavLink>
        <NavLink exact to="/contact">
          <Logo type={"contact"} />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
