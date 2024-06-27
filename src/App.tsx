import { useState, useEffect } from "react";
// import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);
  const [activeNav, setActiveNav] = useState("#");
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const observable = {
        home: document.querySelector("#header"),
        about: document.querySelector("#about"),
        portfolio: document.querySelector("#portfolio"),
        experience: document.querySelector("#experience"),
        contact: document.querySelector("#contact"),
      };
      // console.log(observable);
      const pos = {
        home: observable.home!.getBoundingClientRect(),
        about: observable.about!.getBoundingClientRect(),
        portfolio: observable.portfolio!.getBoundingClientRect(),
        experience: observable.experience!.getBoundingClientRect(),
        contact: observable.contact!.getBoundingClientRect(),
      };

      if (pos.home.top < window.innerHeight && pos.home.bottom >= 0) {
        setActiveNav("#");
      } else if (pos.about.top < window.innerHeight && pos.about.bottom >= 0) {
        setActiveNav("#about");
      } else if (
        pos.portfolio.top < window.innerHeight &&
        pos.portfolio.bottom >= 0
      ) {
        setActiveNav("#portfolio");
      } else if (
        pos.experience.top < window.innerHeight &&
        pos.experience.bottom >= 0
      ) {
        setActiveNav("#experience");
      } else if (
        pos.contact.top < window.innerHeight &&
        pos.contact.bottom >= 0
      ) {
        setActiveNav("#contact");
      }
    });

    return () => {};
  }, []);

  return (
    <>
      <Header />
      <Nav setActiveNav={setActiveNav} activeNav={activeNav} />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
