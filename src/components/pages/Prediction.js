import React, { useState } from "react";
import "../HeroSection/HeroSection.css";

import "../../App.css";
import Button from '../Button/Button';

export default function Prediction() {
  const [text, setText] = useState("");
  const handleOnChange = (event) => setText(event.target.value);

  return <div className="prediction">
    <div className="hero-container">
      <h6>PREDICTION</h6>
      <br />
      <textarea
        className="textarea__question"
        onChange={handleOnChange}
        placeholder="Enter your question here"
        value={text}
      />
      <input
        // className="textarea__choices"
        // onChange={handleOnChange}
        placeholder="First answer"
      />
      <input
        // className="textarea__choices"
        // onChange={handleOnChange}
        placeholder="Second answer"
      />
      <input
        // className="textarea__choices"
        // onChange={handleOnChange}
        placeholder="Third answer"
      />
      <input
        // className="textarea__choices"
        // onChange={handleOnChange}
        placeholder="Fourth answer"
      />

      <label for="cars" style={{ fontSize: "20px" }}>Choose a topic:</label>
      <select id="cars">
        <option value="general-knowledge">General knowledge</option>
        <option value="science">Science</option>

      </select>

      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        to="/result"
      >
        Predict
      </Button>
    </div>
  </div>
}
