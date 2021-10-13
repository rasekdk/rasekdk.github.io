import React from "react";

import JobSkill from "../../../atoms/JobSkill";

function StudyHabProject() {
  return (
    <section>
      <h2>
        studies
        <br className="show_md" />
        .project(<span className="high_color">'Hack a Boss'</span>)
      </h2>
      <span className="subtitle_low">&#60;Classico/&#62;</span>
      <div className="job_description">
        <h3>.about()</h3>
        <p>A social network from scratch.</p>
        <p>
          A fullstack web development bootcamp based on{" "}
          <strong className="high_color">React.js</strong>,{" "}
          <strong className="high_color">Node.js</strong> and{" "}
          <strong className="high_color">MySQL</strong>.
        </p>
      </div>
      <div className="job_skills">
        <h3>.used()</h3>
        <ul className="job_skills__list">
          <JobSkill>JS</JobSkill>
          <JobSkill>HTML</JobSkill>
          <JobSkill>CSS</JobSkill>
          <JobSkill>React.js</JobSkill>
          <JobSkill>Node.js</JobSkill>
          <JobSkill>MySQL</JobSkill>
        </ul>
      </div>
      <div className="job_description">
        <h3>.wip()</h3>
        <p>
          I'm currently working on a new version of this project with some new
          tecnologies I have learned since I finished it.
        </p>
      </div>
    </section>
  );
}

export default StudyHabProject;
