import React from "react";
import i1 from "./Images/i1.jpg";
import i2 from "./Images/i2.jpg";
import i3 from "./Images/i3.jpg";
import "./OurWorkClient.css";

export const OurWorkClient = () => {
  return (
    <>
      <div className="ourWorkClient">
        <div>
          <h1>Our Client</h1>
        </div>
        <a href="http://Nhancio.com" target="_blank" rel="noopener noreferrer">
          <img src={i1} alt="HomeMates Logo" />
        </a>
        <a href="http://Nhancio.com" target="_blank" rel="noopener noreferrer">
          <img src={i2} alt="HomeMates Logo" />
        </a>
        <a href="http://Nhancio.com" target="_blank" rel="noopener noreferrer">
          <img src={i3} alt="HomeMates Logo" />
        </a>
      </div>


    </>
  );
};

export default OurWorkClient;
