import React, { useState } from "react";
import emailjs from "emailjs-com";
import Section from "./Section";
import Tile from "../Tile/Tile";

import "../../emailSetup";
import "./ContactSection.scss";

const ContactSection = props => {
  const [feedback, setFeedback] = useState({ status: "", message: "" });

  const sendMessage = () => {
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email-input");
    const messageInput = document.getElementById("message-input");

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    if (validateInput(name, email, message)) {
      emailjs
        .send("gmail", "message_form", {
          name: name,
          email: email,
          message: message,
          url: props.url,
        })
        .then(() => {
          setFeedback({
            status: "success",
            message:
              "Your message has been sent! I'll get back to you as soon as I can."
          });

          nameInput.value = "";
          emailInput.value = "";
          messageInput.value = "";
        })
        .catch((e) => {
          setFeedback({
            status: "error",
            message:
              'Hmm...something went wrong. Please try again or email me directly at <a href="mailto:hello@nathangentry.me">hello@nathangentry.me</a>'
          });
          console.log(e);
        });
    }
  };

  const validateInput = (name, email, message) => {
    const nameLabel = document.getElementById("name-label");
    const nameInput = document.getElementById("name-input");
    nameLabel.className = "";
    nameInput.className = "";

    const emailLabel = document.getElementById("email-label");
    const emailInput = document.getElementById("email-input");
    emailLabel.className = "";
    emailInput.className = "";

    const messageLabel = document.getElementById("message-label");
    const messageInput = document.getElementById("message-input");
    messageLabel.className = "";
    messageInput.className = "";

    if (name.length === 0) {
      setFeedback({
        status: "error",
        message:
          "Please include your name."
      });

      nameLabel.className = "error";
      nameInput.className = "error";
    } else if (email.length === 0) {
      setFeedback({
        status: "error",
        message:
          "Please include your email."
      });

      emailLabel.className = "error";
      emailInput.className = "error";
    } else if (
      email.split("@").length !== 2 ||
      email.split("@")[1].split(".").length !== 2
    ) {
      setFeedback({
        status: "error",
        message:
          "That doesn't seem to be a valid email address. Please double check your form and try again."
      });

      emailLabel.className = "error";
      emailInput.className = "error";
    } else if (message.length === 0) {
      setFeedback({
        status: "error",
        message:
          "Please include your message."
      });

      messageLabel.className = "error";
      messageInput.className = "error";
    } else {
      return true;
    }

    return false;
  };

  return (
    <Section title="Contact" id="contact" className="contact-section">
      <Tile className="contact-tile">
        <h2>Like what you see? Let's get in touch</h2>
        <form>
          <label htmlFor="name" id="name-label">
            Name
          </label>
          <input name="name" type="text" id="name-input" />
          <label htmlFor="email" id="email-label">
            Email
          </label>
          <input name="email" type="email" id="email-input" />
          <label htmlFor="message" id="message-label">
            Message
          </label>
          <textarea
            name="message"
            rows={6}
            data-gramm_editor="false"
            id="message-input"
          ></textarea>
        </form>
        <div className='horizontal'>
          <button className="primary" onClick={sendMessage}>
            Submit
          </button>
          <div className={`feedback ${feedback.status}`}>
            <i className='material-icons feedback-icon'>{feedback.status === 'error' ? 'error_outline' : feedback.status === 'success' ? 'done' : ''}</i>
            <p>{feedback.message}</p>
          </div>
        </div>
      </Tile>
    </Section>
  );
};

export default ContactSection;
