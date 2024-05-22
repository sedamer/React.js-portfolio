import "./skills.scss";

import cert from "../../assets/rating.png";
import github from "../../assets/social2.png";
import linkedin from "../../assets/linkedin.png";
import skills from "../../assets/integrity.png";
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
          <p className="skill__container__first__sub-title">
            {t("My Skills")}

            <img src={skills} alt="cert" />
          </p>

          <p style={{ textAlign: "center" }}>{t("Front-end Technologies")}</p>
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
              React
              <br></br>{" "}
              <p>
                <span style={{ width: "55px" }}></span>
              </p>
            </li>
            {/* <li>
              Git
              <br></br>{" "}
              <p>
                <span style={{ width: "75px" }}></span>
              </p>
            </li>
            <li>
              <strong>English</strong>
              <br></br>
              {t("B2-C1 Level")}
            </li> */}
          </ul>
        </div>
        {/* <div className="skill__container__second">
          <p>
            {t("Certificates / Volunteers")}

            <img src={cert} alt="cert" />
          </p>
          <ul>
            <li>
              <strong>{t("SistersLab Academy")}</strong>
              <br></br>
              {t("Frontend Development Bootcamp (120 hours)")}
            </li>
            <li>
              <strong>YGA</strong>
              <br></br>
              {t("Role Model Women in Technology Program (3 months)")}
            </li>
            <li>
              <strong> {t("Ada Lovelace Academy")}</strong>
              <br></br> {t("Volunteer Project Assistant (1 month)")}
            </li>
            <li>
              <strong>Ada Lovelace Academy</strong>
              <br></br>Volunteer Project Assistant (1 month)
            </li>
          </ul>
          <div className="skill__container__second__link">
            <a
              href="https://www.linkedin.com/in/seda-mercan-b8b7a5222/"
              target="__blank"
            >
              <img
                src={linkedin}
                alt="linkedin"
                style={{ width: "40px", paddingRight: "10px" }}
              />
            </a>
            <a href="https://github.com/sedamer" target="__blank">
              <img src={github} alt="github" style={{ width: "40px" }} />
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
