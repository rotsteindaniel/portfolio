import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

export function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        PORTFÓLIO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiences">Experiences</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://www.linkedin.com/in/rotsteindaniel123/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="http://www.github.com/rotsteindaniel" target="_blank">
          <FaGithub />
        </a>
        <a href="https://wa.me/+5521996503426" target="_blank">
          <BsWhatsapp />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All Rights Reserved.</small>
      </div>
    </footer>
  );
}
