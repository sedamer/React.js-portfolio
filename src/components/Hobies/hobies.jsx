import "./hobies.scss";

import goodreads from "../../assets/goodreads.png";
import letterboxd from "../../assets/letterboxd.png";
import { useTranslation } from "react-i18next";
import vsco from "../../assets/vsco.png";

export default function Hobbies() {
  const { t } = useTranslation();

  return (
    <div className="hobbies">
      <div className="hobbies__title">{t("Hobby Area")}</div>
      <div className="hobbies__line"></div>
      <div className="hobbies__alan">
        <div className="hobbies__alan__bir">
          <div className="hobbies__alan__bir__desc">
            <h3> {t("Photography!")} </h3>
            {t("Are you interested in checking out my photos?")}
            {t("Feel free to visit my profile on VSCO.")}
          </div>
          <div className="hobbies__alan__bir__img">
            <a href="https://vsco.co/moonbeee/gallery" target="__blank">
              <img src={vsco} alt="vsco" />
            </a>
          </div>
        </div>
        <div className="hobbies__alan__iki">
          <div className="hobbies__alan__iki__desc">
            <h3>{t("Reading Books!")}</h3>{" "}
            {t(
              "If you'd like to see the books I've read or want book recommendations, take a look at my Goodreads profile."
            )}
          </div>
          <div className="hobbies__alan__iki__img">
            <a
              href="https://www.goodreads.com/user/show/177790946-seda-mercan"
              target="__blank"
            >
              <img src={goodreads} alt="good" />
            </a>
          </div>
        </div>

        <div className="hobbies__alan__uc">
          <div className="hobbies__alan__uc__desc">
            <h3> {t("Watching Movies!")}</h3>{" "}
            {t(
              "Interested in browsing the movies I've watched? Feel free to check out my film list."
            )}
          </div>
          <div className="hobbies__alan__uc__img">
            <a
              href="https://letterboxd.com/moonchildbe/films/"
              target="__blank"
            >
              <img src={letterboxd} alt="film" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
