import React from "react";
import "./portfolio.css";
import restaurant from "../../assets/restaurant.png";
import flashcard from "../../assets/flashcard.png";
import grubdash from "../../assets/grubdash.png";
import focus from "../../assets/focus.png";
import decoder from "../../assets/decoder.png";

const data = [
  {
    id: 1,
    image: restaurant,
    title: `Restaurant Reservation`,
    github: "https://github.com/eugene-choi-dev/restaurant-reservation",
    demo: "",
  },
  {
    id: 1,
    image: grubdash,
    title: `GrubDash`,
    github: "https://github.com/eugene-choi-dev/thinkful-grubdash-project",
    demo: "",
  },
  {
    id: 1,
    image: flashcard,
    title: `Flashcard-o-matic`,
    github: "https://github.com/eugene-choi-dev/flashcard-o-matic-ver2",
    demo: "",
  },
  {
    id: 1,
    image: decoder,
    title: `Decoder Ring`,
    github: "https://github.com/eugene-choi-dev/decoder-ring",
    demo: "",
  },
  {
    id: 1,
    image: focus,
    title: `Focus Timer`,
    github: "https://github.com/eugene-choi-dev/focus-timer",
    demo: "https://focus-timer-wow.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="{title}" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
