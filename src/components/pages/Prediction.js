import React, { Fragment, useState } from "react";
import "../HeroSection/HeroSection.css";
import Loading from "./Loading";

import "../../App.css";
import Button from '../Button/Button';

const Prediction = () => {
  const [answers, setAnswer] = useState({});
  // onClick predict, set predicting === true, change to result page
  // (predicting && loading) === true: running model, wait for results
  // (predicting && !loading) === true: model finished, display results
  const [predicting, setPredicting] = useState(false);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState({});

  const predict = async (question, choice0, choice1, choice2, choice3) => {
    try {
      setPredicting(true);
      setLoading(true);
      setAnswer({
        answer_0: choice0,
        answer_1: choice1,
        answer_2: choice2,
        answer_3: choice3
      })

      // API call
      const url = `http://localhost:8080/mass?question=${question}&choice0=${choice0}&choice1=${choice1}&choice2=${choice2}&choice3=${choice3}`
      const response = await fetch(url);
      const results = await response.json();

      const parsedData = Object.entries(results).map(([answer, accuracy]) => {
        return {
          answer: answer,
          accuracy: Math.round(parseFloat(accuracy) * 100)
        }
      });
      const sortedData = parsedData.sort((current, next) => next.accuracy - current.accuracy);

      setResult(sortedData[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("An error occurred in predicting: ", error);
    }
  }

  const PredictionData = () => {
    const [question, setQuestion] = useState("");
    const [choice0, setChoice0] = useState("");
    const [choice1, setChoice1] = useState("");
    const [choice2, setChoice2] = useState("");
    const [choice3, setChoice3] = useState("");

    return <div className="hero-container-other">
      <h6>PREDICTION</h6>
      <br />
      <textarea
        className="textarea__question"
        onChange={e => setQuestion(e.target.value)}
        placeholder="Enter your question here"
        value={question}
      />
      <input type="text" className="input__choice"
        placeholder="First choice"
        onChange={e => setChoice0(e.target.value)}
        value={choice0}
      />
      <input type="text" className="input__choice"
        placeholder="Second choice"
        onChange={e => setChoice1(e.target.value)}
        value={choice1}
      />
      <input type="text" className="input__choice"
        placeholder="Third choice"
        onChange={e => setChoice2(e.target.value)}
        value={choice2}
      />
      <input type="text" className="input__choice"
        placeholder="Fourth choice"
        onChange={e => setChoice3(e.target.value)}
        value={choice3}
      />

      <label htmlFor="topics" style={{ fontSize: "20px", color: "black" }}>Choose a topic:</label>
      <select id="topics" style={{ fontSize: "16px", height: "30px", width: "20%",margin: "12px 20px", borderRadius: "5px" }}>
        <option value="general-knowledge">General knowledge</option>
        <option value="science">Science</option>
      </select>

      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--larger"
        onClick={() => predict(question, choice0, choice1, choice2, choice3)}
      >
        Predict
      </Button>
    </div>
  }

  const PredictionResult = () => {
    return <Fragment>
      {loading ? <Loading /> :
        <div className="hero-container-other">
          <h6>You should choose: {answers[result.answer]}</h6>
          <h6>Accuracy: {(Number(result.accuracy) * 100).toFixed(2)} %</h6>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--larger"
            onClick={() => setPredicting(false)}
          >
            Back
          </Button>
        </div>
      }
    </Fragment>
  }

  return <div className="prediction">
    {!predicting ? <PredictionData /> : <PredictionResult />}
  </div>
}

export default Prediction;