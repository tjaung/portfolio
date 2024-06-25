import React from "react";
import "./styles/nav.css";

import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import { CgBriefcase } from "react-icons/cg";
import { IoFolderOpenOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

interface Props {
  activeNav: string;
  setActiveNav: (activeNav: string) => void;
}

const Nav = (props: Props) => {
  const { activeNav, setActiveNav } = props;

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <HiOutlineUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <CgBriefcase />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <IoFolderOpenOutline />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdOutlineEmail />
      </a>
    </nav>
  );
};

export default Nav;
