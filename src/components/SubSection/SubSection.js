import React, { Fragment } from "react";
import "./SubSection.css";

const SubSection = () => {
  return <Fragment>
    <div className="home__hero-section">
      <div className="container">
        <div className="row home__hero-row" style={{ display: "flex", flexDirection: "row" }} >
          <div className="col">
            <div className="home__hero-text-wrapper">
              <h1 className="heading dark">
                About us
              </h1>
              <p className="home__hero-subtitle dark" >
                {"This is a project for predicting a multiple-choice question using sentiment analysis. We analyze your question based on texts and try to pick the most suitable answer. The model can be correct 60-90% of the time, but you can make it up to 100%. Our mascot is pallas cat, since our system is MASS and, pallas cat’s mass is big for sure :))"}
              </p>
            </div>
          </div>
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img src="images/pallas.svg" alt="Pallas cat" className="home__hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}

export default SubSection;
