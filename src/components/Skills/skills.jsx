import "./skills.scss";

import css from "../../assets/css-3.png";
import git from "../../assets/social (1).png";
import html from "../../assets/html-5.png";
import js from "../../assets/js.png";
import react from "../../assets/physics.png";
import sass from "../../assets/html-5.png";
import wp from "../../assets/wp.png";

export default function Skills() {
  return (
    <div className="skills">
      <div className="skills__vertical-line">
        {/* <div className="skills__vertical-line__title">03 skills</div> */}
      </div>
      <div className="skills__container">
        <SkillCircle img={html} title="HTML" level={90} />
        <SkillCircle img={css} title="CSS" level={80} />
        <SkillCircle img={js} title="JavaScript" level={60} />
        <SkillCircle img={react} title="React" level={60} />
        <SkillCircle img={sass} title="Sass" level={70} />
        <SkillCircle img={git} title="Git" level={70} />
        <SkillCircle img={wp} title="WordPress" level={50} />
      </div>
    </div>
  );
}

function SkillCircle({ title, level, img, link }) {
  return (
    <div className="skill-circle">
      <a href={link} className="skill-circle__link">
        <img src={img} alt={title} className="skill-circle__image" />
        <div className="skill-circle__title">{title}</div>
        <div className="skill-circle__level">
          <div className="skill-circle__circles">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`skill-circle__circle ${
                  index < level / 20 ? "skill-circle__circle--filled" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
