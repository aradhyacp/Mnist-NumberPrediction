// App.jsx
import React from "react";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import Prediction from "./Prediction";
import PredictionLogic from "./PredictionLogic";
import Footer from "./components/Footer";

function App() {
  const { prediction, confidence, predict, isModelLoaded } = PredictionLogic();

  const handleDrawFinish = (canvas) => {
    if (canvas) {
      predict(canvas);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex w-full">
        <Canvas onDrawFinish={handleDrawFinish}/>
        
        <Prediction prediction={prediction} confidence={confidence} />

        {!isModelLoaded && <p>Loading model...</p>}
      </div>
      <Footer />
    </div>
  );
}

export default App;
