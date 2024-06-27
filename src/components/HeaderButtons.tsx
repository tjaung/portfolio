import CV from "../assets/files/Tim_Jaung_CV.pdf";

const HeaderButtons = () => {
  return (
    <div className="header-button">
      <a href={CV} download={CV} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default HeaderButtons;
