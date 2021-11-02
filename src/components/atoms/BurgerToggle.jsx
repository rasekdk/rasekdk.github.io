import React from "react";

function BurgerToggle({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <span>&#91;</span>
      <span>m</span>
      <span>e</span>
      <span>n</span>
      <span>u</span>
      <span>&#93;</span>
    </div>
  );
}

export default BurgerToggle;
