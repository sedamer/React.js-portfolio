import "./projects.scss";

import nutrition from "../../assets/nutrition.png";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <div className="projects__title"> {t("Projects")}</div>{" "}
      <div className="projects__container">
        <div className="projects__container__first">
          <div className="projects__container__first__title">
            <img src={nutrition} alt="nutrition" />
            <p>
              {t("Nutrition and Workout")}
              <br></br> {t("Full Stack Web Site")}
            </p>
          </div>
          <div className="projects__container__first__button">
            <a
              href="https://github.com/sedamer?tab=repositories"
              target="__blank"
            >
              <button> {t("View Detail")}</button>
            </a>
          </div>
        </div>
        <div className="projects__container__sec">
          <div className="projects__container__sec__title">
            <img src={nutrition} alt="nutrition" />
            <p>
              {t("Chess")}
              <br></br> {t("Full Stack Web Site (Team Work)")}
            </p>
          </div>
          <div className="projects__container__sec__button">
            <a
              href="https://github.com/sedamer?tab=repositories"
              target="__blank"
            >
              <button> {t("View Detail")}</button>
            </a>
          </div>
        </div>
        <div className="projects__container__third">
          <div className="projects__container__third__title">
            <img src={nutrition} alt="nutrition" />
            <p>
              {t("Brick Breaker Game")}
              <br></br> {t("Various Environment")}
            </p>
          </div>
          <div className="projects__container__third__button">
            <a
              href="https://github.com/sedamer?tab=repositories"
              target="__blank"
            >
              <button> {t("View Detail")}</button>
            </a>
          </div>
        </div>
      </div>
      <div className="projects__more">
        <button> {t("Click for more")}</button>
      </div>
    </div>
  );
}
