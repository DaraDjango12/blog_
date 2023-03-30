import React, { useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const Banner = () => {
  const [mobileBanner, setMobileBanner] = useState(false);

  return (
    <div>
      <div className="banner">
        <div className="logo">
          <Link to="/">Blogger</Link>
        </div>
        <FaHamburger className="md:hidden" onClick={()=>{setMobileBanner((prev)=>!prev)}}/>
        
        <nav className="hidden md:block flex-1 gap- text-2xl bg-white text-center ">

       



            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/dashboard">DashBoard</Link>
          </nav>
          
        
      </div>
      {mobileBanner && (
        <div className="bana">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Banner;
