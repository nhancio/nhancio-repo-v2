import React from "react";
import NhancioLogo from "./Images/Nhancio.png";
import plogo from "./Images/p2[1].png";
import "./OurWorkProject.css";

export const OurWorkProject = () => {
  return (
    <>
      <div className="ourWorkProject">
        <div>
          <h1>Our Projects</h1>
        </div>
        <div className="Projects">
        <a href="http://nhancio.com" target="_blank" rel="noopener noreferrer">
          <img src={NhancioLogo} alt="Nhancio Logo" />
          </a>
      <a href="http://learn.nhancio.com" target="_blank" rel="noopener noreferrer">
          <img src={NhancioLogo} alt="Nhancio Logo" />
          {/* <h1>Learn Nhancio</h1> */}
          </a>
     
     <a href="https://patron.nhancio.com/" target="_blank" rel="noopener noreferrer">
          <img src={plogo} alt="Nhancio Logo" />
          {/* <h1>patron</h1> */}
          </a>
        </div>
    
      </div>


    </>
  );
};

export default OurWorkProject;
