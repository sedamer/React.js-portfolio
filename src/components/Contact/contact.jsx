import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__title"></div>

      <div className="contact__form">
        <div className="contact__form__container">
          <div className="contact__form__container__sub-title">
            {" "}
            Stay in Touch.
          </div>
          <form className="contact__form__container__text">
            <input type="text" placeholder="Name" required></input> <br></br>
            <input type="text" placeholder="Last Name" required></input>
            <br></br>
            <input type="email" placeholder="Email" required></input> <br></br>
            <textarea placeholder="Message" required rows={5}></textarea>
            <div className="contact__form__container__text__send">
              <button type="submit">Get in touch</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
