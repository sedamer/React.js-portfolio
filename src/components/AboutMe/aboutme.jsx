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
        <div className="about__content__right">
          <div className="about__content__right__section">
            <div className="about__content__right__section__edu">
              <p>
                {t("Education")}
                <img src={graduate} alt="graduate" />
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
                  <p>
                    <img src={cap} alt="cap" />
                    2019-2024
                  </p>
                </li>
              </ul>
            </div>
            <div className="about__content__right__section__dot"></div>
            <div className="about__content__right__section__edu">
              <p>
                {t("Experience")}
                <img src={work} alt="work" />
              </p>
              <ul>
                <li>
                  <p>{t("Front-end Developer Intern")}</p>
                  <p>
                    <i>Brew Interactive</i>
                  </p>
                  <p>02/2024 - present</p>
                </li>
                <li>
                  <p>{t("Computer Engineering Intern")}</p>
                  <p>
                    <i>{t("Adana Büyükşehir Belediyesi")}</i>
                  </p>
                  <p>02/2023 -08/2023</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
