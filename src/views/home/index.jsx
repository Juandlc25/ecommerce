import React from "react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import banner from "../../assets/banner.png";
import "./style.scss";
import Products from "../../components/Products";

function Home() {
  return (
    <div>
      <img className="banner-img" src={banner} alt="banner" />
      <div className="imgs-container">
        <div>
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
