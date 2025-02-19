# Mnist-NumberPrediction

A simple and interactive web application that predicts handwritten digits (0-9) using the MNIST dataset. Built with React, Vite, and TensorFlow.js, this project allows users to draw a digit on a canvas and instantly see the predicted number along with the confidence level.

Watch it live: http://cnn.jack1337.serv00.net/
---

## Features

- **Canvas Drawing**: Users can draw digits (0-9) on a clean, easy-to-use canvas.
- **Number Prediction**: The application uses a trained model (based on the MNIST dataset) to predict the digit drawn on the canvas.
- **Confidence Score**: After drawing, the app displays the predicted digit along with a confidence level of the prediction.
- **Clear Button**: A button to clear the canvas and reset the prediction.

---

## Technologies Used

- **React**: Frontend library to build the user interface.
- **Vite**: Fast build tool and development server for React.
- **TensorFlow.js**: JavaScript library for training and deploying machine learning models in the browser.
- **MNIST Dataset**: A dataset of 70,000 handwritten digits (0-9) used to train the model.

---

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/aradhyacp/Mnist-NumberPrediction
   ```
2. Navigate to the project directory:

```bash
cd Mnist-NumberPrediction
```
3. Install the dependencies:
```
bash
npm install
```

4. Start the development server:
```
npm run dev
```
Open your browser and go to ```http://localhost:3000``` to view the app.

---

# How It Works
1. **Draw a digit:** On the canvas, use your mouse or touchpad to draw any digit (0-9).
2. **Prediction:** After drawing, the app uses the TensorFlow.js model to predict the number based on the MNIST dataset.
3. **Confidence:** The app displays the predicted number along with a confidence score, indicating how sure the model is about its prediction.
4. **Clear Canvas:** Use the clear button to reset the canvas and start drawing a new digit.