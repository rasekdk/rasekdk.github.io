import React from "react";

import JobSkill from "../../../atoms/JobSkill";

function WebIngenyus() {
  return (
    <section>
      <p className="section_date">April 2021 - now</p>
      <h2>
        webDeveloper
        <br className="show_md" />
        .at(<span className="high_color">'ingenyus*'</span>)
      </h2>
      <span className="subtitle_low">&#60;ATWA/&#62;</span>
      <div className="section_description">
        <h3>.about()</h3>
        <p>
          I was developing multiple web pages and e-commerces at @
          <a href="https://www.ingenyus.es/" rel="noreferrer" target="_blank">
            ingenyus*
          </a>{" "}
          and working with the creative and desing team to get a better{" "}
          <strong>UX/UI</strong> on all our clients' sites.
        </p>
      </div>
      <div className="section_skills">
        <h3>.skills()</h3>
        <ul className="section_skills__list">
          <JobSkill>PHP</JobSkill>
          <JobSkill>Wordpress</JobSkill>
          <JobSkill>JS</JobSkill>
          <JobSkill>HTML</JobSkill>
          <JobSkill>CSS</JobSkill>
          <JobSkill>SASS</JobSkill>
          <JobSkill>LESS</JobSkill>
          <JobSkill>React.js</JobSkill>
        </ul>
      </div>
    </section>
  );
}

export default WebIngenyus;
