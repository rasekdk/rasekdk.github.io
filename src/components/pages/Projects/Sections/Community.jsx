import React from "react";
import Button from "../../../atoms/Button";

function Community() {
  return (
    <section>
      <h2>
        <br className="show_md" />
        .show(<span className="high_color">'Community'</span>)
      </h2>
      <span className="subtitle_low">&#60;Social network app/&#62;</span>
      <div className="section_description">
        <h3>.about()</h3>
        <p>
          This project was the final project of my <strong>BOOTCAMP</strong> at
          @<span className="high_color">Hack a Boss</span>.
        </p>
      </div>
      <div className="section_description">
        <h3>.needs()</h3>
        <p>
          Create an app of colaborative news like @
          <a href="https://www.reddit.com/" target="_blank" rel="noreferrer">
            reddit
          </a>{" "}
          where you can login, signin, post and comment.
        </p>
      </div>
      <div className="section_description">
        <p>
          <Button to="/projects/community">See more &#62;</Button>
        </p>
      </div>
    </section>
  );
}

export default Community;
