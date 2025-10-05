import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrease = () => {
    setCount(prev => prev - 1);
  };

  const handleDivided = () => {
    setCount(prev => prev / 2);
  };

  return (
    <div className="counter">
      <h2>{count}</h2>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleDivided}>/2</button>
    </div>
  );
}