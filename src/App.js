import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./MyComponent/HomePage/HomePage";
import Career from "./MyComponent/Careers/Career";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Route for Career Page */}
        <Route path="/Career" element={<Career />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
