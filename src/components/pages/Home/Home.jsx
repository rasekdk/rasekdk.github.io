import React from "react";
import Logo from "../../atoms/Logo";
import WebBiojuego from "./Sections/WebBiojuego";
import WebIngenyus from "./Sections/WebIngenyus";
import DesignIngenyus from "./Sections/DesignIngenyus";
import StudyHab from "./Sections/StudyHab";
import StudyHabProject from "./Sections/StudyHabProject";
import StudyDesign from "./Sections/StudyDesign";
import HomeEnd from "./Sections/HomeEnd";

import PageCharger from "../../PageCharger";

function Home() {
  return (
    <PageCharger>
      <section>
        <h1>
          <Logo type={"logo"} />
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
  );
}

export default Home;
