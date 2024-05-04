import "./home.scss";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [send, setSend] = useState("İletişim");
  function handleSend() {
    setSend(<Link to="#contact">Contact me</Link>);
  }
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__title">Hi, I'm Seda </div>
        <div className="home__content__desc">Junior Frontend Developer</div>
      </div>
      <div className="home__button">
        <button onClick={handleSend}>{send}</button>
      </div>
      <div className="home__right"></div>
    </div>
  );
}
