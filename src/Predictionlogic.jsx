// PredictionLogic.jsx
import React, { useState, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';

const PredictionLogic = () => {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [isModelLoaded, setIsModelLoaded] = useState(false);

  useEffect(() => {
    const loadModel = async () => {
      try {
        console.log('Loading model...');
        const loadedModel = await tf.loadLayersModel('/model/model.json');
        setModel(loadedModel);
        setIsModelLoaded(true);
        console.log('Model loaded');
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };
    loadModel();
  }, []);

  const preprocessCanvasData = (canvas) => {
    const tensor = tf.browser.fromPixels(canvas)
      .resizeNearestNeighbor([28, 28])
      .mean(2)
      .expandDims(2)
      .expandDims()
      .toFloat();
    return tensor.div(255.0); // Normalize to [0, 1]
  };

  const predict = async (canvas) => {
    if (!model) {
      console.error('Model is not loaded yet.');
      return;
    }

    try {
      const tensor = preprocessCanvasData(canvas);
      const result = await model.predict(tensor).data();
      const predictedDigit = Array.from(result).indexOf(Math.max(...result));
      const confidenceScore = Math.max(...result);

      setPrediction(predictedDigit);
      setConfidence(confidenceScore);
      console.log(confidenceScore);
      console.log(predictedDigit);
    } catch (error) {
      console.error('Error during prediction:', error);
    }
  };

  return { prediction, confidence, predict, isModelLoaded };
};

export default PredictionLogic;
