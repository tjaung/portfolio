import React from "react";
import "./styles/about.css";

import SmallCard from "./SmallCard";

import { FaRegLightbulb } from "react-icons/fa";

// interface Props {
//   activeNav: string;
//   setActiveNav: (activeNav: string) => void;
// }

const About = () => {
  // const { activeNav, setActiveNav } = props;
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-detail">About section detail like some image</div>
        <div className="about-desc-container">
          <SmallCard
            icon={<FaRegLightbulb />}
            title="test"
            desc="test description for card"
          />
          <SmallCard
            icon={<FaRegLightbulb />}
            title="test"
            desc="test description for card"
          />
          <SmallCard
            icon={<FaRegLightbulb />}
            title="test"
            desc="test description for card"
          />
          <div className="about-description-text">
            Description of me: Lorem ipsum whatever it is in latin just add a
            bunch of text as an example then fill it out later
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
