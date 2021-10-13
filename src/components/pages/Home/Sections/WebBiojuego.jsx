import React from "react";

function WebBiojuego() {
  return (
    <section>
      <h2>
        webDeveloper
        <br className="show_md" />
        .project(<span className="high_color">'BioJuego'</span>)
      </h2>
      <span className="subtitle_low">&#60;Pokemon Theme/&#62;</span>
      <div className="job_description">
        <h3>.about()</h3>
        <p>
          Working at{" "}
          <a
            href="https://www.ingenyus.es/"
            rel="noreferrer"
            target="_blank"
            className="high_color"
          >
            ingenyus*
          </a>{" "}
          I have developed a web video game width{" "}
          <strong className="high_color">React.js</strong> for @
          <a
            href="https://www.bioga.org/"
            rel="noreferrer"
            target="_blank"
            className="high_color"
          >
            Bioga
          </a>
          .
        </p>
        <p>
          The idea was to develop a form where people could lear about @
          <a
            href="https://www.bioga.org/"
            rel="noreferrer"
            target="_blank"
            className="high_color"
          >
            Bioga
          </a>{" "}
          to show all the work that they and their partners do, but at the same
          time do something that was diferent and entertaining.
        </p>
        <p>
          You can try it at:{" "}
          <a
            href="https://biojuego.bioga.org/"
            rel="noreferrer"
            target="_blank"
            className="high_color"
          >
            biojuego.bioga.org
          </a>
        </p>
      </div>
    </section>
  );
}

export default WebBiojuego;
