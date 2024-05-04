import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects__vertical-line">
        {" "}
        <div className="projects__vertical-line__title">03 projects</div>
      </div>
      <div className="projects__container">
        <div className="projects__container__first">
          <div className="projects__container__first__title">
            <h1>Nutrition and Workout Full Stack Web Site</h1>
          </div>
          <div className="projects__container__first__detail">
            <p>Node.js, MongoDB,Html,Css,Bootstrap</p>
          </div>
          <div className="projects__container__first__button">
            <button>View Detail</button>
          </div>
        </div>
      </div>
      <div className="projects__container">
        <div className="projects__container__first">
          <div className="projects__container__first__title">
            <h1>Brick Breaker Game- Various Environment</h1>
          </div>
          <div className="projects__container__first__detail">
            <p>OpenGL,Python,MinGW,WinBGIm</p>
          </div>
          <div className="projects__container__first__button">
            <button>View Detail</button>
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
