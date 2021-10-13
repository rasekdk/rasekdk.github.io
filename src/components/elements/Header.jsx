import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../atoms/Logo";

function Header({ menuOpen, setMenuOpen }) {
  const handleClick = () => setMenuOpen(!menuOpen);

  return (
    <header className="menu">
      <Link exact to="/">
        <Logo size={menuOpen ? "small" : ""} />
      </Link>
      <div
        className={menuOpen ? "menu_burger open" : "menu_burger"}
        onClick={() => handleClick()}
      >
        <span>&#91;</span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>u</span>
        <span>&#93;</span>
      </div>
      <nav className={menuOpen ? "open" : ""}>
        <NavLink exact to="/" onClick={() => handleClick()}>
          <Logo type={"logo"} />
        </NavLink>
        <NavLink exact to="/about" onClick={() => handleClick()}>
          <Logo type={"about"} />
        </NavLink>
        <NavLink exact to="/contact" onClick={() => handleClick()}>
          <Logo type={"contact"} />
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
