/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Stock Market Prediction Model using Numerical and Textual Analysis 🎉",
    description:
      "Created a hybrid model for stock price/performance prediction using numerical analysis of historical stock prices, and sentimental analysis of news headlines.",
    url: "https://github.com/yadus1111/The_Spark_Foundation_Intern_task/blob/main/Stock%20Market%20Prediction%20Model%20using%20Numerical%20and%20Textual%20Analysis.ipynb",
  },
  {
    title: "Codsoft Intern projects",
    description:
      "Completed three tasks.Project-1 TITANIC SURVIVAL PREDICTION.ipynb, Project-2 IRIS FLOWER CLASSIFICATION.ipynb, Project-3 Credit card fraud detection.ipynb", 
    url: "https://github.com/yadus1111/CODSOFT",
  },
  {
    title: "Unveiling the Stars: An Exploratory Study on NASA Astronauts",
    description:
      "Dive into NASA astronaut data using Python and MySQL. Clean, explore, and extract insights from a comprehensive dataset covering birthdates, education, military history, and space missions. Gain advanced skills in Python and SQL, unraveling astronauts' demographics, careers, and achievements through descriptive statistics and data visualization in just one week! 🛰️📊",
    url: "https://hicounselor.com/projects/Yadu%20Sharma-portfolio/NjkyMDA=",
  },
];
const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
