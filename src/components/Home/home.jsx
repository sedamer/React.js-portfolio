import "./home.scss";

import me from "../../assets/me.jpg";
import { useState } from "react";

// responsive i kontrol ett!!!
export default function Home() {
  const [send, setSend] = useState();
  function handleSend(send) {
    // useRef kullanılacak bunu en son yap
  }
  return (
    <div className="home">
      <div className="home__content">
        <div className="home__title">Merhaba, Ben Seda Mercan</div>
        <div className="home__content__desc">Junior Frontend Developer</div>
      </div>
      <div className="home__button">
        <button onClick={handleSend}>İletişim</button>
      </div>
      <div className="home__right">{/* <img src={me} /> */}</div>
    </div>
  );
}
