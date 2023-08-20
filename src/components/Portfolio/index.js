import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "The Clean Bee",
      description: "HTML/CSS/JAVASCRIPT/TWILIO API",
      link: "https://thecleanbee-dfb60f2cc850.herokuapp.com/",
      repo: "https://github.com/AustinGrech/TheCleanBee",
      image: "The-Clean-Bee",
    },
    {
      name: "Event Finder",
      description: "HTML/CSS/Javascript",
      link: "https://austingrech.github.io/EventFinderr/",
      repo: "https://github.com/AustinGrech/EventFinderr",
      image: "eventfinderrepopic",
    },
    {
      name: "PWA-Project",
      description: "PWA Project",
      link: "https://pwa-text-editor-pro-ac37ea8ad4aa.herokuapp.com/",
      repo: "https://github.com/AustinGrech/PWA-TEXT-EDITOR",
      image: "PWA-Pro",
    },

    {
      name: "JS Password Generator",
      description: "javaScript",
      link: "https://austingrech.github.io/Random-Password-Generator/",
      repo: "https://github.com/AustinGrech/Random-Password-Generator",
      image: "JS-PassGenerator",
    },
    {
      name: "The Trip",
      description: "HTML/CSS",
      link: "https://austingrech.github.io/TheTrip/",
      repo: "https://github.com/AustinGrech/TheTrip",
      image: "TheTrip",
    },
    {
      name: "Business Day Scheduler",
      description: "HTML/CSS/JavaScript",
      link: "https://austingrech.github.io/Business-Day-Scheduler/",
      repo: "https://github.com/AustinGrech/Business-Day-Scheduler",
      image: "BusinessSched",
    },
    {
      name: "Brain Puzzler",
      description: "HTML/CSS",
      link: "https://austingrech.github.io/Brain-Puzzler/",
      repo: "https://github.com/AustinGrech/Brain-Puzzler",
      image: "BrainPuzzle",
    },
    {
      name: "Horiseon",
      description: "HTML/CSS",
      link: "https://austingrech.github.io/Horiseon-Site-Repair/",
      repo: "https://github.com/AustinGrech/Horiseon-Site-Repair",
      image: "Mock-Up",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project project={project} key={"project" + idx} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
