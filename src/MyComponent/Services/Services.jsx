import React from "react";
import "./Services.css";
import s1 from "./Images/s1.png";
import s2 from "./Images/s2.png";
import s3 from "./Images/s3.png";
import s4 from "./Images/s4.png";
import s5 from "./Images/s5.png";
import s6 from "./Images/s6.png";

const servicesData = [
  {
    title: "AI Workflows",
    description:
      "Automate workflows using AI-powered agents for improved efficiency and seamless task management.",
    tags: ["Automation", "AI Agents", "Workflow Optimization", "Task Management", "Process Automation", "Productivity"],
    image: s4,
  },
  {
    title: "Data Science",
    description:
      "Transform data into actionable insights through advanced analysis, predictive modeling, and statistical techniques.",
    tags: ["Analytics", "Data Insights", "Predictive Modeling", "Statistics", "Machine Learning", "Data Engineering"],
    image: s2,
  },
  {
    title: "Website Development",
    description:
      "Build modern, responsive websites tailored for your needs, using cutting-edge tools and frameworks.",
    tags: ["CMS", "Web Solutions", "Responsive Design", "Web Apps", "Contentful", "User Experience"],
    image: s6,
  },
  {
    title: "Application Development",
    description:
      "Create multi-platform apps with Flutter and React, ensuring seamless performance across devices.",
    tags: ["Flutter", "React Native", "Cross-Platform", "Mobile Apps", "App Design", "Scalability"],
    image: s5,
  },
  {
    title: "Marketing",
    description:
      "Leverage AI tools, UGC, and podcasts for innovative and organic product and service promotion.",
    tags: ["AI Marketing", "UGC", "Organic Growth", "Podcasting", "Digital Strategy", "Campaign Optimization"],
    image: s3,
  },
  {
    title: "Design",
    description:
      "Redefine creativity using AI-driven tools and collaborative design communities for unique visual storytelling.",
    tags: ["AI Design", "Creative Communities", "Visual Storytelling", "Innovation", "UX/UI Design", "Prototyping"],
    image: s1,
  },
];

const Services = () => {
  return (
    <div className="main-service-container" id="services">
      <div className="container services-container">
        <h2 className="service-text">Services we provide</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tags">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="learn-more">Know More</button>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="service-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
