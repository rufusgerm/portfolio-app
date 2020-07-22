import React, { useState } from "react";
import "./About.css";

const SKILL_ICONS = [
  "css3",
  "dash",
  "flask",
  "heroku",
  "html5",
  "java",
  "javascript",
  "mysql",
  "netbeans",
  "pycharm",
  "python",
  "react",
  "vscode",
  "github",
  "linux",
  "mac",
  "windows",
];

const INTERESTS_BODY = [
  {
    title: `professional`,
    one: `In June 2020, I graduated with a Bachelors degree in Computer Science. I came to software engineering 
    via the electrical trade. Since beginning programming I've learned a wide variety of languages, libraries,
    frameworks and love learning how new tools can be adapted to solve problems in creative ways.`,
    two: `I am currently most proficient in Python & Javascript, but I really enjoy working with statically-typed, 
    object-oriented languages like C++ and Java. To that end, I'm currently learning C#. I am also trying to 
    improve my skills with graphic and user interface design while working on a variety of projects.`,
  },
  {
    title: `personal`,
    one: `In my free time I play video games, tinker with electronics, and read. I am currently reteaching myself to play 
    the guitar after 15 years of dilly-dallying. Though I am a bit of introvert and enjoy being inside, it can be hard to 
    resist the wonderful outdoors here in the Pacific Northwest especially during the summer, whether that be hiking, swimming, 
    or just relaxing on the beach.`,
    two: ``,
  },
];

const Skills = (skill, idx) => {
  return (
    <li key={skill + idx} className={`skill-item`}>
      <img
        className={`skill-icon`}
        src={require(`../tech_icons/${skill.toLowerCase()}.svg`)}
        alt={skill}
        title={skill}
      />
    </li>
  );
};

// const InterestsSetup = () => {}

const SectionButtons = (sectionTitle, idx, handleClick) => {
  const capitalTitle =
    sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1);
  return (
    <React.Fragment>
      <button
        key={sectionTitle + idx}
        onClick={() => handleClick(sectionTitle)}
        className={`interest-btn-${sectionTitle}`}
      >
        {capitalTitle}
      </button>
    </React.Fragment>
  );
};

const Interests = (section, idx) => {
  return (
    <React.Fragment>
      <p>&emsp;{section.one}</p>
      <p>&emsp;{section.two}</p>
    </React.Fragment>
  );
};

const About = (props) => {
  // Make the first section of the INTERESTS_BODY array the one that is visible
  const [visibleSection, setVisibleSection] = useState(INTERESTS_BODY[0].title);

  const handleClick = (sectionTitle) => {
    setVisibleSection(sectionTitle);
  };

  return (
    <div className={`${props.className} about-me-body`}>
      <div className={`interests-container`}>
        <h1 className={`interests-header`}>About Me</h1>
        <div className={`interests-btns`}>
          {INTERESTS_BODY.map((section, idx) =>
            SectionButtons(section.title, idx, handleClick)
          )}
        </div>
        {INTERESTS_BODY.map((section, idx) => {
          return (
            <div
              key={section.title + idx}
              className={`interests-body ${section.title}-body ${
                visibleSection === section.title
                  ? "visible-interest"
                  : "invisible-interest"
              }`}
            >
              {Interests(section, idx)}
            </div>
          );
        })}
      </div>
      <div className={`skills-container`}>
        <h2 className={`skills-header`}>Skills</h2>
        <ul className={`skill-gallery`}>
          {SKILL_ICONS.map((skill, idx) => Skills(skill, idx))}
        </ul>
      </div>
    </div>
  );
};

export default About;
