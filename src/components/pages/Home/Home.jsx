import React from "react";
import Logo from "../../atoms/Logo";
import WebBiojuego from "./Sections/WebBiojuego";
import WebIngenyus from "./Sections/WebIngenyus";
import DesignIngenyus from "./Sections/DesignIngenyus";
import StudyHab from "./Sections/StudyHab";
import StudyHabProject from "./Sections/StudyHabProject";
import StudyDesign from "./Sections/StudyDesign";
import HomeEnd from "./Sections/HomeEnd";

import { motion } from "framer-motion";
import Charger from "../../atoms/Charger";

function Home() {
  return (
    <>
      <Charger />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.75, duration: 0.5, delayChildren: 0.25 }}
      >
        <motion.section
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          exit={{ x: 100 }}
          transition={{ duration: 0.25 }}
        >
          <h1>
            <Logo type={"logo"} />
          </h1>
          <h2 className="subtitle">César Nóvoa</h2>
          <h3 className="subtitle_low">Web Developer & Graphic Designer</h3>
        </motion.section>
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
      </motion.main>
    </>
  );
}

export default Home;
