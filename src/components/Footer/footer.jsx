import "./footer.scss";

import github from "../../assets/program.png";
import linkedin from "../../assets/social.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <a href="https://www.linkedin.com/in/seda-mercan-b8b7a5222/">
          <img src={github} alt="github" />{" "}
        </a>
        <a href="https://github.com/sedamer">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <span className="footer__copy">
        &#169; Seda Mercan. All rigths reserved
      </span>
    </footer>
  );
}
