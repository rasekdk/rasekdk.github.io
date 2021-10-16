import React from "react";

import Logo from "../atoms/Logo";

function Contact() {
  return (
    <main>
      <section>
        <h1>
          <Logo type="contact" />
        </h1>
        <h2 className="subtitle_low">
          <p>Feel free to contact with me if you want to know more about me.</p>
        </h2>
        <div className="job_description">
          <h3>.email()</h3>
          <a href="mailto:themotokar@gmail.com">&#62; themotokar@gmail.com</a>
        </div>
        <div className="job_description">
          <h3>.phone()</h3>
          <a href="tel:+34698139758">&#62; +34 698 139 758</a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
