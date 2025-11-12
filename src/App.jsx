import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import FootwearWholesalerHero from "./components/Intro";
import OurBrands from "./components/Brands";
import { BlogTrend2025 } from "./components/Trends";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Products from "./components/Products";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <Whatsapp />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Landing />
                <FootwearWholesalerHero />
                <OurBrands />
                <BlogTrend2025 />
                <Form />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/about" element={<><About/></>} />
          <Route path="/products"  element={<><Products/></>}/>
          <Route path="/blogs"  element={<><Blogs/></>}/>
          <Route path="/contact" element={<><Contact/></>} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
