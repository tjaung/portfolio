import "./styles/about.css";

import SmallCard from "./SmallCard";

import me from "../assets/imgs/about_pic.jpg";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { VscDebugLineByLine } from "react-icons/vsc";
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
        <div className="about-detail">
          <img src={me} />
        </div>
        <div className="about-desc-container">
          <SmallCard
            icon={<FaRegLightbulb />}
            title="2020"
            desc="Began programming in R in school and for self-learning"
          />
          <SmallCard
            icon={<FaLaptopCode />}
            title="2022"
            desc="Starting learning CS fundamentals through work and freecodecamp"
          />
          <SmallCard
            icon={<VscDebugLineByLine />}
            title="2023"
            desc="Began the Odin Project and created most projects on this page"
          />
          <div className="about-description-text">
            Welcome to my page! I am an aspiring fullstack developer with a
            passion for building applications. I grew my interest with my past
            work experiences as a data scientist where I found that I enjoyed
            the engineering aspects the most. I've been self-teaching myself
            software engineering through the Odin Project and I want to showcase
            my growth on this page.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
