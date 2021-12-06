import React, { useState } from "react";
import Footer from "./../Footer/Footer";
import "../HeroSection/HeroSection.css";

import "../../App.css";

export default function Prediction() {
  const [mnemonic, setMnemonic] = useState("");
  const handleOnChange = (event) => setMnemonic(event.target.value);

  return (
    <div>
      <div className="hero-container">
        <h1 className="prediction">PREDICTION</h1>
        <textarea
          className="textarea"
          onChange={handleOnChange}
          value={mnemonic}
        />

        <Footer />
      </div>
    </div>
  );
}
