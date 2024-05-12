import "./footer.scss";

import email from "../../assets/email.png";
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
        <a href="mailto:mrcnsedaa@gmail.com">
          <img src={email} alt="email" />
        </a>
      </div>
      <span className="footer__content__copy">
        &#169; Seda Mercan. All rigths reserved
      </span>
    </footer>
  );
}
