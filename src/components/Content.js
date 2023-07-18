import React from "react";
import "./Content.css";
import img from "./img/KayaClein.jpg";

const Content = () => {
  return (
    <div className="content">
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="img-container">
        <div className="textbox1">
          Inquisitor. Church of The Eternal Blazing Sun. Bigorre.{" "}
          <span className="dramatic-effect">Dead.</span>
        </div>
        <img src={img} alt="Kaya Clein" />
        <div className="textbox2"></div>
        <div className="textbox3"></div>
        <div className="textbox4">
          <div className="text1">KAYA CLEIN</div>
          <div className="text2">The Seer</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
