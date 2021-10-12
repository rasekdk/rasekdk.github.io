import React from "react";

function Logo({ size = "small", type = "logo", menuOpen, setMenuOpen }) {
  if (type === "about")
    return (
      <div
        className={size === "small" ? "about_sm" : "about"}
        aria-expanded="false"
        aria-label="about"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>&#60;</span>
        <span>a</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
        <span>/</span>
        <span>&#62;</span>
      </div>
    );
  if (type === "contact")
    return (
      <div
        className={size === "small" ? "contact_sm" : "contact"}
        aria-expanded="false"
        aria-label="rasek"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span>&#60;</span>
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
        <span>/</span>
        <span>&#62;</span>
      </div>
    );
  return (
    <div
      className={size === "small" ? "logo_sm" : "logo"}
      aria-expanded="false"
      aria-label="rasek"
      onClick={() => setMenuOpen(!menuOpen)}
    >
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
