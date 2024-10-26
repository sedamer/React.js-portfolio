import "./skills.scss";

import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="skill">
      <div className="skill__title">
        Quali-<br></br>fi-<br></br>ca-<br></br>tion
      </div>

      <div className="skill__container">
        <div className="skill__container__first">
          <div className="skill__container__first__frontend">
            <p style={{ textAlign: "center", fontStyle: "italic" }}>
              {t("Front-end Technologies")}
            </p>
            <ul>
              <li>
                <a href="https://www.w3schools.com/html/">
                  <strong>HTML</strong>
                </a>
                <br></br>
                <p>
                  <span style={{ width: "80px" }}></span>
                </p>
              </li>
              <li>
                <a href="https://www.w3schools.com/css/">
                  <strong>CSS</strong>{" "}
                </a>
                <br></br>{" "}
                <p>
                  <span style={{ width: "75px" }}></span>
                </p>
              </li>{" "}
              <li>
                <a href=" ">
                  <strong>Sass</strong>
                </a>
                <br></br>{" "}
                <p>
                  <span style={{ width: "65px" }}></span>
                </p>
              </li>{" "}
              <li>
                <a href="https://www.javascript.com/">
                  <strong>Javascript</strong>
                </a>
                <br></br>{" "}
                <p>
                  <span style={{ width: "60px" }}></span>
                </p>
              </li>{" "}
              <li>
                <a href="https://reactjs.org/">
                  <strong>React.js</strong>
                </a>
                <br></br>{" "}
                <p>
                  <span style={{ width: "65px" }}></span>
                </p>
              </li>
              <li>
                <a href="https://reactjs.org/">
                  <strong>Node.js</strong>
                </a>
                <br></br>{" "}
                <p>
                  <span style={{ width: "65px" }}></span>
                </p>
              </li>
              <li>
                <a href="https://reactjs.org/">
                  <strong>Tailwind</strong>
                </a>
                <br></br>{" "}
                <p>
                  <span style={{ width: "65px" }}></span>
                </p>
              </li>
              <li>
                <a href="https://reactjs.org/">
                  <strong>MongoDB</strong>
                </a>
                <br></br>{" "}
                <p>
                  <span style={{ width: "65px" }}></span>
                </p>
              </li>
              <li>
                <a href="https://reactjs.org/">
                  <strong>Wordpress</strong>
                </a>
                <br></br>{" "}
                <p>
                  <span style={{ width: "65px" }}></span>
                </p>
              </li>
              <li>
                <a href="https://getbootstrap.com/">
                  <strong>Bootstrap</strong>
                </a>
                <br></br>{" "}
                <p>
                  <span style={{ width: "55px" }}></span>
                </p>
              </li>
            </ul>
            <div className="skill__container__first__versiyon">
              <p style={{ textAlign: "center", fontStyle: "italic" }}>
                {t("Version Control / Language")}
              </p>
              <ul>
                <li>
                  <strong>Git & GitHub</strong>
                  <br></br>
                  <p>
                    <span style={{ width: "80px" }}></span>
                  </p>
                </li>
                <li style={{ width: "80px" }}>
                  <strong>English</strong>
                  <br></br>
                  {t("B2-C1 Level")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
