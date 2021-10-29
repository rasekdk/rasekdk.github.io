import React from "react";

import PageCharger from "../PageCharger";
import Logo from "../atoms/Logo";
import GitHubIco from "../atoms/icons/GitHubIco";
import LinkedinIco from "../atoms/icons/LinkedinIco";
import DownloadIco from "../atoms/icons/DownloadIco";

function About() {
  return (
    <PageCharger>
      <section className="about_section">
        <h1>
          <Logo type="about" />
        </h1>
        <div className="section_description">
          <a href="https://github.com/rasekdk" target="_blank" rel="noreferrer">
            <GitHubIco />
          </a>
          <a
            href="https://www.linkedin.com/in/rasekdk/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinIco />
          </a>
          <p className="subtitle_xlow">
            Download my{" "}
            <a
              href="/Cesar_Resume.pdf"
              className="btn btn_inline"
              target="_blank"
              rel="noreferrer"
            >
              <DownloadIco />
              resume
            </a>
          </p>
          <div className="section_description">
            <h3 className="subtitle">
              I am a web developer and graphic designer from Spain.
            </h3>
            <p className="subtitle_low">&#60;1+ year of experience/&#62;</p>
          </div>
        </div>
        <div className="section_description">
          <h2>Main Skills</h2>
          <ul className="section_list">
            <li className="section_list__item">Frontend development</li>
            <li className="section_list__item">React.js</li>
            <li className="section_list__item">
              JavaScript, CSS, HTML, jQuery, Sass
            </li>
            <li className="section_list__item">UX/UI design</li>
            <li className="section_list__item">Wordpress</li>
            <li className="section_list__item">Graphic design</li>
          </ul>
        </div>
        <div className="section_description">
          <h2>Tools/years</h2>
          <ul className="section_list">
            <ul className="">
              <li className="section_list__item">
                HTHML <span>3+</span>
              </li>
              <li className="section_list__item">
                CSS <span>3+</span>
              </li>
              <li className="section_list__item">
                JavaScript <span>1+</span>
              </li>
            </ul>
            <ul className="">
              <li className="section_list__item">
                React.js / <span>1+ year</span>
              </li>
              <li className="section_list__item">
                Node.js <span>1+</span>
              </li>
              <li className="section_list__item">
                Vue <span>~1</span>
              </li>
              <li className="section_list__item">
                TypeScript <span>~1</span>
              </li>
            </ul>
            <ul className="">
              <li className="section_list__item">
                Wordpress <span>2+</span>
              </li>
              <li className="section_list__item">
                jQuery <span>1+</span>
              </li>
              <li className="section_list__item">
                Sass <span>1+</span>
              </li>
            </ul>
          </ul>
        </div>
        <div className="section_description">
          <h2>Experience</h2>
          <ul className="section_list">
            <li className="section_list__item">
              <p className="high_color">Web Developer</p>
              <p>
                @
                <a
                  href="https://www.ingenyus.es/"
                  rel="noreferrer"
                  target="_blank"
                  className="low_color"
                >
                  ingenyus*
                </a>
              </p>
              <p className="section_date">2021 - now</p>
            </li>
            <li className="section_list__item">
              <p className="high_color">Graphic designer</p>
              <p>
                @
                <a
                  href="https://www.ingenyus.es/"
                  rel="noreferrer"
                  target="_blank"
                  className="low_color"
                >
                  ingenyus*
                </a>
              </p>
              <p className="section_date">2019 - 2020</p>
            </li>
          </ul>
        </div>
        <div className="section_description">
          <h2>Languages</h2>
          <ul className="section_list">
            <li className="section_list__item">
              <span className="subtitle_low">//native</span>
              <ul>
                <li>
                  <span className="high_color">es_ES</span> Español
                </li>
                <li>
                  <span className="high_color">gl_GAL</span> Gallego
                </li>
              </ul>
            </li>
            <li className="section_list__item">
              <span className="subtitle_low">//fluent</span>
              <ul>
                <li>
                  <span className="high_color">en_US</span> English
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="section_description">
          <h2>Hobbies</h2>
          <ul className="section_list">
            <li className="section_list__item">Video games</li>
            <li className="section_list__item">Comics</li>
            <li className="section_list__item">Films</li>
            <li className="section_list__item">Tv series</li>
          </ul>
        </div>
      </section>
    </PageCharger>
  );
}

export default About;
