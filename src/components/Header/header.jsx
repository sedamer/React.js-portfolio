import "./header.scss";

import { Link, Outlet } from "react-router-dom";

import logo from "../../assets/day-and-night (1).png";
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
            <Link to="/home">
              <img src={logo} alt="logo" style={{ width: "55px" }} />
            </Link>
            <div className="header__content__nav__language">
              <select
                name="language"
                id="language"
                onChange={(e) => changeLanguage(e.target.value)}
              >
                <option value="en">EN</option>
                <option value="tr">TR</option>
              </select>
            </div>
          </ul>
        </nav>
      </div>
      <Outlet />
    </header>
  );
}
