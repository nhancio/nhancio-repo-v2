import React from "react";
import "./Footer.css";
import logo from './Images/Nhancio.png'

const Footer = () => {
  return (
    <section className="footer" id="Contact">
      <footer id="footer">
        <div className="container">
          <div className="footer-content">
            {/* Logo Section */}
            <div className="footer-logo">
              <img src={logo} alt="Company Logo" className="logo-img" />
              <p>&copy; 2024 nhancio, Inc. All rights reserved.</p>
            </div>
            
            {/* Quick Links */}
            <div className="quick-links">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#aboutUs">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contactUsHomePage">Contact</a></li>
              </ul>
            </div>
            
            {/* Connect */}
            <div className="connect">
              <h2>Connect</h2>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/nhancio/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/nhancio.ai/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/soul4tech" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i> Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      <section id="copy-right">
        <div className="copy-right-sec">
          <i className="fa-solid fa-copyright"></i> 2024 Powered By
          <a href="#Home"> Nhancio</a>
        </div>
      </section>
    </section>
  );
};
export default Footer;