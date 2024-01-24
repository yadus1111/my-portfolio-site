/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Business Analyst passionate about transforming raw data into meaningful business strategies. Currently aspiring to become a Data Scientist, I thrive on the intersection of analytics and innovation.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Analysis",
  "Programming language: Python/R",
  "Microsoft office suite ",
  "SQL",
  "Spreadsheet",
  "PowerBI/Tableau",
  "Statistical Analysis",
  "Financial Analysis",
  "Machine Learning and Big data Basic",
  "Communication",
  "Presentation",
  "Community Engagement"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Hey, I'm Microsoft Learn Studnet Ambassador, diving at the ending of Bachelor of Business Administration a passionate and active learner  recently completed the Google Data Analytics course. Motivated by the dynamic world of data, I'm on a journey to leverage insights for innovative solutions. Let's connect and explore the endless possibilities data analytics brings! 🌐✨";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
