import React from "react";
import Title from "../../atoms/Logo/Title";
import WebBiojuego from "./Sections/WebBiojuego";
import WebIngenyus from "./Sections/WebIngenyus";
import DesignIngenyus from "./Sections/DesignIngenyus";
import StudyHab from "./Sections/StudyHab";
import StudyHabProject from "./Sections/StudyHabProject";
import StudyDesign from "./Sections/StudyDesign";
import HomeEnd from "./Sections/HomeEnd";
import { Helmet } from "react-helmet";

import PageCharger from "../../PageCharger";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Rasek</title>
      </Helmet>
      <PageCharger>
        <section>
          <h1>
            <Title />
          </h1>
          <h2 className="subtitle">César Nóvoa</h2>
          <h3 className="subtitle_low">Web Developer & Graphic Designer</h3>
        </section>
        <section>
          <h2>
            Curriculum
            <br className="show_md" />
            .show(<span className="high_color">'César'</span>)
          </h2>
          <span className="subtitle_low">&#60;It's a low way.../&#62;</span>
        </section>
        {/* ingenyus* web developer */}
        <WebIngenyus />
        {/* Project Biojuego */}
        <WebBiojuego />
        {/* Studies Hack a Boss */}
        <StudyHab />
        {/* Project Hack a Boss */}
        <StudyHabProject />
        {/* ingenyus* graphic designer */}
        <DesignIngenyus />
        {/* Studies MM */}
        <StudyDesign />
        {/* Home End */}
        <HomeEnd />
      </PageCharger>
    </>
  );
}

export default Home;
