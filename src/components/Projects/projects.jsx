import "./projects.scss";

import nutrition from "../../assets/nutrition.png";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__title">Projects</div>{" "}
      <div className="projects__container">
        <div className="projects__container__first">
          <div className="projects__container__first__title">
            <img src={nutrition} alt="nutrition" />
            <p>
              Nutrition and Workout
              <br></br> Full Stack Web Site
            </p>
          </div>
          <div className="projects__container__first__button">
            <a
              href="https://github.com/sedamer?tab=repositories"
              target="__blank"
            >
              <button>View Detail</button>
            </a>
          </div>
        </div>
        <div className="projects__container__sec">
          <div className="projects__container__sec__title">
            <img src={nutrition} alt="nutrition" />
            <p>
              Chess
              <br></br> Full Stack Web Site (Team Work)
            </p>
          </div>
          <div className="projects__container__sec__button">
            <a
              href="https://github.com/sedamer?tab=repositories"
              target="__blank"
            >
              <button>View Detail</button>
            </a>
          </div>
        </div>
        <div className="projects__container__third">
          <div className="projects__container__third__title">
            <img src={nutrition} alt="nutrition" />
            <p>
              Brick Breaker Game
              <br></br> Various Environment
            </p>
          </div>
          <div className="projects__container__third__button">
            <a
              href="https://github.com/sedamer?tab=repositories"
              target="__blank"
            >
              <button>View Detail</button>
            </a>
          </div>
        </div>
      </div>
      <div className="projects__more">
        <button>Click for more</button>
      </div>
    </div>
  );
}
