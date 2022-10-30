import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fn14vo",
        "template_tf9cdxx",
        form.current,
        "wqmyaG1wD2nmUmye_"
      )
      .then(
        (result) => {
          alert("Message was sent! :)");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rotsteindaniel@gmail.com</h5>
            <a href="mailto:rotsteindaniel@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Daniel Rotstein Gonçalves</h5>
            <a href="https://www.linkedin.com/in/rotsteindaniel123/">Visit</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 (21) 9 9650-3426</h5>
            <a href="https://wa.me/+5521996503426">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="You Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
