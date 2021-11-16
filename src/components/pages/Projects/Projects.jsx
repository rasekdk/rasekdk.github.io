import React from "react";
import { Helmet } from "react-helmet";

import Title from "../../atoms/Logo/Title";
import PageCharger from "../../PageCharger";
import Biojuego from "./Sections/Biojuego";
import Community from "./Sections/Community";

function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects | Rasek</title>
      </Helmet>
      <PageCharger>
        <section>
          <div>
            <h1>
              <Title type={"projects"} />
            </h1>
            Here you can find my profesional and personal projects
          </div>
        </section>
        <Community />
        <Biojuego />
      </PageCharger>
    </>
  );
}

export default Projects;
