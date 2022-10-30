import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="http://www.linkedin.com/in/rotsteindaniel123/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="http://www.github.com/rotsteindaniel" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}
