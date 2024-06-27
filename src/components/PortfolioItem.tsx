import "./styles/portfolioitem.css";

interface interfaceCardItem {
  image: string;
  title: string;
  desc: string;
  gitlink: string;
  prevlink: string;
  prevOption: number;
}

const PortfolioItem = ({
  image,
  title,
  desc,
  gitlink,
  prevlink,
  prevOption,
}: interfaceCardItem) => {
  let prevButton;
  if (prevOption == 1) {
    prevButton = (
      <a href={prevlink} target="_blank" className="btn btn-primary">
        Live Preview
      </a>
    );
  }

  return (
    <article className="portfolio-item">
      <div className="portfolio-image">
        <img src={image} />
      </div>
      <h3 className="portfolio-title">{title}</h3>
      <p className="portfolio-desc">{desc}</p>
      <div className="portfolio-item-buttons">
        <a href={gitlink} target="_blank" className="btn">
          Github
        </a>
        {prevButton}
      </div>
    </article>
  );
};

export default PortfolioItem;
