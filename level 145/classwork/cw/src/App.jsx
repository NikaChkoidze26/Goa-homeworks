import { useState } from "react";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(prev => prev + 1); 
    console.log("Increase");
  };

  const handleDecrease = () => {
    setCount(prev => prev - 1);
    console.log("Decrease");
  };

  const handleDivided = () => {
    setCount(prev => prev / 2);
    console.log("Divided");
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleDivided}>/2</button>
    </div>
  );
}
