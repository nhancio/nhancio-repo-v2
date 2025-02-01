import React from "react";
import "./ContactUsHomePage.css";

export const ContactUsHomePage = () => {
  return (
    <>
      <div className="contact-us-container" id="contactUsHomePage">
       
     
        <section class="section" id="contact-us">
        <div class="container">
            <div class="row">
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
                <div class="col-lg-8 col-md-8 col-xs-12">
                    <div class="contact-form">
                        <form id="contact" action="" method="get">
                          <div class="row">
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your Name *" required=""/>
                              </fieldset>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="phone" type="text" id="phone" placeholder="Your Phone" required=""/>
                              </fieldset>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="email" type="email" id="email" placeholder="Your Email *" required=""/>
                              </fieldset>
                            </div>
                            <div class="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="subject" type="text" id="subject" placeholder="Subject"/>
                              </fieldset>
                            </div>
                            <div class="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                              </fieldset>
                            </div>
                            <div class="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" class="main-button-icon">Send Message Now <i class="fa fa-arrow-right"></i></button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
      </div>
    </>
  );
};
