import "./styles/portfolio.css";

import PortfolioItem from "./PortfolioItem";
// import jira from "../assets/imgs/jira_prev.png";
// import jira from "../assets/imgs/";
import restaurant from "../assets/imgs/restaurant_prev.png";
import library from "../assets/imgs/library_prev.png";
import anniversary from "../assets/imgs/anniversary.png";
import tradingbot from "../assets/imgs/trading_bot.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <PortfolioItem
          image={anniversary}
          title="Anniversary Page"
          desc="Fullstack MERN app for my one year anniversary with my girlfriend."
          gitlink="https://github.com/tjaung/anniversary_preview_frontend/tree/main"
          prevlink="https://messagememories.netlify.app"
          prevOption={1}
        />
        <PortfolioItem
          image={tradingbot}
          title="Trading Bot"
          desc="Automated trading bot I made during the crypto hype-2020"
          gitlink="https://github.com/tjaung/CryptoTradingBot"
          prevlink=""
          prevOption={0}
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
          image={restaurant}
          title="Restaurant Page"
          desc="Static webpage for a restaurant in vanilla JS"
          gitlink="https://github.com/tjaung/TOP/tree/main/JS_path/JS/restaurant"
          prevlink="https://tjaung.github.io/odin_restaurant/"
          prevOption={1}
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
