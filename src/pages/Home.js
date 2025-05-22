import React, { useEffect, useState } from "react";
import "../pages/Home.css";
import logo from "../images/Logo.png";
import ImagesSlider from "./Imageslider.js";
import Drinkslider from "./Drinkslider.js";
import Footer from "./Footer.js";
const Home = () => {

  return (
    <div className="text1">
      <div className="logo">
        <img src={logo} className="logoimg" alt="Logo" />
      </div>
      <div className="menutext1">
        <h1>ON THE MENU</h1>
        <h3>DRINKS</h3>
      </div>
      <Drinkslider/>
      <div className="menutext2">
        <h1>ON THE MENU</h1>
        <h3>FOOD</h3>
      </div>
      <ImagesSlider/>
      <Footer />
    </div>
  );
};

export default Home;
