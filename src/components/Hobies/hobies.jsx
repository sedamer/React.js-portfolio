import "./hobies.scss";

import goodreads from "../../assets/goodreads.png";
import instagram from "../../assets/instagram.png";
import letterboxd from "../../assets/letterboxd.png";
import vsco from "../../assets/vsco.png";

export default function Hobbies() {
  return (
    <div className="hobbies">
      {/* <div className="hobbies__vertical-line">
        <div className="hobbies__vertical-line__title">05 hobies</div>
      </div> */}

      {/* <div className="hobbies__title">Hobby Area</div> */}
      <div className="hobbies__alan">
        <div className="hobbies__alan__bir">
          <div className="hobbies__alan__bir__desc">
            <h3> Photography! </h3>Are you interested in checking out my photos?
            Feel free to visit my profile on VSCO.
          </div>
          <div className="hobbies__alan__bir__img">
            <a href="https://vsco.co/moonbeee/gallery" target="__blank">
              <img src={vsco} alt="vsco" />
            </a>
          </div>
        </div>
        <div className="hobbies__alan__iki">
          <div className="hobbies__alan__iki__desc">
            <h3>Reading Books!</h3> If you'd like to see the books I've read or
            want book recommendations, take a look at my Goodreads profile.
          </div>
          <div className="hobbies__alan__iki__img">
            <a href="https://vsco.co/moonbeee/gallery" target="__blank">
              <img src={goodreads} alt="good" />
            </a>
          </div>
        </div>
        <div className="hobbies__alan__uc">
          <div className="hobbies__alan__uc__desc">
            <h3> Watching Movies!</h3> Interested in browsing the movies I've
            watched? Feel free to check out my film list.
          </div>
          <div className="hobbies__alan__uc__img">
            <a href="https://vsco.co/moonbeee/gallery" target="__blank">
              <img src={letterboxd} alt="film" />
            </a>
          </div>
        </div>
        <div className="hobbies__alan__four">
          <div className="hobbies__alan__four__desc">
            <h3>Cooking!</h3> If you want to explore recipes, feel free to take
            a look at my cooking section!
          </div>
          <div className="hobbies__alan__four__img">
            <a href="https://vsco.co/moonbeee/gallery" target="__blank">
              <img src={instagram} alt="film" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
