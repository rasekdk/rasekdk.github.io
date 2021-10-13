import React from "react";

import JobSkill from "../../../atoms/JobSkill";

function DesignIngenyus() {
  return (
    <section>
      <p className="job_date">August 2019 - August 2020</p>
      <h2>
        graphicDesigner
        <br className="show_md" />
        .at(<span className="high_color">'ingenyus*'</span>)
      </h2>
      <span className="subtitle_low">&#60;I Wish/&#62;</span>
      <div className="job_description">
        <h3>.about()</h3>
        <p>
          I was designing and building web pages and e-commerces at @
          <a
            href="https://www.ingenyus.es/"
            rel="noreferrer"
            target="_blank"
            className="high_color"
          >
            ingenyus*
          </a>
          .
        </p>
        <p>
          I have also designed corporate material, created video animations and
          made corporate videos.
        </p>
      </div>
      <div className="job_skills">
        <h3>.skills()</h3>
        <ul className="job_skills__list">
          <JobSkill>AdobeSuite</JobSkill>
          <JobSkill>Wordpress</JobSkill>
          <JobSkill>JS</JobSkill>
          <JobSkill>HTML</JobSkill>
          <JobSkill>CSS</JobSkill>
          <JobSkill>LESS</JobSkill>
        </ul>
      </div>
    </section>
  );
}

export default DesignIngenyus;
