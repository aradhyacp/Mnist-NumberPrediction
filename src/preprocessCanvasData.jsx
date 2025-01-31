import * as tf from '@tensorflow/tfjs';

const preprocessCanvasData = (canvas) => {
    let tensor = tf.browser.fromPixels(canvas)
      .resizeNearestNeighbor([28, 28])  // Resize to 28x28
      .mean(2)  // Convert to grayscale
      .expandDims(2)  // Add channel dimension
      .expandDims()  // Add batch dimension
      .toFloat();  // Convert to float32
  
    return tensor.div(255.0);  // Normalize to [0, 1]
  };
  

export default preprocessCanvasData

