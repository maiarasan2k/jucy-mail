import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1 style={{color:" #ffcc00"}}>Contact Us</h1>
      </header>

      <div className="contact-info">
        <div className="info-box">
          <i className="fa-solid fa-phone"></i>
          <h3>Call Us</h3>
          <p>+91 9025137447</p>
        </div>
        <div className="info-box">
          <i className="fa-solid fa-location-dot"></i>
          <h3>Location</h3>
          <p>JUICYY SPOT</p>
          <p>Dindigul</p>
        </div>
        <div className="info-box">
          <i className="fa-solid fa-envelope"></i>
          <h3>Mail Us</h3>
          <p>juicyyspot@gmail.com</p>
         
        </div>
      </div>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email *" required />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Phone number" />
        </div>
        <div className="form-row">
          <textarea placeholder="Comment" rows="4"></textarea>
        </div>
        <button type="submit" className="send-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
