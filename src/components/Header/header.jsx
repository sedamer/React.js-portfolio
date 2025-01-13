import "./header.scss";

import { Link } from "react-router-dom";
import { Mode } from "../mode/mode";
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
          <ul className="header__content__nav__list">
            <li className="header__content__nav__list__item">
              <Link to="/">{t("Home")}</Link>
            </li>
            <li className="header__content__nav__list__item">
              <Link to="/aboutme">{t("About Me")}</Link>
            </li>
            <li className="header__content__nav__list__item">
              <Link to="/skills">{t("Skills")}</Link>
            </li>
            <li className="header__content__nav__list__item">
              <Link to="/projects">{t("Projects")}</Link>
            </li>
            <li className="header__content__nav__list__item">
              <Link to="/hobies">{t("Hobbies")}</Link>
            </li>
            <li className="header__content__nav__list__item">
              <Link to="/contact">{t("Contact")}</Link>
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
                className="header__content__section__language__select"
              >
                <option value="en">EN</option>
                <option value="tr">TR</option>
              </select>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
