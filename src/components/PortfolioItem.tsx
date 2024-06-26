import "./styles/portfolioitem.css";

interface interfaceCardItem {
  image: string;
  title: string;
  gitlink: string;
  prevlink: string;
}

const PortfolioItem = ({
  image,
  title,
  gitlink,
  prevlink,
}: interfaceCardItem) => {
  return (
    <article className="portfolio-item">
      <div className="portfolio-image">
        <img src={image}></img>
      </div>
      <h3 className="portfolio-title">{title}</h3>
      <div className="portfolio-item-buttons">
        <a href={gitlink} target="_blank" className="btn">
          Github
        </a>
        <a href={prevlink} target="_blank" className="btn btn-primary">
          Live Preview
        </a>
      </div>
    </article>
  );
};

export default PortfolioItem;
