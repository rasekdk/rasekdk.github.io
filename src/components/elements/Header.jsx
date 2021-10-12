import React from "react";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <Logo type={"logo"} />
        </Link>
        <Link to="/about">
          <Logo type={"about"} />
        </Link>
        <Link to="/contact">
          <Logo type={"contact"} />
        </Link>
        {/* <div>
          <nav>
            <ul>
              <li>&#60;rasek/&#62;</li>
              <li>&#60;about/&#62;</li>
              <li>&#60;contact/&#62;</li>
            </ul>
          </nav>
        </div> */}
      </div>
    </header>
  );
}

export default Header;
