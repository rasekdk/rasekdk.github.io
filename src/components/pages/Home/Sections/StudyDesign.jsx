import React from "react";

import JobSkill from "../../../atoms/JobSkill";

function StudyDesign() {
  return (
    <section>
      <p className="job_date">September 2016 - June 2019</p>
      <h2>
        studies
        <br className="show_md" />
        .at(<span className="high_color">'Marcelo Macias'</span>)
      </h2>
      <span className="subtitle_low">&#60;Don't Stop Me Now/&#62;</span>
      {/* <div className="job_description">
        <h3>.about()</h3>
        <p>It was hard but also incredible experience.</p>
        <p>
          A fullstack web development bootcamp based on{" "}
          <strong className="high_color">React.js</strong>,{" "}
          <strong className="high_color">Node.js</strong> and{" "}
          <strong className="high_color">MySQL</strong>.
        </p>
      </div> */}
      <div className="job_skills">
        <h3>.learned()</h3>
        <ul className="job_skills__list">
          <JobSkill>AdobeSuite</JobSkill>
          <JobSkill>HTML</JobSkill>
          <JobSkill>CSS</JobSkill>
          <JobSkill>3dModel</JobSkill>
          <JobSkill>VideoEdition</JobSkill>
          <JobSkill>UX</JobSkill>
          <JobSkill>UI</JobSkill>
        </ul>
      </div>
    </section>
  );
}

export default StudyDesign;
