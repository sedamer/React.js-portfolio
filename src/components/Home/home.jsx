import "./home.scss";

import { Link } from "react-router-dom";
import lavander from "../../assets/flower.png";
import me from "../../assets/me.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__content__left">
          <div className="home__content__left__title">
            Hi, I'm Seda{" "}
            <img src={lavander} alt="lavander" style={{ width: "55px" }}></img>{" "}
          </div>
          <div className="home__content__left__desc">
            Junior Front-End Developer <br></br>Senior Computer Engineering
            Student
          </div>

          <div className="home__content__left__button">
            <Link to="/contact">
              <button>Contact with me</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="home__content__right">
        <img src={me} alt="me"></img>
      </div>
    </div>
  );
}
