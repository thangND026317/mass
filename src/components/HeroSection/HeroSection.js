import React from "react";

import Button from "./../Button/Button";

import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* <h1>GET STARTED</h1> */}
      <p>Have you tired of multiple-choice question?</p>
      <p>Try our service now</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--larger"
          to="/prediction"
        >
          Get started!
        </Button>
      </div>
      
    </div>
  );
};

export default HeroSection;
