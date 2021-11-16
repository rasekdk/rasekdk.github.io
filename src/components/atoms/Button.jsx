import React from "react";
import { Link } from "react-router-dom";

function Button({ children, to }) {
  return (
    <Link to={to} className="btn btn_inline">
      {children}
    </Link>
  );
}

export default Button;
