import React from "react";

import Button from "../atoms/Button";
import GitHubIco from "../atoms/icons/GitHubIco";
import VideoIco from "../atoms/icons/VideoIco";

function ProjectInfo({ subtitle, tag, repo, demo, use }) {
  return (
    <div className="section_description">
      {repo ? (
        <Button to={repo}>
          <GitHubIco />
          Repository
        </Button>
      ) : null}
      {demo ? (
        <a
          href={demo}
          className="btn btn_inline"
          target="_blank"
          rel="noreferrer"
        >
          <VideoIco />
          Demo
        </a>
      ) : null}
      {use ? (
        <Button to={use}>
          <VideoIco />
          Try
        </Button>
      ) : null}
      <div className="section_description">
        {subtitle ? <h3 className="subtitle">{subtitle}</h3> : null}
        {tag ? <p className="subtitle_low">&#60;{tag}/&#62;</p> : null}
      </div>
    </div>
  );
}

export default ProjectInfo;
