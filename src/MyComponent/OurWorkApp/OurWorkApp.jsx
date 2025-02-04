import React from "react";
import HomeMatesLogo from "./Images/HomeMates Logo.jpg";
import "./OurWorkApp.css";

export const OurWorkApp = () => {
  return (
    <>
      <div className="ourWorkApp">
        <div>
          <h1>Our Products</h1>
        </div>
        <a href="http://homemates-app.web.app" target="_blank" rel="noopener noreferrer">
          <img src={HomeMatesLogo} alt="HomeMates Logo" />
        </a>
      </div>


    </>
  );
};

export default OurWorkApp;
