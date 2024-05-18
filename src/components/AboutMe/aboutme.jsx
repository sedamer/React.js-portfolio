import "./aboutme.scss";

import graduate from "../../assets/diploma.png";
import work from "../../assets/customer.png";

export default function AboutMe() {
  return (
    <div className="about">
      <div className="about__content">
        <div className="about__content__left">
          <div className="about__content__left__title">My Story</div>

          <div className="about__content__left__desc">
            I have an interest in the field of web development, especially
            focused on the <i>Frontend</i> side where users interact directly. I
            am improving my skills in enriching user experience and designing
            user-friendly interfaces by working with technologies such as
            Javascript and React.Js.
          </div>
        </div>
      </div>
      <div className="about__content__right">
        <div className="about__content__right__section">
          <div className="about__content__right__section__edu">
            <p style={{ color: "#9b8588" }}>
              {" "}
              Education
              <img src={graduate} alt="graduate" />
            </p>
            <ul className="about__content__right__section__edu">
              <li>
                Computer engineering
                <p>
                  <i>
                    Adana Alparslan Türkeş Science and Technology
                    <br></br> University
                  </i>
                </p>
              </li>
              <p> 3.20 | 4.00</p>
              <p>2019-2024</p>
            </ul>
          </div>
          <div className="about__content__right__section__edu">
            <p style={{ color: "#9b8588" }}>
              {" "}
              Experience
              <img src={work} alt="work" />
            </p>
            <ul className="about__content__right__section__edu">
              <li>
                Front-end developer Intern
                <p>
                  <i>Brew Interactive</i>
                </p>
                <p>02/2024 - present</p>
              </li>
              <li>
                Computer Engineering Intern
                <i>adana</i>
                <p>02/2023 -08/2023 </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
