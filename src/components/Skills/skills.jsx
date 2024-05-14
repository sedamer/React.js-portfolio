import "./skills.scss";

import cert from "../../assets/certified.png";

export default function Skills() {
  return (
    <div className="skill">
      <div className="skill__container">
        <div className="skill__container__first">
          <p>
            My Skills
            <img src={cert} alt="cert" />
          </p>
          <ul>
            <li>
              <strong>HTML</strong>
              <br></br>
              <p>
                <span style={{ width: "80px" }}></span>
              </p>
            </li>
            <li>
              <strong>CSS</strong>
              <br></br>{" "}
              <p>
                <span style={{ width: "70px" }}></span>
              </p>
            </li>{" "}
            <li>
              <strong>Sass</strong>
              <br></br>{" "}
              <p>
                <span style={{ width: "60px" }}></span>
              </p>
            </li>{" "}
            <li>
              <strong>Javascript</strong>
              <br></br>{" "}
              <p>
                <span style={{ width: "50px" }}></span>
              </p>
            </li>{" "}
            <li>
              <strong>React</strong>
              <br></br>{" "}
              <p>
                <span style={{ width: "55px" }}></span>
              </p>
            </li>
            <li>
              <strong>Git</strong>
              <br></br>{" "}
              <p>
                <span style={{ width: "75px" }}></span>
              </p>
            </li>
            <li>
              <strong>English</strong>
              <br></br>B2-C1 Level
            </li>
          </ul>
        </div>
        <div className="skill__container__second">
          <p>
            Certificates / Volunteers
            <img src={cert} alt="cert" />
          </p>
          <ul>
            <li>
              <strong>SistersLab Academy</strong>
              <br></br>Frontend Development Bootcamp (120 hours)
            </li>
            <li>
              <strong>YGA</strong>
              <br></br>Role Model Women in Technology Program (3 months)
            </li>
            <li>
              <strong>Ada Lovelace Academy</strong>
              <br></br>Volunteer Project Assistant (1 month)
            </li>
            <li>
              <strong>Ada Lovelace Academy</strong>
              <br></br>Volunteer Project Assistant (1 month)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
