import React, { useState } from "react";
import "../HeroSection/HeroSection.css";
import Loading from "./Loading";

import "../../App.css";
import Button from '../Button/Button';

const Prediction = () => {

  // onClick predict, set predicting === true, change to result page
  // (predicting && loading) === true: running model, wait for results
  // (predicting && !loading) === true: model finished, display results
  const [predicting, setPredicting] = useState(false);
  const [loading, setLoading] = useState(true);

  const predict = async () => {
    try {
      setPredicting(true);
      setLoading(true);
      // const result = await fetch("https://api.example.com/items");
      // setLoading(false);
      // console.log("Prediction done, result: ", result);
    } catch (error) {
      setLoading(false);
      console.log("An error occurred in predicting: ", error);
    }
  }

  const PredictionData = () => {
    const [text, setText] = useState("");
    const handleOnChange = (event) => setText(event.target.value);

    return <div className="hero-container-other">
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
        buttonSize="btn--larger"
        onClick={predict}
      >
        Predict
      </Button>
    </div>
  }

  const PredictionResult = () => {
    return <div className="hero-container-other">
      {loading ? <Loading /> : <h6>Result</h6>}
      <br />
    </div>
  }

  return <div className="prediction">
    {!predicting ? <PredictionData /> : <PredictionResult />}
  </div>
}

export default Prediction;