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
            focused on the Frontend side where users interact directly. I am
            improving my skills in enriching user experience and designing
            user-friendly interfaces by working with technologies such as
            Javascript and React.Js.
          </div>
        </div>
      </div>
      <div className="about__content__right">
        <div className="about__content__right__section">
          <div className="about__content__right__section__edu">
            <button>
              Education
              <img src={graduate} alt="graduate" />
              <p>
                Computer engineering<br></br>Adana Alparslan Türkeş Science and
                Technology University <br></br>
                3.20 | 4.00 2019-2024
              </p>
            </button>
          </div>
          <div className="about__content__right__section__dot">
            <p>
              <span></span>
            </p>
          </div>
          <div className="about__content__right__section__work">
            <button>
              Experience
              <img src={work} alt="work" />
              <ul>
                <li>
                  <p>Long Term Internship</p>
                  Brew Interactive 02/2024 - 06/2024
                </li>
                <li>Short Term Internship</li>
                Adana 07/2023 - 08/2023{" "}
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
