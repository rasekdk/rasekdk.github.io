import React from "react";
import { Link } from "react-router-dom";

function HomeEnd() {
  return (
    <section>
      <h3>Thank for checking my website</h3>
      <span className="subtitle_low">&#60;/&#62;</span>
      <p>It's a work in progress web site so check it back often!</p>
      <p>
        You can check this project and more <Link to="/projects">here</Link>
      </p>
    </section>
  );
}

export default HomeEnd;
