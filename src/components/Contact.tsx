import React from "react";
import "./styles/contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("portfolio_form", "template_whbvcqh", form.current, {
        publicKey: "ra92t-OakLPQvtQpq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>jaungt@gmail.com</h5>
          <a href="mailto:jaungt@gmail.com" target="_blank">
            Send a message
          </a>
        </div>
        <div className="contact-options">
          <FaPhoneVolume />
          <h4>Cell</h4>
          <h5>(508) 965-3918</h5>
          <a></a>
        </div>

        <form ref={form}>
          <input type="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows={8}
            placeholder="Your message here"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            onSubmit={sendEmail}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
