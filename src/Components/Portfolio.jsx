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
    title: "StoryVerse -- Novel Reading App",
    description:
      "Collaboration to create a beginner friendly app to help explain Novel Reading App functionality and tooling to get started.",
    url: "https://www.behance.net/gallery/180294357/StoryVerse-novel-reading-app",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed to a dynamic Landing page. These help provide visual representation of a restaurant system.",
    url: "https://github.com/simraazhar100/OIBSIP_Landing_Page",
  },
  {
    title: "My Resume Site",
    description:
      "Created from HTML/CSS/JS portfolio and deployed to GitHub. Includes my experience and design abilities.",
    url: "https://github.com/simraazhar100/OIBSIP_Portfolio",
  },
  {
    title: "Temperature Convertor",
    description:
      "Make a temperature Convertor to show the exclusive functionality of JavaScript and HTML/CSS.",
    url: "https://github.com/simraazhar100/OIBSIP_Temperature_Convertor",
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
