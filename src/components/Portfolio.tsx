import React from "react";
import "./styles/portfolio.css";

import PortfolioItem from "./PortfolioItem";
import jira from "../assets/imgs/jira_prev.png";
// import jira from "../assets/imgs/";
import restaurant from "../assets/imgs/restaurant_prev.png";
import library from "../assets/imgs/library_prev.png";
import portfolioImg from "../assets/imgs/portfolio_prev.png";
import tradingbot from "../assets/imgs/trading_bot.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <PortfolioItem
          image={jira}
          title="Ticket Board"
          desc="A simple Jira copy"
          gitlink="https://github.com/tjaung/TOP/tree/main/JS_path/JS/todo"
          prevlink="https://tjaung.github.io/TOP_todo/"
          prevOption={1}
        />

        <PortfolioItem
          image={restaurant}
          title="Restaurant Page"
          desc="Static webpage for a restaurant menu"
          gitlink="https://github.com/tjaung/TOP/tree/main/JS_path/JS/restaurant"
          prevlink="https://tjaung.github.io/odin_restaurant/"
          prevOption={1}
        />

        <PortfolioItem
          image={library}
          title="Library Catalog"
          desc="Library catalog with CRUD functionality"
          gitlink="https://github.com/tjaung/backend_practice/tree/main/express-locallibrary-tutorial"
          prevlink="https://suave-cooked-badger.glitch.me/"
          prevOption={1}
        />

        <PortfolioItem
          image={portfolioImg}
          title="Portfolio"
          desc="This page you're on right now"
          gitlink="https://github.com/tjaung/CryptoTradingBot"
          prevlink=""
          prevOption={0}
        />

        <PortfolioItem
          image={tradingbot}
          title="Trading Bot"
          desc="A simple automated trading bot I made during the crypto hype"
          gitlink="https://github.com/tjaung/CryptoTradingBot"
          prevlink=""
          prevOption={0}
        />

        {/* <PortfolioItem
          image="'../assets/imgs/me.png"
          title="test"
          gitlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
          prevlink="https://github.com/tjaung/TOP/blob/main/JS_path/JS/cv_app/cv_maker/src/components/Accordion.tsx"
          prevOption={0}
        /> */}
      </div>
    </section>
  );
};

export default Portfolio;
