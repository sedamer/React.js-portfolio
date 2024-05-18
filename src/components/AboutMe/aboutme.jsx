import "./aboutme.scss";

import graduate from "../../assets/diploma.png";
import { useTranslation } from "react-i18next";
import work from "../../assets/customer.png";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__content">
        <div className="about__content__left">
          <div className="about__content__left__title">{t("My Story")}</div>

          <div className="about__content__left__desc">
            {t(
              "I have an interest in the field of web development, especially focused on the Frontend"
            )}

            {t(
              "side where users interact directly. I am improving my skills in enriching user experience and designing user-friendly interfaces by working with technologies such as Javascript and React.Js."
            )}
          </div>
        </div>
      </div>
      <div className="about__content__right">
        <div className="about__content__right__section">
          <div className="about__content__right__section__edu">
            <p style={{ color: "#9b8588" }}>
              {t("Education")}
              <img src={graduate} alt="graduate" />
            </p>
            <ul className="about__content__right__section__edu">
              <li>
                {t("Computer engineering")}
                <p>
                  <i>
                    {t("Adana Alparslan Türkeş Science and Technology")}
                    <br></br> {t("University")}
                  </i>
                </p>
              </li>
              <p> 3.20 | 4.00</p>
              <p>2019-2024</p>
            </ul>
          </div>
          <div className="about__content__right__section__edu">
            <p style={{ color: "#9b8588" }}>
              {t("Experience")}
              <img src={work} alt="work" />
            </p>
            <ul className="about__content__right__section__edu">
              <li>
                {t("Front-end developer Intern")}
                <p>
                  <i>Brew Interactive</i>
                </p>
                <p>02/2024 - present</p>
              </li>
              <li>
                {t("Computer Engineering Intern")}
                <p>
                  <i>{t("adana")}</i>
                </p>
                <p>02/2023 -08/2023 </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
