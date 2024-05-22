import "./home.scss";

import { Link } from "react-router-dom";
import lavander from "../../assets/flower.png";
import me from "../../assets/me.jpg";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__left">
          <div className="home__content__left__title">
            {t("Hi, I'm Seda")}
            <img src={lavander} alt="lavander" style={{ width: "55px" }} />
          </div>
          <div className="home__content__left__desc">
            {t("Junior Front-End Developer")} <br />
            {t("Senior Computer Engineering Student")}
          </div>
          <div className="home__content__left__button">
            <Link to="/contact">
              <button>{t("Contact with me")}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home__content__right">
        {/* <img src={me} alt="me" /> */}
      </div>
    </div>
  );
}
