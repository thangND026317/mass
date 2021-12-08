import React, { useState } from "react";
import "../HeroSection/HeroSection.css";

import "../../App.css";
import Button from '../Button/Button';

const Prediction = () => {
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
      <input type="text"
        // className="textarea__choices"
        // onChange={handleOnChange}
        placeholder="First answer"
      />
      <input type="text"
        // className="textarea__choices"
        // onChange={handleOnChange}
        placeholder="Second answer"
      />
      <input type="text"
        // className="textarea__choices"
        // onChange={handleOnChange}
        placeholder="Third answer"
      />
      <input type="text"
        // className="textarea__choices"
        // onChange={handleOnChange}
        placeholder="Fourth answer"
      />

      <label htmlFor="topics" style={{ fontSize: "20px" }}>Choose a topic:</label>
      <select id="topics">
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

export default Prediction;