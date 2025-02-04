import React from "react";
import NhancioLogo from "./Images/Nhancio.png";
import "./OurWorkProject.css";

export const OurWorkProject = () => {
  return (
    <>
      <div className="ourWorkProject">
        <div>
          <h1>Our Projects</h1>
        </div>
      <a href="http://nhancio.com" target="_blank" rel="noopener noreferrer">
          <img src={NhancioLogo} alt="Nhancio Logo" />
          </a>
      {/* <a href="http://Learn.nhancio.com" target="_blank" rel="noopener noreferrer">
          <img src={NhancioLogo} alt="Nhancio Logo" />
          </a> */}
          <h1>Learn Nhancio</h1>
      
      <a href="https://patron.nhancio.com/" target="_blank" rel="noopener noreferrer">
          {/* <img src={NhancioLogo} alt="Nhancio Logo" /> */}
          <h1>parthon</h1>
          </a>
      </div>


    </>
  );
};

export default OurWorkProject;
