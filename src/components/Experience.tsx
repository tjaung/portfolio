import React from "react";
import "./styles/experience.css";

import SmallCard from "./SmallCard";

import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { FaDatabase } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { SiApacheairflow } from "react-icons/si";
import { SiApachespark } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills</h2>

      <div className="container experience-container">
        <div id="experience-frontend" className="experience-card">
          <h2>Frontend</h2>
          <article className="experience-details">
            <SmallCard icon={<FaReact />} title="React" desc="" />
            <SmallCard icon={<SiJavascript />} title="Javascript" desc="" />
            <SmallCard icon={<SiTypescript />} title="Typescript" desc="" />
            <SmallCard icon={<FaHtml5 />} title="HTML" desc="" />
            <SmallCard icon={<FaCss3Alt />} title="CSS" desc="" />
          </article>
        </div>

        <div id="experience-backend" className="experience-card">
          <h2>Backend</h2>
          <article className="experience-details">
            <SmallCard icon={<FaNode />} title="Node.js" desc="" />
            <SmallCard icon={<SiExpress />} title="Express.js" desc="" />
            <SmallCard icon={<BsFiletypeSql />} title="SQL" desc="" />
            <SmallCard icon={<SiMongodb />} title="MongoDB" desc="" />
            <SmallCard icon={<FaDocker />} title="Docker" desc="" />
            <SmallCard icon={<FaPython />} title="Python" desc="" />
          </article>
        </div>

        <div id="experience-data" className="experience-card">
          <h2>Data</h2>
          <article className="experience-details">
            <SmallCard
              icon={<LuBrainCircuit />}
              title="Machine Learning"
              desc=""
            />
            <SmallCard icon={<FaDatabase />} title="ETL" desc="" />
            <SmallCard icon={<MdAnalytics />} title="Analytics" desc="" />
            <SmallCard icon={<SiApacheairflow />} title="Airflow" desc="" />
            <SmallCard icon={<FaAws />} title="AWS" desc="" />
            <SmallCard icon={<SiApachespark />} title="Spark" desc="" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
