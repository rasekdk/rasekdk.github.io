import React from "react";
import { Helmet } from "react-helmet";

import Title from "../../atoms/Logo/Title";
import PageCharger from "../../PageCharger";
import UsedTools from "../../elements/UsedTools";
import ProjectInfo from "../../elements/ProjectInfo";

function CommunityProject() {
  const tools = [
    ["HTML", "CSS", "JavaScript"],
    ["React.js", "Node.js", "MySQL"],
  ];
  const libraries = [
    ["Express", "Joi", "jsonwebtoken", "fs"],
    ["react-router-dom", "final-form", "react-jwt"],
  ];

  return (
    <>
      <Helmet>
        <title>Community | Rasek</title>
      </Helmet>
      <PageCharger>
        <section>
          <h1>
            <Title type="community" />
          </h1>
          <ProjectInfo
            subtitle="Social Network from scratch"
            tag="My first project"
            repo="https://github.com/rasekdk/Community"
            demo="/resources/community_demo.mp4"
          />
          <UsedTools title="Tools" tools={tools} />
          <UsedTools title="Libraries" tools={libraries} />
        </section>
      </PageCharger>
    </>
  );
}

export default CommunityProject;
