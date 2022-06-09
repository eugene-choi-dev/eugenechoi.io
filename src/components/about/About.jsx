import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import Resume from "./Resume";

const About = () => {
  return (
    <section id="about">
      <h5>A little bit</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>Self-Taught + Bootcamp Grad</h5>
            </article>

            <article className="about__card" id="github__card">
              <a href="https://github.com/eugene-choi-dev" target="_blank">
                <FaGithub className="about__icon" />
                <h5>Github</h5>
              </a>
            </article>

            <article className="about__card" id="linkedin__card">
              <a
                href="https://www.linkedin.com/in/eugene-choi-dev/"
                target="_blank"
              >
                <BsLinkedin className="about__icon" />
                <h5>LinkedIn</h5>
              </a>
            </article>
          </div>
          <p>
            Hi there. I'm a full stack web developer transitioning from a
            background in real estate. Understanding and representing clients'
            needs while mediating complicated transactions has advanced my
            professional communication skills. Now I'm following my passion and
            seeking exciting projects in web development!
          </p>
          <p>
            When I'm not coding you can find me splitting firewood in the
            wilderness, building computers with too many colorful lights, and
            being a good sport when I beat my friends at video games.
          </p>

          <Resume />
        </div>
      </div>
    </section>
  );
};

export default About;
