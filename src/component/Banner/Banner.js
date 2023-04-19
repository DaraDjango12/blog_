import React, { useState } from "react";
// import { GLobalContext } from "../../CreateGlobalContext";
import "./Banner.css";
import { Link } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";

const Banner = () => {
  // const[cartNum,setCartNum]=useContext(GLobalContext)

  const [mobileBanner, setMobileBanner] = useState(false);

  // const [bookTitle,bookImageLink,category,isbn,price]=cart

  return (
    <div>
      <div className="banner">
        <div className="logo">
          <Link to="/">Blogger</Link>
        </div>
        <div>
        <FaHamburger
          className="md:hidden"
          onClick={() => {
            setMobileBanner((prev) => !prev);
          }}
        />
        </div>

        <div className="flex ">
          <nav className="hidden md:block gap-4 text-2xl bg-white text-center ">
            <Link to="/">Home</Link>
            <Link to="/store">Store</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/dashboard">DashBoard</Link>
          </nav>
        </div>
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
