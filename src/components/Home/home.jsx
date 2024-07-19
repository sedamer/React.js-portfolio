import "./home.scss";

import { Link as ScrollLink } from "react-scroll";
import cv from "../../assets/Seda-MercanÖzgeçmiş.pdf";
import email from "../../assets/icons8-gmail-logo.svg";
import github from "../../assets/icons8-github (1).svg";
import lavander from "../../assets/flower.png";
import linkedin from "../../assets/icons8-linkedin.svg";
import moon from "../../assets/moon.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "SedaMercanCV.pdf";
    link.click();
  };
  return (
    <>
      <div className="home">
        <div className="home__content">
          <div className="home__content__left">
            <div className="home__content__left__title">
              {t("Hi, I'm Seda")}
              <img src={lavander} alt="lavander" style={{ width: "55px" }} />
            </div>
            <div className="home__content__left__desc">
              {t("Junior Front-End Developer")} <br />
            </div>
            <div className="home__content__left__buttons">
              <div className="home__content__left__buttons__button">
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <button>{t("Contact with me")}</button>
                </ScrollLink>
              </div>
              <div className="home__content__left__buttons__button2">
                <button onClick={downloadCV}>{t("Download My CV")}</button>
              </div>
            </div>
          </div>
          <div className="home__content__right">
            <img src={moon} alt="" id="home_img" />
          </div>
        </div>
        <div className="home__contact" target="__blank">
          <a href="https://www.linkedin.com/in/seda-mercan-b8b7a5222/">
            <img src={github} alt="github" />{" "}
          </a>

          <a href="mailto:mrcnsedaa@gmail.com" target="__blank">
            <img src={email} alt="email" />
          </a>
          <a href="https://github.com/sedamer" target="__blank">
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
