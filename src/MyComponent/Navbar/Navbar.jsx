// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "./Images/Nhancio.png";
// import "./Navbar.css";

// const Navbar = () => {
//   const [navbarLight, setNavbarLight] = useState(false);

//   // Change navbar background on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setNavbarLight(true);
//       } else {
//         setNavbarLight(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//     <nav
//       className={`navbar navbar-expand-lg sticky-top ${
//         navbarLight ? "navbar-light bg-dark" : "navbar-dark bg-light"
//       }`}
//     >
//       <div className="container-fluid d-flex align-items-center">
//         {/* Logo */}
//         <a className="navbar-brand d-flex align-items-center me-0" href="/">
//           <img
//             src={logo}
//             alt="Nhancio Logo"
//             width="40"
//             height="40"
//             className="d-inline-block align-top"
//           />
//           <span className="ms-1 gradient-text">Nhancio</span>
//         </a>

//         {/* Navbar toggler for mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#services">
//                 Services
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#aboutUs">
//                 About Us
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#contactUsHomePage">
//                 Contact Us
//               </a>
//             </li>
//             <li className="nav-item">
//               <Link to="/Career"
//                 className={`nav-link ${
//                   navbarLight ? "black-bg-button" : "white-bg-button"
//                 }`}
                
//               >
//                 Careers
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./Images/Nhancio.png";
import "./Navbar.css";

const Navbar = () => {
  const [navbarLight, setNavbarLight] = useState(false);

  // Change navbar background and toggler styles on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarLight(true);
      } else {
        setNavbarLight(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top ${
        navbarLight ? "navbar-light bg-light" : "navbar-dark bg-dark"
      }`}
    >
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand d-flex align-items-center me-0" href="/">
          <img
            src={logo}
            alt="Nhancio Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="ms-1 gradient-text">Nhancio</span>
        </a>

        <button
          className={`navbar-toggler ${
            navbarLight ? "toggler-light" : "toggler-dark "
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutUs">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactUsHomePage">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/Career"
                className={`nav-link ${
                  navbarLight ? "black-bg-button" : "white-bg-button"
                }`}
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
