import React from "react";
import "./styles/header.css";

import HeaderButtons from "./HeaderButtons";
import HeaderSocials from "./HeaderSocials";

import me from "../assets/imgs/me.jpg";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hello! I'm</h5>
        <h1>Tim</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderSocials />
        <HeaderButtons />
        <div className="me">
          <img src={me} alt="" />
        </div>

        <a href="#contact" className="scroll-down">
          <IoMdArrowDropdown />
        </a>
      </div>
    </header>
  );
};

export default Header;
