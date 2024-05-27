import "./header.scss";

import { Link, Outlet } from "react-router-dom";

import { Mode } from "../mode/mode";
import logo from "../../assets/moon1.png";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="header__content">
        <nav className="header__content__nav">
          <ul>
            <Link to="/home">
              <img src={logo} alt="logo" style={{ width: "55px" }} />
            </Link>

            <li>
              <Link to="/home">{t("Home")}</Link>
            </li>
            <li>
              <Link to="/aboutMe">{t("About Me")}</Link>
            </li>
            <li>
              <Link to="/skills"> {t("Skills")}</Link>
            </li>
            <li>
              <Link to="/projects"> {t("Projects")}</Link>
            </li>
            <li>
              <Link to="/hobies"> {t("Hobbies")}</Link>
            </li>
            <li>
              <Link to="/contact"> {t("Contact")}</Link>
            </li>
          </ul>
          <div className="header__content__section">
            <div className="header__content__section__mode">
              <Mode />
            </div>
            <div className="header__content__section__language">
              <select
                name="language"
                id="language"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">EN</option>
                <option value="tr">TR</option>
              </select>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </header>
  );
}
