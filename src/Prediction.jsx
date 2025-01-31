import React from "react";
import "./prediction.css";

function Prediction({ prediction, confidence }) {
  return (
    <div className="prediction-container">
      <div className="prediction">Prediction: </div>
      <div className="pnum">{prediction}</div>
      <div className="confi-container">
        Confidence:
        <div className="confidence"> {(confidence * 100).toFixed(2)}%</div>
        </div>
    </div> 
  );
}

export default Prediction;
