import React from "react";
import { Helmet } from "react-helmet";

import Title from "../../atoms/Logo/Title";
import PageCharger from "../../PageCharger";

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
      </PageCharger>
    </>
  );
}

export default Projects;
