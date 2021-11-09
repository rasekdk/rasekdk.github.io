import React from "react";

import JobSkill from "../../../atoms/JobSkill";

function StudyHab() {
  return (
    <section>
      <p className="section_date">Nobember 2020 - February 2021</p>
      <h2>
        studies
        <br className="show_md" />
        .at(<span className="high_color">'Hack a Boss'</span>)
      </h2>
      <span className="subtitle_low">&#60;Be prepare for hell/&#62;</span>
      <div className="section_description">
        <h3>.about()</h3>
        <p>It was hard but also incredible experience.</p>
        <p>
          A fullstack web development bootcamp at @
          <a href="https://www.hackaboss.com/" target="_blank" rel="noreferrer">
            Hack a Boss
          </a>{" "}
          based on <strong>React.js</strong>, <strong>Node.js</strong> and{" "}
          <strong>MySQL</strong>.
        </p>
      </div>
      <div className="section_skills">
        <h3>.learned()</h3>
        <ul className="section_skills__list">
          <JobSkill>JS</JobSkill>
          <JobSkill>HTML</JobSkill>
          <JobSkill>CSS</JobSkill>
          <JobSkill>React.js</JobSkill>
          <JobSkill>Node.js</JobSkill>
          <JobSkill>MySQL</JobSkill>
          <JobSkill>Agile</JobSkill>
        </ul>
      </div>
    </section>
  );
}

export default StudyHab;
