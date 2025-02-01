import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./MyComponent/HomePage/HomePage";
import Career from "./MyComponent/Careers/Career";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutUsHomePage from "./MyComponent/AboutUsHomePage/AboutUsHomePage";
// import ContactUs from "./MyComponent/ContactUs/ContactUs";
// import Services from "./MyComponent/Services/Services";
// import { ContactUsHomePage } from "./MyComponent/ContactUsHomePage/ContactUsHomePage";
// import Navbar from "./MyComponent/Navbar/Navbar";
// import Footer from "./MyComponent/Footer/Footer";


const App = () => {
  return (
    <BrowserRouter>
   
      <Routes>
        {/* Route for HomePage */}
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/aboutus" element={<AboutUsHomePage />} /> */}
        {/* <Route path="/services" element={<Services/>} /> */}
        {/* <Route path="/contactus" element={<ContactUs />} /> */}
        {/* <Route path="/contactus" element={<ContactUsHomePage />} /> */}



        {/* Route for Career Page */}
        <Route path="/Career" element={<Career />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;
