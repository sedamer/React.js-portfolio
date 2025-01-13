import "./aboutme.scss";

import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      {/* <div className="about__title">{t("My Story")}</div> */}
      <div className="about__content">
        <div className="about__content__left"></div>
        <div className="about__content__right">
          <div className="about__content__right__section">
            <div className="about__content__right__section__edu"></div>
            <div className="about__content__right__section__dot"></div>
            <div className="about__content__right__section__edu"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
