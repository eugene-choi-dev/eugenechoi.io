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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos
            voluptatem eius dolorem maiores nihil ducimus at rem ullam
            reprehenderit quidem quia deserunt, molestiae, eligendi amet
            repellat molestias quos totam.
          </p>

          <Resume />
        </div>
      </div>
    </section>
  );
};

export default About;
