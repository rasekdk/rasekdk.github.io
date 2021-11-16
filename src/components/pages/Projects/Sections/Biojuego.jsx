import React from "react";
import Button from "../../../atoms/Button";

function Biojuego() {
  return (
    <section>
      <h2>
        <br className="show_md" />
        .show(<span className="high_color">'BioJuego'</span>)
      </h2>
      <span className="subtitle_low">&#60;8-bits video game/&#62;</span>
      <div className="section_description">
        <h3>.about()</h3>
        <p>
          A mini game to show people the projects of @
          <a href="https://www.bioga.org/">bioga</a> and its partners.
        </p>
      </div>
      <div className="section_description">
        <h3>.needs()</h3>
        <p>
          Create a different and fun new way to introduce @
          <a href="https://www.bioga.org/">bioga</a> partners to the biotech
          environment.
        </p>
      </div>
      <div className="section_description">
        <p>
          <Button to="/biojuego">See more &#62;</Button>
        </p>
      </div>
    </section>
  );
}

export default Biojuego;
