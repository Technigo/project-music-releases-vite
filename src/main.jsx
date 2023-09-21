import { createRoot } from "react-dom";
import App from "./App"; // Import the App component
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App'; // Import the App component from the correct path

// ReactDOM.render(<App />, document.getElementById('root'));
