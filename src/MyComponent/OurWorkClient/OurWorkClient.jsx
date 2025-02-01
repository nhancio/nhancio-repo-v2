import React from "react";
import HomeMatesLogo from "./Images/HomeMates Logo.jpg";
import "./OurWorkClient.css";

export const OurWorkClient = () => {
  return (
    <>
      <div className="ourWorkClient">
      <a href="http://homemates-app.web.app" target="_blank" rel="noopener noreferrer">
          <img src={HomeMatesLogo} alt="HomeMates Logo" />
        </a>
      </div>


    </>
  );
};

export default OurWorkClient;
