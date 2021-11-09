import React from "react";
import { Helmet } from "react-helmet";

import Title from "../../atoms/Logo/Title";
import PageCharger from "../../PageCharger";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Rasek</title>
      </Helmet>
      <PageCharger>
        <section className="contact_section">
          <h1>
            <Title type="contact" />
          </h1>
          <h2 className="subtitle_low">
            <p>
              Feel free to contact with me if you want to know more about me.
            </p>
          </h2>
          <div className="section_description">
            <h3>.email()</h3>
            <a href="mailto:themotokar@gmail.com">&#62; themotokar@gmail.com</a>
          </div>
          <div className="section_description">
            <h3>.phone()</h3>
            <a href="tel:+34698139758">&#62; +34 698 139 758</a>
          </div>
        </section>
      </PageCharger>
    </>
  );
}

export default Contact;
