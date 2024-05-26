import "./home.scss";

import { Link } from "react-router-dom";
import email from "../../assets/email.png";
import github from "../../assets/program.png";
import lavander from "../../assets/flower.png";
import linkedin from "../../assets/social.png";
import me from "../../assets/me1.jpg";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__left">
          <div className="home__content__left__title">
            {t("Hi, I'm Seda")}
            <img src={lavander} alt="lavander" style={{ width: "55px" }} />
          </div>
          <div className="home__content__left__desc">
            {t("Junior Front-End Developer")} <br />
            {t("Senior Computer Engineering Student")}
          </div>
          <div className="home__content__left__button">
            <Link to="/contact">
              <button>{t("Contact with me")}</button>
            </Link>
          </div>
          <div className="home__content__left__contact" target="__blank">
            <a href="https://www.linkedin.com/in/seda-mercan-b8b7a5222/">
              <img src={github} alt="github" />{" "}
            </a>
            <a href="https://github.com/sedamer" target="__blank">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="mailto:mrcnsedaa@gmail.com" target="__blank">
              <img src={email} alt="email" />
            </a>
          </div>
        </div>
        <div className="home__content__right">
          <img src={me} alt="" />
        </div>
      </div>
    </div>
  );
}
