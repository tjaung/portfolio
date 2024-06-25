import React from "react";
import "./styles/portfolio.css";

import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <PortfolioItem
          image="'../assets/imgs/me.png"
          title="test"
          gitlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
          prevlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
        />

        <PortfolioItem
          image="'../assets/imgs/me.png"
          title="test"
          gitlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
          prevlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
        />

        <PortfolioItem
          image="'../assets/imgs/me.png"
          title="test"
          gitlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
          prevlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
        />

        <PortfolioItem
          image="'../assets/imgs/me.png"
          title="test"
          gitlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
          prevlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
        />

        <PortfolioItem
          image="'../assets/imgs/me.png"
          title="test"
          gitlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
          prevlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
        />

        <PortfolioItem
          image="'../assets/imgs/me.png"
          title="test"
          gitlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
          prevlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
        />
      </div>
    </section>
  );
};

export default Portfolio;
