import "./contact.scss";

import email from "../../assets/communication.png";
import emailjs from "@emailjs/browser";
import map from "../../assets/map.png";
import { useRef } from "react";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jvrx6o7", "template_hh1ocur", form.current, {
        publicKey: "QXHT1TC2O4nw4KYUH",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact__reach">
        <div className="contact__reach__email">
          <img src={email} alt="email" />
          <h3>Email</h3>
          <p>mrcnsedaa@gmail.com</p>
        </div>
        <div className="contact__reach__map">
          <img src={map} alt="email" />
          <h3>Location</h3>
          <p>Adana/Turkey</p>
        </div>
      </div>

      <div className="contact__form">
        <div className="contact__form__container">
          <div className="contact__form__container__sub-title">
            {" "}
            Stay in Touch.
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form__container__text"
          >
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              required
            ></input>{" "}
            <br></br>
            <input
              type="text"
              placeholder="Last Name"
              name="user_surname"
              required
            ></input>
            <br></br>
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            ></input>{" "}
            <br></br>
            <textarea
              placeholder="Message"
              name="message"
              required
              rows={5}
            ></textarea>
            <div className="contact__form__container__text__send">
              <button type="submit">Get in touch</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
