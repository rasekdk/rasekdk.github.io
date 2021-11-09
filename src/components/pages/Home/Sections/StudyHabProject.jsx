import React from "react";

import JobSkill from "../../../atoms/JobSkill";

function StudyHabProject() {
  return (
    <section>
      <h2>
        studies
        <br className="show_md" />
        .project(<span className="high_color">'Community'</span>)
      </h2>
      <span className="subtitle_low">&#60;Classico/&#62;</span>
      <div className="section_description">
        <h3>.about()</h3>
        <p>A social network from scratch.</p>
        <p>
          A fullstack social network app based on <strong>React.js</strong>,{" "}
          <strong>Node.js</strong> and <strong>MySQL</strong>.
        </p>
      </div>
      <div className="section_skills">
        <h3>.used()</h3>
        <ul className="section_skills__list">
          <JobSkill>JS</JobSkill>
          <JobSkill>HTML</JobSkill>
          <JobSkill>CSS</JobSkill>
          <JobSkill>React.js</JobSkill>
          <JobSkill>Node.js</JobSkill>
          <JobSkill>MySQL</JobSkill>
        </ul>
      </div>
      <div className="section_description">
        <h3>.wip()</h3>
        <p className="small_text">
          I'm currently working on a new version of this project with some new
          tecnologies I have learned since I finished it.
        </p>
      </div>
    </section>
  );
}

export default StudyHabProject;
