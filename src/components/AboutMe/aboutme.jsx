import "./aboutme.scss";

import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__title">{t("My Story")}</div>
      <div className="about__content">
        <div className="about__content__left">
          <div className="about__content__left__desc">
            {t(
              "My name is Seda Mercan. I'm 23 years old and I have completed my degree in Computer Engineering. I have a strong interest in web development, particularly focusing on the Frontend side, where users interact directly."
            )}
          </div>
        </div>
        <div className="about__content__right">
          <div className="about__content__right__section">
            <div className="about__content__right__section__edu">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  fonamtFamily: " SourceSans3-ExtraLightItalic",
                  letterSpacing: "0.5rem",
                  padding: " 10px",
                }}
              >
                {t("Education")}
              </p>
              <ul>
                <li>
                  <p>{t("Computer Engineering")}</p>
                  <p>
                    {t("Adana Alparslan Türkeş Science and Technology")}
                    <br></br>
                    {t("University")}
                  </p>
                  <p>3.20 | 4.00</p>
                  <p>2019-2024</p>
                </li>
              </ul>
            </div>
            <div className="about__content__right__section__dot"></div>
            <div className="about__content__right__section__edu">
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  fonamtFamily: " SourceSans3-ExtraLightItalic",
                  letterSpacing: "0.5rem",
                  padding: " 10px",
                }}
              >
                {t("Experience")}
              </p>
              <ul>
                <li>
                  <p>{t("Front-end Developer Intern")}</p>
                  <p>
                    <i>Brew Interactive</i>
                  </p>
                  <p>02/2024 - 07/2024</p>
                </li>
                <li>
                  <p>{t("Computer Engineering Intern")}</p>
                  <p>
                    <i>{t("Adana Büyükşehir Belediyesi")}</i>
                  </p>
                  <p>07/2023 -08/2023</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
