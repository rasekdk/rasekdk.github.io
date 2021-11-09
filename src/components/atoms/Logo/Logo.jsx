import React from "react";

function Logo({ className }) {
  return (
    <div className={className} aria-expanded="false" aria-label="rasek">
      <span>&#60;</span>
      <span>r</span>
      <span>a</span>
      <span>s</span>
      <span>e</span>
      <span>k</span>
      <span>/</span>
      <span>&#62;</span>
    </div>
  );
}

export default Logo;
