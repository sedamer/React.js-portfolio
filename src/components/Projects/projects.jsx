import "./projects.scss";

import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className="projects">
      <div className="projects__title"> {t("My Projects")}</div>{" "}
      <div className="projects__container">
        <div className="projects__container__first">
          <div className="projects__container__first__title">
            <p>
              {t("Nutrition and Workout")}
              <br></br> {t("Full Stack Web Site")}
            </p>
            <div className="projects__container__first__tech">
              <p>Node.js, API,Bootstrap</p>
            </div>
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
            <p>
              {t("Chess")}
              <br></br> {t("Full Stack Web Site (Team Work)")}
            </p>
            <div className="projects__container__first__tech">
              <p>Node.js, API,Bootstrap</p>
            </div>
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
            <p>
              {t("Brick Breaker Game")}
              <br></br> {t("Various Environment")}
            </p>
            <div className="projects__container__first__tech">
              <p>Node.js, API,Bootstrap</p>
            </div>
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
        <a href="https://github.com/sedamer" target="__blank">
          <button className="projects__more__cta">
            <span className="hover-underline-animation">
              {t("Click for more")}
            </span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
