import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__vertical-line"> </div>
      <div className="projects__container">
        <div className="projects__container__first">
          <div className="projects__container__first__title">
            <p>Nutrition and Workout Full Stack Web Site</p>
          </div>
          <div className="projects__container__first__detail">
            <p>Node.js, MongoDB,Html,Css,Bootstrap</p>
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
      </div>
      <div className="projects__container">
        <div className="projects__container__first">
          <div className="projects__container__first__title">
            <p>Brick Breaker Game- Various Environment</p>
          </div>
          <div className="projects__container__first__detail">
            <p>OpenGL,Python,MinGW,WinBGIm</p>
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
      </div>{" "}
      <div className="projects__container">
        <div className="projects__container__first">
          <div className="projects__container__first__title">
            <p>Personal Frontend Web Site</p>
          </div>
          <div className="projects__container__first__detail">
            <p>React.js, Sass</p>
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
      </div>{" "}
      <div className="projects__button">
        <a href="https://github.com/sedamer?tab=repositories" target="__blank">
          <button>Click to view more</button>
        </a>
      </div>
    </div>
  );
}
