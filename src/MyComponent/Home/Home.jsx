import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faCode, faRobot, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import video from './Images/back.mp4';
import './Home.css'

const Home = () => {
  return (
    <div className="content-wrapper">
      <video id="backgroundVideo" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <section className="mainpage">
        <div className="container">
          <div className="main-section">
            <div className="we">
              <h1>
                <span className="highlight">AI-powered digital solutions</span> <br />
                <span className="highlight">Enhance your business with nhancio</span>
              </h1>
            </div>
            <div className="p">
              <p>
                AI-Driven, Cost-Efficient, and Scalable Solutions to Accelerate Your Business Growth
              </p>
            </div>
            <div className="features">
              <div className="feature-box">
                <h3> AI workflows & Data Science </h3>
                <p>Nhancio's AI workflows and data science solutions empower businesses with smarter decision-making and optimized operations</p>
                <div className="bottom">
                  <div className="icons">
                    <FontAwesomeIcon icon={faRobot} />
                  </div>
                  
                </div>
              </div>
              <div className="feature-box">
                <h3>Website & App Development</h3>
                <p>Build web and mobile apps with AI-driven innovation, ensuring seamless performance, scalability, and user engagement</p>
                <div className="bottom">
                  <div className="icons">
                    <FontAwesomeIcon icon={faCode} />
                  </div>
                </div>
              </div>
              <div className="feature-box">
                <h3>
                  Marketing &<br />
                  Design using AI
                </h3>
                <p>Enhance your marketing and design with AI-powered creativity, driving engagement, personalized experiences & impactful branding</p>
                <div className="bottom">
                  <div className="icons">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </div>
{/*                   <div className="navigate">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
