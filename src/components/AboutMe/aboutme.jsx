import "./aboutme.scss";

import cap from "../../assets/graduation-cap-variant.png";
import graduate from "../../assets/diploma.png";
import { useTranslation } from "react-i18next";
import work from "../../assets/customer.png";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__title">{t("My Story")}</div>
      <div className="about__content">
        <div className="about__content__left">
          <div className="about__content__left__desc">
            {t(
              "My Name is Seda Mercan I'm 23 years old, I Studying Computer Engineering, I have an interest in the field of web development, especially focused on the Frontend"
            )}
            {t("side where users interact directly. ")}
            <br></br>I am improving my skills in enriching user experience and
            designing user-friendly interfaces by working with technologies such
            as Javascript and React.Js.
          </div>
        </div>
      </div>
      <div className="about__content__right">
        <div className="about__content__right__section">
          <div className="about__content__right__section__edu">
            <p
              style={{
                marginTop: "20px",
                fontSize: "2.1rem",
                letterSpacing: "2px",
                fontStyle: "italic",
                fontFamily: "SourceSans3-ExtraLightItalic",
              }}
            >
              {t("Education")}
              <img src={graduate} alt="graduate" />
            </p>
            <ul className="about__content__right__section__edu">
              <li>
                <p style={{ color: "black", fontSize: "17px" }}>
                  {t("Computer Engineering")}
                </p>
                <p style={{ color: "gray", fontSize: "15px" }}>
                  <i>
                    {t("Adana Alparslan Türkeş Science and Technology")}
                    <br></br> {t("University")}
                  </i>
                </p>
              </li>
              <p style={{ color: "gray", fontSize: "15px" }}> 3.20 | 4.00</p>
              <p
                style={{ color: "gray", fontSize: "15px", marginRight: "50px" }}
              >
                <img
                  src={cap}
                  alt="cap"
                  style={{ marginRight: "12px", marginBottom: "-15px" }}
                />
                2019-2024
              </p>
            </ul>
          </div>
          <div className="about__content__right__section__dot"></div>
          <div className="about__content__right__section__edu">
            <p
              style={{
                marginTop: "20px",
                fontSize: "2.1rem",
                letterSpacing: "2px",
                fontStyle: "italic",
                fontFamily: "SourceSans3-ExtraLightItalic",
              }}
            >
              {t("Experience")}
              <img src={work} alt="work" />
            </p>
            <ul className="about__content__right__section__edu">
              <li>
                <p style={{ color: "black", fontSize: "17px" }}>
                  {t("Front-end Developer Intern")}
                </p>
                <p style={{ color: "gray", fontSize: "15px" }}>
                  <i>Brew Interactive</i>
                </p>
                <p style={{ color: "gray", fontSize: "15px" }}>
                  02/2024 - present
                </p>
              </li>
              <li>
                <p style={{ color: "black", fontSize: "17px" }}>
                  {" "}
                  {t("Computer Engineering Intern")}
                </p>
                <p style={{ color: "gray", fontSize: "15px" }}>
                  <i>{t("Adana Büyükşehir Belediyesi")}</i>
                </p>
                <p style={{ color: "gray", fontSize: "15px" }}>
                  02/2023 -08/2023{" "}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
