import React from "react";

import Button from "./../Button/Button";

import "./HeroSection.css";

const HeroSection = () => {
  return <div className="hero-container homepage container">
    <h1>MASS</h1>
    <h6>A multiple-choice answering system</h6>
    <br />
    <p>Have you tired of multiple-choice questions?</p>
    <p>Try our service now!</p>
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
