import React from "react";
import image from "../../assets/projects/resume-image.jpg";
import resumePDF from "../../assets/small/Austin-Grech-Resume-1-Page.pdf";

function Resume() {
  return (
    <section className="my-5">
      <div className="my-2">
        <p className="resume">
          Download my
          <a href={resumePDF}> resume</a>
        </p>

        <img className="imageresume" src={image} alt="detailed resume"></img>

        <div className="skillcontainer">
          <ul className="skills">
            <h3>Front-end Proficiencies</h3>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>

          <ul className="skills">
            <h3>Back-end Proficiencies</h3>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
