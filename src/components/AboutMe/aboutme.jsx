import "./aboutme.scss";

import cert from "../../assets/certified.png";
import graduate from "../../assets/graduation-cap.png";
import work from "../../assets/work-experience.png";

export default function AboutMe() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__content__left">
          <div className="about__content__left__title">My Story</div>
          <div className="about__content__left__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quo perspiciatis asperiores laboriosam itaque tempore
            ex et dolorum? Aliquam praesentium necessitatibus tempore laudantium
            eum sunt repudiandae quasi incidunt sit expedita. Please click the
            right ones buttons see the my education ,experience and volunteers
          </div>

          <div className="about__content__right">
            <div className="about__content__right__section">
              <div className="about__content__right__section__edu">
                <button onClick={""}>Education</button>
                <img src={graduate} alt="graduate" />
                {/* <div className="about__content__right__edu__circle"></div> */}
              </div>
              <div className="about__content__right__section__work">
                <button>Experience</button>
                <img src={work} alt="work" />
              </div>
              <div className="about__content__right__section__certificate">
                <button>Certificates / Volunteers</button>
                <img src={cert} alt="cert" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
