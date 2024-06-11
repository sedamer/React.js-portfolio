import "./contact.scss";

import { useRef, useState } from "react";

import Scroll from "../ScrollButton/ScrollButton";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jvrx6o7", "template_hh1ocur", form.current, {
        publicKey: "QXHT1TC2O4nw4KYUH",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setMessage("Message Send!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setMessage("Message Failed. Please try again.");
        }
      );
  };

  return (
    <div className="contact">
      <div className="contact__social">
        <h3>
          {t("HELLO,")} <br></br>
          {t("NICE TO MEET YOU!")}
        </h3>
      </div>
      <div className="contact__form">
        <div className="contact__form__container">
          <div className="contact__form__container__sub-title">
            {t("Stay in Touch.")}
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="contact__form__container__text"
          >
            <input
              type="text"
              placeholder={t("Name")}
              name="user_name"
              required
            ></input>
            <br></br>
            <input
              type="text"
              placeholder={t("Last Name")}
              name="user_surname"
              required
            ></input>
            <br></br>
            <input
              type="email"
              placeholder={t("Email")}
              name="user_email"
              required
            ></input>
            <br></br>
            <textarea
              placeholder={t("Message")}
              name="message"
              required
              rows={5}
            ></textarea>
            <div className="contact__form__container__text__send">
              <button type="submit">{t("Get in touch")}</button>
            </div>
            {message && <p className="contact__form__message">{message}</p>}{" "}
          </form>
        </div>
      </div>
      <Scroll />
    </div>
  );
}
