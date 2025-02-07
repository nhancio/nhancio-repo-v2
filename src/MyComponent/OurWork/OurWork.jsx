import React, { useState } from "react";
import "./OurWork.css"; // Import the external CSS file
// import Services from '../Services/Services';
import Client from "../OurWorkClient/OurWorkClient";
import Project from "../OurWorkProject/OurWorkProject";
import App from "../OurWorkApp/OurWorkApp";
// const Project = () => <div className="content-box">This is the Project component.</div>;
// const Client = () => <div className="content-box">This is the Client component.</div>;
// const App = () => <div className="content-box">This is the App component.</div>;

const OurWork = () => {
  const [activeComponent, setActiveComponent] = useState("project");

  const renderComponent = () => {
    switch (activeComponent) {
      case "project":
        return <Project />;
      case "client":
        return <Client />;
      case "app":
        return <App />;
      default:
        return null;
    }
  };

  return (
    <div className="container ourWork-container">
      {/* Sidebar */}
      <div className="sidebar">
<button
          type="button"
          className={`sidebar-button ${activeComponent === "project" ? "active" :""}`}
          onClick={() => setActiveComponent("project")}
        >
          Project
        </button>
        <button
          type="button"
          className={`sidebar-button ${ activeComponent === "client" ? "active":" " }`}
          onClick={() => setActiveComponent("client")}
        >
          Client
        </button>
        <button
          type="button"
          className={`sidebar-button ${
            activeComponent === "app" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("app")}
        >
          Products
        </button>
      </div>

      {/* Content */}
      <div className="content">{renderComponent()}</div>
    </div>
  );
};

export default OurWork;
