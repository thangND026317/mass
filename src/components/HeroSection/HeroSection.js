import React from "react";

import Button from "./../Button/Button";

import "./HeroSection.css";

const HeroSection = () => {
  return <div className="hero-container homepage container">
    <h1>Have you tired of multiple-choice questions?</h1>
    <h6>Try our service now!</h6>
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
};

export default HeroSection;
