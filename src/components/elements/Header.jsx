import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BurgerToggle from "../atoms/BurgerToggle";
import Logo from "../atoms/Logo";
import Nav from "./Nav";

function Header({ menuOpen, setMenuOpen }) {
  const handleClick = () => setMenuOpen(!menuOpen);

  return (
    <header className="menu">
      <Link exact to="/">
        <Logo size={menuOpen ? "small" : ""} />
      </Link>
      <BurgerToggle
        className={menuOpen ? "menu_burger open" : "menu_burger"}
        onClick={handleClick}
      />
      <Nav onClick={handleClick} className={menuOpen ? "open" : ""} />
    </header>
  );
}

export default Header;
