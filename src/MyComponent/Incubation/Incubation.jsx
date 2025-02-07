import React from "react";
import "./Incubation.css";
import logo from './Images/t-hub-logo.png'
import { Link } from "react-router-dom";
const Incubation = () => {
  return (
    <section className="Incubation" id="Contact">
      <div className="Incubation__container">
        <div className="Incubation__content">
          <h1 className="Incubation__h1">Incubation</h1>
          {/* <p className="Incubation__p">
            We provide a platform for startups to grow and scale their business
            with our incubation program. We provide mentorship, funding,
            resources, and a network of investors to help startups grow.
          </p> */}
        
        </div>
        <div className="Incubation__image">
          <a href="https://t-hub.co/" target="_blank" rel="noreferrer">
          <img src={logo} alt="Incubation" />
          </a>
          {/* <a href="#contactUsHomePage" className="Incubation__button">
            Contact Us
          </a> */}
        </div>
      </div>
      
     
    </section>
  );
};
export default Incubation;