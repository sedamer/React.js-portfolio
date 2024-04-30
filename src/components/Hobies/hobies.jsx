import "./hobies.scss";

import goodreads from "../../assets/goodreads.png";
import instagram from "../../assets/instagram.png";
import letterboxd from "../../assets/letterboxd.png";
import vsco from "../../assets/vsco.png";

export default function Hobbies() {
  return (
    <div className="hobbies">
      <div className="hobbies__title">HOBİ ALANI</div>
      <div className="hobbies__bir">
        <div className="hobbies__bir__desc">
          Fotoğrafçılık! Çektiğim fotoğraflara göz atmak istersen
        </div>
        <div className="hobbies__bir__img">
          <a href="https://vsco.co/moonbeee/gallery" target="__blank">
            <img src={vsco} alt="vsco" />
          </a>
        </div>
      </div>
      <div className="hobbies__iki">
        <div className="hobbies__iki__desc">
          Kitap okumak! Okuduğum kitapları görmek veya kitap önerisinde bulunmak
          istersen
        </div>
        <div className="hobbies__iki__img">
          <a href="https://vsco.co/moonbeee/gallery" target="__blank">
            <img src={goodreads} alt="good" />
          </a>
        </div>
      </div>
      <div className="hobbies__uc">
        <div className="hobbies__uc__desc">
          Film izlemek! İzlediğim filmleri göz atmak istersen
        </div>
        <div className="hobbies__uc__img">
          <a href="https://vsco.co/moonbeee/gallery" target="__blank">
            <img src={letterboxd} alt="film" />
          </a>
        </div>
      </div>
      <div className="hobbies__four">
        <div className="hobbies__uc__desc">
          Yemek Yapmak! Tariflere göz atmak istersen!
        </div>
        <div className="hobbies__uc__img">
          <a href="https://vsco.co/moonbeee/gallery" target="__blank">
            <img src={instagram} alt="film" />
          </a>
        </div>
      </div>
    </div>
  );
}
