import "./home.scss";

import me from "../../assets/me.jpg";
import { useState } from "react";

// responsive i kontrol ett!!!
export default function Home() {
  const [send, setSend] = useState();
  function handleSend(send) {}
  return (
    <div className="home">
      <div className="home__title">HOME</div>
      <div className="home__content">
        <div className="home__content__desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          temporibus dolorum, ipsum voluptatem quod iusto a ipsa officia, facere
          nisi aut vitae aspernatur sed, nemo est ut nihil libero quidem.
        </div>
        <div className="home__content__button">
          <button onClick={handleSend}>Başla</button>
        </div>
      </div>
      <div className="home__right">{/* <img src={me} /> */}</div>
    </div>
  );
}
