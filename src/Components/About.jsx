import React, { memo, useEffect } from "react";
import "./About.css";
import mickey from "../images/Abhi.png";
import Typed from "typed.js";

const About = () => {
  useEffect(() => {
    var typed = new Typed(".typing-2", {
      strings: ["Full Stack Developer", "Coder", "Problem Solver"],
      typeSpeed: 120,
      backSpeed: 90,
      loop: true,
    });
  }, []);
  return (
    <section className="abouta about section" id="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="column left">
            <img className="home-img" src={mickey} alt="kartikmickey" />
          </div>
          <div className="column right">
            <div id="user-detail-name" className="text">
              I'm Abhishek Kumar Singh and I'm a{" "}
              <span className="typing-2"></span>
            </div>
            <p id="user-detail-intro">
              Passionate Full stack Web Developer adept in web
              development. Capable of writing code for production using HTML,
              CSS, JavaScript, React, Redux on the frontend, NodeJS and
              ExpressJS on the backend. Working with discipline and
              goal-oriented Projects with teams. Strongly interested in get a
              job of web developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
