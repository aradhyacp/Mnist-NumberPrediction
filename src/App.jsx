// App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import Prediction from "./Prediction";
import PredictionLogic from "./PredictionLogic";
import Footer from "./components/Footer";

function App() {
  const { prediction, confidence, predict, isModelLoaded } = PredictionLogic();
  const [canvasData, setCanvasData] = useState(null);

  const handleDrawFinish = (canvas) => {
    if (canvas) {
      predict(canvas);
    }
  };

  const handleClear = () => {
    setCanvasData(null);
    setPrediction(null);
    setConfidence(null);
  };

  return (
    <div>
      <Header />
      <div className="flex w-full">
        <Canvas onDrawFinish={handleDrawFinish} onClear={handleClear} />
        
        <Prediction prediction={prediction} confidence={confidence} />

        {!isModelLoaded && <p>Loading model...</p>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
