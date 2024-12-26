import React from "react";
import "./ContactUsHomePage.css";

export const ContactUsHomePage = () => {
  return (
    <>
      <div className="contact-us-container" id="contactUsHomePage">
        <h2 className="contact-us-heading">Contact Us</h2>
        <div className="contact-card">
          <div className="contact-item contactUsFont">
            <i className="fas fa-phone"></i>
            <span>+91 8247816401</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>team@nhancio.com</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Nhancio, Hyderabad</span>
          </div>
        </div>
      </div>
    </>
  );
};
