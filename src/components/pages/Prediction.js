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

  const predict = async (choice0, choice1, choice2, choice3) => {
    try {
      setPredicting(true);
      setLoading(true);
      setAnswer({
        answer_0: choice0,
        answer_1: choice1,
        answer_2: choice2,
        answer_3: choice3
      })
      // const url = `http://localhost:8080/mass?question=${question}&choice0=${choice0}&choice1=${choice1}&choice2=${choice2}&choice3=${choice3}`
      // const response = await fetch(url);
      // const results = await response.json();
      const mockJson = {
        answer_0: 0.06,
        answer_1: 0.03,
        answer_2: 0.90,
        answer_3: 0.01
      };
      const parsedData = Object.entries(mockJson).map(([answer, accuracy]) => {
        return { answer: answer, accuracy: accuracy }
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

    // const handleOnChange = (e) => setQuestion(e.target.value);
    return <div className="hero-container-other">
      <h6>PREDICTION</h6>
      <br />
      <textarea
        className="textarea__question"
        onChange={e => setQuestion(e.target.value)}
        placeholder="Enter your question here"
        value={question}
      />
      <input type="text"
        placeholder="First choice"
        onChange={e => setChoice0(e.target.value)}
        value={choice0}
      />
      <input type="text"
        placeholder="Second choice"
        onChange={e => setChoice1(e.target.value)}
        value={choice1}
      />
      <input type="text"
        placeholder="Third choice"
        onChange={e => setChoice2(e.target.value)}
        value={choice2}
      />
      <input type="text"
        placeholder="Fourth choice"
        onChange={e => setChoice3(e.target.value)}
        value={choice3}
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
        onClick={() => predict(choice0, choice1, choice2, choice3)}
      >
        Predict
      </Button>
    </div>
  }

  const PredictionResult = () => {
    return <Fragment>
      {loading ? <Loading /> :
        <div className="hero-container-other">
          <h6>You should choose {answers[result.answer]}</h6>
          <h6>Accuracy: {result.accuracy}</h6>
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