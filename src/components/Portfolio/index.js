import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "PWA-Project",
      description: "PWA Project",
      link: "https://pwa-text-editor-pro-ac37ea8ad4aa.herokuapp.com/",
      repo: "https://github.com/AustinGrech/PWA-TEXT-EDITOR",
      image: "PWA-Pro",
    },
    {
      name: "Event Finder",
      description: "HTML/CSS/Javascript",
      link: "https://austingrech.github.io/EventFinderr/",
      repo: "https://github.com/AustinGrech/EventFinderr",
      image: "eventfinderrepopic",
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
      name: "PreWork Study Guide",
      description: "HTML/CSS",
      link: "https://austingrech.github.io/prework-study-guide/",
      repo: "https://github.com/AustinGrech/prework-study-guide",
      image: "preworkpic",
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
