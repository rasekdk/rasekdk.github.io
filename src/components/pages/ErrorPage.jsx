import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <main>
      <section>
        <h2>
          page
          <br className="show_md" />
          .err(<span className="high_color">404</span>)
        </h2>
        <h3 className="subtitle_low">Are you lost?</h3>
        <p>The page you are looking for does not exist</p>
        <Link exact to="/" className="btn">
          &#60; Back Home
        </Link>
      </section>
    </main>
  );
}

export default ErrorPage;
