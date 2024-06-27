import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/tim-jaung/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://www.github.com/tjaung" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
