import React from "react";
import Logo from "../atoms/Logo";

function Header() {
  return (
    <header>
      <div>
        <Logo type={"logo"} />
        <Logo type={"about"} />
        <Logo type={"contact"} />
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
