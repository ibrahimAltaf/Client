import React from "react";
import "../styles/growing.css";
import Semicolon from "../assets/colon.png";

const Growing = () => {
  return (
    <>
      <section className="growing">
        <div className="growing-msg">
          <img src={Semicolon} alt="" />
          <p>
            If you're looking for a digital solution provider that can help you
            achieve your business goals, contact Bionic Solutions today. We
            offer a free consultation to discuss your needs and how we can help
            you.
          </p>
        </div>
        <div className="contact-from">
          <h2 className="form-head"> Start growing your business with us</h2>
          <div className="form-f-01">
            <div className="fullname">
              <input type="text" name="" id="" placeholder="Full name *" />
            </div>
            <div className="email">
              <input type="text" name="" id="" placeholder="Email *" />
            </div>
          </div>
          <div className="form-f-01">
            <div className="fullname">
              <input type="text" name="" id="" placeholder="Phone number *" />
            </div>
            <div className="email">
              <input type="text" name="" id="" placeholder="Company" />
            </div>
          </div>
          <div className="form-f-01">
            <div className="message">
              <input type="text" name="" id="" placeholder="Message" />
            </div>
          </div>
          <div className="checkmain">
            <div className="check-conten">
              <input type="checkbox" name="" id="checkbox" />
              <p className="chec-tect">
                We will add your info to our CRM for contacting you regarding
                your request. For more info please consult our{" "}
                <span>privacy policy.</span>
              </p>
            </div>
            <div className="send-message">
              <button>Send message </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Growing;
