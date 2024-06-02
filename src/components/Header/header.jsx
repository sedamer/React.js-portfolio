import "./header.scss";

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
          <ul>
            <li>
              <a href="#home">{t("Home")}</a>
            </li>
            <li>
              <a href="#aboutMe">{t("About Me")}</a>
            </li>
            <li>
              <a href="#skills">{t("Skills")}</a>
            </li>
            <li>
              <a href="#projects">{t("Projects")}</a>
            </li>
            <li>
              <a href="#hobies">{t("Hobbies")}</a>
            </li>
            <li>
              <a href="#contact">{t("Contact")}</a>
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
    </header>
  );
}
