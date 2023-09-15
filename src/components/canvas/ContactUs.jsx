import React, { useRef } from "react";
import "./contactUs.css";
import emailjs from "@emailjs/browser";
import Scene from "./Scene";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xj2dapj",
        "template_lkdt5yo",
        form.current,
        "eupftr61pLADvCePL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="canvaC">
      <div className="formDiv">
        <p>Get in touch</p>
        <h2 className="titles">CONTACT.</h2>
        <form ref={form} onSubmit={sendEmail} className="field">
          <label>Your Name</label>
          <input type="text" name="user_name" />
          <label>Your Email</label>
          <input type="email" name="user_email" />
          <label>Your Message</label>
          <textarea name="message" />
          <button type="submit" value="Send">
            Submit
          </button>
        </form>
      </div>
      <Scene></Scene>
    </div>
  );
};
