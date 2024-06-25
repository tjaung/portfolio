import { useState } from "react";
// import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  // const [count, setCount] = useState(0);
  const [activeNav, setActiveNav] = useState("#");

  return (
    <>
      <Header />
      <Nav setActiveNav={setActiveNav} activeNav={activeNav} />
      <About setActiveNav={setActiveNav} activeNav={activeNav} />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
