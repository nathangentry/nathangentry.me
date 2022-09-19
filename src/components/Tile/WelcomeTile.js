import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import Tile from "./Tile";

import "./WelcomeTile.scss";

const WelcomeTile = (props) => {
  const [isWide, setIsWide] = useState(true);
  useEffect(() => {
    const handleResize = () => setIsWide(document.body.clientWidth >= 1000);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Tile className="WelcomeTile" wide={isWide}>
      <h1 className="title">
        <span style={{ color: props.primaryColor }}>
          Hey {props.name !== null ? props.name : "there"}!{" "}
        </span>
        I'm Nathan, and I craft engaging experiences for the web.
      </h1>
      <p className="large">
        I combine my passion for delightful design and clean code to create web
        projects that are beautiful — not only at first glance but also after
        further (code) review.
      </p>
      {props.name === null ? (
        <div className="button-group">
          <Link smooth to="#contact">
            <button className="primary">Get in touch</button>
          </Link>
          <a
            href="https://bit.ly/ngfall2022"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="secondary">View my resume</button>
          </a>
        </div>
      ) : (
        <>
          <p className="large">
            Currently, I’m searching for a Web Development, UI/UX, or Product
            Design internship for Summer 2022 and would love to work at{" "}
            {props.name}.
          </p>
          <h4>Why {props.name}?</h4>
          {props.motivation.map((p) => (
            <p className="large" key={p}>
              {p}
            </p>
          ))}
          <h4>Why me?</h4>
          {props.pitch.map((p) => (
            <p className="large" key={p}>
              {p}
            </p>
          ))}
          <h4>Still not convinced?</h4>
          <p className="large">
            You can either check out my portfolio by scrolling down or{" "}
            <a
              href="https://bit.ly/ngfall2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              view my condensed resume here.
            </a>
          </p>
          <h4>Ready to move forward?</h4>
          <p className="large">
            Send an email to{" "}
            <a href="mailto:hello@nathangentry.me">hello@nathangentry.me</a> to
            let me know, and we can figure out the details together from there.
          </p>
        </>
      )}
    </Tile>
  );
};

export default WelcomeTile;
